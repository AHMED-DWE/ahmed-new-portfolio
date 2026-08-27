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
            {points.map((point) => (
              <div className="reveal" key={point}>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="stats-grid">
            {["1+|Years learning", "20+|Practice projects", "5+|Core technologies"].map((item) => {
              const [value, label] = item.split("|");
              return <div className="stat-box glass-card reveal" key={item}><strong>{value}</strong><span>{label}</span></div>;
            })}
          </div>
        </div>

        <LaptopVisual />
      </div>
    </section>
  );
}
