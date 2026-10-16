import { useEffect, useRef, useState } from "react";

/* Counts from 0 to `value` once the number scrolls into view. */
export default function CountUp({ value, suffix = "", duration = 1300 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!el || reduced || !("IntersectionObserver" in window)) {
      setShown(value);
      return undefined;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          setShown(Math.round(value * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return <span ref={ref}>{shown}{suffix}</span>;
}
