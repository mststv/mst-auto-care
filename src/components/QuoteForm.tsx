"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2, MessageSquare, Phone } from "lucide-react";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { useLocale } from "@/lib/i18n";
import { formEndpoint, site } from "@/lib/site";

type Fields = { name: string; phone: string; email: string; make: string; model: string; year: string; service: string; details: string };
type Status = "idle" | "sending" | "success" | "sms" | "error";

const empty: Fields = { name: "", phone: "", email: "", make: "", model: "", year: "", service: "", details: "" };
const currentYear = new Date().getFullYear() + 1;
const years = Array.from({ length: currentYear - 1959 }, (_, i) => String(currentYear - i));

const inputCls =
  "peer w-full border-0 border-b border-white/15 bg-transparent px-0 pb-3 pt-7 text-base text-white outline-none transition-colors placeholder:text-transparent focus:border-red focus:ring-0 aria-[invalid=true]:border-red";
const labelCls =
  "pointer-events-none absolute left-0 top-7 origin-left font-display text-sm uppercase tracking-[0.18em] text-white/45 transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.65rem] peer-focus:text-red peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.65rem]";
const staticLabel = "absolute left-0 top-0 font-display text-[0.65rem] uppercase tracking-[0.18em] text-white/45";

export function QuoteForm() {
  const { t, locale } = useLocale();
  const q = t.quote;
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => {
    setF((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!f.name.trim()) e.name = q.required;
    if (!f.phone.trim()) e.phone = q.required;
    else if (f.phone.replace(/\D/g, "").length < 10) e.phone = q.invalidPhone;
    if (!f.email.trim()) e.email = q.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = q.invalidEmail;
    if (!f.make.trim()) e.make = q.required;
    if (!f.model.trim()) e.model = q.required;
    if (!f.year) e.year = q.required;
    if (!f.service) e.service = q.required;
    setErrors(e);
    return Object.keys(e)[0] as keyof Fields | undefined;
  };

  const summary = () =>
    [
      `MST Auto Care quote request`,
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      `Email: ${f.email}`,
      `Vehicle: ${f.year} ${f.make} ${f.model}`,
      `Service: ${f.service}`,
      f.details && `Details: ${f.details}`,
    ]
      .filter(Boolean)
      .join("\n");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const honeypot = (e.currentTarget.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value;
    if (honeypot) return;
    const firstInvalid = validate();
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    if (!formEndpoint) {
      // No form backend configured yet: hand the request to the visitor's SMS app, addressed to the business.
      window.location.href = `sms:${site.smsNumber}?&body=${encodeURIComponent(summary())}`;
      setStatus("sms");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...f,
          vehicle: `${f.year} ${f.make} ${f.model}`,
          language: locale,
          _subject: `New quote request: ${f.service} (${f.year} ${f.make} ${f.model})`,
          _replyto: f.email,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      setF(empty);
    } catch {
      setStatus("error");
    }
  };

  const err = (k: keyof Fields) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-2 text-xs text-red">
        {errors[k]}
      </p>
    ) : null;

  const text = (k: keyof Fields, label: string, type = "text", autoComplete?: string, inputMode?: "tel" | "email" | "text") => (
    <div className="relative">
      <input
        id={k}
        name={k}
        type={type}
        value={f[k]}
        onChange={set(k)}
        placeholder={label}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `${k}-error` : undefined}
        required
        className={inputCls}
      />
      <label htmlFor={k} className={labelCls}>
        {label} <span className="text-red">*</span>
      </label>
      {err(k)}
    </div>
  );

  return (
    <section id="quote" aria-labelledby="quote-title" className="grain relative border-t border-line bg-ink-2 py-24 md:py-36">
      <div aria-hidden className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(227,24,40,0.12),transparent_60%)]" />
      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>{q.eyebrow}</Eyebrow>
            <h2 id="quote-title" className="mt-5 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
              {q.title}
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-white/60 md:text-lg">{q.intro}</p>

            <ol className="mt-12 space-y-6">
              {q.steps.map((step, i) => (
                <li key={step} className="flex items-center gap-5">
                  <span className="grid size-10 shrink-0 place-items-center border border-red/50 font-display text-sm text-red">{i + 1}</span>
                  <span className="font-display text-sm uppercase tracking-[0.18em] text-white/80">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8 text-sm">
              <a href={site.phoneHref} className="flex items-center gap-2 text-white/80 hover:text-white">
                <Phone className="size-4 text-red" aria-hidden /> {site.phoneDisplay}
              </a>
              <a href={`sms:${site.smsNumber}`} className="flex items-center gap-2 text-white/80 hover:text-white">
                <MessageSquare className="size-4 text-red" aria-hidden /> SMS
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="relative border border-line bg-ink/70 p-6 backdrop-blur-sm md:p-12">
            <div aria-hidden className="absolute left-0 top-0 h-1 w-24 bg-red" />
            <AnimatePresence mode="wait">
              {status === "success" || status === "sms" ? (
                <motion.div key="done" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="py-10 text-center" role="status">
                  <span className="mx-auto grid size-16 place-items-center bg-red">
                    <Check className="size-8" aria-hidden />
                  </span>
                  <h3 className="mt-8 font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">{status === "sms" ? q.smsTitle : q.successTitle}</h3>
                  <p className="mx-auto mt-4 max-w-md leading-relaxed text-white/60">
                    {status === "sms" ? (
                      <>
                        {q.smsText}{" "}
                        <a href={site.phoneHref} className="whitespace-nowrap text-white underline decoration-red underline-offset-4">
                          {site.phoneDisplay}
                        </a>
                        .
                      </>
                    ) : (
                      q.successText
                    )}
                  </p>
                  <Button type="button" variant="outline" className="mt-10" onClick={() => setStatus("idle")}>
                    {q.again}
                  </Button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                  <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                  <div className="sm:col-span-2">{text("name", q.fields.name, "text", "name")}</div>
                  {text("phone", q.fields.phone, "tel", "tel", "tel")}
                  {text("email", q.fields.email, "email", "email", "email")}
                  {text("make", q.fields.make, "text", "off")}
                  {text("model", q.fields.model, "text", "off")}

                  <div className="relative">
                    <select
                      id="year"
                      name="year"
                      value={f.year}
                      onChange={set("year")}
                      aria-invalid={!!errors.year}
                      aria-describedby={errors.year ? "year-error" : undefined}
                      required
                      className={`${inputCls} appearance-none ${f.year ? "" : "text-white/30"}`}
                    >
                      <option value="" disabled>
                        —
                      </option>
                      {years.map((y) => (
                        <option key={y} value={y} className="bg-ink text-white">
                          {y}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="year" className={staticLabel}>
                      {q.fields.year} <span className="text-red">*</span>
                    </label>
                    {err("year")}
                  </div>

                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={f.service}
                      onChange={set("service")}
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? "service-error" : undefined}
                      required
                      className={`${inputCls} appearance-none ${f.service ? "" : "text-white/30"}`}
                    >
                      <option value="" disabled>
                        {q.fields.select}
                      </option>
                      {q.serviceOptions.map((o) => (
                        <option key={o} value={o} className="bg-ink text-white">
                          {o}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="service" className={staticLabel}>
                      {q.fields.service} <span className="text-red">*</span>
                    </label>
                    {err("service")}
                  </div>

                  <div className="relative sm:col-span-2">
                    <textarea id="details" name="details" rows={4} value={f.details} onChange={set("details")} placeholder={q.fields.detailsPh} className={`${inputCls} resize-none placeholder:text-white/25`} />
                    <label htmlFor="details" className={staticLabel}>
                      {q.fields.details}
                    </label>
                  </div>

                  <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-white/40">{q.privacy}</p>
                    <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
                      {status === "sending" ? (
                        <>
                          <Loader2 className="size-4 animate-spin" aria-hidden /> {q.sending}
                        </>
                      ) : (
                        <>
                          {q.submit} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                        </>
                      )}
                    </Button>
                  </div>
                  {status === "error" && (
                    <p role="alert" className="text-sm text-red sm:col-span-2">
                      {q.error}{" "}
                      <a href={site.phoneHref} className="underline">
                        {site.phoneDisplay}
                      </a>
                      .
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
