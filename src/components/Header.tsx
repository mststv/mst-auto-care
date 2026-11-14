"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageSquare, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";
import { useLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { InstagramIcon } from "./InstagramIcon";

export function LangToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  return (
    <div className={`flex items-center font-display text-xs font-medium tracking-[0.2em] ${className}`} role="group" aria-label="Language">
      {(["en", "ru"] as const).map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span aria-hidden className="mx-2 h-3 w-px bg-white/25" />}
          <button
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
            className={`uppercase transition-colors ${locale === l ? "text-white" : "text-white/40 hover:text-white/80"}`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#why", label: t.nav.why },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-red focus:px-4 focus:py-2">
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
          scrolled ? "border-b border-line bg-ink/80 py-3 backdrop-blur-xl" : "border-b border-transparent py-5"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <a href="#top" aria-label="MST Auto Care home" className="shrink-0">
            <Logo />
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="relative font-display text-[0.8rem] font-medium uppercase tracking-[0.22em] text-white/70 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-red after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <LangToggle className="hidden sm:flex" />
            <a href={site.phoneHref} className="hidden items-center gap-2 text-sm text-white/80 transition-colors hover:text-white xl:flex">
              <Phone className="size-4 text-red" aria-hidden />
              {site.phoneDisplay}
            </a>
            <span className="hidden md:block">
              <ButtonLink href={`sms:${site.smsNumber}`} variant="outline" className="!px-5 !py-3 !text-xs">
                <MessageSquare className="size-4" aria-hidden /> SMS
              </ButtonLink>
            </span>
            <span className="-ml-2 hidden md:block">
              <ButtonLink href={site.phoneHref} className="!px-5 !py-3 !text-xs">
                <Phone className="size-4" aria-hidden /> {t.hero.ctaCall}
              </ButtonLink>
            </span>
            <a href={`sms:${site.smsNumber}`} aria-label={`Text ${site.phoneDisplay}`} className="grid size-11 place-items-center border border-white/15 md:hidden">
              <MessageSquare className="size-4" />
            </a>
            <a href={site.phoneHref} aria-label={`Call ${site.phoneDisplay}`} className="-ml-3 grid size-11 place-items-center border border-white/15 md:hidden">
              <Phone className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.nav.menu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid size-11 place-items-center border border-white/15 lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[60] flex flex-col bg-ink/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-x flex items-center justify-between py-5">
              <Logo />
              <button type="button" onClick={() => setOpen(false)} aria-label={t.nav.close} className="grid size-11 place-items-center border border-white/15">
                <X className="size-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="container-x mt-8 flex-1">
              <ul className="space-y-2">
                {links.map((l, i) => (
                  <motion.li key={l.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1 }}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 border-b border-line py-4 font-display text-4xl font-bold uppercase tracking-tight"
                    >
                      <span className="text-sm font-medium text-red">0{i + 1}</span>
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="container-x flex items-center justify-between gap-4 pb-10">
              <LangToggle />
              <div className="flex gap-3">
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-12 place-items-center border border-white/15">
                  <InstagramIcon />
                </a>
                <ButtonLink href={site.phoneHref}>
                  <Phone className="size-4" /> {site.phoneDisplay}
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
