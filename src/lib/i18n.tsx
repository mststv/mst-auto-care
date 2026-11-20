"use client";

import { createContext, useContext, type ReactNode } from "react";
import { dictionaries, type Dictionary, type Locale } from "./content";

type Ctx = { locale: Locale; t: Dictionary; home: string };

const LocaleContext = createContext<Ctx | null>(null);

/**
 * The language is decided by the URL: "/" is English, "/ru/" is Russian.
 * Each language is a separate, crawlable page linked with hreflang.
 */
export function LocaleProvider({ locale = "en", children }: { locale?: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={{ locale, t: dictionaries[locale], home: locale === "ru" ? "/ru/" : "/" }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}
