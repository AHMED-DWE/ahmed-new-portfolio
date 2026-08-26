import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Logo from "./Logo";

const links = ["home", "about", "skills", "services", "projects", "experience", "contact"];

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Keep the active underline matched with the section on screen.
      let current = "home";
      for (const id of links) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 150) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
      <nav className="nav-wrap">
        <button className="logo-button" onClick={() => goTo("home")} aria-label="Go to home">
          <Logo />
        </button>

        <div className="desktop-nav">
          {links.map((item) => (
            <button
              key={item}
              className={`nav-link ${active === item ? "active" : ""}`}
              onClick={() => goTo(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={() => setDarkMode((value) => !value)}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-nav glass-card">
          {links.map((item) => (
            <button key={item} onClick={() => goTo(item)} className={active === item ? "active" : ""}>
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
