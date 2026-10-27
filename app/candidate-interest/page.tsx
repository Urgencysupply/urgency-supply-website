import type { Metadata } from "next";
import { InteriorHero, PageShell } from "../components/SiteChrome";
import CandidateInterestForm from "./CandidateInterestForm";

export const metadata: Metadata = {
  title: "Candidate Interest | Urgency Supply",
  description: "Introduce your trade or professional specialty and express interest in future industrial construction opportunities with Urgency Supply.",
};

export default function CandidateInterestPage() {
  return (
    <PageShell>
      <InteriorHero
        eyebrow="Candidate interest"
        title="Tell us about"
        accent="you"
        copy="Introduce your trade, field experience, or professional specialty and your interest in future industrial construction opportunities."
      />
      <section className="interior-section contact-page-layout candidate-layout" aria-labelledby="candidate-heading">
        <div>
          <p className="kicker">For prospective workers</p>
          <h2 id="candidate-heading">Start with your skills.</h2>
          <p>From general labor and skilled trades to field leadership, project controls, engineering, and project management, tell us about the work that interests you, your general location, and your availability.</p>
          <div className="candidate-notice">
            <h3>An introduction, not a job offer.</h3>
            <p>This page collects expressions of interest. It does not advertise specific openings or guarantee employment, placement, or a response. Role details, compensation, employment arrangements, and hiring timelines would need to be confirmed for any future opportunity.</p>
          </div>
          <p className="candidate-help">Share only basic contact information and a brief professional introduction. Do not include Social Security numbers, birth dates, banking details, identification documents, or other sensitive personal information.</p>
          <div className="contact-channels">
            <a href="mailto:contact@urgencysupply.com"><span>Email</span><strong>contact@urgencysupply.com</strong></a>
            <a href="tel:+17135171109"><span>Call</span><strong>(713) 517-1109</strong></a>
          </div>
          <p className="candidate-help">Prefer to contact us directly? Include your specialty, city or region, availability, and the type of industrial construction work that interests you.</p>
          <a className="text-link" href="/contact">Need workers for a project? Request project support <span aria-hidden="true">↗</span></a>
        </div>
        <CandidateInterestForm />
      </section>
    </PageShell>
  );
}
