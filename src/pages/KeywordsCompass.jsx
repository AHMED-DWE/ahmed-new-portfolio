import { useEffect } from "react";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import CompassStory from "../components/CompassStory";
import CountUp from "../components/CountUp";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import { usePointerEffects, useReveal } from "../hooks";

const facts = [
  { value: 6, label: "Highlight colors" },
  { value: 2, label: "Modes: Listing and ASIN" },
  { value: 22, label: "Automated tests" },
  { value: 1, label: "Click to Analyze + Save" },
];

/* Full case study for the Keywords Compass extension. It has its own page, so the home page stays short. */
export default function KeywordsCompass({ darkMode, setDarkMode }) {
  useReveal();
  usePointerEffects();

  useEffect(() => {
    const previous = document.title;
    document.title = "Keywords Compass | Ahmed Kashif";
    window.scrollTo(0, 0);
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="site-shell case-page">
      <CustomCursor />
      <ScrollProgress />

      <header className="case-bar">
        <a className="logo-button" href="/" aria-label="Back to the portfolio home page"><Logo /></a>
        <a className="case-back" href="/#projects"><ArrowLeft size={17} aria-hidden="true" /> Back to portfolio</a>
        <button
          type="button"
          className="icon-button swap"
          onClick={() => setDarkMode((value) => !value)}
          aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
        >
          <Sun size={18} aria-hidden="true" className={darkMode ? "swap-on" : "swap-off"} />
          <Moon size={18} aria-hidden="true" className={darkMode ? "swap-off" : "swap-on"} />
        </button>
      </header>

      <main id="main-content" className="page-container case-main">
        <div className="case-intro">
          <p className="eyebrow rise" style={{ "--r": 0 }}>PROJECT</p>
          <h1 className="rise" style={{ "--r": 1 }}><span className="gradient-word">Keywords Compass</span></h1>
          <p className="case-lead rise" style={{ "--r": 2 }}>A Chrome extension that turns a long Helium 10 Cerebro keyword list into a clear, color-coded decision list.</p>
        </div>

        <div className="case-facts">
          {facts.map(({ value, label }, i) => (
            <div className="stat-box glass-card spot reveal" style={{ "--i": i }} key={label}>
              <strong><CountUp value={value} /></strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <CompassStory image="/keywords-compass.webp" settingsImage="/keywords-compass-settings.webp" />

        <div className="case-cta reveal">
          <a className="btn btn-ghost" href="/#projects"><ArrowLeft size={17} aria-hidden="true" /> More projects</a>
          <a className="btn btn-primary" href="/#contact">Work with me</a>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
