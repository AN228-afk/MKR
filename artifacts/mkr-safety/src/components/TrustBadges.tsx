import { Shield, Star, Clock, Wrench, Award } from "lucide-react";

const badges = [
  { icon: Shield, label: "1000+ Installs", sub: "Completed Projects" },
  { icon: Star, label: "4.9/5 Rating", sub: "Google Reviews" },
  { icon: Clock, label: "8+ Years", sub: "Experience" },
  { icon: Wrench, label: "Free Site Visit", sub: "No Obligation" },
  { icon: Award, label: "10-Year Warranty", sub: "On All Installations" },
];

export function TrustBadges({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`py-8 ${dark ? "bg-primary" : "bg-muted"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {badges.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2 py-4">
              <Icon className={`w-6 h-6 ${dark ? "text-secondary" : "text-secondary"}`} />
              <div>
                <div className={`font-bold text-base ${dark ? "text-primary-foreground" : "text-foreground"}`}>{label}</div>
                <div className={`text-xs ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
