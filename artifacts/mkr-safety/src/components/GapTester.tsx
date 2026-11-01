import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, MessageCircle } from "lucide-react";
import { Accent } from "./Accent";
import { trackGoogleAdsConversion } from "@/lib/gtag";

/** Approximate sizes (inches) used only for this illustration. */
const ITEMS = [
  { key: "toddler", label: "Toddler", size: 4.5, emoji: "🧒" },
  { key: "cat", label: "Small cat", size: 3, emoji: "🐈" },
  { key: "pigeon", label: "Pigeon", size: 2.5, emoji: "🐦" },
];

const OPTIONS = [
  { gap: 2, name: "2-inch spacing", note: "Pets, pigeons and toddlers" },
  { gap: 4, name: "4-inch spacing", note: "Standard child safety, more open view" },
];

export function GapTester() {
  const [gap, setGap] = useState(2);
  const cables = 9;
  const pxPerIn = 22;
  const blocks = ITEMS.map((it) => ({ ...it, blocked: gap < it.size }));
  const advice =
    gap === 2
      ? "2-inch spacing blocks toddlers, cats and pigeons. Best if you have pets or a pigeon problem."
      : "4-inch spacing keeps toddlers safe with a more open view. Choose 2-inch if you have cats or pigeons.";
  const wa = `https://wa.me/917780114547?text=${encodeURIComponent(`Hi MKR, I'd like invisible grills with about ${gap}-inch cable spacing. Please share a quote.`)}`;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="mkr-eyebrow">Try it yourself</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How close should <Accent>the cables be?</Accent></h2>
          <p className="text-muted-foreground mb-8">We install invisible grills with 2-inch or 4-inch gaps between cables. Tap each one to see who can and can't get through.</p>

          <div role="radiogroup" aria-label="Cable spacing" className="grid grid-cols-2 gap-3">
            {OPTIONS.map((o) => {
              const on = gap === o.gap;
              return (
                <button
                  key={o.gap}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setGap(o.gap)}
                  className={`rounded-2xl border-2 p-4 text-left transition-all duration-300 ${on ? "border-secondary bg-secondary/[0.07] shadow-[0_14px_30px_-18px_rgba(155,111,32,.6)]" : "border-border bg-white hover:border-secondary/40"}`}
                >
                  <div className={`text-3xl font-bold tabular-nums ${on ? "text-secondary" : "text-foreground/70"}`}>{o.gap}″</div>
                  <div className="text-sm font-semibold text-foreground mt-1">{o.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{o.note}</div>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-3 mt-8">
            {blocks.map((b) => (
              <div key={b.key} className={`rounded-2xl border p-3 text-center transition-colors duration-300 ${b.blocked ? "border-[#25D366]/40 bg-[#25D366]/[0.06]" : "border-red-300 bg-red-50"}`}>
                <div className="text-3xl mb-1" aria-hidden="true">{b.emoji}</div>
                <div className="text-sm font-semibold text-foreground">{b.label}</div>
                <div className={`mt-1 inline-flex items-center gap-1 text-xs font-bold ${b.blocked ? "text-[#128C7E]" : "text-red-600"}`}>
                  {b.blocked ? <><Check className="w-3.5 h-3.5" /> Blocked</> : <><X className="w-3.5 h-3.5" /> Can pass</>}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm font-medium text-foreground">{advice}</p>
          <p className="mt-1 text-xs text-muted-foreground">Sizes are approximate and for illustration only.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" onClick={trackGoogleAdsConversion} className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5b] transition-colors">
            <MessageCircle className="w-4 h-4" /> Ask about {gap}″ spacing on WhatsApp
          </a>
        </div>

        {/* Live picture */}
        <div className="relative rounded-[2rem] bg-gradient-to-b from-[#eaf3fb] to-[#f6efe1] border border-border h-[380px] overflow-hidden shadow-[0_30px_60px_-30px_rgba(60,45,10,.35)]">
          <div className="absolute inset-x-0 top-0 h-4 bg-[#c9c3b5]" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-[#e8dcc3] border-t-4 border-[#b9a780]" />
          <div className="absolute inset-0 flex justify-center">
            <div className="relative h-full flex" style={{ gap: `${gap * pxPerIn}px` }}>
              {Array.from({ length: cables }).map((_, i) => (
                <motion.span key={i} layout transition={{ type: "spring", stiffness: 200, damping: 20 }} className="block w-[2px] h-full bg-gradient-to-b from-[#b6bcc4] via-[#8d939b] to-[#b6bcc4]" />
              ))}
            </div>
          </div>
          {/* the 3 testers, sized to scale */}
          <div className="absolute bottom-20 inset-x-0 flex justify-center items-end gap-10">
            {blocks.map((b) => (
              <motion.div
                key={b.key}
                animate={{ y: b.blocked ? 0 : [0, -6, 0] }}
                transition={{ duration: 1.2, repeat: b.blocked ? 0 : Infinity }}
                className="flex flex-col items-center"
              >
                <span
                  className={`rounded-full border-2 flex items-center justify-center text-xl transition-colors ${b.blocked ? "border-[#25D366] bg-white/80" : "border-red-500 bg-red-50/90"}`}
                  style={{ width: b.size * pxPerIn, height: b.size * pxPerIn }}
                  aria-hidden="true"
                >
                  {b.emoji}
                </span>
                <span className="mt-1 text-[11px] font-semibold text-foreground/70">{b.size}″</span>
              </motion.div>
            ))}
          </div>
          <div className="absolute top-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/90 text-xs font-bold text-secondary shadow">Gap: {gap}″</div>
        </div>
      </div>
    </section>
  );
}
