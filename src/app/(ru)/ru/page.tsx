import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

const title = "PPF и оклейка авто в Bensalem, PA | MST Auto Wraps";
const description = "Прозрачный и цветной PPF, оклейка винилом, реклама на авто в Bensalem, PA. Выезд по Bucks County, Филадельфии и Main Line. Говорим по-русски.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/ru/", languages: { en: "/", ru: "/ru/", "x-default": "/" } },
  openGraph: { title, description, url: "/ru/", locale: "ru_RU", alternateLocale: ["en_US"] },
  twitter: { title, description },
};

export default function HomeRu() {
  return <HomePage locale="ru" />;
}
