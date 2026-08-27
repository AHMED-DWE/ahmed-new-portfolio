import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;

    let frame = 0;
    let lastX = -100;
    let lastY = -100;

    const paint = () => {
      dot.style.transform = `translate3d(${lastX}px, ${lastY}px, 0)`;
      ring.style.transform = `translate3d(${lastX}px, ${lastY}px, 0)`;
      frame = 0;
    };

    const move = (event) => {
      lastX = event.clientX;
      lastY = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const hover = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const interactive = target?.closest("a, button, input, textarea, select, [data-cursor='hover']");
      ring.classList.toggle("cursor-hover", Boolean(interactive));
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", hover, { passive: true });

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", hover);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="custom-cursor-layer" aria-hidden="true">
      <span ref={ringRef} className="cursor-ring" />
      <span ref={dotRef} className="cursor-dot" />
    </div>
  );
}
