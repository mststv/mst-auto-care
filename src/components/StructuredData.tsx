import { site } from "@/lib/site";
import { startingPrices } from "@/lib/prices";

export const businessId = `${site.url}/#business`;

/** Renders any schema.org object as JSON-LD. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

const offer = (name: string, key: keyof typeof startingPrices, url: string) => ({
  "@type": "Offer",
  url: `${site.url}${url}`,
  itemOffered: { "@type": "Service", name },
  ...(startingPrices[key] !== null && {
    priceSpecification: { "@type": "PriceSpecification", minPrice: startingPrices[key], priceCurrency: "USD" },
  }),
});

/**
 * LocalBusiness (AutomotiveBusiness) JSON-LD, site-wide.
 * NAP matches the Google Business Profile: name, Bensalem PA 19020 without a street (service-area business), phone.
 * No aggregateRating: Google does not show self-published review stars, and the review count is intentionally not published.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": businessId,
    name: site.name,
    description:
      "Vinyl car wraps, chrome delete, roof and accent wraps, clear and color paint protection film (PPF) and commercial vehicle wraps. Private studio in Bensalem, PA. Mobile service available.",
    url: `${site.url}/`,
    telephone: "+1-215-833-1552",
    ...(site.email && { email: site.email }),
    image: `${site.url}/og.png`,
    logo: `${site.url}/icon.png`,
    priceRange: "$150 - $3,500",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    ...(site.hours
      ? {
          openingHoursSpecification: site.hours.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.days.map((d) => ({ Mo: "Monday", Tu: "Tuesday", We: "Wednesday", Th: "Thursday", Fr: "Friday", Sa: "Saturday", Su: "Sunday" })[d]),
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
    hasMap: site.mapsUrl,
    sameAs: [site.instagramUrl, site.facebookUrl],
    areaServed: [
      { "@type": "City", name: "Bensalem, PA" },
      { "@type": "City", name: "Philadelphia, PA" },
      { "@type": "AdministrativeArea", name: "Bucks County, PA" },
      { "@type": "AdministrativeArea", name: "Montgomery County, PA" },
      { "@type": "AdministrativeArea", name: "Main Line, PA" },
      ...site.areasPA.filter((c) => c !== "Philadelphia" && c !== "Bensalem").map((name) => ({ "@type": "City", name: `${name}, PA` })),
      ...site.areasNJ.map((name) => ({ "@type": "City", name: `${name}, NJ` })),
    ],
    knowsLanguage: ["en", "ru"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vinyl Wraps, PPF & Commercial Wraps",
      itemListElement: [
        offer("Full Color Change Vinyl Wrap", "colorChange", "/vinyl-wraps/"),
        offer("Chrome Delete", "chromeDelete", "/vinyl-wraps/"),
        offer("Roof Wrap", "roofWrap", "/vinyl-wraps/"),
        offer("Accent Wraps", "accentWrap", "/vinyl-wraps/"),
        offer("Partial PPF", "ppfPartial", "/ppf/"),
        offer("Full Front PPF", "ppfFront", "/ppf/"),
        offer("Full Body Clear PPF", "ppfFull", "/ppf/"),
        offer("Color PPF", "ppfColor", "/ppf/"),
        offer("Commercial Vehicle Wraps", "adWrap", "/commercial-wraps/"),
        offer("Vehicle Logos & Lettering", "adLettering", "/commercial-wraps/"),
      ],
    },
  };
  return <JsonLd data={data} />;
}
