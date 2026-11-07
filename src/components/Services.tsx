"use client";

import { ArrowUpRight, Droplets, Sofa, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SiteImage } from "./SiteImage";
import { images } from "@/lib/images";
import { useLocale } from "@/lib/i18n";

export function Services() {
  const { t } = useLocale();
  const s = t.services;

  const wraps: { title: string; text: string; img: string; featured?: boolean }[] = [
    { ...s.colorChange, img: images.services.colorChange, featured: true },
    { ...s.chromeDelete, img: images.services.chromeDelete },
    { ...s.roofWrap, img: images.services.roofWrap },
    { ...s.accentWrap, img: images.services.accentWrap },
  ];

  const detailing = [
    { ...s.interior, img: images.services.interiorDetailing, Icon: Sofa },
    { ...s.exterior, img: images.services.exteriorDetailing, Icon: Droplets },
    { ...s.full, img: images.services.fullDetailing, Icon: Sparkles },
  ];

  return (
    <section id="services" aria-labelledby="services-title" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading id="services-title" eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        {/* Primary: wraps */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-b border-line pb-5 md:mt-24 md:flex-row md:items-end">
          <h3 className="flex items-baseline gap-4 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
            <span className="text-red">01</span> {s.wrapLabel}
          </h3>
          <p className="max-w-sm text-sm text-white/50">{s.wrapIntro}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {wraps.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08} className={w.featured ? "md:col-span-2 lg:col-span-7 lg:row-span-2" : i === 1 ? "lg:col-span-5" : i === 2 ? "lg:col-span-5" : "md:col-span-2 lg:col-span-12"}>
              <a
                href="#quote"
                className={`group relative flex h-full flex-col justify-end overflow-hidden border border-line bg-ink-2 ${
                  w.featured ? "min-h-[26rem] md:min-h-[34rem] lg:min-h-full" : i === 3 ? "min-h-[20rem] md:min-h-[22rem]" : "min-h-[20rem]"
                }`}
              >
                <SiteImage
                  src={w.img}
                  alt=""
                  fill
                  sizes={w.featured ? "(min-width:1024px) 58vw, 100vw" : "(min-width:1024px) 42vw, 100vw"}
                  className="object-cover opacity-80 transition-all duration-[1.2s] ease-out-expo group-hover:scale-105 group-hover:opacity-100"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-red transition-transform duration-700 ease-out-expo group-hover:scale-x-100" />
                <div className="relative flex items-end justify-between gap-6 p-6 md:p-8">
                  <div>
                    <span className="font-display text-xs tracking-[0.3em] text-red">0{i + 1}</span>
                    <h4 className={`mt-2 font-display font-bold uppercase leading-none tracking-tight ${w.featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>{w.title}</h4>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">{w.text}</p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center border border-white/20 transition-all duration-300 group-hover:border-red group-hover:bg-red" aria-hidden>
                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
                <span className="sr-only">{s.cta}</span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Secondary: detailing */}
        <div className="mt-20 flex flex-col justify-between gap-4 border-b border-line pb-5 md:mt-28 md:flex-row md:items-end">
          <h3 className="flex items-baseline gap-4 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
            <span className="text-red">02</span> {s.detailLabel}
          </h3>
          <p className="max-w-sm text-sm text-white/50">{s.detailIntro}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {detailing.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <a href="#quote" className="group relative flex h-full flex-col overflow-hidden border border-line bg-ink-2 transition-colors duration-500 hover:border-white/20">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <SiteImage src={d.img} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover opacity-70 transition-all duration-[1.2s] ease-out-expo group-hover:scale-105 group-hover:opacity-90" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-2 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <d.Icon className="size-5 text-red" aria-hidden />
                  <h4 className="mt-4 font-display text-xl font-bold uppercase tracking-tight">{d.title}</h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{d.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.25em] text-white/60 transition-colors group-hover:text-white">
                    {s.cta} <ArrowUpRight className="size-4 text-red" aria-hidden />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
