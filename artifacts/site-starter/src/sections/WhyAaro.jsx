import FeatureCard from "../components/FeatureCard.jsx";
const features = [
  { title: "Ingredients with intention", copy: "We believe good food begins with a thoughtful approach to ingredients." },
  { title: "Nutrition in real life", copy: "An everyday outlook on nourishment, without making food feel complicated." },
  { title: "Convenience, considered", copy: "Ideas designed to make mealtimes work with the shape of your day." },
  { title: "A modern Indian table", copy: "Inspired by the way people here eat, gather and make a meal their own." },
  { title: "Care in every detail", copy: "From the first idea to the way it reaches your table, thought matters." },
  { title: "Goodness for the everyday", copy: "Small, satisfying choices can make the everyday feel a little better." },
];
export default function WhyAaro() {
  return <section className="why section-space" id="why-aaro"><div className="wrap">
    <div className="why-intro"><div><span className="eyebrow">Why Aaro Farms</span><h2 className="section-heading">A thoughtful take<br />on <em>everyday food.</em></h2></div><p className="section-copy">Not a new set of rules. Just a more considered way to make good food fit the life you already live.</p></div>
    <div className="features-grid">{features.map((item, index) => <FeatureCard item={item} index={index} key={item.title} />)}</div>
  </div></section>;
}
