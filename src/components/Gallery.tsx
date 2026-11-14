"use client";

import { WorkGrid } from "./WorkGrid";
import { useLocale } from "@/lib/i18n";

/** Plain photo grid of real MST work, no captions. */
export function Gallery() {
  const { t } = useLocale();
  return (
    <section id="work" aria-label={t.nav.work} className="relative border-t border-line bg-ink-2 py-16 md:py-24">
      <div className="container-x">
        <WorkGrid />
      </div>
    </section>
  );
}
