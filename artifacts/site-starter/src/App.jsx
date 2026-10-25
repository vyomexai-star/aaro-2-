import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Highlights from "./sections/Highlights.jsx";
import About from "./sections/About.jsx";
import Products from "./sections/Products.jsx";
import WhyAaro from "./sections/WhyAaro.jsx";
import Lifestyle from "./sections/Lifestyle.jsx";
import Philosophy from "./sections/Philosophy.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import FAQ from "./sections/FAQ.jsx";
import ContactCTA from "./sections/ContactCTA.jsx";
import "./styles/site.css";

export default function App() {
  return <div className="site grain"><Navbar /><main><Hero /><Highlights /><About /><Products /><WhyAaro /><Lifestyle /><Philosophy /><Testimonials /><FAQ /><ContactCTA /></main><Footer /></div>;
}
