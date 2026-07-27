import type { Metadata } from "next";
import { FinalCta, InteriorHero, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = { title: "About | Urgency Supply", description: "Urgency Supply was built from 20 years of industrial construction experience." };

export default function AboutPage() {
  return <PageShell>
    <InteriorHero eyebrow="About Urgency Supply" title="Built from the" accent="field up." copy="The perspective of the craft. The accountability of project leadership. The business awareness to see the entire job." />
    <section className="interior-section about-page">
      <div className="about-page-heading"><p className="kicker">Experience that carries into the work</p><h2>20 Years of Industrial Construction Experience.</h2></div>
      <div className="about-page-copy"><p className="large-copy">Founder Jay Riddick brings experience spanning hands-on craft execution, field supervision, project management, and executive business development.</p><p>Jay began his career in the craft, earned increasing field responsibility, and became a superintendent at 26. That progression shaped a practical leadership style grounded in how work is actually planned, staffed, coordinated, and executed.</p><p>His background reaches across semiconductor facilities, nuclear and natural-gas power generation, oil refining, shipbuilding, manufacturing, and large-scale industrial construction. Urgency Supply was created to bring that operating knowledge directly to owners, contractors, and project teams.</p></div>
    </section>
    <section className="experience-timeline"><article><span>01</span><h3>Craft &amp; Field Execution</h3><p>Firsthand knowledge of the work, the workforce, and what project plans require in the field.</p></article><article><span>02</span><h3>Project Management</h3><p>Leading people, priorities, coordination, and performance across complex scopes.</p></article><article><span>03</span><h3>Project &amp; Executive Leadership</h3><p>Connecting field execution, client needs, strategy, and business outcomes.</p></article></section>
    <section className="values-page"><div><p className="kicker kicker-light">Our operating values</p><h2>Deliberate.<br />Determined.<br />Devoted.</h2></div><div><p>At Urgency Supply, we believe successful projects are built through deliberate planning, determined execution, and devoted support.</p><div className="rrr"><span>Resourceful.</span><span>Responsive.</span><span>Reliable.</span></div></div></section>
    <FinalCta title="Put experienced support behind the project." />
  </PageShell>;
}
