"use client";

import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ButtonLink } from "./Button";
import { InstagramIcon } from "./InstagramIcon";
import { useLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { hoursText } from "@/lib/hours";

/** Towns that have their own page link to it. */
const areaPage: Record<string, string> = {
  "Bensalem, PA": "/bensalem-pa/",
  "Philadelphia, PA": "/philadelphia/",
  "King of Prussia, PA": "/main-line/",
};

export function Contact() {
  const { t, locale } = useLocale();
  const c = t.contact;
  const info = [
    { Icon: MapPin, label: c.location, value: c.areaValue },
    { Icon: Clock, label: c.hours, value: hoursText(locale) ?? c.hoursValue },
    { Icon: Phone, label: c.phone, value: site.phoneDisplay, href: site.phoneHref },
    ...(site.email ? [{ Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` }] : []),
    { Icon: InstagramIcon, label: c.social, value: site.instagramHandle, href: site.instagramUrl, external: true },
    { Icon: MapPin, label: c.maps, value: c.mapsValue, href: site.mapsUrl, external: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-24 md:py-36">
      <div aria-hidden className="absolute bottom-0 left-1/2 h-[30rem] w-[70rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-red/15 blur-[140px]" />
      <div className="container-x relative">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>{c.eyebrow}</Eyebrow>
          </div>
          <h2 id="contact-title" className="mt-6 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight md:text-8xl">
            {c.title}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-white/60 md:text-lg">{c.text}</p>
          <a href={site.phoneHref} className="mt-10 inline-block font-display text-3xl font-bold tracking-tight transition-colors hover:text-red sm:text-4xl md:text-6xl">
            {site.phoneDisplay}
          </a>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href={site.phoneHref}>
              <Phone className="size-4" aria-hidden /> {c.call}
            </ButtonLink>
            <ButtonLink href={`sms:${site.smsNumber}`} variant="outline">
              <MessageSquare className="size-4" aria-hidden /> {c.sms}
            </ButtonLink>
            <ButtonLink href={site.instagramUrl} target="_blank" rel="noopener noreferrer" variant="outline">
              <InstagramIcon className="size-4" /> {c.instagram}
            </ButtonLink>
            <ButtonLink href={site.mapsUrl} target="_blank" rel="noopener noreferrer" variant="outline">
              <MapPin className="size-4" aria-hidden /> {c.maps}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className={`mt-20 grid gap-px border-y border-line bg-line sm:grid-cols-2 ${info.length > 5 ? "lg:grid-cols-3" : "lg:grid-cols-5"}`}>
            {info.map(({ Icon, label, value, href, external }: { Icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string; external?: boolean }) => (
              <div key={label} className="flex items-start gap-4 bg-ink p-6 md:p-7">
                <Icon className="mt-0.5 size-5 shrink-0 text-red" aria-hidden />
                <div className="min-w-0">
                  <dt className="font-display text-[0.65rem] uppercase tracking-[0.3em] text-white/40">{label}</dt>
                  <dd className="mt-2 break-words text-white">
                    {href ? (
                      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="transition-colors hover:text-red">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15}>
          <div id="areas" className="mt-16 scroll-mt-24 text-center">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">{c.areasTitle}</h3>
            <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2">
              {[...site.areasPA.map((t) => `${t}, PA`), ...site.areasNJ.map((t) => `${t}, NJ`)].map((t) => {
                const page = areaPage[t];
                return (
                  <li key={t}>
                    {page ? (
                      <a href={page} className="inline-block border border-white/30 bg-ink/60 px-3 py-1.5 text-xs text-white transition-colors hover:border-red hover:bg-red md:text-sm">
                        {t}
                      </a>
                    ) : (
                      <span className="inline-block border border-line bg-ink/60 px-3 py-1.5 text-xs text-white/75 md:text-sm">{t}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
