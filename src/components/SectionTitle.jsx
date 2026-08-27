export default function SectionTitle({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`section-title reveal ${align === "center" ? "center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-copy">{text}</p>}
    </div>
  );
}
