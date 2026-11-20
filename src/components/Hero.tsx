import { MessageSquare, Phone, Star } from "lucide-react";
import { site } from "@/lib/site";
import { ButtonLink } from "./Button";
import { dictionaries, type Locale } from "@/lib/content";

/**
 * Server-rendered hero: no JavaScript needed to show the headline (fast LCP).
 * The H1 carries the search keywords; the big slogan is decorative text under it.
 */
export function Hero({ locale = "en" }: { locale?: Locale }) {
  const t = dictionaries[locale];
  const d = (i: number) => ({ animationDelay: `${0.1 + i * 0.1}s` });

  return (
    <section id="top" aria-labelledby="hero-title" className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      <div aria-hidden className="absolute -bottom-40 right-[-10%] -z-10 h-[38rem] w-[60rem] rounded-full bg-red/20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px overflow-hidden">
        <div className="h-px w-1/3 bg-gradient-to-r from-transparent via-red to-transparent animate-[sweep_5s_ease-in-out_infinite]" />
      </div>

      <div className="container-x relative pb-20 pt-32 md:pb-28">
        <h1 id="hero-title" className="animate-fade-up max-w-3xl font-display text-base font-semibold uppercase leading-snug tracking-[0.18em] text-red md:text-xl" style={d(0)}>
          {t.hero.h1}
        </h1>

        <p className="mt-6 font-display font-bold uppercase leading-[0.88] tracking-[-0.02em]">
          <span className="animate-fade-up block text-[clamp(3.4rem,13vw,10.5rem)]" style={d(1)}>
            {t.hero.title[0]}
          </span>{" "}
          <span
            className={`animate-fade-up ${locale === "ru" ? "mt-[0.22em]" : "mt-[0.06em]"} block text-[clamp(3.4rem,13vw,10.5rem)] text-transparent [-webkit-text-stroke:1.5px_#fff] md:[-webkit-text-stroke:2px_#fff]`}
            style={d(2)}
          >
            {t.hero.title[1].replace(/\.$/, "")}
            <span className="text-red [-webkit-text-stroke:0]">.</span>
          </span>
        </p>

        <p className="animate-fade-up mt-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl" style={d(3)}>
          {t.hero.subtitle}
        </p>

        <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4" style={d(4)}>
          <ButtonLink href={site.phoneHref}>
            <Phone className="size-4" aria-hidden /> {t.hero.ctaCall} {site.phoneDisplay}
          </ButtonLink>
          <ButtonLink href={`sms:${site.smsNumber}`} variant="outline">
            <MessageSquare className="size-4" aria-hidden /> {t.hero.ctaText}
          </ButtonLink>
        </div>

        <p className="animate-fade-up mt-8 flex items-center gap-2 text-sm text-white/70" style={d(5)}>
          <span className="flex text-[#fbbc04]" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </span>
          {t.reviews.text}
        </p>
      </div>
    </section>
  );
}
