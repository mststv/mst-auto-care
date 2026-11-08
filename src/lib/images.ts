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
    ppf: "/images/services/ppf.svg",
    commercialWrap: "/images/services/commercial-wrap.svg",
    interiorDetailing: "/images/work/bmw-steering-wheel.jpg",
    exteriorDetailing: "/images/services/exterior-detailing.svg",
    fullDetailing: "/images/services/full-detailing.svg",
  },
  /**
   * Real MST project photos ("Our Work" grid). Add new photos to /public/images/work and list them here.
   * `w`/`h` are the image's pixel size.
   */
  work: [
    { src: "/images/work/jeep-interior.jpg", w: 950, h: 1400 },
    { src: "/images/work/bmw-steering-wheel.jpg", w: 1282, h: 1400 },
    { src: "/images/work/light-leather-seat.jpg", w: 1283, h: 1400 },
  ],
  /** Before / after pairs. Add or remove entries freely; the gallery adapts. */
  gallery: [
    { before: "/images/gallery/project-1-before.svg", after: "/images/gallery/project-1-after.svg", key: "p1" },
    { before: "/images/gallery/project-2-before.svg", after: "/images/gallery/project-2-after.svg", key: "p2" },
    { before: "/images/gallery/project-3-before.svg", after: "/images/gallery/project-3-after.svg", key: "p3" },
    { before: "/images/gallery/project-4-before.svg", after: "/images/gallery/project-4-after.svg", key: "p4" },
  ],
} as const;

export const isPlaceholder = (src: string) => src.endsWith(".svg");
