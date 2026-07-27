import type { Metadata } from "next";
import { FinalCta, InteriorHero, PageShell } from "../../components/SiteChrome";

export const metadata: Metadata = { title: "Procurement Support | Urgency Supply", description: "Responsive industrial sourcing, supplier coordination, and order support." };

const capabilities = ["Material and supply sourcing", "Supplier identification and coordination", "Quote and lead-time support", "Order tracking and expediting", "Jobsite and special-request procurement", "Network-based sourcing support"];

export default function ProcurementPage() {
  return <PageShell>
    <InteriorHero eyebrow="Procurement" title="Responsive sourcing for" accent="active project needs." copy="Supplier coordination and sourcing support designed around the speed, specificity, and changing demands of industrial work." />
    <section className="interior-section split-intro"><div><p className="kicker">Procurement support</p><h2>Find it. Coordinate it. Keep it moving.</h2></div><div><p>Urgency Supply helps project teams identify suppliers, coordinate quotes and lead times, and track materials through delivery. Our value is grounded in responsiveness, industry relationships, and a practical understanding of what delayed materials mean to execution.</p><a className="text-link" href="/contact">Request Procurement Support <span>↗</span></a></div></section>
    <section className="capability-section"><div className="capability-head"><p className="kicker kicker-light">Capabilities</p><h2>Support across the sourcing cycle.</h2></div><div className="capability-grid">{capabilities.map((item,index) => <article key={item}><span>{String(index+1).padStart(2,"0")}</span><h3>{item}</h3></article>)}</div></section>
    <section className="feature-split"><div><p className="kicker">The network matters</p><h2>Resourceful when the request is not routine.</h2></div><div><p>Industrial projects rarely operate from a perfect shopping list. We use a responsive vendor network and direct coordination to help address special requests, changing needs, and time-sensitive procurement challenges.</p><p className="safety-note"><strong>Safety and suitability</strong> stay in view as materials and jobsite needs are coordinated.</p></div></section>
    <FinalCta title="Tell us what the project needs sourced." />
  </PageShell>;
}
