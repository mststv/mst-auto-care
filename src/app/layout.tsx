import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n";
import { site } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({ subsets: ["latin", "cyrillic"], weight: ["500", "600", "700"], variable: "--font-oswald", display: "swap" });

const title = "MST Auto Care | Car Wraps & Detailing in Philadelphia, PA & NJ";
const description =
  "Premium vinyl car wraps, chrome delete, roof wraps and auto detailing in Philadelphia, Bucks County and New Jersey. Mobile detailing available. English & Russian spoken. Get a free quote.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | MST Auto Care" },
  description,
  keywords: [
    "car wraps Philadelphia",
    "vinyl wrap Bucks County",
    "chrome delete Philadelphia",
    "car detailing PA NJ",
    "automotive wraps near me",
    "color change wrap",
    "roof wrap",
    "mobile detailing Pennsylvania",
    "mobile detailing New Jersey",
  ],
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description,
    locale: "en_US",
    alternateLocale: ["ru_RU"],
  },
  twitter: { card: "summary_large_image", title, description },
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
