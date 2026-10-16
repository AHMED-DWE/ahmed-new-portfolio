import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import Logo from "./Logo";

const links = ["home", "about", "skills", "services", "projects", "experience", "contact"];

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, show: false });
  const navRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    /* The active link is the last section whose top has passed 40% of the screen.
       At the very bottom of the page it is always Contact, because that section is too short to reach the 40% line. */
    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 20);

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = "home";
      if (atBottom) {
        current = "contact";
      } else {
        links.forEach((id) => {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
        });
      }
      setActive(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* One sliding underline that moves to the active link. */
  useLayoutEffect(() => {
    const measure = () => {
      const el = navRef.current?.querySelector(".nav-link.active");
      if (!el) {
        setIndicator((prev) => (prev.show ? { ...prev, show: false } : prev));
        return;
      }
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, show: true });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

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

        <div className="desktop-nav" ref={navRef}>
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
          <span
            className="nav-indicator"
            aria-hidden="true"
            style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width, opacity: indicator.show ? 1 : 0 }}
          />
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
