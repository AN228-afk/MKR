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
  { gap: 3, name: "3-inch spacing", note: "Standard child safety, more open view" },
];

export function GapTester() {
  const [gap, setGap] = useState(2);
  const cables = 9;
  const blocks = ITEMS.map((it) => ({ ...it, blocked: gap < it.size }));
  const advice =
    gap === 2
      ? "2-inch spacing blocks toddlers, cats and pigeons. Best if you have pets or a pigeon problem."
      : "3-inch spacing keeps toddlers safe with a more open view. Choose 2-inch if you have cats or pigeons.";
  const wa = `https://wa.me/917780114547?text=${encodeURIComponent(`Hi MKR, I'd like invisible grills with about ${gap}-inch cable spacing. Please share a quote.`)}`;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="mkr-eyebrow">Choose your spacing</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">2-inch or <Accent>3-inch?</Accent></h2>
        </div>
        <div className="mkr-card mkr-nolift p-5 sm:p-8 grid md:grid-cols-[1fr_300px] gap-6 items-center">
          <div>
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
                    className={`rounded-2xl border-2 p-4 text-left transition-all duration-300 ${on ? "border-secondary bg-secondary/[0.07]" : "border-border bg-white hover:border-secondary/40"}`}
                  >
                    <div className={`text-2xl font-bold ${on ? "text-secondary" : "text-foreground/70"}`}>{o.gap}″</div>
                    <div className="text-xs text-muted-foreground mt-1">{o.note}</div>
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {blocks.map((b) => (
                <span key={b.key} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${b.blocked ? "bg-[#25D366]/10 text-[#128C7E]" : "bg-red-50 text-red-600"}`}>
                  <span aria-hidden="true">{b.emoji}</span> {b.label}: {b.blocked ? <><Check className="w-3.5 h-3.5" /> blocked</> : <><X className="w-3.5 h-3.5" /> can pass</>}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground">{advice}</p>
            <a href={wa} target="_blank" rel="noopener noreferrer" onClick={trackGoogleAdsConversion} className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1ebe5b] transition-colors">
              <MessageCircle className="w-4 h-4" /> Ask about {gap}″ spacing
            </a>
          </div>

          {/* Small live picture */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#eaf3fb] to-[#f6efe1] border border-border h-[220px] overflow-hidden" aria-hidden="true">
            <div className="absolute inset-x-0 top-0 h-3 bg-[#c9c3b5]" />
            <div className="absolute inset-x-0 bottom-0 h-10 bg-[#e8dcc3] border-t-4 border-[#b9a780]" />
            <div className="absolute inset-0 flex justify-center">
              <div className="relative h-full flex" style={{ gap: `${gap * 16}px` }}>
                {Array.from({ length: cables }).map((_, i) => (
                  <motion.span key={i} layout transition={{ type: "spring", stiffness: 200, damping: 20 }} className="block w-[2px] h-full bg-[#9aa0a8]" />
                ))}
              </div>
            </div>
            <div className="absolute top-5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/90 text-xs font-bold text-secondary shadow">Gap: {gap}″</div>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-3">Sizes are approximate and for illustration only.</p>
      </div>
    </section>
  );
}
