import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence, animate, useInView, useReducedMotion } from "framer-motion";
import { Shield, ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
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
  const reduce = useReducedMotion();
  const touchX = useRef<number | null>(null);
  const go = (n: number) => setCurrent((n + slides.length) % slides.length);

  // Always auto-slide (also on phones and with reduced motion)
  useEffect(() => {
    const t = setTimeout(() => go(current + 1), SLIDE_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const slide = slides[current];
  const headingWords = slide.heading.split(" ").length;

  return (
    <section
      className="relative md:min-h-[88vh] flex flex-col md:flex-row md:items-center overflow-hidden bg-white md:bg-[#e9e5dc]"
      aria-roledescription="carousel"
      aria-label="Our work"
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 45) go(current + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      {/* Photos: cross-fade with a slow zoom */}
      <div className="relative h-[44vh] min-h-[270px] md:absolute md:inset-0 md:h-auto overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2, ease } }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease } }}
          >
            <motion.img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
              width={1600}
              height={1000}
              fetchPriority={current === 0 ? "high" : "auto"}
              initial={{ scale: reduce ? 1 : 1.14 }}
              animate={{ scale: 1 }}
              transition={{ duration: SLIDE_MS / 1000 + 1.5, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent md:hidden" />

        {/* Slide controls */}
        <div className="absolute z-20 left-4 right-4 bottom-4 md:left-8 lg:left-[max(2rem,calc((100%-80rem)/2+2rem))] md:right-auto md:bottom-8 flex items-center gap-3">
          <span className="text-xs font-semibold tracking-widest text-foreground bg-white/85 backdrop-blur px-2.5 py-1.5 rounded-full tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <div className="flex gap-1.5 flex-1 md:flex-none md:w-64">
            {slides.map((s, i) => (
              <button
                key={s.label}
                onClick={() => go(i)}
                aria-label={`Show slide ${i + 1}: ${s.label}`}
                aria-current={i === current}
                className="flex-1 h-6 flex items-center"
              >
                <span className="relative block w-full h-[3px] rounded-full bg-white/60 overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,.06)]">
                  {i < current && <span className="absolute inset-0 bg-secondary" />}
                  {i === current && (
                    <span
                      key={current}
                      className="absolute inset-y-0 left-0 bg-secondary mkr-fill"
                      style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: "running" }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
          <button onClick={() => go(current - 1)} aria-label="Previous slide" className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white/90 text-foreground hover:bg-secondary hover:text-white transition-colors shadow">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => go(current + 1)} aria-label="Next slide" className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white/90 text-foreground hover:bg-secondary hover:text-white transition-colors shadow">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slide label */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4, ease }}
            className="inline-block px-4 py-1.5 bg-secondary/90 text-secondary-foreground text-xs font-bold rounded-full uppercase tracking-widest shadow"
          >
            {slide.label}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Text + form */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-2 pb-10 md:pt-20 md:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="md:[text-shadow:0_1px_18px_rgba(255,255,255,.9),0_0_2px_rgba(255,255,255,.6)]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 border border-secondary/30 rounded-full text-secondary text-xs font-semibold mb-5 uppercase tracking-wider [text-shadow:none]"
          >
            <Shield className="w-3 h-3" /> <span className="sm:hidden">Bangalore's Most Trusted</span><span className="hidden sm:inline">Bangalore's Most Trusted Invisible Grill Company</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={current} exit={{ opacity: 0, y: -12, transition: { duration: 0.35 } }}>
              <h1 className="text-3xl sm:text-4xl lg:text-[3.4rem] font-bold text-foreground leading-[1.12] mb-4">
                <RiseWords text={slide.heading} />
                <br />
                <RiseWords text={slide.accent} className="text-secondary" delay={headingWords * 0.06 + 0.1} />
              </h1>
              <motion.p
                className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-7 max-w-lg"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.45 }}
              >
                {slide.sub}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 [text-shadow:none]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
          >
            <Link
              href="/contact-us"
              className="btn-shine group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-lg text-sm"
              data-testid="button-hero-quote"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/85 border border-foreground/15 text-foreground font-semibold rounded-lg hover:bg-white hover:-translate-y-0.5 transition-all text-sm"
              data-testid="button-hero-whatsapp"
              onClick={trackGoogleAdsConversion}
            >
              <MessageCircle className="w-4 h-4 text-green-700" />
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-7 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div>
              <div className="text-2xl font-bold text-secondary"><Counter to={2000} suffix="+" /></div>
              <div className="text-xs text-foreground/70">Installations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary"><Counter to={5} decimals={1} suffix="★" /></div>
              <div className="text-xs text-foreground/70">Google Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary"><Counter to={15} suffix=" Yr" /></div>
              <div className="text-xs text-foreground/70">Warranty</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          className="hidden lg:block"
        >
          <div className="mkr-nolift bg-white/95 border border-border shadow-2xl rounded-2xl p-6">
            <InquiryForm title="Book Free Site Visit" compact />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
