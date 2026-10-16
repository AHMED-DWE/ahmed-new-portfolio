import { useEffect } from "react";

const finePointer = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Adds .is-visible to every .reveal element the first time it scrolls into view. */
export function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".reveal"));
    if (!items.length) return undefined;

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    items.forEach((item) => item.classList.add("reveal-ready"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

/* Desktop mouse only: card spotlight (.spot), 3D tilt ([data-tilt]) and magnetic buttons ([data-magnet]). */
export function usePointerEffects() {
  useEffect(() => {
    if (!finePointer() || reducedMotion()) return undefined;

    let frame = 0;
    let last = null;

    const paint = () => {
      frame = 0;
      const target = last?.target;
      if (!(target instanceof Element)) return;

      const spot = target.closest(".spot");
      if (spot) {
        const rect = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${last.clientX - rect.left}px`);
        spot.style.setProperty("--my", `${last.clientY - rect.top}px`);
      }

      const tilt = target.closest("[data-tilt]");
      if (tilt) {
        const rect = tilt.getBoundingClientRect();
        const x = (last.clientX - rect.left) / rect.width - 0.5;
        const y = (last.clientY - rect.top) / rect.height - 0.5;
        tilt.style.setProperty("--tx", `${(-y * 9).toFixed(2)}deg`);
        tilt.style.setProperty("--ty", `${(x * 11).toFixed(2)}deg`);
        tilt.classList.add("is-tilting");
      }

      const magnet = target.closest("[data-magnet]");
      if (magnet) {
        const rect = magnet.getBoundingClientRect();
        const x = last.clientX - (rect.left + rect.width / 2);
        const y = last.clientY - (rect.top + rect.height / 2);
        magnet.style.translate = `${(x * 0.18).toFixed(1)}px ${(y * 0.28).toFixed(1)}px`;
      }
    };

    const onMove = (event) => {
      last = event;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onOut = (event) => {
      const from = event.target instanceof Element ? event.target : null;
      if (!from) return;

      const tilt = from.closest("[data-tilt]");
      if (tilt && !tilt.contains(event.relatedTarget)) {
        tilt.style.setProperty("--tx", "0deg");
        tilt.style.setProperty("--ty", "0deg");
        tilt.classList.remove("is-tilting");
      }

      const magnet = from.closest("[data-magnet]");
      if (magnet && !magnet.contains(event.relatedTarget)) magnet.style.translate = "";
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}

/* Slowly moves the hero glow while the hero is on screen. */
export function useHeroParallax() {
  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero || reducedMotion()) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      if (window.scrollY < 1200) hero.style.setProperty("--sy", String(Math.round(window.scrollY)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
