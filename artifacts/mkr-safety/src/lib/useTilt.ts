import { useEffect } from "react";

/** Gentle 3D tilt toward the mouse for elements with [data-tilt] (desktop only). */
export function useTilt(key: string) {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const offs = els.map((el) => {
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg) translateY(-6px)`;
        el.style.setProperty("--mx", `${((px + 0.5) * 100).toFixed(1)}%`);
        el.style.setProperty("--my", `${((py + 0.5) * 100).toFixed(1)}%`);
      };
      const leave = () => { el.style.transform = ""; };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      return () => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); el.style.transform = ""; };
    });
    return () => offs.forEach((f) => f());
  }, [key]);
}
