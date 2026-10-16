import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

const Ecommerce = lazy(() => import("./pages/Ecommerce"));

/* Adds .is-visible to every .reveal element the first time it scrolls into view. */
function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".reveal"));
    if (!items.length) return undefined;

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    items.forEach((item) => item.classList.add("reveal-ready"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

/* Soft light that follows the pointer on cards. Desktop mouse only. */
function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return undefined;

    let frame = 0;
    let event = null;

    const paint = () => {
      frame = 0;
      const card = event?.target instanceof Element ? event.target.closest(".spot") : null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };

    const onMove = (e) => {
      event = e;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}

function Portfolio({ darkMode, setDarkMode }) {
  useReveal();
  useSpotlight();

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
