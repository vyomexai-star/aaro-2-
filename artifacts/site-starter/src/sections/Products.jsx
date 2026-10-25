import ProductCard from "../components/ProductCard.jsx";
const products = [
  { name: "Everyday Millet Bowl", category: "Wholesome bowls", description: "A sample product concept for nourishing moments on a full day." },
  { name: "Garden Lentil Mix", category: "Pantry favourites", description: "A sample concept shaped around simple, satisfying ingredients." },
  { name: "Morning Grain Blend", category: "Breakfast ideas", description: "A sample direction for a gentler start to the day." },
];
export default function Products() {
  return <section className="products section-space" id="products"><div className="wrap">
    <div className="section-topline"><span className="eyebrow">The good stuff</span><span className="sample-note">Product concepts shown are placeholders</span></div>
    <div className="products-heading"><h2 className="section-heading">A little goodness<br /><em>for every kind of day.</em></h2><p className="section-copy">From slow mornings to the days that don't slow down. Meet a few ideas for the Aaro table — final products and details to come.</p></div>
    <div className="product-grid">{products.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}</div>
    <div className="products-footer"><span>Thoughtfully imagined for everyday eating.</span><span className="small-leaf" aria-hidden="true" /></div>
  </div></section>;
}
