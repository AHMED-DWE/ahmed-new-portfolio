import { SiCss3, SiGit, SiGithub, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
import SectionTitle from "../components/SectionTitle";

const skills = [
  { name: "HTML5", value: 95, Icon: SiHtml5 },
  { name: "CSS3", value: 90, Icon: SiCss3 },
  { name: "JavaScript", value: 85, Icon: SiJavascript },
  { name: "React", value: 85, Icon: SiReact },
  { name: "Tailwind CSS", value: 90, Icon: SiTailwindcss },
  { name: "Git / GitHub", value: 80, Icon: SiGit },
];

export default function Skills() {
  return (
    <section id="skills" className="section-anchor section-pad compact-top">
      <div className="page-container">
        <SectionTitle eyebrow="MY SKILLS" title="Technologies I work with" text="I keep the stack focused and keep improving the skills I use in real frontend projects." align="center" />

        <div className="skills-layout">
          <div className="orbit-wrap reveal" aria-hidden="true">
            <div className="orbit orbit-a"><span><SiHtml5 focusable="false" /></span><span><SiJavascript focusable="false" /></span></div>
            <div className="orbit orbit-b"><span><SiReact focusable="false" /></span><span><SiTailwindcss focusable="false" /></span></div>
            <div className="orbit-center"><SiGithub focusable="false" /><small>Frontend</small></div>
          </div>

          <div className="skill-bars glass-card reveal">
            {skills.map(({ name, value, Icon }) => (
              <div className="skill-row" key={name}>
                <div className="skill-label">
                  <span><Icon aria-hidden="true" focusable="false" /></span>
                  <b>{name}</b>
                  <strong>{value}%</strong>
                </div>
                <div className="skill-track" role="progressbar" aria-label={`${name} skill level`} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
                  <i style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {["HTML", "CSS", "JAVASCRIPT", "REACT", "TAILWIND", "GIT", "RESPONSIVE UI", "ANIMATION", "HTML", "CSS", "JAVASCRIPT", "REACT"].map((item, index) => <span key={`${item}-${index}`}>{item} ✦</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
