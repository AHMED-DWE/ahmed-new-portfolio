import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGit } from "react-icons/si";

const items = [
  [SiHtml5, "HTML5"],
  [SiCss3, "CSS3"],
  [SiJavascript, "JavaScript"],
  [SiReact, "React"],
  [SiTailwindcss, "Tailwind CSS"],
  [SiGit, "Git & GitHub"],
];

export default function TechMarquee({ darkMode }) {
  const doubled = [...items, ...items];
  return (
    <div className={`tech-marquee ${darkMode ? "section-dark" : "section-light"}`} aria-hidden="true">
      <div className="tech-marquee-track">
        {doubled.map(([Icon, label], index) => (
          <span key={`${label}-${index}`}><Icon /> {label} <i>✦</i></span>
        ))}
      </div>
    </div>
  );
}
