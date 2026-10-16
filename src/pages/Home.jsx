import { Fragment, useEffect, useState } from "react";
import { ArrowRight, Download, Gauge, MonitorSmartphone, Sparkles } from "lucide-react";
import { SiCss3, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
import CountUp from "../components/CountUp";

const tech = [
  { Icon: SiHtml5, name: "HTML" },
  { Icon: SiCss3, name: "CSS" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiReact, name: "React" },
  { Icon: SiTailwindcss, name: "Tailwind" },
];

const typedWords = ["experiences", "interfaces", "websites", "animations"];

/* Types a word, holds it, deletes it, then moves on to the next word. Starts on the first word so the heading is never empty. */
function useTypewriter(words) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let index = 0;
    let count = words[0].length;
    let mode = "hold";
    let timer;

    const run = () => {
      let delay;
      if (mode === "hold") {
        mode = "delete";
        delay = 40;
      } else if (mode === "delete") {
        count -= 1;
        setText(words[index].slice(0, Math.max(count, 0)));
        if (count <= 0) {
          index = (index + 1) % words.length;
          mode = "type";
          delay = 320;
        } else {
          delay = 42;
        }
      } else {
        count += 1;
        setText(words[index].slice(0, count));
        if (count >= words[index].length) {
          mode = "hold";
          delay = 2200;
        } else {
          delay = 85;
        }
      }
      timer = setTimeout(run, delay);
    };

    timer = setTimeout(run, 2600);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

/* Splits a headline into words that rise in one after another. */
function Words({ text, start = 0, className = "" }) {
  return text.split(" ").map((word, index) => (
    <Fragment key={`${word}-${index}`}>
      <span className="word-wrap">
        <span className={`word ${className}`} style={{ "--w": start + index }}>{word}</span>
      </span>{" "}
    </Fragment>
  ));
}

export default function Home() {
  const typed = useTypewriter(typedWords);
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="hero section-anchor" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="stars" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <div className="page-container hero-inner">
        <div className="hero-copy">
          <div className="availability rise" style={{ "--r": 0 }}><span aria-hidden="true" /> Available for frontend opportunities</div>
          <p className="eyebrow rise" style={{ "--r": 1 }}>HEY THERE! 👋</p>
          <h1 id="hero-title" aria-label="I build fast, animated and beautiful web experiences.">
            <span aria-hidden="true">
              <Words text="I build fast, animated & beautiful web" />
              <span className="typed-line rise" style={{ "--r": 5 }}>
                <span className="gradient-word typed-word">{typed}</span>
                <i className="caret" />
                <span className="typed-dot">.</span>
              </span>
            </span>
          </h1>
          <p className="hero-text rise" style={{ "--r": 6 }}>
            Frontend Developer focused on responsive interfaces, clean code and smooth user experiences with modern web tools.
          </p>

          <div className="hero-buttons rise" style={{ "--r": 7 }}>
            <button type="button" className="btn btn-primary" data-magnet onClick={scrollToProjects}>
              View My Work <ArrowRight size={18} aria-hidden="true" />
            </button>
            <a className="btn btn-ghost" data-magnet href="/AHMED.pdf" download>
              Download CV <Download size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="tech-strip rise" style={{ "--r": 8 }}>
            <small>TECH I WORK WITH</small>
            <div>
              {tech.map(({ Icon, name }) => (
                <span className="tech-pill" key={name}>
                  <Icon aria-hidden="true" focusable="false" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-rings" aria-hidden="true" />
          <div className="portrait-card" data-tilt data-cursor="hover">
            <img
              src="/profile-480.webp"
              srcSet="/profile-320.webp 320w, /profile-480.webp 480w, /profile.webp 720w"
              sizes="(max-width: 380px) 220px, (max-width: 560px) 250px, (max-width: 820px) 300px, 360px"
              alt="Ahmed Kashif, Frontend Developer"
              width="720"
              height="960"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="hero-chip chip-one pop" style={{ "--p": 0 }}><span className="float-soft-up"><Sparkles size={17} aria-hidden="true" /> Clean Code</span></div>
          <div className="hero-chip chip-two pop" style={{ "--p": 1 }}><span className="float-soft-down"><MonitorSmartphone size={17} aria-hidden="true" /> Responsive Design</span></div>
          <div className="hero-chip chip-three pop" style={{ "--p": 2 }}><span className="float-soft-slow"><Gauge size={17} aria-hidden="true" /> Fast Performance</span></div>

          <div className="score-card glass-card pop" style={{ "--p": 3 }}>
            <span><CountUp value={98} /></span>
            <p>Performance</p>
            <small>Best practices</small>
          </div>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">Scroll to explore <span>↓</span></div>
    </section>
  );
}
