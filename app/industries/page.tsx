import type { Metadata } from "next";
import { FinalCta, InteriorHero, PageShell } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Industries | Urgency Supply", description: "Industrial project support across semiconductor, pharmaceuticals, manufacturing, mining, energy, data centers, and industrial construction." };

const industries = [
  { title: "Semiconductor", copy: "Advanced facilities with demanding schedules, workforce controls, and complex execution environments." },
  { title: "Pharmaceuticals", copy: "High-accountability project environments where coordination, documentation, and disciplined execution matter." },
  { title: "Manufacturing", copy: "New construction, expansions, shutdowns, and active-facility project support." },
  { title: "Mining", copy: "Remote and operationally complex work requiring resourcefulness and reliable coordination." },
  { title: "Energy", copy: "Construction and operating environments where schedule, safety awareness, and execution discipline matter." },
  { title: "Data Centers", copy: "Fast-moving projects with demanding workforce, material, and project-support needs." },
  { title: "Industrial Construction", copy: "Workforce, project management, owner-representation, and procurement support across the construction lifecycle." },
];

export default function IndustriesPage() {
  return <PageShell>
    <InteriorHero eyebrow="Industries" title="Built for demanding" accent="industrial environments." copy="Experience and support shaped for complex, schedule-driven work where responsiveness, accountability, and reliable execution matter." />
    <section className="interior-section industries-page-grid">{industries.map((industry,index) => <article key={industry.title}><span>{String(index+1).padStart(2,"0")}</span><h2>{industry.title}</h2><p>{industry.copy}</p><a href="/contact" aria-label={`Discuss a ${industry.title} project`}>Discuss a Project ↗</a></article>)}</section>
    <section className="sector-message"><p className="kicker kicker-light">Across every market</p><h2>The environment changes. The need for clear execution does not.</h2><p>Urgency Supply adapts its workforce, project solutions, and procurement support to the realities of the client, project, site, schedule, and safety expectations.</p></section>
    <FinalCta title="Tell us about the environment you are building in." />
  </PageShell>;
}
