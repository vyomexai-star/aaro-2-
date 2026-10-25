const moments = [
  { number: "01", title: "The morning rush", copy: "A calmer start, even when the day gets going early.", className: "moment-tall" },
  { number: "02", title: "Between meetings", copy: "A proper pause in the middle of a packed schedule.", className: "" },
  { number: "03", title: "After the good sweat", copy: "Food that finds its place in a movement-filled day.", className: "" },
  { number: "04", title: "Around the table", copy: "Easy inspiration for the people who make a meal.", className: "moment-wide" },
  { number: "05", title: "Out and about", copy: "A little thoughtfulness for the days spent on the move.", className: "" },
];
export default function Lifestyle() {
  return <section className="lifestyle section-space"><div className="wrap">
    <div className="lifestyle-heading"><div><span className="eyebrow">Food for the flow of life</span><h2 className="section-heading">From first light<br />to <em>one more mile.</em></h2></div><p className="section-copy">Good food has a way of showing up in all kinds of moments. Here's to making space for it.</p></div>
    <div className="moments-grid">{moments.map((moment, i) => <article className={`moment-card moment-${i + 1} ${moment.className}`} key={moment.number}><span className="moment-number">{moment.number} / MOMENT</span><span className={`moment-illustration illustration-${i + 1}`} aria-hidden="true"><i /><i /><i /></span><div><h3>{moment.title}</h3><p>{moment.copy}</p></div></article>)}</div>
  </div></section>;
}
