import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import LaptopVisual from "../components/LaptopVisual";

const points = [
  "Responsive layouts for desktop, tablet and mobile",
  "Reusable React components and clean page structure",
  "Smooth motion without making the site feel heavy",
];

export default function About() {
  return (
    <section id="about" className="section-anchor section-pad">
      <div className="page-container about-grid">
        <div>
          <SectionTitle
            eyebrow="ABOUT ME"
            title="I turn ideas into clean, responsive interfaces."
            text="I am a frontend developer who enjoys building modern websites and improving the small details that make a page feel polished."
          />

          <div className="about-points">
            {points.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle2 size={19} />
                <span>{point}</span>
              </motion.div>
            ))}
          </div>

          <div className="stats-grid">
            {["1+|Years learning", "20+|Practice projects", "5+|Core technologies"].map((item) => {
              const [value, label] = item.split("|");
              return <div className="stat-box glass-card" key={item}><strong>{value}</strong><span>{label}</span></div>;
            })}
          </div>
        </div>

        <LaptopVisual />
      </div>
    </section>
  );
}
