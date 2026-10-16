import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const RADIUS = 20;
const LENGTH = 2 * Math.PI * RADIUS;

/* Floating button with a ring that fills as you scroll down the page. */
export default function BackToTop() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const visible = progress > 0.08;

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "is-shown" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <circle className="btt-track" cx="24" cy="24" r={RADIUS} />
        <circle className="btt-fill" cx="24" cy="24" r={RADIUS} strokeDasharray={LENGTH} strokeDashoffset={LENGTH * (1 - progress)} />
      </svg>
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
