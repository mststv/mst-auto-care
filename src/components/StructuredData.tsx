import { site } from "@/lib/site";

/** LocalBusiness (AutomotiveBusiness) JSON-LD for Google rich results. */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description:
      "Premium vinyl car wraps, chrome delete, roof and accent wraps, plus interior, exterior and mobile auto detailing in Pennsylvania and New Jersey.",
    url: site.url,
    telephone: site.phoneDisplay.replace(/\s/g, ""),
    image: `${site.url}/opengraph-image`,
    sameAs: [site.instagramUrl],
    address: { "@type": "PostalAddress", addressRegion: "PA", addressCountry: "US" },
    areaServed: [
      { "@type": "City", name: "Philadelphia" },
      { "@type": "AdministrativeArea", name: "Bucks County, PA" },
      { "@type": "State", name: "Pennsylvania" },
      { "@type": "State", name: "New Jersey" },
    ],
    knowsLanguage: ["en", "ru"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Automotive Wraps & Detailing",
      itemListElement: [
        "Full Color Change Wraps",
        "Chrome Delete",
        "Roof Wraps",
        "Accent Wraps",
        "Interior Detailing",
        "Exterior Detailing",
        "Full Auto Detailing",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
