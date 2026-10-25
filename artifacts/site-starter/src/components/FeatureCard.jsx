export default function FeatureCard({ item, index }) {
  return <article className="feature-card">
    <div className="feature-index">0{index + 1}<span className="feature-mark" aria-hidden="true" /></div>
    <h3>{item.title}</h3>
    <p>{item.copy}</p>
  </article>;
}
