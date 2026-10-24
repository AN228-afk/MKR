type LogoProps = {
  /** "light" for white/light backgrounds, "dark" for photos and dark/blue backgrounds */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * MKR Safety Solutions logo (bold two-colour style): blue house with invisible-grill
 * cables, "MKR" in navy + "Safety" in blue, and "SOLUTIONS" underneath.
 * Size it with a text-size class.
 */
export function Logo({ variant = "light", className = "" }: LogoProps) {
  const roof = variant === "dark" ? "#ffffff" : "#2a8af0";
  const cable = variant === "dark" ? "#cfe6ff" : "#0d1b3d";
  const mkr = variant === "dark" ? "#ffffff" : "#0d1b3d";
  const safety = variant === "dark" ? "#cfe6ff" : "#2a8af0";
  const tag = variant === "dark" ? "#ffffff" : "#0d1b3d";

  return (
    <span className={`inline-flex items-center gap-[0.35em] whitespace-nowrap leading-none ${className}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
      <svg viewBox="0 0 64 64" className="h-[1.9em] w-[1.9em] flex-shrink-0" aria-hidden="true">
        <path d="M6 30 L32 8 L58 30" fill="none" stroke={roof} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 34 V54 Q13 59 18 59 H46 Q51 59 51 54 V34" fill="none" stroke={roof} strokeWidth="5.5" strokeLinecap="round" />
        <line x1="24" y1="30" x2="24" y2="50" stroke={cable} strokeWidth="3.6" strokeLinecap="round" />
        <line x1="32" y1="23" x2="32" y2="50" stroke={cable} strokeWidth="3.6" strokeLinecap="round" />
        <line x1="40" y1="30" x2="40" y2="50" stroke={cable} strokeWidth="3.6" strokeLinecap="round" />
        <circle cx="56" cy="44" r="4.5" fill={cable} />
      </svg>
      <span className="inline-flex flex-col">
        <span className="inline-flex items-baseline gap-[0.22em] font-extrabold tracking-[-0.02em] text-[1.15em]">
          <span style={{ color: mkr }}>MKR</span>
          <span style={{ color: safety }}>Safety</span>
        </span>
        <span className="flex items-center gap-[0.5em] mt-[0.28em] text-[0.32em] font-semibold tracking-[0.42em]" style={{ color: tag }}>
          <span className="flex-grow h-[1.5px] opacity-50" style={{ background: tag }} />
          SOLUTIONS
        </span>
      </span>
    </span>
  );
}
