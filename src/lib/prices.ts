/**
 * Starting prices in US dollars, shown as "Starting at $X" on each service.
 * Set a number to show it, or null to show "Price on request".
 */
export const startingPrices: Record<
  | "colorChange" | "chromeDelete" | "roofWrap" | "accentWrap"
  | "ppfFront" | "ppfFull" | "ppfPartial"
  | "adWrap" | "adLettering"
  | "interior" | "exterior" | "full",
  number | null
> = {
  colorChange: null,
  chromeDelete: null,
  roofWrap: null,
  accentWrap: null,
  ppfFront: null,
  ppfFull: null,
  ppfPartial: null,
  adWrap: null,
  adLettering: null,
  interior: null,
  exterior: null,
  full: null,
};
