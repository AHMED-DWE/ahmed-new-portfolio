import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = ["home", "about", "skills", "services", "projects", "contact"];

export default function Navlink({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const observers = [];
    links.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(id),
        { threshold: 0.42 }
      );
      observer.observe(element);
      observers.push(observer);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > last && current > 180 && !menuOpen);
      last = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <motion.nav
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}
    >
      <div className="nav-inner">
        <a href="#home" className="brand" aria-label="Ahmed Kashif home">
          <span className="brand-mark">AK</span>
          <span>Ahmed<span>Kashif</span></span>
        </a>

        <div className="desktop-nav">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className={active === link ? "active" : ""}>
              {link}
              {active === link && <motion.span layoutId="nav-dot" className="nav-dot" />}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="theme-btn" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={darkMode ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a href="#contact" className="nav-cta">Let’s Talk</a>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 0%)" }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-menu"
          >
            {links.map((link, index) => (
              <motion.a
                key={link}
                href={`#${link}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                <small>0{index + 1}</small> {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
