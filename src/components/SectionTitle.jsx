import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, text, align = "left" }) {
  return (
    <motion.div
      className={`section-title ${align === "center" ? "center" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-copy">{text}</p>}
    </motion.div>
  );
}
