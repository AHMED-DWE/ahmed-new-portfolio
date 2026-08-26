import { motion } from "framer-motion";
import { Code2, Lightbulb, Palette, Rocket, Search } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const steps = [
  [Search, "01", "Understand", "First I understand the goal and the page content."],
  [Palette, "02", "Plan UI", "I decide the section order, spacing and responsive layout."],
  [Code2, "03", "Build", "I create the page with reusable components and simple code."],
  [Lightbulb, "04", "Improve", "I add animations, hover states and small UI details."],
  [Rocket, "05", "Deliver", "I test the layout on mobile and prepare the final build."],
];

export default function Experience() {
  return (
    <section id="experience" className="section-anchor section-pad compact-top">
      <div className="page-container">
        <SectionTitle eyebrow="MY PROCESS" title="From idea to a working page" text="A simple process that keeps my code easy to follow and the final UI consistent." align="center" />

        <div className="process-line">
          {steps.map(([Icon, number, title, text], index) => (
            <motion.div
              className="process-step"
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="process-icon"><Icon /></div>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="learning-card glass-card" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <div>
            <p className="eyebrow">ALWAYS LEARNING</p>
            <h3>Improving one project at a time.</h3>
            <p>I keep practicing React, JavaScript, responsive layouts and UI animation by building small projects and improving this portfolio.</p>
          </div>
          <div className="learning-orb"><span>React</span><span>JS</span><span>UI</span></div>
        </motion.div>
      </div>
    </section>
  );
}
