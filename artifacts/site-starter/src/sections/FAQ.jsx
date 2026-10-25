import FAQItem from "../components/FAQItem.jsx";
const questions = [
  ["What is Aaro Farms?", "Aaro Farms is a food brand focused on making wholesome, convenient food easier to fit into modern everyday life."],
  ["What makes Aaro Farms different?", "Our point of view is simple: thoughtful food should feel approachable and work with real routines. Product details will be shared as the range is finalized."],
  ["Where can I buy Aaro Farms products?", "Availability and purchase information have not been announced yet. Please check back here for updates."],
  ["Are the products suitable for everyday consumption?", "Please refer to the final product packaging and ingredient information for guidance. Product formulations and nutrition details are not yet available."],
  ["How should the products be stored?", "Storage instructions will depend on each product and will be provided on its final packaging."],
];
export default function FAQ() {
  return <section className="faq section-space" id="faq"><div className="wrap faq-grid"><div><span className="eyebrow">A few good questions</span><h2 className="section-heading">Curious?<br /><em>Start here.</em></h2><p className="section-copy">Some details are still taking shape. We’ll keep this space up to date as Aaro grows.</p></div><div className="faq-list">{questions.map(([question, answer], i) => <FAQItem key={question} question={question} answer={answer} index={i} />)}</div></div></section>;
}
