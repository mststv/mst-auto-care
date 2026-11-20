/**
 * Self-hosted fonts (Fontsource packages), bundled at build time.
 * No Google Fonts request during the build, so the GitHub Pages deploy cannot fail on a font download.
 * Each @font-face has a unicode-range, so browsers download only the Latin or Cyrillic file a page needs.
 */
import "@fontsource-variable/inter";
import "@fontsource-variable/oswald";

export const fontClass = "";
