"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Logo } from "./Logo";
import { InstagramIcon } from "./InstagramIcon";
import { useLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { servicePages } from "@/lib/pages";

export function Footer() {
  const { t, home } = useLocale();
  const col = "font-display text-xs uppercase tracking-[0.3em] text-white/40";
  const link = "text-sm text-white/70 transition-colors hover:text-white";
  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <a href={home} aria-label="MST Auto Wraps home">
            <Logo />
          </a>
          <p className="mt-6 font-display text-xs uppercase tracking-[0.3em] text-white/50">{t.footer.tagline}</p>
          {/* NAP: must match the Google Business Profile. No street address (service-area business). */}
          <address className="mt-4 text-sm not-italic leading-relaxed text-white/70">
            {site.name}
            <br />
            {site.address.locality}, {site.address.region} {site.address.postalCode}
            <br />
            <a href={site.phoneHref} className="hover:text-white">{site.phoneDisplay}</a>
            {site.email && (
              <>
                <br />
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </>
            )}
          </address>
        </div>
        <nav aria-label={t.nav.services}>
          <p className={col}>{t.nav.services}</p>
          <ul className="mt-4 space-y-2">
            {servicePages.map((p) => (
              <li key={p.slug}>
                <a href={`/${p.slug}/`} className={link}>{p.nav}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-4 lg:items-end">
          <div className="flex gap-3">
            <a href={site.phoneHref} aria-label={`Call ${site.phoneDisplay}`} className="grid size-11 place-items-center border border-white/15 transition-colors hover:border-red hover:bg-red">
              <Phone className="size-4" />
            </a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${site.instagramHandle}`} className="grid size-11 place-items-center border border-white/15 transition-colors hover:border-red hover:bg-red">
              <InstagramIcon className="size-4" />
            </a>
          </div>
          <p className="text-xs text-white/50">{t.footer.languages}</p>
          <p className="flex gap-4 text-xs text-white/50">
            <Link href="/privacy/" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-white">Terms of Service</Link>
          </p>
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} {site.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
