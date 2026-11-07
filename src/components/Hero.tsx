"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { SiteImage } from "./SiteImage";
import { ButtonLink } from "./Button";
import { images } from "@/lib/images";
import { useLocale } from "@/lib/i18n";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { t } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 0.25 + i * 0.12, ease },
  });

  return (
    <section ref={ref} id="top" aria-labelledby="hero-title" className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <motion.div style={{ y: imgY }} className="absolute inset-0 -z-20">
        <div className="absolute inset-0 animate-[slow-zoom_2.6s_cubic-bezier(0.16,1,0.3,1)_both]">
          <SiteImage src={images.hero.src} alt={images.hero.alt} fill priority sizes="100vw" className="object-cover object-[70%_center]" />
        </div>
      </motion.div>

      {/* Cinematic overlays */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10 md:from-ink md:via-ink/75" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      <div aria-hidden className="absolute -bottom-40 right-[-10%] -z-10 h-[38rem] w-[60rem] rounded-full bg-red/20 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px overflow-hidden">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-red to-transparent animate-[sweep_5s_ease-in-out_infinite]" />
      </div>

      <motion.div style={{ opacity: fade }} className="container-x relative pb-24 pt-36 md:pb-32">
        <motion.p {...item(0)} className="flex items-center gap-3 font-display text-[0.65rem] font-medium uppercase tracking-[0.25em] text-white/70 sm:text-xs sm:tracking-[0.35em]">
          <span aria-hidden className="h-px w-10 bg-red" />
          {t.hero.eyebrow}
        </motion.p>

        <h1 id="hero-title" className="mt-7 font-display font-bold uppercase leading-[0.88] tracking-[-0.02em]">
          <motion.span {...item(1)} className="block text-[clamp(3.6rem,13vw,11rem)]">
            {t.hero.title[0]}
          </motion.span>
          <motion.span {...item(2)} className="mt-[0.12em] block text-[clamp(3.6rem,13vw,11rem)] text-transparent [-webkit-text-stroke:1.5px_#fff] md:[-webkit-text-stroke:2px_#fff]">
            {t.hero.title[1].replace(/\.$/, "")}
            <span className="text-red [-webkit-text-stroke:0]">.</span>
          </motion.span>
        </h1>

        <motion.p {...item(3)} className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
          {t.hero.subtitle}
        </motion.p>

        <motion.div {...item(4)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <ButtonLink href="#quote">
            {t.hero.ctaQuote}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </ButtonLink>
          <ButtonLink href="#work" variant="outline">
            {t.hero.ctaWork}
          </ButtonLink>
        </motion.div>

        <motion.ul {...item(5)} className="mt-14 hidden flex-wrap gap-x-8 gap-y-2 border-t border-line pt-6 font-display text-xs uppercase tracking-[0.28em] text-white/50 md:flex">
          {t.hero.tags.map((tag) => (
            <li key={tag} className="flex items-center gap-3">
              <span aria-hidden className="size-1 rotate-45 bg-red" />
              {tag}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <a href="#services" className="absolute bottom-8 right-6 hidden flex-col items-center gap-3 md:flex md:right-10" aria-label={t.hero.scroll}>
        <span className="font-display text-[0.65rem] uppercase tracking-[0.35em] text-white/50 [writing-mode:vertical-rl]">{t.hero.scroll}</span>
        <span className="relative h-16 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-0 bg-red animate-[scroll-line_2.2s_ease-in-out_infinite]" />
        </span>
      </a>
    </section>
  );
}
