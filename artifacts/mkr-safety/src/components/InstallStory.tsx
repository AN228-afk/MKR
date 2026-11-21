import { Ruler, Wrench, Cable, ShieldCheck } from "lucide-react";
import { Accent } from "./Accent";

const steps = [
  { icon: Ruler, title: "Free site visit", text: "We measure every opening and suggest the right spacing." },
  { icon: Wrench, title: "Channel & anchors", text: "A slim top channel and strong base anchors, fixed neatly." },
  { icon: Cable, title: "Cables tensioned", text: "316 marine-grade cables, tensioned by hand and load-tested." },
  { icon: ShieldCheck, title: "15-year warranty", text: "We clean up, hand over and back it for 15 years." },
];

/** How it works: four simple steps. */
export function InstallStory() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="mkr-eyebrow">How it works</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Safe home <Accent>in 4 steps</Accent></h2>
        </div>
        <ol className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <li key={s.title} className="mkr-card p-5 text-center">
              <span className="mkr-icon mx-auto mb-3"><s.icon className="w-5 h-5" /></span>
              <div className="text-xs font-bold text-secondary mb-1">STEP {i + 1}</div>
              <h3 className="font-semibold text-foreground text-sm sm:text-base">{s.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
