import { Header } from "./Header";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { WhyUs } from "./WhyUs";
import { QuoteForm } from "./QuoteForm";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { LocaleProvider } from "@/lib/i18n";
import type { Locale } from "@/lib/content";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <Header />
      <main id="main">
        <Hero locale={locale} />
        <Services locale={locale} />
        <WhyUs />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
