const nav = [["About Aaro", "#about"], ["Our Products", "#products"], ["Why Aaro", "#why-aaro"], ["Contact", "#contact"]];
export default function Footer() {
  return <footer className="footer">
    <div className="wrap">
      <div className="footer-main">
        <div className="footer-brand"><a className="brand brand-light" href="#home"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span className="brand-name">aaro<span>farms</span></span></a><p>Wholesome food made for modern lives. Thoughtfully imagined, one everyday choice at a time.</p></div>
        <div className="footer-links"><h3>Explore</h3>{nav.map(([text, href]) => <a href={href} key={text}>{text}</a>)}</div>
        <div className="footer-links"><h3>Say hello</h3><span>Contact details to be added</span><span>Social profile to be added</span><span>Email address to be added</span></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Aaro Farms</span><span>Good food, made for real life.</span></div>
    </div>
  </footer>;
}
