import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // The custom cursor is only useful on a real mouse/trackpad.
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame;

    const move = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const hover = (event) => {
      const interactive = event.target.closest("a, button, input, textarea, select, [data-cursor='hover']");
      ring.classList.toggle("cursor-hover", Boolean(interactive));
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(animateRing);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", hover, { passive: true });
    animateRing();

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", hover);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="custom-cursor-layer" aria-hidden="true">
      <span ref={ringRef} className="cursor-ring" />
      <span ref={dotRef} className="cursor-dot" />
    </div>
  );
}
