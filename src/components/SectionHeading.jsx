import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, accent, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="section-heading"
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>
        {title} <span>{accent}</span>
      </h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
