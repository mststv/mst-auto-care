"use client";

import { useState, type FormEvent } from "react";
import { MessageSquare, Phone, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { useLocale } from "@/lib/i18n";
import { formEndpoint, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "sms" | "error";

/**
 * Estimate request form. Works on static hosting (GitHub Pages) with no server:
 * - If NEXT_PUBLIC_FORMSPREE_ENDPOINT is set, the request is emailed through Formspree.
 * - Otherwise it opens the visitor's messaging app with a text to the business phone, already filled in.
 */
export function QuoteForm() {
  const { t, locale } = useLocale();
  const q = t.quote;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const errs: Record<string, string> = {};
    if (!data.name?.trim()) errs.name = q.required;
    if (!data.phone?.trim()) errs.phone = q.required;
    else if (data.phone.replace(/\D/g, "").length < 10) errs.phone = q.invalidPhone;
    if (!data.service) errs.service = q.required;
    setErrors(errs);
    if (Object.keys(errs).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }

    if (formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, language: locale, page: window.location.pathname }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    const body = [`Estimate request (${site.name} website)`, `Name: ${data.name}`, `Phone: ${data.phone}`, `Service: ${data.service}`, data.car && `Car: ${data.car}`, data.details && `Message: ${data.details}`]
      .filter(Boolean)
      .join("\n");
    setStatus("sms");
    window.location.href = `sms:${site.smsNumber}?&body=${encodeURIComponent(body)}`;
  }

  const field = "mt-2 w-full border border-white/15 bg-ink px-4 py-3.5 text-base text-white placeholder:text-white/30 focus:border-red focus:outline-none";
  const lbl = "font-display text-xs uppercase tracking-[0.25em] text-white/60";
  const err = (k: string) => errors[k] && <span id={`${k}-err`} className="mt-1 block text-sm text-red">{errors[k]}</span>;

  return (
    <section id="quote" aria-labelledby="quote-title" className="grain relative border-t border-line bg-ink-2 py-20 md:py-28">
      <div aria-hidden className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(227,24,40,0.12),transparent_60%)]" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <h2 id="quote-title" className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
            {q.title}
          </h2>
          <p className="mt-6 max-w-md text-white/65 md:text-lg">{q.intro}</p>
          <ol className="mt-8 space-y-3 text-white/75">
            {q.steps.map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="font-display text-red">0{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-white/80">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-red">
              <Phone className="size-4 text-red" aria-hidden /> {site.phoneDisplay}
            </a>
            <a href={`sms:${site.smsNumber}`} className="inline-flex items-center gap-2 hover:text-red">
              <MessageSquare className="size-4 text-red" aria-hidden /> SMS
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "sent" ? (
            <div role="status" className="border border-line bg-ink p-8">
              <p className="font-display text-3xl font-bold uppercase">{q.successTitle}</p>
              <p className="mt-3 text-white/65">{q.successText}</p>
              <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>{q.again}</Button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="grid gap-5 border border-line bg-ink p-6 sm:grid-cols-2 md:p-8">
              <label className="block">
                <span className={lbl}>{q.fields.name} *</span>
                <input name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} className={field} />
                {err("name")}
              </label>
              <label className="block">
                <span className={lbl}>{q.fields.phone} *</span>
                <input name="phone" type="tel" inputMode="tel" autoComplete="tel" required aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-err" : undefined} className={field} />
                {err("phone")}
              </label>
              <label className="block">
                <span className={lbl}>{q.fields.service} *</span>
                <select name="service" required defaultValue="" aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-err" : undefined} className={field}>
                  <option value="" disabled>{q.fields.select}</option>
                  {q.serviceOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                {err("service")}
              </label>
              <label className="block">
                <span className={lbl}>{q.fields.car} <span className="normal-case tracking-normal text-white/35">({q.optional})</span></span>
                <input name="car" className={field} />
              </label>
              <label className="block sm:col-span-2">
                <span className={lbl}>{q.fields.details} <span className="normal-case tracking-normal text-white/35">({q.optional})</span></span>
                <textarea name="details" rows={4} placeholder={q.fields.detailsPh} className={field} />
              </label>
              <div className="sm:col-span-2">
                <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
                  <Send className="size-4" aria-hidden /> {status === "sending" ? q.sending : q.submit}
                </Button>
                <p className="mt-4 text-xs text-white/40">{q.privacy}</p>
                {status === "sms" && (
                  <p role="status" className="mt-4 text-sm text-white/75">
                    <strong className="text-white">{q.smsTitle}</strong> {q.smsText}{" "}
                    <a href={site.phoneHref} className="underline">{site.phoneDisplay}</a>
                  </p>
                )}
                {status === "error" && (
                  <p role="alert" className="mt-4 text-sm text-red">
                    {q.error} <a href={site.phoneHref} className="underline">{site.phoneDisplay}</a>
                  </p>
                )}
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
