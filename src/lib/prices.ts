/**
 * Starting prices in US dollars, shown as "Starting at $X" on each service.
 * Set a number to show it, or null to show "Price on request".
 */
export const startingPrices: Record<
  | "colorChange" | "chromeDelete" | "roofWrap" | "accentWrap"
  | "ppfFront" | "ppfFull" | "ppfPartial" | "ppfColor"
  | "adWrap" | "adLettering",
  number | null
> = {
  colorChange: 2500,
  chromeDelete: 300,
  roofWrap: 300,
  accentWrap: 150,
  ppfFront: 1500,
  ppfFull: 3000,
  ppfColor: 3500,
  ppfPartial: 150,
  adWrap: 1500,
  adLettering: 250,
};
