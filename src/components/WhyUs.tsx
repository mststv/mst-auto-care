"use client";

import { Gem, MapPin, ScanEye, UserRound, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { useLocale } from "@/lib/i18n";

const icons = [ScanEye, Wrench, UserRound, Gem, MapPin];

export function WhyUs() {
  const { t } = useLocale();
  return (
    <section id="why" aria-labelledby="why-title" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-red/10 blur-[120px]" />
      <div className="container-x">
        <SectionHeading id="why-title" eyebrow={t.why.eyebrow} title={t.why.title} />
        <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = icons[i] ?? Gem;
            return (
              <Reveal as="li" key={item.title} delay={i * 0.05} className="flex flex-col gap-4 bg-ink p-6 md:p-8">
                <Icon className="size-6 text-red" aria-hidden />
                <div>
                  <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
