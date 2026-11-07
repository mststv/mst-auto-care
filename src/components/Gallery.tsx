"use client";

import { Info } from "lucide-react";
import { BeforeAfter } from "./BeforeAfter";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ButtonLink } from "./Button";
import { InstagramIcon } from "./InstagramIcon";
import { images, isPlaceholder } from "@/lib/images";
import { useLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Gallery() {
  const { t } = useLocale();
  const g = t.gallery;
  const showDemoNote = images.gallery.some((p) => isPlaceholder(p.before) || isPlaceholder(p.after));

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

        {showDemoNote && (
          <p className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40">
            <Info className="size-4 text-red" aria-hidden /> {g.demoNote}
          </p>
        )}

        <div className="mt-6 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {images.gallery.map((p, i) => {
            const meta = g.items[p.key] ?? { title: `Project ${i + 1}`, tag: "" };
            return (
              <Reveal key={p.key} delay={(i % 2) * 0.1} className={i % 2 === 1 ? "md:mt-20" : ""}>
                <figure>
                  <div className="border border-line">
                    <BeforeAfter before={p.before} after={p.after} beforeLabel={g.before} afterLabel={g.after} alt={meta.title} dragLabel={g.drag} />
                  </div>
                  <figcaption className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <span className="flex items-baseline gap-4">
                      <span className="font-display text-sm text-red">0{i + 1}</span>
                      <span className="font-display text-xl font-bold uppercase tracking-tight md:text-2xl">{meta.title}</span>
                    </span>
                    <span className="font-display text-[0.7rem] uppercase tracking-[0.25em] text-white/45 sm:shrink-0 sm:text-right">{meta.tag}</span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
