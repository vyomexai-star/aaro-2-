const items = [
  ["01", "Healthy ingredients", "A considered approach to what goes into your everyday food."],
  ["02", "Made convenient", "A little less prep, and more room for the rest of your day."],
  ["03", "Carefully crafted", "Thoughtful ideas, shaped around how people really eat."],
  ["04", "Modern living", "Food that fits the rhythm of busy, changing lives."],
];
export default function Highlights() {
  return <section className="highlights" aria-label="Aaro Farms highlights"><div className="wrap highlights-grid">{items.map(([n, title, copy]) => <article className="highlight" key={n}><span>{n}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</div></section>;
}
