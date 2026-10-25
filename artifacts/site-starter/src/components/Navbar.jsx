import { useState } from "react";
import Button from "./Button.jsx";

const links = [["Home", "#home"], ["About", "#about"], ["Products", "#products"], ["Why Aaro", "#why-aaro"], ["Contact", "#contact"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="navbar">
    <div className="nav-inner wrap">
      <a className="brand" href="#home" aria-label="Aaro Farms home" onClick={close}>
        <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
        <span className="brand-name">aaro<span>farms</span></span>
      </a>
      <button className={`menu-toggle ${open ? "is-open" : ""}`} type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <nav id="primary-navigation" className={`nav-links ${open ? "nav-open" : ""}`} aria-label="Main navigation">
        {links.map(([label, href]) => <a key={label} href={href} onClick={close}>{label}</a>)}
        <Button href="#products" className="nav-cta" onClick={close}>Explore Products <span aria-hidden="true">↗</span></Button>
      </nav>
    </div>
  </header>;
}
