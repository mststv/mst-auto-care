import Link from "next/link";
import { site } from "@/lib/site";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <main id="main" className="container-x py-16 md:py-24">
      <Link href="/" className="font-display text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white">
        ← {site.name}
      </Link>
      <h1 className="mt-8 font-display text-4xl font-semibold uppercase tracking-wide md:text-5xl">{title}</h1>
      <p className="mt-3 text-sm text-white/50">Last updated: {updated}</p>
      <div className="mt-10 max-w-3xl space-y-6 leading-relaxed text-white/80 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-white [&_a]:text-white [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </main>
  );
}
