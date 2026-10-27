"use client";

import { type FormEvent, useState, useSyncExternalStore } from "react";

const subscribe = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

const recipient = "contact@urgencysupply.com";
const subject = "Candidate Interest — Industrial Construction";

export default function CandidateInterestForm() {
  const [draft, setDraft] = useState("");
  // Keep the static form disabled until its client-side submit handler is ready.
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);

  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (name: string) => String(form.get(name) || "").trim();
    setDraft([
      "Candidate interest in future industrial construction opportunities",
      "",
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone") || "Not provided"}`,
      `Trade or professional specialty: ${value("specialty")}`,
      `General location: ${value("location")}`,
      `Availability: ${value("availability")}`,
      "",
      "Work interests and relevant experience:",
      value("interests"),
    ].join("\n"));
  }

  return (
    <div className="project-form contact-page-form candidate-form">
      <h3>Prepare your introduction</h3>
      <p id="inquiry-help" className="candidate-help">Required fields are marked (required). This form prepares an email draft; it does not send or save your inquiry to this website. You will review and send it from your own email account.</p>
      <noscript><p className="candidate-notice">The draft builder requires JavaScript. Please email contact@urgencysupply.com or call (713) 517-1109 using the links on this page.</p></noscript>
      <form onSubmit={prepareInquiry} onChange={() => setDraft("")} aria-describedby="inquiry-help">
        <fieldset disabled={!ready} className="candidate-fields">
        <legend className="candidate-field-legend">Your introduction</legend>
        <div className="field-row">
          <label>Name (required)<input name="name" autoComplete="name" maxLength={80} required /></label>
          <label>Email (required)<input type="email" name="email" autoComplete="email" maxLength={120} required /></label>
        </div>
        <label>Phone (optional)<input type="tel" name="phone" autoComplete="tel" maxLength={40} /></label>
        <label>Trade or professional specialty (required)<input name="specialty" maxLength={100} aria-describedby="specialty-help" required /></label>
        <p id="specialty-help" className="candidate-field-help">For example: general labor, welding, electrical, field supervision, or project controls.</p>
        <label>General location (required)<input name="location" maxLength={100} aria-describedby="location-help" required /></label>
        <p id="location-help" className="candidate-field-help">City and state, or region only. No street address needed.</p>
        <label>Availability (required)<input name="availability" maxLength={100} aria-describedby="availability-help" required /></label>
        <p id="availability-help" className="candidate-field-help">For example: available now, after a certain month, or exploring future work.</p>
        <label>Work interests and relevant experience (required)<textarea name="interests" rows={5} maxLength={600} required aria-describedby="interests-help" /></label>
        <p id="interests-help" className="candidate-field-help">Briefly describe the industrial construction work that interests you. You may mention experience or willingness to travel. Maximum 600 characters; no sensitive information or documents.</p>
        <button className="button button-primary submit-button" type="submit">Prepare inquiry email <span aria-hidden="true">↗</span></button>
        </fieldset>
      </form>
      <div role="status" aria-live="polite">
        {draft && <p className="candidate-help">Your draft is ready below. Nothing has been sent. Open your email app, or copy the draft into your email service and send it to {recipient}.</p>}
      </div>
      {draft && <div className="candidate-draft">
        <a className="button button-primary submit-button" href={`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`}>Open inquiry in email app <span aria-hidden="true">↗</span></a>
        <p className="candidate-help">If no email app opens, use the copyable details below.</p>
        <p className="candidate-help"><strong>To:</strong> {recipient}<br /><strong>Subject:</strong> {subject}</p>
        <label>Prepared message<textarea readOnly rows={12} value={draft} onFocus={(event) => event.currentTarget.select()} /></label>
      </div>}
    </div>
  );
}
