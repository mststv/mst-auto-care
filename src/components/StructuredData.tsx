import { site } from "@/lib/site";

/** LocalBusiness (AutomotiveBusiness) JSON-LD for Google rich results. */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description:
      "Premium vinyl car wraps, chrome delete, roof and accent wraps, paint protection film (PPF) and commercial vehicle wraps in Pennsylvania and New Jersey. Mobile service: we come to you.",
    url: site.url,
    telephone: site.phoneDisplay.replace(/\s/g, ""),
    image: `${site.url}/opengraph-image`,
    sameAs: [site.instagramUrl],
    hasMap: site.mapsUrl,
    address: { "@type": "PostalAddress", addressLocality: "Bensalem", addressRegion: "PA", addressCountry: "US" },
    areaServed: [
      { "@type": "City", name: "Philadelphia" },
      { "@type": "AdministrativeArea", name: "Bucks County, PA" },
      { "@type": "AdministrativeArea", name: "Montgomery County, PA" },
      { "@type": "AdministrativeArea", name: "Main Line, PA" },
      ...site.areasPA.filter((c) => c !== "Philadelphia").map((name) => ({ "@type": "City", name: `${name}, PA` })),
      ...site.areasNJ.map((name) => ({ "@type": "City", name: `${name}, NJ` })),
      { "@type": "State", name: "Pennsylvania" },
      { "@type": "State", name: "New Jersey" },
    ],
    knowsLanguage: ["en", "ru"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vinyl Wraps & Paint Protection Film",
      itemListElement: [
        "Full Color Change Wraps",
        "Chrome Delete",
        "Roof Wraps",
        "Accent Wraps",
        "Paint Protection Film (PPF)",
        "Color PPF",
        "Commercial Vehicle Wraps",
        "Vehicle Logos & Lettering",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
