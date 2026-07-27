import type { ReactNode } from "react";

export function SiteHeader() {
  return (
    <header className="site-header interior-header">
      <a className="brand" href="/" aria-label="Urgency Supply home">
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
  );
}

export function SiteFooter() {
  return (
    <footer>
      <a className="brand footer-brand" href="/"><span className="brand-name"><b>URGENCY</b> SUPPLY</span><span className="brand-tag">INDUSTRIAL PROJECT SOLUTIONS</span></a>
      <div className="footer-links"><a href="/services">Services</a><a href="/industries">Industries</a><a href="/about">About</a><a href="/contact">Contact</a></div>
      <p><a href="tel:+17135171109">(713) 517-1109</a></p>
    </footer>
  );
}

export function InteriorHero({ eyebrow, title, accent, copy }: { eyebrow: string; title: string; accent?: string; copy: string }) {
  return (
    <section className="interior-hero">
      <div className="interior-grid" aria-hidden="true"></div>
      <div className="interior-hero-inner">
        <p className="eyebrow"><span></span>{eyebrow}</p>
        <h1>{title}{accent && <> <em>{accent}</em></>}</h1>
        <p>{copy}</p>
      </div>
      <span className="interior-index" aria-hidden="true">US / IPS</span>
    </section>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <main><SiteHeader />{children}<SiteFooter /></main>;
}

export function FinalCta({ title = "Tell us what the project needs next." }: { title?: string }) {
  return (
    <section className="final-cta">
      <div><p className="kicker kicker-light">Start a conversation</p><h2>{title}</h2></div>
      <a className="button button-light" href="/contact">Request Project Support <span>↗</span></a>
    </section>
  );
}
