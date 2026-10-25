import Button from "../components/Button.jsx";
export default function Hero() {
  return <section className="hero" id="home">
    <div className="wrap hero-grid">
      <div className="hero-copy">
        <div className="eyebrow">A little more goodness, every day</div>
        <h1>Healthy food.<br /><em>Made convenient.</em></h1>
        <p>Wholesome food made for modern lifestyles — nutritious, convenient and crafted with care.</p>
        <div className="hero-actions"><Button href="#products">Explore Products <span aria-hidden="true">↗</span></Button><Button href="#why-aaro" variant="outline">Why Aaro Farms?</Button></div>
        <div className="hero-footnote"><span className="sun-symbol" aria-hidden="true" /><span>Everyday nourishment,<br />with a little more thought.</span></div>
      </div>
      <div className="hero-visual">
        <img src="/images/aaro-farms-hero.jpg" alt="Wholesome grain bowl with fresh herbs, lime and onion, styled on natural linen" fetchPriority="high" />
        <div className="hero-image-caption"><span>Made for your everyday</span><span className="caption-dot" /></div>
        <div className="hero-stamp"><span>good food</span><b>for real life</b><i aria-hidden="true" /></div>
      </div>
    </div>
    <div className="hero-bottom wrap"><span>GOODNESS, IN GOOD COMPANY</span><span>Thoughtful food for the in-between moments</span><span className="hero-scroll">Scroll to explore ↓</span></div>
  </section>;
}
