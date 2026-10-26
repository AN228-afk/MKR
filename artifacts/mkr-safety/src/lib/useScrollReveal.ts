import { useEffect } from "react";

/**
 * Adds a gentle fade/rise to page sections, cards and headings as they scroll
 * into view. Classes are added by JS only, so prerendered HTML stays visible
 * for search engines and for anyone without JavaScript.
 */
export function useScrollReveal(key: string) {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let io: IntersectionObserver | null = null;
    const raf = requestAnimationFrame(() => {
      const main = document.querySelector("main");
      if (!main) return;
      const sections = Array.from(main.querySelectorAll<HTMLElement>(":scope section, :scope > * > section")).slice(1);
      const targets: HTMLElement[] = [];
      sections.forEach((sec) => {
        // Stagger the direct grid/list children (cards), otherwise reveal the section
        const grids = sec.querySelectorAll<HTMLElement>(".grid, ul, ol");
        let hasCards = false;
        grids.forEach((g) => {
          const kids = Array.from(g.children) as HTMLElement[];
          if (kids.length >= 2 && kids.length <= 24) {
            hasCards = true;
            kids.forEach((k, i) => {
              if (k.closest("[data-no-reveal]")) return;
              k.style.setProperty("--reveal-delay", `${Math.min(i, 8) * 70}ms`);
              targets.push(k);
            });
          }
        });
        const heads = sec.querySelectorAll<HTMLElement>("h2");
        heads.forEach((h) => targets.push(h));
        if (!hasCards) targets.push(sec);
      });

      const vh = window.innerHeight;
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("is-in"); io?.unobserve(e.target); }
        }),
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );
      targets.forEach((t) => {
        if (t.getBoundingClientRect().top < vh * 0.9) return; // already on screen: leave as is
        t.classList.add("reveal");
        io!.observe(t);
      });
    });
    return () => { cancelAnimationFrame(raf); io?.disconnect(); };
  }, [key]);
}
