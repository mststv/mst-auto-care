import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import { StructuredData } from "@/components/StructuredData";
import "@/app/globals.css";

export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Car Wraps & PPF in Bensalem, PA | MST Auto Wraps", template: "%s | MST Auto Wraps" },
  applicationName: site.name,
  openGraph: {
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "MST Auto Wraps: vinyl wraps and PPF in Bensalem, PA" }],
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const baseViewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

/** Shared <html> shell. Each language has its own root layout so <html lang> is right on every page. */
export function RootHtml({ lang, fontClass, children }: { lang: "en" | "ru"; fontClass: string; children: React.ReactNode }) {
  return (
    <html lang={lang} className={fontClass}>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
