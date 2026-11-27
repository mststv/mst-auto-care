import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 27, 2026">
      <p>
        {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) installs vinyl wraps, paint protection film and commercial wraps in
        Pennsylvania and New Jersey. This policy explains what information we collect when you contact us through this
        website, by phone or text, through Google Business Profile messaging, or on social media, and how we use it.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>Contact details you give us, such as your name, phone number and email address.</li>
        <li>Details about your vehicle and the service you are interested in, including photos you send.</li>
        <li>The content of messages you send us, including chats through Google Business Profile, which may be answered first by an automated assistant.</li>
        <li>
          Anonymous website usage data collected by Google Analytics through cookies, such as pages viewed, device type,
          approximate location and how you found the site. We use it only to understand and improve the website.
        </li>
      </ul>
      <h2>How we use it</h2>
      <ul>
        <li>To answer your questions, prepare a quote and schedule your appointment.</li>
        <li>To contact you about your booking or the work on your vehicle.</li>
      </ul>
      <p>We do not sell your personal information and we do not send you marketing messages unless you ask for them.</p>
      <h2>Sharing</h2>
      <p>
        We share information only with service providers that help us run the business (for example, the messaging,
        form and hosting services this website and Google messaging rely on), or when the law requires it.
      </p>
      <h2>Retention</h2>
      <p>We keep messages and booking details only as long as needed to serve you and keep basic business records.</p>
      <h2>Your choices</h2>
      <p>
        You can ask us to see, correct or delete the information we hold about you, or to stop messaging you, at any
        time. Reply STOP to a text message or contact us below. You can block analytics cookies in your browser settings
        or with the <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics opt-out add-on</a>.
      </p>
      <h2>Contact</h2>
      <p>
        {site.name}, {site.baseCity}. Phone or text <a href={site.phoneHref}>{site.phoneDisplay}</a>.
      </p>
    </LegalPage>
  );
}
