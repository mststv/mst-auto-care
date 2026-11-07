/**
 * Starting prices in US dollars, shown as "Starting at $X" on each service.
 * Set a number to show it, or null to show "Price on request".
 */
export const startingPrices: Record<
  "colorChange" | "chromeDelete" | "roofWrap" | "accentWrap" | "interior" | "exterior" | "full",
  number | null
> = {
  colorChange: null,
  chromeDelete: null,
  roofWrap: null,
  accentWrap: null,
  interior: null,
  exterior: null,
  full: null,
};
