import { useState } from "react";
export default function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-answer-${index}`;
  return <article className={`faq-item ${open ? "faq-open" : ""}`}>
    <h3><button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(!open)}><span>{question}</span><span className="faq-plus" aria-hidden="true">{open ? "−" : "+"}</span></button></h3>
    <div id={panelId} className="faq-answer" hidden={!open}><p>{answer}</p></div>
  </article>;
}
