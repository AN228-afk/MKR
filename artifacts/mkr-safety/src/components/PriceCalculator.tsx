import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { FadeUp } from "./Animated";
import { trackGoogleAdsConversion } from "@/lib/gtag";

const SPACE_TYPES = [
  { id: "balcony", label: "Balcony", icon: "🏠", min3: 90, max3: 130, min25: 110, max25: 150 },
  { id: "window", label: "Window", icon: "🪟", min3: 90, max3: 125, min25: 108, max25: 145 },
  { id: "staircase", label: "Staircase", icon: "🪜", min3: 95, max3: 135, min25: 112, max25: 150 },
  { id: "terrace", label: "Terrace", icon: "🌿", min3: 90, max3: 130, min25: 110, max25: 148 },
  { id: "villa", label: "Villa", icon: "🏡", min3: 95, max3: 140, min25: 115, max25: 150 },
  { id: "child", label: "Child Safety", icon: "👶", min3: 95, max3: 135, min25: 115, max25: 150 },
];

function fmt(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

export function PriceCalculator() {
  const [spaceId, setSpaceId] = useState("balcony");
  const [cable, setCable] = useState<"3mm" | "2.5mm">("3mm");
  const [area, setArea] = useState(100);

  const space = SPACE_TYPES.find((s) => s.id === spaceId)!;
  const minRate = cable === "3mm" ? space.min3 : space.min25;
  const maxRate = cable === "3mm" ? space.max3 : space.max25;
  const minTotal = minRate * area;
  const maxTotal = maxRate * area;

  const waText = encodeURIComponent(
    `Hi, I need a quote for ${space.label} invisible grills in Bangalore.\nCable: ${cable} spacing\nApprox area: ${area} sq ft\nEstimate: ${fmt(minTotal)}–${fmt(maxTotal)}\nPlease confirm pricing.`
  );

  return (
    <section className="py-16 bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-xs font-semibold mb-4 uppercase tracking-wide">
            <Calculator className="w-3 h-3" /> Instant Price Calculator
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-2">
            Get Your Quote in Seconds
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Select your space and cable type — get an instant estimate. All prices include materials and installation.
          </p>
        </FadeUp>

        <div className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-6 sm:p-8">
          {/* Step 1 — Space Type */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wide mb-3">
              1. Select Your Space
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {SPACE_TYPES.map((s) => (
                <motion.button
                  key={s.id}
                  onClick={() => setSpaceId(s.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border transition-all text-sm font-medium ${spaceId === s.id
                      ? "bg-secondary text-secondary-foreground border-secondary shadow-lg"
                      : "border-white/20 text-primary-foreground/80 hover:border-secondary/50"
                    }`}
                >
                  <span className="text-xl">{s.icon}</span>
                  <span className="text-xs leading-tight text-center">{s.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Step 2 — Cable Thickness */}
          <div className="mb-6">
            <p className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wide mb-3">
              2. Cable Thickness
            </p>
            <div className="grid grid-cols-2 gap-3">
              {(["3mm", "2.5mm"] as const).map((c) => (
                <motion.button
                  key={c}
                  onClick={() => setCable(c)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all ${cable === c
                      ? "bg-secondary text-secondary-foreground border-secondary"
                      : "border-white/20 text-primary-foreground hover:border-secondary/50"
                    }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${cable === c ? "border-secondary-foreground bg-secondary-foreground/20" : "border-white/40"}`}>
                    {cable === c && <div className="w-2 h-2 rounded-full bg-secondary-foreground" />}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{c} Cables</div>
                    <div className={`text-xs mt-0.5 ${cable === c ? "text-secondary-foreground/80" : "text-primary-foreground/60"}`}>
                      {c === "3mm" ? "Standard — best for balconies & windows" : "Ultra-fine — child & pet safety grade"}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Step 3 — Area */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wide">
                3. Approximate Area
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={area}
                  min={10}
                  max={1000}
                  onChange={(e) => setArea(Math.max(10, Math.min(1000, Number(e.target.value))))}
                  className="w-20 text-center bg-white/10 border border-white/20 rounded-lg px-2 py-1.5 text-primary-foreground text-sm font-semibold focus:outline-none focus:border-secondary"
                />
                <span className="text-primary-foreground/70 text-sm">sq ft</span>
              </div>
            </div>
            <input
              type="range"
              min={10}
              max={500}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer accent-yellow-500"
              style={{ background: `linear-gradient(to right, hsl(44 55% 54%) ${((area - 10) / 490) * 100}%, rgba(255,255,255,0.2) ${((area - 10) / 490) * 100}%)` }}
            />
            <div className="flex justify-between text-xs text-primary-foreground/50 mt-1">
              <span>10 sq ft</span>
              <span>500 sq ft</span>
            </div>
          </div>

          {/* Result */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${spaceId}-${cable}-${Math.round(area / 10)}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-5 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
                    Estimated Price for {space.label} · {cable} · {area} sq ft
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-bold text-primary">{fmt(minTotal)}</span>
                    <span className="text-muted-foreground text-lg font-medium">–</span>
                    <span className="text-3xl sm:text-4xl font-bold text-primary">{fmt(maxTotal)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    ₹{minRate}–₹{maxRate}/sq ft · includes materials + installation · 10-year warranty
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    {["Free site visit", "No hidden charges", "Same-day quote"].map((t) => (
                      <span key={t} className="inline-flex items-center gap-1 text-xs text-foreground">
                        <CheckCircle className="w-3 h-3 text-secondary" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:min-w-44">
                  <motion.a
                    href={`https://wa.me/917780114547?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackGoogleAdsConversion}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white font-semibold rounded-xl text-sm hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> Confirm on WhatsApp
                  </motion.a>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/contact-us"
                      onClick={trackGoogleAdsConversion}
                      className="flex items-center justify-center gap-2 px-5 py-3 border border-primary text-primary font-semibold rounded-xl text-sm hover:bg-primary/5 transition-colors"
                    >
                      Book Free Site Visit <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
