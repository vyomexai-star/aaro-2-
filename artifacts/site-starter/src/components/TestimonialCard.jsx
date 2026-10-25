export default function TestimonialCard({ quote, name, context }) {
  return <article className="testimonial-card">
    <span className="quote-mark" aria-hidden="true">“</span>
    <p className="testimonial-quote">{quote}</p>
    <div className="testimonial-person"><span className="person-initial" aria-hidden="true">A</span><div><strong>{name}</strong><span>{context}</span></div></div>
    <span className="placeholder-note">Illustrative placeholder — not a customer review</span>
  </article>;
}
