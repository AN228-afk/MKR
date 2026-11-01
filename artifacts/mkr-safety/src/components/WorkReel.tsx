import { useRef } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

export type ReelItem = { src: string; title: string; tag: string };

/** "Our Work" — photos glide sideways as you scroll (desktop); swipe on phones. */
export function WorkReel({ items }: { items: ReelItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  const x = useTransform(smooth, [0, 1], ["0%", "-62%"]);
  const barW = useTransform(smooth, [0, 1], ["0%", "100%"]);

  const Card = ({ it, i }: { it: ReelItem; i: number }) => (
    <figure className="group relative shrink-0 w-[78vw] sm:w-[340px] md:w-[400px] h-[440px] md:h-[500px] rounded-[1.75rem] overflow-hidden shadow-[0_30px_60px_-30px_rgba(60,45,10,.5)] snap-center">
      <img src={it.src} alt={`${it.title} by MKR Safety Solutions`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
      <span className="absolute top-4 left-4 text-6xl font-bold text-white/25 leading-none">{String(i + 1).padStart(2, "0")}</span>
      <figcaption className="absolute bottom-5 left-5 right-5">
        <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-[10px] font-bold uppercase tracking-widest text-secondary mb-2">{it.tag}</span>
        <div className="text-white text-xl font-bold">{it.title}</div>
      </figcaption>
    </figure>
  );

  const End = () => (
    <div className="shrink-0 w-[78vw] sm:w-[340px] md:w-[400px] h-[440px] md:h-[500px] rounded-[1.75rem] bg-gradient-to-br from-[hsl(38_70%_36%)] via-[hsl(40_62%_46%)] to-[hsl(38_70%_30%)] text-white p-8 flex flex-col justify-end snap-center">
      <div className="text-sm uppercase tracking-widest text-white/70 mb-3">Next could be yours</div>
      <div className="text-3xl font-bold leading-tight mb-6">Your balcony, made safe in style.</div>
      <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-secondary font-bold rounded-xl">
        Get Free Quote <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );

  const Head = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex items-end justify-between gap-6">
      <div>
        <span className="mkr-eyebrow">Our Work</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Real homes. Real safety.</h2>
        <p className="text-muted-foreground mt-2">A look at invisible grills we've installed across Bangalore.</p>
      </div>
      <Link href="/gallery" className="hidden sm:inline-flex items-center gap-2 text-secondary font-semibold shrink-0">
        Full Gallery <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );

  return (
    <>
      {/* Desktop: scroll-driven film strip */}
      <section ref={ref} data-no-reveal className="hidden md:block relative h-[260vh] bg-white">
        <div className="sticky top-16 h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden">
          {Head}
          <motion.div style={{ x }} className="flex gap-6 pl-[max(2rem,calc((100vw-80rem)/2+2rem))] will-change-transform">
            {items.map((it, i) => <Card key={it.title} it={it} i={i} />)}
            <End />
          </motion.div>
          <div className="max-w-7xl w-full mx-auto px-8 mt-10">
            <div className="h-[3px] rounded-full bg-border overflow-hidden">
              <motion.div style={{ width: barW }} className="h-full bg-gradient-to-r from-secondary to-[hsl(40_62%_58%)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Phones / tablets: swipe */}
      <section data-no-reveal className="md:hidden py-16 bg-white">
        {Head}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((it, i) => <Card key={it.title} it={it} i={i} />)}
          <End />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">Swipe to see more →</p>
      </section>
    </>
  );
}
