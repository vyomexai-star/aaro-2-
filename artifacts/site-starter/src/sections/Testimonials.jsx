import TestimonialCard from "../components/TestimonialCard.jsx";
const testimonials = [
  { quote: "“I love the idea of food that makes a busy day feel a little more balanced.”", name: "Sample voice 01", context: "Placeholder profile" },
  { quote: "“Thoughtful, simple and made for the way our family actually eats.”", name: "Sample voice 02", context: "Placeholder profile" },
  { quote: "“A little more ease around everyday meals is always a good thing.”", name: "Sample voice 03", context: "Placeholder profile" },
];
export default function Testimonials() {
  return <section className="testimonials section-space"><div className="wrap"><div className="testimonial-heading"><span className="eyebrow">In good company</span><h2 className="section-heading">Words we'd love<br />to <em>hear someday.</em></h2><p className="section-copy">These are sample placeholders only, not real customer testimonials. We’ll share genuine stories when they’re ready.</p></div><div className="testimonial-grid">{testimonials.map((item) => <TestimonialCard key={item.name} {...item} />)}</div></div></section>;
}
