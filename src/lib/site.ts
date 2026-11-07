/**
 * Single source of truth for business details.
 * Update anything here and it flows through the whole site, SEO tags and structured data.
 */
export const site = {
  name: "MST Auto Care",
  shortName: "MST",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mstautocare.com",
  phoneDisplay: "+1 215-833-1552",
  phoneHref: "tel:+12158331552",
  smsNumber: "+12158331552",
  instagramHandle: "@MST_DETAILING_PA.NJ",
  instagramUrl: "https://www.instagram.com/mst_detailing_pa.nj/",
  region: "Pennsylvania / New Jersey",
  regionShort: "PA / NJ",
  languages: ["English", "Russian"],
  areaServed: ["Philadelphia, PA", "Bucks County, PA", "Pennsylvania", "New Jersey"],
} as const;

/**
 * Quote form delivery.
 * Set NEXT_PUBLIC_FORMSPREE_ENDPOINT (e.g. https://formspree.io/f/abcdwxyz) to receive
 * submissions by email. Without it, the form opens a pre-filled text message to the business phone.
 */
export const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";
