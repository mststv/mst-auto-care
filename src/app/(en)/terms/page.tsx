import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="November 15, 2026">
      <p>
        These terms apply to this website and to messages you exchange with {site.name}, including chats through Google
        Business Profile messaging, text messages and social media.
      </p>
      <h2>Services and prices</h2>
      <p>
        We install vinyl wraps, paint protection film (PPF) and commercial vehicle wraps. Prices shown on this website or
        given in chat are starting prices. Your final price is confirmed only after we see your vehicle and agree on the
        scope of work.
      </p>
      <h2>Automated replies</h2>
      <p>
        Some messages may be answered first by an automated assistant. Its answers are general information, not a
        binding quote or booking. A booking is confirmed only when the owner confirms it with you directly.
      </p>
      <h2>Appointments</h2>
      <p>
        Work is done at our private studio in {site.baseCity}. The studio address is
        shared once your appointment is booked.
      </p>
      <h2>Website content</h2>
      <p>
        Photos and text on this website belong to {site.name} and may not be reused without permission. We try to keep
        information accurate but it may change without notice.
      </p>
      <h2>Messaging</h2>
      <p>
        By messaging us you agree that we may reply about your request. Message and data rates may apply. You can stop
        messages at any time by replying STOP or telling us.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms: phone or text <a href={site.phoneHref}>{site.phoneDisplay}</a>.
      </p>
    </LegalPage>
  );
}
