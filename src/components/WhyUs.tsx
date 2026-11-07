"use client";

import { Gem, MapPin, ScanEye, UserRound, Wrench } from "lucide-react";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { useLocale } from "@/lib/i18n";

const icons = [ScanEye, Wrench, UserRound, Gem, MapPin];

export function WhyUs() {
  const { t } = useLocale();
  return (
    <section id="why" aria-labelledby="why-title" className="relative overflow-hidden py-24 md:py-36">
      <div aria-hidden className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-red/10 blur-[120px]" />
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow>{t.why.eyebrow}</Eyebrow>
              <h2 id="why-title" className="mt-5 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">
                {t.why.title}
              </h2>
              <div aria-hidden className="mt-10 h-1 w-20 bg-red" style={{ transform: "skewX(-24deg)" }} />
            </Reveal>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {t.why.items.map((item, i) => {
            const Icon = icons[i] ?? Gem;
            return (
              <Reveal as="li" key={item.title} delay={i * 0.05} className="group grid grid-cols-[auto_1fr] gap-6 border-b border-line py-8 first:border-t md:gap-10 md:py-10">
                  <span className="font-display text-sm font-medium text-white/30 transition-colors group-hover:text-red">0{i + 1}</span>
                  <div>
                    <div className="flex items-center gap-4">
                      <Icon className="size-5 shrink-0 text-red" aria-hidden />
                      <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">{item.title}</h3>
                    </div>
                    <p className="mt-3 max-w-lg leading-relaxed text-white/55">{item.text}</p>
                  </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
