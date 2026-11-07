"use client";

import { Phone } from "lucide-react";
import { Logo } from "./Logo";
import { InstagramIcon } from "./InstagramIcon";
import { useLocale } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-x flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo />
          <p className="mt-6 font-display text-xs uppercase tracking-[0.3em] text-white/50">{t.footer.tagline}</p>
          <p className="mt-2 font-display text-xs uppercase tracking-[0.3em] text-white/50">
            {site.regionShort} <span className="mx-2 text-red">/</span> {t.footer.languages}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-3">
            <a href={site.phoneHref} aria-label={`Call ${site.phoneDisplay}`} className="grid size-11 place-items-center border border-white/15 transition-colors hover:border-red hover:bg-red">
              <Phone className="size-4" />
            </a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${site.instagramHandle}`} className="grid size-11 place-items-center border border-white/15 transition-colors hover:border-red hover:bg-red">
              <InstagramIcon className="size-4" />
            </a>
          </div>
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} MST Auto Care. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
