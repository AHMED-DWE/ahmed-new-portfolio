import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ label, title, text, tags, visual, to, linkText = "View project", index = 0, featured = false }) {
  return (
    <article className={`project-card glass-card spot reveal ${featured ? "featured" : ""}`} style={{ "--i": index }}>
      {featured && <span className="featured-badge">Featured</span>}
      <div className="project-visual-wrap">{visual}</div>
      <div className="project-card-body">
        <p className="project-label">{label}</p>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <a className="project-link" href={to || "#contact"}>{linkText} <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </article>
  );
}
