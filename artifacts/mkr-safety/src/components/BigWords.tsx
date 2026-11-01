import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ROW1 = ["SAFE", "INVISIBLE", "RUST-FREE", "15-YEAR WARRANTY", "SS 316"];
const ROW2 = ["BALCONIES", "WINDOWS", "STAIRCASES", "TERRACES", "VILLAS"];

/** Giant gold words that slide in opposite directions as you scroll. */
export function BigWords() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["5%", "-35%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-35%", "5%"]);
  const line = (words: string[], outline: boolean) => (
    <span className="flex gap-8 sm:gap-12 whitespace-nowrap">
      {[...words, ...words].map((w, i) => (
        <span key={i} className={`flex items-center gap-8 sm:gap-12 ${outline ? "mkr-outline-text" : "mkr-gold-text"}`}>
          {w}<span className="text-secondary/40 text-[0.5em]">✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <section ref={ref} data-no-reveal aria-hidden="true" className="py-14 sm:py-20 bg-white overflow-hidden select-none">
      <motion.div style={{ x: x1 }} className="text-[13vw] sm:text-[8vw] leading-none font-extrabold tracking-tight">{line(ROW1, false)}</motion.div>
      <motion.div style={{ x: x2 }} className="text-[13vw] sm:text-[8vw] leading-none font-extrabold tracking-tight mt-2">{line(ROW2, true)}</motion.div>
    </section>
  );
}
