import { ArrowRight, BadgeDollarSign, CarFront, Layers, Megaphone, Paintbrush, Palette, Shield, ShieldCheck, ShieldHalf, SquareDashed } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SiteImage } from "./SiteImage";
import { images, type Photo } from "@/lib/images";
import { startingPrices } from "@/lib/prices";
import { dictionaries, type Locale } from "@/lib/content";

type Key = keyof typeof startingPrices;

const categories: { id: "wraps" | "ppf" | "ads"; href: string; img: Photo | null; items: { key: Key; Icon: LucideIcon }[] }[] = [
  {
    id: "ppf",
    href: "/ppf/",
    img: images.services.ppf,
    items: [
      { key: "ppfPartial", Icon: Shield },
      { key: "ppfFront", Icon: ShieldHalf },
      { key: "ppfFull", Icon: ShieldCheck },
      { key: "ppfColor", Icon: Palette },
    ],
  },
  {
    id: "wraps",
    href: "/vinyl-wraps/",
    img: images.services.wraps,
    items: [
      { key: "colorChange", Icon: Paintbrush },
      { key: "chromeDelete", Icon: SquareDashed },
      { key: "roofWrap", Icon: CarFront },
      { key: "accentWrap", Icon: Layers },
    ],
  },
  {
    id: "ads",
    href: "/commercial-wraps/",
    img: null,
    items: [
      { key: "adWrap", Icon: Megaphone },
      { key: "adLettering", Icon: BadgeDollarSign },
    ],
  },
];

export const fmtPrice = (n: number, locale: Locale = "en") =>
  new Intl.NumberFormat(locale === "ru" ? "ru-RU" : "en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

/** All service categories with every service and its starting price, each linking to its own page. */
export function Services({ locale = "en" }: { locale?: Locale }) {
  const s = dictionaries[locale].services;
  const label = { wraps: s.wrapLabel, ppf: s.ppfLabel, ads: s.adLabel };
  const intro = { wraps: s.wrapIntro, ppf: s.ppfIntro, ads: s.adIntro };

  return (
    <section id="services" aria-labelledby="services-title" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading id="services-title" eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        <div className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3">
          {categories.map((c) => (
            <article key={c.id} aria-labelledby={`cat-${c.id}`} className="flex flex-col border border-line bg-ink-2">
              <a href={c.href} className="group relative flex min-h-[10rem] items-end overflow-hidden md:min-h-[12rem]">
                {c.img && (
                  <SiteImage
                    src={c.img.src}
                    alt={c.img.alt}
                    width={c.img.w}
                    height={c.img.h}
                    sizes="(min-width:1024px) 30vw, 100vw"
                    className="absolute inset-0 size-full object-cover opacity-50 transition-all duration-700 ease-out-expo group-hover:scale-105 group-hover:opacity-70"
                  />
                )}
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink/50 to-transparent" />
                <span className="relative block p-5 md:p-6">
                  <h3 id={`cat-${c.id}`} className="font-display text-2xl font-bold uppercase leading-none tracking-tight md:text-3xl">
                    {label[c.id]}
                  </h3>
                  <span className="mt-2 block text-sm text-white/65">{intro[c.id]}</span>
                </span>
              </a>
              <ul className="flex-1 divide-y divide-line border-t border-line">
                {c.items.map(({ key, Icon }) => {
                  const copy = s[key];
                  const price = startingPrices[key];
                  return (
                    <li key={key} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-5">
                      <Icon className="size-5 text-red" aria-hidden />
                      <span className="min-w-0">
                        <span className="block font-display text-lg font-bold uppercase leading-tight tracking-tight">{copy.title}</span>
                        <span className="mt-1 block text-sm text-white/55">{copy.text}</span>
                      </span>
                      <span className="text-right">
                        {price !== null ? (
                          <>
                            <span className="block font-display text-[0.6rem] uppercase tracking-[0.25em] text-white/45">{s.from}</span>
                            <span className="block font-display text-xl font-bold">{fmtPrice(price, locale)}</span>
                          </>
                        ) : (
                          <span className="font-display text-xs uppercase tracking-[0.15em] text-white/60">{s.onRequest}</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <a
                href={c.href}
                className="flex items-center justify-between border-t border-line p-5 font-display text-sm uppercase tracking-[0.2em] text-white/80 transition-colors hover:bg-red hover:text-white"
              >
                {s.more}: {label[c.id]} <ArrowRight className="size-4" aria-hidden />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
