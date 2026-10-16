import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import { useHeroParallax, usePointerEffects, useReveal } from "./hooks";

const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const KeywordsCompass = lazy(() => import("./pages/KeywordsCompass"));

function Portfolio({ darkMode, setDarkMode }) {
  useReveal();
  usePointerEffects();
  useHeroParallax();

  /* Coming back from another page with /#projects or /#contact: scroll to that section. */
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return undefined;
    const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView({ block: "start" }), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="site-shell">
      <CustomCursor />
      <ScrollProgress />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main id="main-content">
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("theme") !== "light";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch {
      // The page still works when storage is blocked.
    }
  }, [darkMode]);

  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const fallback = <div className="route-loader" aria-live="polite">Loading…</div>;

  if (path === "/ecommerce") {
    return <Suspense fallback={fallback}><Ecommerce /></Suspense>;
  }

  if (path === "/keywords-compass") {
    return <Suspense fallback={fallback}><KeywordsCompass darkMode={darkMode} setDarkMode={setDarkMode} /></Suspense>;
  }

  return <Portfolio darkMode={darkMode} setDarkMode={setDarkMode} />;
}
