"use client";

import { useLocale } from "@/lib/i18n";

export function Marquee() {
  const { t } = useLocale();
  const words = [t.services.colorChange.title, t.services.chromeDelete.title, t.services.roofWrap.title, t.services.accentWrap.title, t.services.ppfFull.title];
  const row = [...words, ...words];
  return (
    <div aria-hidden className="overflow-hidden border-y border-line bg-ink-2 py-5">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-12">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-2xl font-bold uppercase tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] md:text-3xl">
            {w}
            <span className="size-2 rotate-45 bg-red" />
          </span>
        ))}
      </div>
    </div>
  );
}
