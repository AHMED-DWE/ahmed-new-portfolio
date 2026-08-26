import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Ecommerce from "./pages/Ecommerce";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

function Portfolio({ darkMode, setDarkMode }) {
  return (
    <div className="site-shell">
      <CustomCursor />
      <ScrollProgress />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Home darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default function App() {
  const location = useLocation();

  // Theme is saved so the site keeps the same look after refresh.
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Every route starts from the top. It also fixes odd positions after opening a project page.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Portfolio darkMode={darkMode} setDarkMode={setDarkMode} />}
      />
      <Route
        path="/ecommerce"
        element={<Ecommerce darkMode={darkMode} setDarkMode={setDarkMode} />}
      />
    </Routes>
  );
}
