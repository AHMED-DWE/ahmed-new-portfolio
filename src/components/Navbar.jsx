import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import Logo from "./Logo";

const links = ["home", "about", "skills", "services", "projects", "experience", "contact"];

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setScrolled(window.scrollY > 20);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = links.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.01, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => event.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth > 820 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`topbar ${scrolled ? "topbar-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <nav className="nav-wrap" aria-label="Primary navigation">
        <button type="button" className="logo-button" onClick={() => goTo("home")} aria-label="Go to home">
          <Logo />
        </button>

        <div className="desktop-nav">
          {links.map((item) => (
            <button
              type="button"
              key={item}
              className={`nav-link ${active === item ? "active" : ""}`}
              onClick={() => goTo(item)}
              aria-current={active === item ? "page" : undefined}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-button swap"
            onClick={() => setDarkMode((value) => !value)}
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
          >
            <Sun size={18} aria-hidden="true" className={darkMode ? "swap-on" : "swap-off"} />
            <Moon size={18} aria-hidden="true" className={darkMode ? "swap-off" : "swap-on"} />
          </button>

          <button
            type="button"
            className="icon-button mobile-menu-button swap"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu size={21} aria-hidden="true" className={menuOpen ? "swap-off" : "swap-on"} />
            <X size={21} aria-hidden="true" className={menuOpen ? "swap-on" : "swap-off"} />
          </button>
        </div>
      </nav>

      <div className="menu-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />

      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" inert={!menuOpen}>
        {links.map((item, index) => (
          <button
            type="button"
            key={item}
            style={{ "--i": index }}
            onClick={() => goTo(item)}
            className={active === item ? "active" : ""}
          >
            {item}
          </button>
        ))}
        <a className="btn btn-primary" style={{ "--i": links.length }} href="/AHMED.pdf" download>
          Download CV <Download size={17} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
