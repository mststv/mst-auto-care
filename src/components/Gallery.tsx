"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Info } from "lucide-react";
import { BeforeAfter } from "./BeforeAfter";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ButtonLink } from "./Button";
import { InstagramIcon } from "./InstagramIcon";
import { SiteImage } from "./SiteImage";
import { WorkGrid } from "./WorkGrid";
import { images, isPlaceholder } from "@/lib/images";
import { useLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Gallery() {
  const { t } = useLocale();
  const g = t.gallery;
  const [active, setActive] = useState(0);
  const projects = images.gallery;
  const current = projects[active];
  const meta = (key: string, i: number) => g.items[key] ?? { title: `${g.project} ${i + 1}`, tag: "" };
  const cur = meta(current.key, active);
  const showDemoNote = projects.some((p) => isPlaceholder(p.before) || isPlaceholder(p.after));

  return (
    <section id="work" aria-labelledby="work-title" className="relative border-t border-line bg-ink-2 py-24 md:py-36">
      <div aria-hidden className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-red/70 to-transparent" />
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading id="work-title" eyebrow={g.eyebrow} title={g.title} intro={g.intro} />
          <Reveal>
            <ButtonLink href={site.instagramUrl} target="_blank" rel="noopener noreferrer" variant="outline">
              <InstagramIcon className="size-4" /> {g.instagram}
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14">
          <WorkGrid />
        </div>

        <div className="mt-24 flex flex-col justify-between gap-4 border-b border-line pb-5 md:mt-32 md:flex-row md:items-end">
          <h3 className="font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">{g.baTitle}</h3>
          <p className="max-w-sm text-sm text-white/50">{g.baIntro}</p>
        </div>

        <Reveal className="mt-8">
          {/* Featured comparison */}
          <figure className="relative">
            <div className="relative border border-line shadow-[0_40px_120px_-40px_rgba(227,24,40,0.35)]">
              <AnimatePresence mode="wait">
                <motion.div key={current.key} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
                  <BeforeAfter
                    before={current.before}
                    after={current.after}
                    beforeLabel={g.before}
                    afterLabel={g.after}
                    alt={`${g.vehicle}, ${cur.title}`}
                    dragLabel={g.drag}
                    sizes="(min-width:1408px) 1328px, 100vw"
                    aspect="aspect-[16/10] sm:aspect-[16/9]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <figcaption className="mt-6 grid gap-4 border-b border-line pb-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.3em] text-red">{g.vehicle}</p>
                <AnimatePresence mode="wait">
                  <motion.h4
                    key={cur.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 font-display text-3xl font-bold uppercase leading-none tracking-tight md:text-5xl"
                  >
                    {cur.title}
                  </motion.h4>
                </AnimatePresence>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-display text-xs uppercase tracking-[0.25em] text-white/50">{cur.tag}</span>
                <span className="font-display text-sm tabular-nums text-white/40">
                  <span className="text-white">{String(active + 1).padStart(2, "0")}</span> / {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </figcaption>
          </figure>

          {/* Project selector */}
          <div role="tablist" aria-label={g.title} className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {projects.map((p, i) => {
              const m = meta(p.key, i);
              const on = i === active;
              return (
                <button
                  key={p.key}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  className={`group relative overflow-hidden border text-left transition-all duration-300 ${on ? "border-red" : "border-line hover:border-white/30"}`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <SiteImage src={p.after} alt="" fill sizes="(min-width:768px) 25vw, 50vw" className={`object-cover transition-all duration-700 ease-out-expo group-hover:scale-105 ${on ? "opacity-100" : "opacity-50 group-hover:opacity-80"}`} />
                  </div>
                  <div className="flex items-baseline gap-3 p-3 md:p-4">
                    <span className={`font-display text-xs ${on ? "text-red" : "text-white/40"}`}>0{i + 1}</span>
                    <span className="min-w-0">
                      <span className="block font-display text-sm font-semibold uppercase leading-tight tracking-wide md:truncate md:text-base">{m.title}</span>
                      <span className="mt-0.5 hidden truncate text-xs text-white/45 sm:block">{m.tag}</span>
                    </span>
                  </div>
                  <span aria-hidden className={`absolute inset-x-0 top-0 h-0.5 bg-red transition-transform duration-500 ease-out-expo ${on ? "scale-x-100" : "scale-x-0"}`} />
                </button>
              );
            })}
          </div>

          {showDemoNote && (
            <p className="mt-8 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40">
              <Info className="size-4 shrink-0 text-red" aria-hidden /> {g.demoNote}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
