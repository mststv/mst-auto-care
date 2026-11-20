"use client";

import { WorkGrid } from "./WorkGrid";
import { useLocale } from "@/lib/i18n";

/** Photo grid of real MST work. */
export function Gallery() {
  const { t } = useLocale();
  return (
    <section id="work" aria-labelledby="work-title" className="relative border-t border-line bg-ink-2 py-16 md:py-24">
      <div className="container-x">
        <h2 id="work-title" className="mb-8 text-center font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">
          {t.gallery.title}
        </h2>
        <WorkGrid />
      </div>
    </section>
  );
}
