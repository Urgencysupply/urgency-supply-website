"use client";

import ContactForm from "./contact/ContactForm";

const services = [
  { number: "01", title: "Workforce", copy: "Qualified, dependable project personnel mobilized around the demands of the site, schedule, and scope.", link: "Explore Workforce", path: "/services/workforce" },
  { number: "02", title: "Project Solutions", copy: "Project management and owner-representative support that improves visibility, coordination, and execution.", link: "Explore Project Solutions", path: "/services/project-solutions" },
  { number: "03", title: "Procurement", copy: "Responsive sourcing and supplier coordination that keeps materials and project needs moving.", link: "Explore Procurement", path: "/services/procurement" },
];

const industries = ["Semiconductor", "Pharmaceuticals", "Manufacturing", "Mining", "Energy", "Data Centers", "Industrial Construction"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Urgency Supply home">
          <span className="brand-name"><b>URGENCY</b> SUPPLY</span>
          <span className="brand-tag">INDUSTRIAL PROJECT SOLUTIONS</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="/services">Services</a><a href="/industries">Industries</a><a href="/about">About</a><a href="/contact">Contact</a>
        </nav>
        <a className="header-cta" href="/contact">Request Project Support</a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">
            <a href="/services">Services</a><a href="/industries">Industries</a><a href="/about">About</a><a href="/contact">Contact</a>
            <a className="mobile-cta" href="/contact">Request Project Support</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-bg" aria-hidden="true"></div><div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-content">
          <div className="eyebrow"><span></span> Industrial Project Solutions</div>
          <h1>When the project needs support, <em>Urgency delivers.</em></h1>
          <p>Workforce, project solutions, and procurement support that keeps complex industrial projects moving—from field execution through project management.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/contact">Request Project Support <span>↗</span></a>
            <a className="button button-ghost" href="#capabilities">View Capabilities <span>↓</span></a>
          </div>
          <div className="hero-proof" aria-label="Core operating qualities">
            <div><span>01</span><strong>Field-informed</strong></div><div><span>02</span><strong>Rapidly responsive</strong></div><div><span>03</span><strong>Built to execute</strong></div>
          </div>
        </div>
        <div className="hero-side-note" aria-hidden="true"><span>SUPPORT BUILT</span><span>AROUND THE PROJECT</span></div>
        <a className="scroll-cue" href="#services" aria-label="Scroll to services">Scroll <span>↓</span></a>
      </section>

      <section className="services section" id="services">
        <div className="section-intro"><div><p className="kicker">What we do</p><h2>Support built around<br />the project.</h2></div><p>Three connected capabilities. One responsive partner focused on keeping people, decisions, and materials aligned with execution.</p></div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.title}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.copy}</p><a href={service.path}>{service.link} <span>↗</span></a></div></article>)}
        </div>
      </section>

      <section className="execution" id="capabilities">
        <div className="execution-graphic" aria-hidden="true"><div className="coordinate coordinate-one">01</div><div className="coordinate coordinate-two">02</div><div className="coordinate coordinate-three">03</div><div className="execution-label">PROJECT<br />SOLUTIONS</div></div>
        <div className="execution-content">
          <p className="kicker kicker-light">Project Solutions</p><h2>Visibility.<br />Coordination.<br /><em>Execution.</em></h2>
          <p className="execution-lead">We provide project management and owner-representative support informed by the realities of field execution—helping teams protect priorities, improve visibility, coordinate stakeholders, and maintain momentum.</p>
          <ul><li>Project management</li><li>Owner representation</li><li>Scheduling and start-up support</li></ul>
          <a className="text-link" href="/services/project-solutions">Explore Project Solutions <span>↗</span></a>
        </div>
      </section>

      <section className="why section" id="about">
        <div className="why-heading">
          <p className="kicker">About Urgency Supply</p>
          <h2>Built from the<br />field <em>up.</em></h2>
          <p className="about-pull">The perspective of the craft. The accountability of project leadership. The business awareness to see the entire job.</p>
        </div>
        <div className="why-copy">
          <p className="why-lead">Founder Jay Riddick brings 20 years of industrial construction experience spanning hands-on craft execution, field supervision, project leadership, and executive business development.</p>
          <div className="about-story">
            <p>Jay began his career in the craft, earned increasing field responsibility, and became a superintendent at 26. That progression shaped a practical leadership style grounded in how work is actually planned, staffed, coordinated, and executed.</p>
            <p>His experience reaches across semiconductor facilities, nuclear and natural-gas power generation, oil refining, shipbuilding, manufacturing, and large-scale industrial construction. Urgency Supply was created to bring that operating knowledge directly to owners, contractors, and project teams.</p>
          </div>
          <div className="experience-path" aria-label="Experience progression">
            <div><span>01</span><strong>Craft &amp; Field Execution</strong><small>Built on firsthand knowledge of the work.</small></div>
            <div><span>02</span><strong>Project Management</strong><small>Leading people, priorities, and performance.</small></div>
            <div><span>03</span><strong>Project &amp; Executive Leadership</strong><small>Connecting field execution to business outcomes.</small></div>
          </div>
          <div className="why-title"><span>Why they call us</span><strong>Resourceful. Responsive. Reliable.</strong></div>
          <div className="quality-list"><div><span>R</span><p><strong>Resourceful</strong>Practical answers for changing project needs.</p></div><div><span>R</span><p><strong>Responsive</strong>Clear communication, close to the work.</p></div><div><span>R</span><p><strong>Reliable</strong>Professional support that follows through.</p></div></div>
        </div>
      </section>

      <section className="industries" id="industries">
        <div className="industries-head"><p className="kicker kicker-light">Industries served</p><h2>Built for demanding<br />industrial environments.</h2><p>Complex, schedule-driven work where coordination, responsiveness, and reliable execution matter.</p></div>
        <div className="industry-list">{industries.map((industry, index) => <a href="/industries" key={industry}><span>{String(index + 1).padStart(2, "0")}</span><strong>{industry}</strong><b>↗</b></a>)}</div>
      </section>

      <section className="values"><div className="values-mark" aria-hidden="true">D</div><div><p className="kicker kicker-light">How we work</p><h2>Deliberate.<br />Determined.<br />Devoted.</h2><p>At Urgency Supply, we believe successful projects are built through deliberate planning, determined execution, and devoted support.</p></div></section>

      <section className="contact section" id="contact">
        <div className="contact-copy"><p className="kicker">Start a conversation</p><h2>Tell us what the<br />project needs <em>next.</em></h2><p>Share the scope, location, schedule, or immediate challenge. We’ll help identify the right support path.</p><div className="contact-channels"><a href="tel:+17135171109"><span>Call</span><strong>(713) 517-1109</strong></a><a href="mailto:contact@urgencysupply.com"><span>Email</span><strong>contact@urgencysupply.com</strong></a></div></div>
        <ContactForm compact />
      </section>

      <footer><a className="brand footer-brand" href="/"><span className="brand-name"><b>URGENCY</b> SUPPLY</span><span className="brand-tag">INDUSTRIAL PROJECT SOLUTIONS</span></a><div className="footer-links"><a href="/services">Services</a><a href="/industries">Industries</a><a href="/about">About</a><a href="/contact">Contact</a></div><p><a href="tel:+17135171109">(713) 517-1109</a></p></footer>
    </main>
  );
}
