export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { cityPages, servicePages } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const home = { languages: { en: `${site.url}/`, ru: `${site.url}/ru/` } };
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1, alternates: home },
    { url: `${site.url}/ru/`, lastModified: now, changeFrequency: "monthly", priority: 0.8, alternates: home },
    ...servicePages.map((p) => ({ url: `${site.url}/${p.slug}/`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...cityPages.map((p) => ({ url: `${site.url}/${p.slug}/`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${site.url}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/terms/`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
