import type { Metadata } from "next";
import { FinalCta, InteriorHero, PageShell } from "../../components/SiteChrome";

export const metadata: Metadata = { title: "Project Solutions | Urgency Supply", description: "Industrial project management and owner-representative support." };

export default function ProjectSolutionsPage() {
  return <PageShell>
    <InteriorHero eyebrow="Project Solutions" title="Visibility. Coordination." accent="Execution." copy="Project management and owner-representative support backed by field experience and a practical understanding of industrial execution." />
    <section className="interior-section split-intro"><div><p className="kicker">Operational knowledge</p><h2>Support that sees both the field and the full project.</h2></div><div><p>Urgency Supply helps owners and project teams protect priorities, coordinate resources, make informed decisions, and maintain momentum. Our perspective was built through 20 years of responsibility—from craft execution through project and executive leadership—with safety awareness carried throughout planning and execution.</p><a className="text-link" href="/contact">Discuss Project Support <span>↗</span></a></div></section>
    <section className="capability-section"><div className="capability-head"><p className="kicker kicker-light">Core support</p><h2>Clear responsibility. Practical execution.</h2></div><div className="capability-grid"><article><span>01</span><h3>Project Management</h3><p>Leadership and execution support aligned to scope, schedule, priorities, and project outcomes.</p></article><article><span>02</span><h3>Owner Representation</h3><p>An experienced presence focused on the owner’s interests, priorities, and visibility into the work.</p></article><article><span>03</span><h3>Schedulers</h3><p>Schedule development and coordination support that keeps priorities, interfaces, and milestones visible.</p></article><article><span>04</span><h3>Start-Up</h3><p>Planning and coordination support that helps teams move safely and deliberately into operations.</p></article></div></section>
    <section className="principles"><p className="kicker">How we show up</p><div><h2>Professional.</h2><h2>Accountable.</h2><h2>Field-informed.</h2></div></section>
    <FinalCta title="Bring experienced support closer to the work." />
  </PageShell>;
}
