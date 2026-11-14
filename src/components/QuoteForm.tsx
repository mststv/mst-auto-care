"use client";

import { Reveal } from "./Reveal";
import { useLocale } from "@/lib/i18n";

/** "Free Estimates" band. Nav and CTA links point here (#quote). */
export function QuoteForm() {
  const { t } = useLocale();
  return (
    <section id="quote" aria-labelledby="quote-title" className="grain relative border-t border-line bg-ink-2 py-20 md:py-28">
      <div aria-hidden className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(227,24,40,0.12),transparent_60%)]" />
      <Reveal className="container-x relative text-center">
        <h2 id="quote-title" className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-8xl">
          {t.quote.title}
        </h2>
      </Reveal>
    </section>
  );
}
