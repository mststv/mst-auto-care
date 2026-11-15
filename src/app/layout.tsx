import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n";
import { site } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({ subsets: ["latin", "cyrillic"], weight: ["500", "600", "700"], variable: "--font-oswald", display: "swap" });

const title = "MST Auto Wraps | Car Wraps & PPF in Bensalem, Philadelphia & the Main Line";
const description =
  "Premium vinyl wraps, clear & color PPF, chrome delete and commercial wraps. Private studio in Bensalem, PA, plus mobile service to Newtown, Yardley, Doylestown, New Hope, King of Prussia, the Main Line, Blue Bell, Chestnut Hill, Cherry Hill, Moorestown, Haddonfield and Princeton. Free estimates.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | MST Auto Wraps" },
  description,
  keywords: [
    "car wraps Philadelphia",
    "vinyl wrap Bucks County",
    "chrome delete Philadelphia",
    "automotive wraps near me",
    "PPF Philadelphia",
    "paint protection film PA NJ",
    "commercial vehicle wraps Philadelphia",
    "color change wrap",
    "roof wrap",
    "clear bra Philadelphia",
    "vinyl wrap New Jersey",
    "car wrap Bensalem",
    "PPF Bucks County",
    "car wrap Newtown PA",
    "PPF Doylestown",
    "car wrap King of Prussia",
    "PPF Main Line",
    "PPF Bryn Mawr Villanova",
    "car wrap Cherry Hill NJ",
    "PPF Princeton NJ",
    "color PPF Philadelphia",
  ],
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "MST Auto Wraps" }],
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description,
    locale: "en_US",
    alternateLocale: ["ru_RU"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <StructuredData />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
