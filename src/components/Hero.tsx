"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { useRef } from "react";
import { ButtonLink } from "./Button";
import { useLocale } from "@/lib/i18n";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { t, locale } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay: 0.25 + i * 0.12, ease },
  });

  return (
    <section ref={ref} id="top" aria-labelledby="hero-title" className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden">

      {/* Cinematic overlays */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10 md:from-ink md:via-ink/75" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      <div aria-hidden className="absolute -bottom-40 right-[-10%] -z-10 h-[38rem] w-[60rem] rounded-full bg-red/20 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px overflow-hidden">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-red to-transparent animate-[sweep_5s_ease-in-out_infinite]" />
      </div>

      <motion.div style={{ opacity: fade }} className="container-x relative pb-24 pt-36 md:pb-32">
        <h1 id="hero-title" className="mt-7 font-display font-bold uppercase leading-[0.88] tracking-[-0.02em]">
          <motion.span {...item(1)} className="block text-[clamp(3.6rem,13vw,11rem)]">
            {t.hero.title[0]}
          </motion.span>
          <motion.span {...item(2)} className={`${locale === "ru" ? "mt-[0.22em]" : "mt-[0.06em]"} block text-[clamp(3.6rem,13vw,11rem)] text-transparent [-webkit-text-stroke:1.5px_#fff] md:[-webkit-text-stroke:2px_#fff]`}>
            {t.hero.title[1].replace(/\.$/, "")}
            <span className="text-red [-webkit-text-stroke:0]">.</span>
          </motion.span>
        </h1>

        <motion.p {...item(3)} className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
          {t.hero.subtitle}
        </motion.p>

        <motion.div {...item(4)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <ButtonLink href={site.phoneHref}>
            <Phone className="size-4" aria-hidden /> {t.hero.ctaCall} {site.phoneDisplay}
          </ButtonLink>
          <ButtonLink href={`sms:${site.smsNumber}`} variant="outline">
            <MessageSquare className="size-4" aria-hidden /> {t.hero.ctaText}
          </ButtonLink>
        </motion.div>

      </motion.div>

    </section>
  );
}
