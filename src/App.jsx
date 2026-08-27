import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

const Ecommerce = lazy(() => import("./pages/Ecommerce"));

function Portfolio({ darkMode, setDarkMode }) {
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
    const items = Array.from(document.querySelectorAll(".reveal"));
    if (!items.length || !window.IntersectionObserver) return undefined;

    items.forEach((item) => item.classList.add("reveal-ready"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

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

  if (path === "/ecommerce") {
    return (
      <Suspense fallback={<div className="route-loader" aria-live="polite">Loading project…</div>}>
        <Ecommerce />
      </Suspense>
    );
  }

  return <Portfolio darkMode={darkMode} setDarkMode={setDarkMode} />;
}
