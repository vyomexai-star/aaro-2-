import Button from "./Button.jsx";
export default function ProductCard({ product, index }) {
  return <article className={`product-card product-tone-${index % 3}`}>
    <div className="product-art" aria-label={`${product.name} product image placeholder`} role="img">
      <span className="sample-tag">Sample concept</span>
      <div className="product-vessel"><span className="vessel-leaf" aria-hidden="true" /><span className="vessel-name">aaro<br />farms</span><span className="vessel-category">{product.category}</span></div>
      <span className="art-seed seed-one" /><span className="art-seed seed-two" /><span className="art-seed seed-three" />
    </div>
    <div className="product-info">
      <div><span className="product-category">{product.category}</span><h3>{product.name}</h3></div>
      <p>{product.description}</p>
      <Button href="#contact" variant="outline" className="product-button">View Product <span aria-hidden="true">↗</span></Button>
    </div>
  </article>;
}
