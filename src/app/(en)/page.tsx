import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

const title = "Car Wraps & PPF in Bensalem, PA | MST Auto Wraps";
const description = "Vinyl car wraps, clear & color PPF and commercial wraps in Bensalem, PA. Mobile service in Bucks County, Philadelphia & the Main Line. Free estimates.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/", languages: { en: "/", ru: "/ru/", "x-default": "/" } },
  openGraph: { title, description, url: "/", locale: "en_US", alternateLocale: ["ru_RU"] },
  twitter: { title, description },
};

export default function Home() {
  return <HomePage locale="en" />;
}
