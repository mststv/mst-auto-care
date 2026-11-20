import { Inter, Oswald } from "next/font/google";

/**
 * One font setup shared by both root layouts (English and Russian).
 * Declared once so the build fetches each Google font only once.
 */
const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({ subsets: ["latin", "cyrillic"], weight: ["500", "600", "700"], variable: "--font-oswald", display: "swap" });

export const fontClass = `${inter.variable} ${oswald.variable}`;
