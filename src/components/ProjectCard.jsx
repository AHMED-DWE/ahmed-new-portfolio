import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ number, label, title, text, tags, visual, to }) {
  return (
    <motion.article
      className="project-card glass-card"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: Number(number) * 0.04 }}
      whileHover={{ y: -8 }}
    >
      <div className="project-number">{number}</div>
      <div className="project-visual-wrap">{visual}</div>
      <div className="project-card-body">
        <p className="project-label">{label}</p>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {to ? (
          <Link className="project-link" to={to}>View project <ArrowUpRight size={17} /></Link>
        ) : (
          <a className="project-link" href="#contact">Project details <ArrowUpRight size={17} /></a>
        )}
      </div>
    </motion.article>
  );
}
