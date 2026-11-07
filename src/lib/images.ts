/**
 * All site imagery lives here. To use real photos:
 *   1. Drop your files into /public/images/... (JPG or WebP, ~2400px wide for the hero, ~1600px for others)
 *   2. Change the path below. Nothing else needs to be edited.
 * Paths ending in .svg are the temporary demo artwork.
 */
export const images = {
  hero: { src: "/images/hero/hero.svg", alt: "Satin black vinyl-wrapped sports car in a dark studio" },
  services: {
    colorChange: "/images/services/color-change.svg",
    chromeDelete: "/images/services/chrome-delete.svg",
    roofWrap: "/images/services/roof-wrap.svg",
    accentWrap: "/images/services/accent-wrap.svg",
    interiorDetailing: "/images/services/interior-detailing.svg",
    exteriorDetailing: "/images/services/exterior-detailing.svg",
    fullDetailing: "/images/services/full-detailing.svg",
  },
  /** Before / after pairs. Add or remove entries freely; the gallery adapts. */
  gallery: [
    { before: "/images/gallery/project-1-before.svg", after: "/images/gallery/project-1-after.svg", key: "p1" },
    { before: "/images/gallery/project-2-before.svg", after: "/images/gallery/project-2-after.svg", key: "p2" },
    { before: "/images/gallery/project-3-before.svg", after: "/images/gallery/project-3-after.svg", key: "p3" },
    { before: "/images/gallery/project-4-before.svg", after: "/images/gallery/project-4-after.svg", key: "p4" },
  ],
} as const;

export const isPlaceholder = (src: string) => src.endsWith(".svg");
