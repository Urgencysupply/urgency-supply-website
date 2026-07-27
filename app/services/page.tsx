import type { Metadata } from "next";
import { FinalCta, InteriorHero, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Services | Urgency Supply", description: "Workforce, project solutions, and procurement support for complex industrial projects." };

const services = [
  { number: "01", title: "Workforce", path: "/services/workforce", lead: "The right people, ready for the work.", copy: "Qualified, dependable project personnel recruited and mobilized around the demands of the site, schedule, and scope.", items: ["General labor and project support", "Craft through project management", "Speedy mobilization and scalable teams"] },
  { number: "02", title: "Project Solutions", path: "/services/project-solutions", lead: "Visibility. Coordination. Execution.", copy: "Project management and owner-representative support informed by 20 years of industrial construction experience.", items: ["Project management", "Owner representation", "Schedulers and start-up support"] },
  { number: "03", title: "Procurement", path: "/services/procurement", lead: "Responsive sourcing for active project needs.", copy: "Supplier coordination and sourcing support that helps project teams keep materials, lead times, and special requests moving.", items: ["Material and supply sourcing", "Vendor coordination", "Order tracking and expediting"] },
];

export default function ServicesPage() {
  return <PageShell>
    <InteriorHero eyebrow="Services" title="One partner. Three ways to" accent="support the project." copy="Urgency Supply combines workforce, project management, owner representation, and procurement support to meet needs at the point of execution." />
    <section className="interior-section service-detail-stack">
      {services.map((service) => <article className="service-detail" key={service.title}>
        <div className="service-detail-title"><span>{service.number}</span><p>{service.lead}</p><h2>{service.title}</h2></div>
        <div className="service-detail-body"><p>{service.copy}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul><a className="text-link" href={service.path}>Explore {service.title} <span>↗</span></a></div>
      </article>)}
    </section>
    <section className="process-band"><p className="kicker kicker-light">How we engage</p><div><article><span>01</span><h3>Define</h3><p>Clarify the need, priorities, schedule, and success criteria.</p></article><article><span>02</span><h3>Mobilize</h3><p>Align the people, resources, and support path to the project.</p></article><article><span>03</span><h3>Execute</h3><p>Stay responsive, accountable, and close to the work.</p></article></div></section>
    <FinalCta />
  </PageShell>;
}
