import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence, animate, useInView, useReducedMotion } from "framer-motion";
import { Shield, ArrowRight, MessageCircle, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { trackGoogleAdsConversion } from "@/lib/gtag";

export type HeroSlide = { src: string; alt: string; label: string; heading: string; accent: string; sub: string };

const SLIDE_MS = 6000;
const ease = [0.22, 1, 0.36, 1] as const;

/* Number that counts up when it scrolls into view */
function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 1.8, ease, onUpdate: setVal });
    return () => c.stop();
  }, [inView, to, reduce]);
  return <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>{val.toFixed(decimals)}{suffix}</span>;
}

/* Words rise in one after another */
function RiseWords({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="inline-block"
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.7, ease, delay: delay + i * 0.06 }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function HeroSlideshow({ slides, whatsappUrl }: { slides: HeroSlide[]; whatsappUrl: string }) {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();
  const touchX = useRef<number | null>(null);
  const go = (n: number, d = n > current ? 1 : -1) => { setDir(d); setCurrent((n + slides.length) % slides.length); };
  const next = () => go(current + 1, 1);
  const prev = () => go(current - 1, -1);

  // Always auto-slide
  useEffect(() => {
    const t = setTimeout(next, SLIDE_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // Preload the next photo so the change is instant
  useEffect(() => {
    const img = new Image();
    img.src = slides[(current + 1) % slides.length].src;
  }, [current, slides]);

  const slide = slides[current];
  const headingWords = slide.heading.split(" ").length;
  // Alternate the slow camera move per slide
  const moves = [
    { from: { scale: 1.18, x: "-2%" }, to: { scale: 1.04, x: "0%" } },
    { from: { scale: 1.04, y: "2%" }, to: { scale: 1.16, y: "0%" } },
    { from: { scale: 1.18, x: "2%" }, to: { scale: 1.04, x: "0%" } },
  ];
  const move = moves[current % moves.length];

  const Bars = ({ className = "" }: { className?: string }) => (
    <div className={`flex gap-1.5 ${className}`}>
      {slides.map((s, i) => (
        <button key={s.label} onClick={() => go(i)} aria-label={`Show slide ${i + 1}: ${s.label}`} aria-current={i === current} className="flex-1 py-2">
          <span className="relative block w-full h-[3px] rounded-full bg-white/45 overflow-hidden">
            {i < current && <span className="absolute inset-0 bg-white" />}
            {i === current && <span key={current} className="absolute inset-y-0 left-0 bg-white mkr-fill" style={{ animationDuration: `${SLIDE_MS}ms` }} />}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <section
      className="relative bg-white md:h-[calc(100svh-4rem)] md:min-h-[620px] md:max-h-[900px] overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Our invisible grill work"
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
    >
      {/* ---------- Photo layer ---------- */}
      <div className="relative h-[58vh] min-h-[340px] md:absolute md:inset-0 md:h-auto overflow-hidden rounded-b-[2rem] md:rounded-none bg-[#e9e5dc]">
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            className="absolute inset-0"
            variants={{
              enter: (d: number) => ({ clipPath: d > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)", zIndex: 2, filter: "brightness(1)" }),
              center: { clipPath: "inset(0 0% 0 0%)", zIndex: 2, filter: "brightness(1)" },
              exit: { zIndex: 1, filter: "brightness(0.8)", transition: { duration: 1.1 } },
            }}
            initial={reduce ? { opacity: 0 } : "enter"}
            animate={reduce ? { opacity: 1 } : "center"}
            exit={reduce ? { opacity: 0 } : "exit"}
            transition={{ clipPath: { duration: 1.1, ease: [0.77, 0, 0.18, 1] }, opacity: { duration: 0.8 }, zIndex: { duration: 0 } }}
          >
            <motion.img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
              width={1600}
              height={1000}
              fetchPriority={current === 0 ? "high" : "auto"}
              initial={reduce ? false : move.from}
              animate={reduce ? undefined : move.to}
              transition={{ duration: SLIDE_MS / 1000 + 2, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Story-style progress (phone) */}
        <div className="absolute top-3 left-4 right-4 z-10 md:hidden drop-shadow"><Bars /></div>

        {/* Slide label chip */}
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4, ease }}
            className="absolute z-10 top-10 left-4 md:top-8 md:left-auto md:right-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md text-[11px] font-bold uppercase tracking-widest text-foreground shadow-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> {slide.label}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* ---------- Glass card with text ---------- */}
      <div className="relative z-10 -mt-16 px-4 pb-8 md:mt-0 md:p-0 md:absolute md:inset-0 md:flex md:items-end">
        <div className="md:w-full md:max-w-7xl md:mx-auto md:px-8 md:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="relative max-w-xl rounded-[1.75rem] bg-white/95 md:bg-white/75 md:backdrop-blur-2xl md:backdrop-saturate-150 border border-white/70 shadow-[0_30px_60px_-25px_rgba(30,25,10,.45)] p-6 sm:p-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[11px] font-bold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" /> <span className="sm:hidden">Bangalore's Most Trusted</span><span className="hidden sm:inline">Bangalore's Most Trusted Invisible Grills</span>
            </div>

            <div className="min-h-[9.5rem] sm:min-h-[11rem]">
              <AnimatePresence mode="wait">
                <motion.div key={current} exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}>
                  <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-[1.12] mb-3">
                    <RiseWords text={slide.heading} />
                    <br />
                    <RiseWords text={slide.accent} className="text-secondary" delay={headingWords * 0.06 + 0.1} />
                  </h1>
                  <motion.p
                    className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease, delay: 0.45 }}
                  >
                    {slide.sub}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link
                href="/contact-us"
                className="btn-shine group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-xl text-sm"
                data-testid="button-hero-quote"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-border text-foreground font-semibold rounded-xl hover:border-[#25D366] hover:-translate-y-0.5 transition-all text-sm"
                data-testid="button-hero-whatsapp"
                onClick={trackGoogleAdsConversion}
              >
                <MessageCircle className="w-4 h-4 text-[#128C7E]" />
                WhatsApp Us
              </a>
            </div>

            <div className="grid grid-cols-3 mt-6 pt-5 border-t border-border/80 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-foreground"><Counter to={2000} suffix="+" /></div>
                <div className="text-[11px] text-muted-foreground">Installations</div>
              </div>
              <div className="border-x border-border/80">
                <div className="text-xl sm:text-2xl font-bold text-foreground inline-flex items-center gap-1"><Counter to={5} decimals={1} /><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /></div>
                <div className="text-[11px] text-muted-foreground">Google Rating</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-foreground"><Counter to={15} suffix=" Yr" /></div>
                <div className="text-[11px] text-muted-foreground">Warranty</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------- Thumbnails + arrows (desktop) ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.5 }}
        className="hidden lg:flex absolute z-20 bottom-10 right-24 items-end gap-3"
      >
        <div className="flex items-end gap-2 p-2 rounded-2xl bg-white/35 backdrop-blur-xl border border-white/50 shadow-2xl">
          {slides.map((s, i) => (
            <button
              key={s.label}
              onClick={() => go(i)}
              aria-label={`Show slide ${i + 1}: ${s.label}`}
              aria-current={i === current}
              className={`relative overflow-hidden rounded-xl transition-all duration-500 ${i === current ? "w-24 h-16 ring-2 ring-white shadow-lg" : "w-12 h-16 opacity-70 hover:opacity-100"}`}
            >
              <img src={s.src} alt="" className="w-full h-full object-cover" loading="lazy" />
              {i === current && (
                <span className="absolute left-0 right-0 bottom-0 h-1 bg-black/20">
                  <span key={current} className="absolute inset-y-0 left-0 bg-secondary mkr-fill" style={{ animationDuration: `${SLIDE_MS}ms` }} />
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={prev} aria-label="Previous slide" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-foreground hover:bg-secondary hover:text-white transition-colors shadow-lg">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} aria-label="Next slide" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-foreground hover:bg-secondary hover:text-white transition-colors shadow-lg">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Big slide number + bars (tablet / small desktop) */}
      <div className="hidden md:flex lg:hidden absolute z-20 top-8 left-8 w-64 drop-shadow"><Bars /></div>
      <div className="hidden lg:block absolute z-10 top-8 left-8 text-white [text-shadow:0_2px_16px_rgba(0,0,0,.35)] tabular-nums">
        <AnimatePresence mode="wait">
          <motion.span key={current} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }} className="text-5xl font-bold">
            {String(current + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
        <span className="text-lg font-semibold opacity-80"> / {String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
