import { Shield, Star, Clock, Wrench, Award } from "lucide-react";
import { StaggerList, StaggerItem } from "./Animated";

const badges = [
  { icon: Shield, label: "2000+ Installs", sub: "Completed Projects" },
  { icon: Star, label: "5.0/5 Rating", sub: "Google Reviews" },
  { icon: Clock, label: "8+ Years", sub: "Experience" },
  { icon: Wrench, label: "Free Site Visit", sub: "No Obligation" },
  { icon: Award, label: "15-Year Warranty", sub: "On All Installations" },
];

export function TrustBadges({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`py-8 sm:py-12 ${dark ? "bg-primary" : "bg-muted"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerList className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {badges.map(({ icon: Icon, label, sub }, i) => (
            <StaggerItem key={label} className={i === badges.length - 1 ? "col-span-2 lg:col-span-1" : ""}>
              <div className="h-full flex items-center gap-3 sm:flex-col sm:text-center sm:gap-3 bg-white border border-border rounded-2xl px-3.5 py-4 sm:p-6 shadow-[0_6px_20px_-12px_rgba(120,90,30,.35)]">
                <span className="w-11 h-11 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-[#f7e7c6] to-[#e6c98d] text-secondary">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.8} />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-[0.95rem] sm:text-base leading-tight text-foreground">{label}</span>
                  <span className="block text-xs text-muted-foreground mt-0.5">{sub}</span>
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </div>
  );
}
