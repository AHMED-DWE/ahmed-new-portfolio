import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Logo from "./Logo";

const links = ["home", "about", "skills", "services", "projects", "experience", "contact"];

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrolled = () => {
      setScrolled(window.scrollY > 20);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateScrolled);
    };

    updateScrolled();
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
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
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
            className="icon-button"
            onClick={() => setDarkMode((value) => !value)}
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
          >
            {darkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="mobile-nav glass-card" role="navigation" aria-label="Mobile navigation">
          {links.map((item) => (
            <button type="button" key={item} onClick={() => goTo(item)} className={active === item ? "active" : ""}>
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
