import type { Metadata } from "next";
import { FinalCta, InteriorHero, PageShell } from "../../components/SiteChrome";

export const metadata: Metadata = { title: "Workforce Solutions | Urgency Supply", description: "Qualified industrial project personnel, recruiting, and rapid workforce mobilization." };

const capabilities = ["General labor and project support", "Site access and traffic-control support", "Warehouse and material support", "Craft and field personnel", "Supervision and project-management support", "Scalable teams for changing project demands"];

export default function WorkforcePage() {
  return <PageShell>
    <InteriorHero eyebrow="Workforce" title="The right people," accent="ready for the work." copy="We recruit and mobilize professional, accountable project personnel aligned to the realities of the site, schedule, and scope." />
    <section className="interior-section split-intro"><div><p className="kicker">Workforce solutions</p><h2>Built around the team the project actually needs.</h2></div><div><p>Urgency Supply supports industrial projects from general labor and logistics through craft-level, supervision, and project-management roles. We focus on recruiting dependable people, communicating clearly, and building teams that can scale with the work.</p><a className="text-link" href="/contact">Discuss Workforce Needs <span>↗</span></a></div></section>
    <section className="capability-section"><div className="capability-head"><p className="kicker kicker-light">Capabilities</p><h2>Craft level through project management.</h2></div><div className="capability-grid">{capabilities.map((item,index) => <article key={item}><span>{String(index+1).padStart(2,"0")}</span><h3>{item}</h3></article>)}</div></section>
    <section className="feature-split"><div><p className="kicker">Speedy mobilization</p><h2>Move with the project—not behind it.</h2></div><div><p>Requirements change. Schedules compress. New scopes emerge. Our recruiting network and direct communication help projects respond without losing sight of professionalism, accountability, or fit.</p><p className="safety-note"><strong>Safety awareness</strong> is considered throughout recruiting, onboarding, and coordination with the project team.</p></div></section>
    <FinalCta title="Build the team the project needs next." />
  </PageShell>;
}
