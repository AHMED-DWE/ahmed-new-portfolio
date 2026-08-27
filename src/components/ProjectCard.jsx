import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ number, label, title, text, tags, visual, to }) {
  return (
    <article className="project-card glass-card reveal">
      <div className="project-number" aria-hidden="true">{number}</div>
      <div className="project-visual-wrap">{visual}</div>
      <div className="project-card-body">
        <p className="project-label">{label}</p>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {to ? (
          <a className="project-link" href={to}>View project <ArrowUpRight size={17} aria-hidden="true" /></a>
        ) : (
          <a className="project-link" href="#contact">Project details <ArrowUpRight size={17} aria-hidden="true" /></a>
        )}
      </div>
    </article>
  );
}
