import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Download, Gauge, MonitorSmartphone, Sparkles } from "lucide-react";
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
import profile from "../assets/profile.webp";

const tech = [
  { Icon: SiHtml5, name: "HTML" },
  { Icon: SiCss3, name: "CSS" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiReact, name: "React" },
  { Icon: SiTailwindcss, name: "Tailwind" },
];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 20 });

  // A small 3D reaction makes the hero feel alive without moving too much.
  const rotateY = useTransform(smoothX, [-1, 1], [-7, 7]);
  const rotateX = useTransform(smoothY, [-1, 1], [6, -6]);
  const visualX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const visualY = useTransform(smoothY, [-1, 1], [-8, 8]);
  const copyX = useTransform(smoothX, [-1, 1], [5, -5]);

  const scrollToProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  const handleMouseMove = (event) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const resetParallax = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="hero section-anchor"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetParallax}
    >
      <div className="hero-grid" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="page-container hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={reduceMotion ? undefined : { x: copyX }}
        >
          <div className="availability"><span /> Available for frontend opportunities</div>
          <p className="eyebrow">HEY THERE! 👋</p>
          <h1>I build fast, animated & <span className="gradient-text">beautiful web experiences.</span></h1>
          <p className="hero-text">
            Frontend Developer focused on responsive interfaces, clean code and smooth user experiences with modern web tools.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToProjects}>View My Work <ArrowRight size={18} /></button>
            <a className="btn btn-ghost" href="/AHMED.pdf" download>Download CV <Download size={17} /></a>
          </div>

          <div className="tech-strip">
            <small>TECH I WORK WITH</small>
            <div>
              {tech.map(({ Icon, name }) => (
                <span className="tech-pill" key={name}><Icon /> {name}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={reduceMotion ? undefined : {
            rotateX,
            rotateY,
            x: visualX,
            y: visualY,
            transformPerspective: 1100,
          }}
        >
          <div className="portrait-rings" />
          <div className="portrait-card" data-cursor="hover">
            <img
              src={profile}
              alt="Ahmed Kashif"
              width="720"
              height="960"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <motion.div className="hero-chip chip-one" animate={{ y: [0, -9, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <Sparkles size={17} /> Clean Code
          </motion.div>
          <motion.div className="hero-chip chip-two" animate={{ y: [0, 8, 0] }} transition={{ duration: 4.8, repeat: Infinity }}>
            <MonitorSmartphone size={17} /> Responsive Design
          </motion.div>
          <motion.div className="hero-chip chip-three" animate={{ y: [0, -7, 0] }} transition={{ duration: 5.3, repeat: Infinity }}>
            <Gauge size={17} /> Fast Performance
          </motion.div>

          <div className="score-card glass-card">
            <span>98</span>
            <p>Performance</p>
            <small>Best practices</small>
          </div>
        </motion.div>
      </div>

      <div className="scroll-hint">Scroll to explore <span>↓</span></div>
    </section>
  );
}
