/**
 * Single source of truth for business details.
 * Update anything here and it flows through the whole site, SEO tags and structured data.
 */
export const site = {
  name: "MST Auto Care",
  shortName: "MST",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mstautowraps.com",
  phoneDisplay: "+1 215-833-1552",
  phoneHref: "tel:+12158331552",
  smsNumber: "+12158331552",
  instagramHandle: "@mst_auto_care",
  instagramUrl: "https://www.instagram.com/mst_auto_care/",
  mapsUrl: "https://maps.app.goo.gl/dqxzZZShDdT1wArY7",
  region: "Pennsylvania / New Jersey",
  regionShort: "PA / NJ",
  languages: ["English", "Russian"],
  baseCity: "Bensalem, PA",
  /** Towns we serve (mobile service). Shown on the site and in Google structured data. */
  areasPA: ["Bensalem", "Newtown", "Yardley", "Doylestown", "New Hope", "Huntingdon Valley", "Blue Bell", "Ambler", "Chestnut Hill", "King of Prussia", "Bryn Mawr", "Villanova", "Wayne", "Gladwyne", "Philadelphia"],
  areasNJ: ["Cherry Hill", "Moorestown", "Haddonfield", "Princeton"],
  areaServed: ["Philadelphia, PA", "Bucks County, PA", "Montgomery County, PA", "Main Line, PA", "Pennsylvania", "New Jersey"],
} as const;

/**
 * Quote form delivery.
 * Set NEXT_PUBLIC_FORMSPREE_ENDPOINT (e.g. https://formspree.io/f/abcdwxyz) to receive
 * submissions by email. Without it, the form opens a pre-filled text message to the business phone.
 */
export const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";
