import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cityPages, servicePages } from "@/lib/pages";
import { CityPageView, ServicePageView } from "@/components/SubPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...servicePages, ...cityPages].map((p) => ({ slug: p.slug }));
}

const find = (slug: string) => servicePages.find((p) => p.slug === slug) ?? cityPages.find((p) => p.slug === slug);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = find((await params).slug);
  if (!p) return {};
  const url = `/${p.slug}/`;
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: url },
    openGraph: { title: p.title, description: p.description, url },
    twitter: { title: p.title, description: p.description },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePages.find((p) => p.slug === slug);
  if (service) return <ServicePageView p={service} />;
  const city = cityPages.find((p) => p.slug === slug);
  if (city) return <CityPageView p={city} />;
  notFound();
}
