"use client";

import { ArrowRight, Languages, MapPin, Phone } from "lucide-react";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ButtonLink } from "./Button";
import { InstagramIcon } from "./InstagramIcon";
import { useLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Contact() {
  const { t } = useLocale();
  const c = t.contact;
  const info = [
    { Icon: MapPin, label: c.location, value: site.region },
    { Icon: Phone, label: c.phone, value: site.phoneDisplay, href: site.phoneHref },
    { Icon: InstagramIcon, label: c.social, value: site.instagramHandle, href: site.instagramUrl, external: true },
    { Icon: Languages, label: c.languages, value: c.languagesValue },
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
            <ButtonLink href={site.instagramUrl} target="_blank" rel="noopener noreferrer" variant="outline">
              <InstagramIcon className="size-4" /> {c.instagram}
            </ButtonLink>
            <ButtonLink href="#quote" variant="outline">
              {c.quote} <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-20 grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
            {info.map(({ Icon, label, value, href, external }, i) => (
              <div key={label} className={`flex items-start gap-4 p-6 md:p-8 ${i > 0 ? "border-t border-line sm:border-t-0" : ""} ${i % 2 === 1 ? "sm:border-l" : ""} ${i >= 2 ? "sm:border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""} border-line`}>
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
      </div>
    </section>
  );
}
