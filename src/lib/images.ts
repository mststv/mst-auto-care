/**
 * All site imagery lives here. To use real photos:
 *   1. Drop your files into /public/images/... (JPG or WebP, ~2400px wide for the hero, ~1600px for others)
 *   2. Change the path below. Nothing else needs to be edited.
 * Paths ending in .svg are the temporary demo artwork.
 */
export const images = {
  hero: { src: "/images/hero/hero.svg", alt: "Satin black vinyl-wrapped sports car in a dark studio" },
  services: {
    colorChange: "/images/work/wrap-matte-black.jpg",
    chromeDelete: "/images/services/chrome-delete.svg",
    roofWrap: "/images/services/roof-wrap.svg",
    accentWrap: "/images/services/accent-wrap.svg",
    ppf: "/images/work/ppf-install.jpg",
    commercialWrap: "/images/services/commercial-wrap.svg",
  },
  /**
   * Real MST project photos ("Our Work" grid). Add new photos to /public/images/work and list them here.
   * `w`/`h` are the image's pixel size.
   */
  work: [
    { src: "/images/work/wrap-matte-black.jpg", w: 1081, h: 1600 },
    { src: "/images/work/ppf-install.jpg", w: 576, h: 490 },
  ],
} as const;

export const isPlaceholder = (src: string) => src.endsWith(".svg");
