import { CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import LaptopVisual from "../components/LaptopVisual";
import CountUp from "../components/CountUp";

const points = [
  "Responsive layouts for desktop, tablet and mobile",
  "Reusable React components and clean page structure",
  "Smooth motion without making the site feel heavy",
];

const stats = [
  { value: 1, suffix: "+", label: "Years learning" },
  { value: 20, suffix: "+", label: "Practice projects" },
  { value: 5, suffix: "+", label: "Core technologies" },
];

export default function About() {
  return (
    <section id="about" className="section-anchor section-pad" aria-labelledby="about-title">
      <div className="page-container about-grid">
        <div>
          <div id="about-title">
            <SectionTitle
              eyebrow="ABOUT ME"
              title="I turn ideas into clean, responsive interfaces."
              text="I am a frontend developer who enjoys building modern websites and improving the small details that make a page feel polished."
            />
          </div>

          <div className="about-points">
            {points.map((point, i) => (
              <div className="reveal" style={{ "--i": i }} key={point}>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="stats-grid">
            {stats.map(({ value, suffix, label }, i) => (
              <div className="stat-box glass-card spot reveal" style={{ "--i": i + 3 }} key={label}>
                <strong><CountUp value={value} suffix={suffix} /></strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <LaptopVisual />
      </div>
    </section>
  );
}
