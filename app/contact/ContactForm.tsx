"use client";

import { FormEvent, useState } from "react";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Project Support Request — ${form.get("company") || form.get("name")}`;
    const body = [
      `Name: ${form.get("name") || ""}`,
      `Company: ${form.get("company") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Phone: ${form.get("phone") || ""}`,
      `Service: ${form.get("service") || ""}`,
      `Project location: ${form.get("location") || ""}`,
      `Desired start date: ${form.get("startDate") || ""}`,
      `Estimated headcount or quantity: ${form.get("quantity") || ""}`,
      "",
      "Project details:",
      `${form.get("details") || ""}`,
    ].join("\n");
    setSubmitted(true);
    window.location.href = `mailto:contact@urgencysupply.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return <form className="project-form contact-page-form" onSubmit={handleSubmit}>
    <div className="field-row"><label>Name<input name="name" autoComplete="name" required /></label><label>Company<input name="company" autoComplete="organization" required /></label></div>
    <div className="field-row"><label>Email<input type="email" name="email" autoComplete="email" required /></label><label>Phone<input type="tel" name="phone" autoComplete="tel" /></label></div>
    <div className="field-row"><label>Service needed<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Workforce</option><option>Project Solutions</option><option>Procurement</option><option>Multiple Services</option><option>Not Sure Yet</option></select></label><label>Project location<input name="location" /></label></div>
    {!compact && <div className="field-row"><label>Desired start date<input type="date" name="startDate" /></label><label>Estimated headcount or quantity<input name="quantity" /></label></div>}
    <label>Project details<textarea name="details" rows={compact ? 4 : 6}></textarea></label>
    <button className="button button-primary submit-button" type="submit">Email Project Request <span>↗</span></button>
    {submitted && <p className="form-status" role="status">Your email application is opening with the project details prepared.</p>}
  </form>;
}
