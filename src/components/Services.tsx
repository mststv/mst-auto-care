"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Droplets, Layers, Paintbrush, Sofa, Sparkles, SquareDashed, CarFront } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SiteImage } from "./SiteImage";
import { images } from "@/lib/images";
import { startingPrices } from "@/lib/prices";
import { useLocale } from "@/lib/i18n";

type Key = keyof typeof startingPrices;
type Item = { key: Key; Icon: LucideIcon };

const categories: { id: "wraps" | "detailing"; img: string; items: Item[] }[] = [
  {
    id: "wraps",
    img: images.services.colorChange,
    items: [
      { key: "colorChange", Icon: Paintbrush },
      { key: "chromeDelete", Icon: SquareDashed },
      { key: "roofWrap", Icon: CarFront },
      { key: "accentWrap", Icon: Layers },
    ],
  },
  {
    id: "detailing",
    img: images.services.interiorDetailing,
    items: [
      { key: "interior", Icon: Sofa },
      { key: "exterior", Icon: Droplets },
      { key: "full", Icon: Sparkles },
    ],
  },
];

export function Services() {
  const { t, locale } = useLocale();
  const s = t.services;
  const [active, setActive] = useState<"wraps" | "detailing">("wraps");
  const cat = categories.find((c) => c.id === active)!;
  const label = (id: string) => (id === "wraps" ? s.wrapLabel : s.detailLabel);
  const intro = (id: string) => (id === "wraps" ? s.wrapIntro : s.detailIntro);
  const fmt = (n: number) => new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <section id="services" aria-labelledby="services-title" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading id="services-title" eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        {/* Category picker */}
        <div role="tablist" aria-label={s.pick} className="mt-12 grid gap-3 sm:grid-cols-2 md:mt-16 md:gap-4">
          {categories.map((c) => {
            const on = c.id === active;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={on}
                aria-controls={`panel-${c.id}`}
                onClick={() => setActive(c.id)}
                className={`group relative flex min-h-[9rem] items-end overflow-hidden border text-left transition-colors duration-300 md:min-h-[14rem] ${on ? "border-red" : "border-line hover:border-white/30"}`}
              >
                <SiteImage src={c.img} alt="" fill sizes="(min-width:640px) 50vw, 100vw" className={`object-cover transition-all duration-700 ease-out-expo group-hover:scale-105 ${on ? "opacity-70" : "opacity-35 group-hover:opacity-55"}`} />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                <span className="relative flex w-full items-end justify-between gap-4 p-5 md:p-7">
                  <span>
                    <span className="block font-display text-2xl font-bold uppercase leading-none tracking-tight md:text-4xl">{label(c.id)}</span>
                    <span className="mt-2 block text-sm text-white/65">{intro(c.id)}</span>
                  </span>
                  <span className="shrink-0 font-display text-xs uppercase tracking-[0.2em] text-white/60">
                    {c.items.length} {s.count}
                  </span>
                </span>
                <span aria-hidden className={`absolute inset-x-0 top-0 h-1 bg-red transition-transform duration-500 ease-out-expo ${on ? "scale-x-100" : "scale-x-0"}`} />
              </button>
            );
          })}
        </div>

        {/* Services in the chosen category */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={active}
            id={`panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 divide-y divide-line border border-line bg-ink-2"
          >
            {cat.items.map(({ key, Icon }) => {
              const copy = s[key];
              const price = startingPrices[key];
              return (
                <li key={key}>
                  <a href="#quote" className="group grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 p-5 transition-colors hover:bg-white/[0.03] md:grid-cols-[auto_1fr_auto_auto] md:gap-x-8 md:p-7">
                    <span className="grid size-11 place-items-center border border-white/15 text-red transition-colors group-hover:border-red">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-xl font-bold uppercase tracking-tight md:text-2xl">{copy.title}</span>
                      <span className="mt-1 block text-sm text-white/55">{copy.text}</span>
                    </span>
                    <span className="col-start-2 md:col-start-auto md:text-right">
                      {price !== null ? (
                        <>
                          <span className="block font-display text-[0.65rem] uppercase tracking-[0.25em] text-white/45">{s.from}</span>
                          <span className="block font-display text-2xl font-bold text-white md:text-3xl">{fmt(price)}</span>
                        </>
                      ) : (
                        <span className="font-display text-sm uppercase tracking-[0.15em] text-white/60">{s.onRequest}</span>
                      )}
                    </span>
                    <span className="col-start-2 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-red md:col-start-auto">
                      {s.cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </a>
                </li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}
