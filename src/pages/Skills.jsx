import { motion } from "framer-motion";
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
        <SectionTitle
          eyebrow="MY SKILLS"
          title="Technologies I work with"
          text="I keep the stack focused and keep improving the skills I use in real frontend projects."
          align="center"
        />

        <div className="skills-layout">
          <motion.div className="orbit-wrap" initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="orbit orbit-a"><span><SiHtml5 /></span><span><SiJavascript /></span></div>
            <div className="orbit orbit-b"><span><SiReact /></span><span><SiTailwindcss /></span></div>
            <div className="orbit-center"><SiGithub /><small>Frontend</small></div>
          </motion.div>

          <div className="skill-bars glass-card">
            {skills.map(({ name, value, Icon }, index) => (
              <motion.div
                className="skill-row"
                key={name}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <div className="skill-label"><span><Icon /></span><b>{name}</b><strong>{value}%</strong></div>
                <div className="skill-track"><motion.i initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 + index * 0.06 }} /></div>
              </motion.div>
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
