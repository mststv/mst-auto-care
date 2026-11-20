/**
 * Site photos. Paths are WITHOUT extension: each photo has -640.webp and -1280.webp versions
 * in /public/images/work, made by `python3 scripts/optimize-images.py` from the original JPG.
 * `w`/`h` are the original pixel size, `alt` describes the photo for Google and screen readers.
 */
export type Photo = { src: string; w: number; h: number; alt: string };

export const photos = {
  matteBlack: { src: "/images/work/wrap-matte-black", w: 1081, h: 1600, alt: "Car wrapped in matte black vinyl" },
  ppfInstall: { src: "/images/work/ppf-install", w: 576, h: 490, alt: "Installer applying clear paint protection film to a black car's fender" },
  blueFront: { src: "/images/work/wrap-blue-front", w: 1320, h: 1464, alt: "BMW 5 Series wrapped in satin blue vinyl, front view in the studio" },
  blueDetail: { src: "/images/work/wrap-blue-detail", w: 903, h: 1600, alt: "Close-up of a satin blue vinyl wrap on a BMW" },
} satisfies Record<string, Photo>;

export const images = {
  services: { wraps: photos.matteBlack, ppf: photos.ppfInstall },
  /** "Our Work" grid on the home page. */
  work: [photos.matteBlack, photos.ppfInstall],
};
