"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { SiteImage } from "./SiteImage";
import { Reveal } from "./Reveal";
import { images } from "@/lib/images";
import { useLocale } from "@/lib/i18n";

/** Real project photos with a keyboard-accessible lightbox. */
export function WorkGrid() {
  const { t } = useLocale();
  const g = t.gallery;
  const photos = images.work;
  const [open, setOpen] = useState<number | null>(null);
  const alt = (i: number) => `MST Auto Wraps, ${g.eyebrow} ${i + 1}`;

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)), [photos.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:mx-auto md:max-w-4xl md:gap-4">
        {photos.map((p, i) => (
          <Reveal key={p.src} delay={(i % 4) * 0.08}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`${g.open} ${i + 1}`}
              className={`group relative block w-full overflow-hidden border border-line bg-ink aspect-[3/4] md:aspect-[4/5]`}
            >
              <SiteImage
                src={p.src}
                alt={alt(i)}
                fill
                sizes="(min-width:1408px) 330px, (min-width:768px) 25vw, 50vw"
                className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]"
              />
              <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span aria-hidden className="absolute bottom-3 right-3 grid size-9 place-items-center border border-white/25 bg-ink/50 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 md:bottom-5 md:right-5">
                <Expand className="size-4" />
              </span>
              <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-red transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={alt(open)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex max-h-[86svh] max-w-[92vw] flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <SiteImage
                src={photos[open].src}
                alt={alt(open)}
                width={photos[open].w}
                height={photos[open].h}
                sizes="92vw"
                className="h-auto max-h-[80svh] w-auto max-w-[92vw] object-contain"
                priority
              />
              <span className="mt-4 self-end font-display text-sm tabular-nums text-white/50">
                {open + 1} / {photos.length}
              </span>
            </motion.div>

            <button type="button" onClick={close} aria-label={g.close} className="absolute right-4 top-4 grid size-12 place-items-center border border-white/20 bg-ink/60 hover:border-red hover:bg-red md:right-8 md:top-8">
              <X className="size-5" />
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label={g.prev} className="absolute left-2 top-1/2 grid size-12 -translate-y-1/2 place-items-center border border-white/20 bg-ink/60 hover:border-red hover:bg-red md:left-8">
              <ChevronLeft className="size-5" />
            </button>
            <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label={g.next} className="absolute right-2 top-1/2 grid size-12 -translate-y-1/2 place-items-center border border-white/20 bg-ink/60 hover:border-red hover:bg-red md:right-8">
              <ChevronRight className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
