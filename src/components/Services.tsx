"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeDollarSign, Layers, Megaphone, Paintbrush, Shield, ShieldCheck, ShieldHalf, SquareDashed, CarFront, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SiteImage } from "./SiteImage";
import { images } from "@/lib/images";
import { startingPrices } from "@/lib/prices";
import { useLocale } from "@/lib/i18n";

type Key = keyof typeof startingPrices;
type Item = { key: Key; Icon: LucideIcon };

type CatId = "wraps" | "ppf" | "ads";

const categories: { id: CatId; img: string | null; items: Item[] }[] = [
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
    id: "ppf",
    img: images.services.ppf,
    items: [
      { key: "ppfFront", Icon: ShieldHalf },
      { key: "ppfFull", Icon: ShieldCheck },
      { key: "ppfPartial", Icon: Shield },
      { key: "ppfColor", Icon: Palette },
    ],
  },
  {
    id: "ads",
    img: null,
    items: [
      { key: "adWrap", Icon: Megaphone },
      { key: "adLettering", Icon: BadgeDollarSign },
    ],
  },
];

export function Services() {
  const { t, locale } = useLocale();
  const s = t.services;
  const [active, setActive] = useState<CatId>("wraps");
  const cat = categories.find((c) => c.id === active)!;
  const label = (id: CatId) => ({ wraps: s.wrapLabel, ppf: s.ppfLabel, ads: s.adLabel })[id];
  const intro = (id: CatId) => ({ wraps: s.wrapIntro, ppf: s.ppfIntro, ads: s.adIntro })[id];
  const fmt = (n: number) => new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <section id="services" aria-labelledby="services-title" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading id="services-title" eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        {/* Category picker */}
        <div role="tablist" aria-label={s.pick} className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-16 md:gap-4">
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
                className={`group relative flex min-h-[9rem] items-end overflow-hidden border text-left transition-colors duration-300 md:min-h-[13rem] ${on ? "border-red" : "border-line hover:border-white/30"}`}
              >
                {c.img && <SiteImage src={c.img} alt="" fill sizes="(min-width:1024px) 25vw, 50vw" className={`object-cover transition-all duration-700 ease-out-expo group-hover:scale-105 ${on ? "opacity-70" : "opacity-35 group-hover:opacity-55"}`} />}
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                <span className="relative flex w-full flex-col gap-2 p-4 md:p-6">
                  <span>
                    <span className="block font-display text-xl font-bold uppercase leading-none tracking-tight md:text-3xl">{label(c.id)}</span>
                    <span className="mt-2 hidden text-sm text-white/65 sm:block">{intro(c.id)}</span>
                  </span>
                  <span className="font-display text-[0.65rem] uppercase tracking-[0.2em] text-white/60 md:text-xs">
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
                  <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 p-5 md:grid-cols-[auto_1fr_auto] md:gap-x-8 md:p-7">
                    <span className="grid size-11 place-items-center border border-white/15 text-red">
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
                  </div>
                </li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}
