import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
import { Ruler, Wrench, Cable, ShieldCheck } from "lucide-react";
import { Accent } from "./Accent";

const steps = [
  { icon: Ruler, title: "Free site visit & measurement", text: "We visit your home, measure every opening and suggest the right cable spacing for kids, pets or birds." },
  { icon: Wrench, title: "Top channel & anchors", text: "A slim aluminium channel goes up top and strong anchors are fixed at the base. No breaking walls, no mess." },
  { icon: Cable, title: "Cables tensioned by hand", text: "316-grade marine steel cables are threaded and tensioned one by one, then load-tested up to 400 kg." },
  { icon: ShieldCheck, title: "Safe, open and backed for 15 years", text: "Your view stays, your family stays safe. Every installation comes with a 15-year warranty." },
];

const CABLES = Array.from({ length: 15 }, (_, i) => 70 + i * 18.5);

function range(p: MotionValue<number>, a: number, b: number) {
  return useTransform(p, [a, b], [0, 1], { clamp: true });
}

export function InstallStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(p, "change", (v) => setActive(Math.min(3, Math.floor(v * 4.2))));

  const measure = range(p, 0.02, 0.18);
  const measureOut = useTransform(p, [0.3, 0.4], [1, 0.25]);
  const channel = range(p, 0.24, 0.38);
  const anchors = range(p, 0.32, 0.44);
  const done = range(p, 0.8, 0.92);
  const barW = useTransform(p, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} data-no-reveal className="relative h-[320vh] bg-muted">
      <div className="sticky top-16 h-[calc(100svh-4rem)] flex items-center overflow-hidden">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-14 items-center">
          {/* Drawing */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-[2rem] bg-white border border-border shadow-[0_30px_60px_-30px_rgba(60,45,10,.35)] p-3 sm:p-6">
              <svg viewBox="0 0 400 300" className="w-full h-auto max-h-[32vh] lg:max-h-none" role="img" aria-label="Drawing of a balcony getting invisible grills installed">
                {/* sky + sun */}
                <rect x="40" y="30" width="320" height="210" rx="6" fill="#f6efe1" />
                <motion.circle cx="300" cy="80" r="22" fill="#f1cf7e" style={{ opacity: done }} />
                {/* city skyline */}
                <g fill="#e6dcc6">
                  <rect x="60" y="150" width="28" height="90" /><rect x="94" y="125" width="22" height="115" /><rect x="122" y="160" width="34" height="80" />
                  <rect x="230" y="135" width="26" height="105" /><rect x="262" y="155" width="36" height="85" /><rect x="304" y="140" width="24" height="100" />
                </g>
                {/* ceiling, walls, floor, railing */}
                <rect x="20" y="16" width="360" height="16" rx="3" fill="#d9cdb4" />
                <rect x="20" y="16" width="20" height="250" fill="#e4d9c2" />
                <rect x="360" y="16" width="20" height="250" fill="#e4d9c2" />
                <rect x="20" y="250" width="360" height="20" rx="3" fill="#cdbf9f" />
                <rect x="40" y="200" width="320" height="50" fill="#ffffff" fillOpacity="0.55" stroke="#c9b98f" strokeWidth="1.5" />
                <rect x="40" y="196" width="320" height="6" rx="3" fill="#b9a780" />

                {/* step 1: measurement */}
                <motion.g style={{ opacity: useTransform([measure, measureOut], ([a, b]: number[]) => a * b) }} stroke="#9b6f20" strokeWidth="1.4" fill="none">
                  <line x1="48" y1="44" x2="352" y2="44" strokeDasharray="5 4" />
                  <line x1="48" y1="38" x2="48" y2="50" /><line x1="352" y1="38" x2="352" y2="50" />
                  <line x1="345" y1="52" x2="345" y2="194" strokeDasharray="5 4" />
                  <line x1="339" y1="52" x2="351" y2="52" /><line x1="339" y1="194" x2="351" y2="194" />
                  <text x="200" y="62" textAnchor="middle" fill="#9b6f20" stroke="none" fontSize="12" fontWeight="700">W 10 ft</text>
                  <text x="330" y="128" textAnchor="end" fill="#9b6f20" stroke="none" fontSize="12" fontWeight="700">H 6 ft</text>
                </motion.g>

                {/* step 2: top channel + anchors */}
                <motion.rect x="50" y="34" width="300" height="7" rx="2" fill="#8d8f94" style={{ scaleX: channel, transformOrigin: "50px 37px" }} />
                <motion.g style={{ opacity: anchors }} fill="#6f7277">
                  {CABLES.map((x) => <circle key={x} cx={x} cy="196" r="2.6" />)}
                </motion.g>

                {/* step 3: cables draw down one by one */}
                {CABLES.map((x, i) => (
                  <CableLine key={x} x={x} p={p} start={0.46 + i * 0.016} />
                ))}

                {/* step 4: family + check */}
                <motion.g style={{ opacity: done }}>
                  <circle cx="120" cy="214" r="9" fill="#3b3f46" />
                  <rect x="111" y="223" width="18" height="27" rx="7" fill="#9b6f20" />
                  <circle cx="148" cy="226" r="6.5" fill="#3b3f46" />
                  <rect x="141.5" y="232" width="13" height="18" rx="5" fill="#c99a3d" />
                  <circle cx="200" cy="120" r="26" fill="#9b6f20" />
                  <path d="M188 120 l8 8 l16 -17" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.g>
              </svg>
              <div className="mt-3 h-1 rounded-full bg-border overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-secondary to-[hsl(40_62%_58%)]" style={{ width: barW }} />
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="order-2 lg:order-1">
            <div className="hidden sm:block"><span className="mkr-eyebrow">How it works</span></div>
            <h2 className="text-xl sm:text-4xl font-bold text-foreground mb-3 lg:mb-8">From visit to safe <Accent>in 4 steps</Accent></h2>
            <ol className="space-y-1 sm:space-y-2 lg:space-y-4">
              {steps.map((s, i) => {
                const on = i === active, past = i < active;
                return (
                  <li key={s.title} className={`flex gap-3 sm:gap-4 rounded-2xl p-2 sm:p-3 lg:p-4 transition-all duration-500 ${on ? "bg-white shadow-[0_14px_30px_-18px_rgba(60,45,10,.4)] border border-border" : "border border-transparent"}`}>
                    <span className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-500 ${on || past ? "mkr-icon !w-10 !h-10" : "bg-white border border-border text-muted-foreground"}`}>
                      <s.icon className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <div className={`font-semibold transition-colors ${on ? "text-foreground" : "text-foreground/60"}`}>
                        <span className="text-secondary mr-1.5">0{i + 1}</span>{s.title}
                      </div>
                      <motion.p
                        initial={false}
                        animate={{ height: on ? "auto" : 0, opacity: on ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-sm text-muted-foreground overflow-hidden"
                      >
                        <span className="block pt-1">{s.text}</span>
                      </motion.p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function CableLine({ x, p, start }: { x: number; p: MotionValue<number>; start: number }) {
  const len = useTransform(p, [start, start + 0.06], [0, 1], { clamp: true });
  return (
    <motion.line x1={x} y1="41" x2={x} y2="196" stroke="#9aa0a8" strokeWidth="1.3" style={{ pathLength: len }} />
  );
}
