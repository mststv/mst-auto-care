import Link from "next/link";
import { ChevronRight, MessageSquare, Phone, Star } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { QuoteForm } from "./QuoteForm";
import { ButtonLink } from "./Button";
import { SiteImage } from "./SiteImage";
import { JsonLd, businessId } from "./StructuredData";
import { fmtPrice } from "./Services";
import { LocaleProvider } from "@/lib/i18n";
import { site } from "@/lib/site";
import { startingPrices } from "@/lib/prices";
import { servicePages, type CityPageData, type Faq, type ServicePageData } from "@/lib/pages";

function Crumbs({ name, slug }: { name: string; slug: string }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="font-display text-xs uppercase tracking-[0.25em] text-white/50">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-white">Home</Link>
          </li>
          <li aria-hidden>
            <ChevronRight className="size-3" />
          </li>
          <li aria-current="page" className="text-white/80">{name}</li>
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name, item: `${site.url}/${slug}/` },
          ],
        }}
      />
    </>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider locale="en">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}

function Intro({ eyebrow, h1, intro, slug, crumb }: { eyebrow: string; h1: string; intro: string[]; slug: string; crumb: string }) {
  return (
    <>
      <Crumbs name={crumb} slug={slug} />
      <p className="mt-10 font-display text-xs uppercase tracking-[0.35em] text-red">{eyebrow}</p>
      <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance md:text-6xl">{h1}</h1>
      <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-white/70">
        {intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <ButtonLink href={site.phoneHref}>
          <Phone className="size-4" aria-hidden /> Call {site.phoneDisplay}
        </ButtonLink>
        <ButtonLink href={`sms:${site.smsNumber}`} variant="outline">
          <MessageSquare className="size-4" aria-hidden /> Text Us
        </ButtonLink>
      </div>
      <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/65">
        <Star className="size-4 fill-[#fbbc04] text-[#fbbc04]" aria-hidden /> Rated 5.0 on Google
      </p>
    </>
  );
}

function PriceList({ title, offers }: { title: string; offers: ServicePageData["offers"] }) {
  return (
    <section aria-labelledby="prices" className="mt-16">
      <h2 id="prices" className="font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">{title}</h2>
      <ul className="mt-6 divide-y divide-line border border-line bg-ink-2">
        {offers.map((o) => {
          const price = startingPrices[o.key];
          return (
            <li key={o.key} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight">{o.title}</h3>
                <p className="mt-1 text-sm text-white/60">{o.text}</p>
              </div>
              <p className="shrink-0 font-display text-2xl font-bold sm:text-right">
                {price !== null ? (
                  <>
                    <span className="mr-2 text-xs font-medium uppercase tracking-[0.25em] text-white/45">from</span>
                    {fmtPrice(price)}
                  </>
                ) : (
                  <span className="text-sm uppercase tracking-[0.15em] text-white/60">Price on request</span>
                )}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Faqs({ faqs }: { faqs: Faq[] }) {
  return (
    <section aria-labelledby="faq" className="mt-16">
      <h2 id="faq" className="font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">Questions</h2>
      <dl className="mt-6 divide-y divide-line border-y border-line">
        {faqs.map((f) => (
          <div key={f.q} className="py-5">
            <dt className="font-display text-lg font-semibold uppercase tracking-tight">{f.q}</dt>
            <dd className="mt-2 text-white/65">{f.a}</dd>
          </div>
        ))}
      </dl>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </section>
  );
}

function LinkList({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <section aria-label={title} className="mt-16">
      <h2 className="font-display text-xs uppercase tracking-[0.3em] text-white/45">{title}</h2>
      <ul className="mt-4 flex flex-wrap gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="inline-block border border-white/25 px-4 py-2 text-sm transition-colors hover:border-red hover:bg-red">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

const serviceLinks = servicePages.map((s) => ({ href: `/${s.slug}/`, label: s.nav }));

export function ServicePageView({ p }: { p: ServicePageData }) {
  return (
    <Shell>
      <div className="container-x pb-8 pt-32 md:pt-40">
        <div className={p.image ? "grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start" : ""}>
          <div>
            <Intro eyebrow={p.eyebrow} h1={p.h1} intro={p.intro} slug={p.slug} crumb={p.nav} />
          </div>
          {p.image && (
            <SiteImage
              src={p.image.src}
              alt={p.image.alt}
              width={p.image.w}
              height={p.image.h}
              priority
              sizes="(min-width:1024px) 36vw, 100vw"
              className="h-auto w-full border border-line object-cover lg:max-h-[34rem]"
            />
          )}
        </div>

        <PriceList title={p.offerTitle} offers={p.offers} />

        {p.sections.map((s) => (
          <section key={s.h2} className="mt-16 max-w-3xl">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">{s.h2}</h2>
            <div className="mt-4 space-y-3 leading-relaxed text-white/70">
              {s.body.map((b) => (
                <p key={b}>{b}</p>
              ))}
            </div>
          </section>
        ))}

        <Faqs faqs={p.faqs} />
        <LinkList title="Other services" links={serviceLinks.filter((l) => l.href !== `/${p.slug}/`)} />
      </div>
      <QuoteForm />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: p.schemaName,
          url: `${site.url}/${p.slug}/`,
          provider: { "@id": businessId },
          areaServed: ["Bensalem, PA", "Bucks County, PA", "Philadelphia, PA", "Main Line, PA", "Montgomery County, PA", "South Jersey"],
          offers: p.offers
            .filter((o) => startingPrices[o.key] !== null)
            .map((o) => ({ "@type": "Offer", name: o.title, priceSpecification: { "@type": "PriceSpecification", minPrice: startingPrices[o.key], priceCurrency: "USD" } })),
        }}
      />
    </Shell>
  );
}

export function CityPageView({ p }: { p: CityPageData }) {
  return (
    <Shell>
      <div className="container-x pb-8 pt-32 md:pt-40">
        <Intro eyebrow={p.eyebrow} h1={p.h1} intro={p.intro} slug={p.slug} crumb={p.nav} />

        <section aria-labelledby="services" className="mt-16">
          <h2 id="services" className="font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">Services in {p.nav}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {servicePages.map((s) => (
              <a key={s.slug} href={`/${s.slug}/`} className="group flex flex-col border border-line bg-ink-2 p-6 transition-colors hover:border-red">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{s.nav}</h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-white/70">
                  {s.offers.map((o) => (
                    <li key={o.key} className="flex justify-between gap-4">
                      <span>{o.title}</span>
                      {startingPrices[o.key] !== null && <span className="shrink-0 text-white">from {fmtPrice(startingPrices[o.key]!)}</span>}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 font-display text-xs uppercase tracking-[0.25em] text-red">Learn more →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-4xl">{p.local.h2}</h2>
          <div className="mt-4 space-y-3 leading-relaxed text-white/70">
            {p.local.body.map((b) => (
              <p key={b}>{b}</p>
            ))}
          </div>
          <h3 className="mt-8 font-display text-lg uppercase tracking-tight">Areas we cover</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {p.towns.map((t) => (
              <li key={t} className="border border-line px-3 py-1.5 text-sm text-white/75">{t}</li>
            ))}
          </ul>
        </section>

      </div>
      <QuoteForm />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: p.h1,
          url: `${site.url}/${p.slug}/`,
          about: { "@id": businessId },
          mentions: { "@type": p.area.type, name: p.area.name },
        }}
      />
    </Shell>
  );
}
