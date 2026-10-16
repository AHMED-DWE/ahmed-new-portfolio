import { Gauge, LayoutTemplate, MonitorSmartphone, Paintbrush, Wrench, Zap } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const services = [
  [LayoutTemplate, "Frontend Development", "Responsive pages and reusable React components."],
  [Paintbrush, "UI Implementation", "Turning clean designs into working interfaces."],
  [MonitorSmartphone, "Responsive Design", "Layouts that adapt properly across screen sizes."],
  [Zap, "Animation", "Smooth hover, scroll and entrance interactions."],
  [Gauge, "Performance", "Cleaner code, smaller effects and faster page behavior."],
  [Wrench, "Maintenance", "Fixing UI problems and improving existing frontend code."],
];

export default function Services() {
  return (
    <section id="services" className="section-anchor section-pad compact-top">
      <div className="page-container">
        <SectionTitle eyebrow="WHAT I DO" title="Services focused on the frontend" text="Focused services that match the work I do every day." />

        <div className="services-grid">
          {services.map(([Icon, title, text], i) => (
            <article className="service-card glass-card spot reveal" style={{ "--i": i }} key={title}>
              <div className="service-icon"><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="service-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
