import { motion } from "framer-motion";
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
        <SectionTitle eyebrow="WHAT I DO" title="Services focused on the frontend" text="Simple services that match the work I actually do and keep the portfolio believable." />

        <div className="services-grid">
          {services.map(([Icon, title, text], index) => (
            <motion.article
              className="service-card glass-card"
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: index % 2 ? 2 : -2 }}
            >
              <div className="service-icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="service-line" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
