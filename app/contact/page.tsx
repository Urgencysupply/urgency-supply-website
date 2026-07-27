import type { Metadata } from "next";
import { InteriorHero, PageShell } from "../components/SiteChrome";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact | Urgency Supply", description: "Request workforce, project management, owner-representation, or procurement support." };

export default function ContactPage() {
  return <PageShell>
    <InteriorHero eyebrow="Request Project Support" title="Tell us what the project" accent="needs next." copy="Share the scope, location, schedule, or immediate challenge. We will help identify the right support path." />
    <section className="interior-section contact-page-layout"><div><p className="kicker">Start a conversation</p><h2>Bring us the need—not a polished brief.</h2><p>Whether the project requires people, project management, owner-representative support, procurement, or a combination, start with what you know. We can help shape the next conversation.</p><div className="contact-channels"><a href="tel:+17135171109"><span>Call</span><strong>(713) 517-1109</strong></a><a href="mailto:contact@urgencysupply.com"><span>Email</span><strong>contact@urgencysupply.com</strong></a></div></div><ContactForm /></section>
  </PageShell>;
}
