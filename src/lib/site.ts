/**
 * Single source of truth for business details.
 * Update anything here and it flows through the whole site, SEO tags and structured data.
 */
export const site = {
  name: "MST Auto Wraps",
  shortName: "MST",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mstautowraps.com",
  phoneDisplay: "+1 215-833-1552",
  phoneHref: "tel:+12158331552",
  smsNumber: "+12158331552",
  instagramHandle: "@mst_auto_wraps",
  instagramUrl: "https://www.instagram.com/mst_auto_wraps/",
  facebookUrl: "https://www.facebook.com/mstautocarepa",
  mapsUrl: "https://maps.app.goo.gl/dqxzZZShDdT1wArY7",
  /** Google rating shown on the site. The number of reviews is intentionally NOT shown. */
  googleRating: "5.0",
  /** Public email. null = not shown anywhere (site, schema). */
  email: null as string | null,
  /**
   * Opening hours, must match the Google Business Profile (checked 2026-11-20: every day 5 AM–10 PM).
   * null = "By appointment" and no openingHours in structured data.
   * Example: [{ days: ["Mo","Tu","We","Th","Fr","Sa"], opens: "09:00", closes: "19:00" }]
   */
  hours: [{ days: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], opens: "05:00", closes: "22:00" }] as { days: ("Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su")[]; opens: string; closes: string }[] | null,
  /** NAP: city/state/ZIP only. The street address is never published (service-area business on Google). */
  address: { locality: "Bensalem", region: "PA", postalCode: "19020", country: "US" },
  region: "Pennsylvania / New Jersey",
  regionShort: "PA / NJ",
  languages: ["English", "Russian"],
  baseCity: "Bensalem, PA",
  /** Towns we serve. Shown on the site and in Google structured data. */
  areasPA: ["Bensalem", "Newtown", "Yardley", "Doylestown", "New Hope", "Huntingdon Valley", "Blue Bell", "Ambler", "Chestnut Hill", "King of Prussia", "Bryn Mawr", "Villanova", "Wayne", "Gladwyne", "Philadelphia"],
  areasNJ: ["Cherry Hill", "Moorestown", "Haddonfield", "Princeton"],
  areaServed: ["Philadelphia, PA", "Bucks County, PA", "Montgomery County, PA", "Main Line, PA", "Pennsylvania", "New Jersey"],
};

/**
 * Quote form delivery.
 * Set NEXT_PUBLIC_FORMSPREE_ENDPOINT (e.g. https://formspree.io/f/abcdwxyz) to receive
 * submissions by email. Without it, the form opens a pre-filled text message to the business phone.
 */
export const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";
