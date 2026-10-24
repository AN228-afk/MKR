import { useId } from "react";

type LogoProps = {
  /** "light" for light backgrounds (graphite metal), "dark" for dark backgrounds (titanium) */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * MKR Safety Solutions logo: titanium house-and-cables tile, "MKR" in Cinzel
 * capitals and "Safety Solutions" in Playfair italic, on one line.
 * Size it with a text-size class.
 */
export function Logo({ variant = "light", className = "" }: LogoProps) {
  const id = "mkr" + useId().replace(/[^a-zA-Z0-9]/g, "");
  const stops =
    variant === "dark" ? ["#e3e1dc", "#9c9890", "#d6d3cc"] : ["#4a4744", "#8e8a83", "#3a3836"];
  const textMetal =
    variant === "dark"
      ? "linear-gradient(90deg, #f3f1ec, #a9a59d 55%, #e6e3dd)"
      : "linear-gradient(90deg, #2b2a28, #7d7972 55%, #3a3836)";
  const metalText = {
    backgroundImage: textMetal,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  } as const;
  const stroke = `url(#${id})`;

  return (
    <span className={`inline-flex items-center gap-[0.5em] whitespace-nowrap leading-none ${className}`}>
      <svg viewBox="0 0 64 64" className="h-[1.7em] w-[1.7em] flex-shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={stops[0]} />
            <stop offset=".5" stopColor={stops[1]} />
            <stop offset="1" stopColor={stops[2]} />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="60" height="60" rx="15" fill="none" stroke={stroke} strokeWidth="3.4" />
        <path d="M14 31 L32 16 L50 31" fill="none" stroke={stroke} strokeWidth="4.4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="25" y1="30" x2="25" y2="48" stroke={stroke} strokeWidth="2.8" strokeLinecap="round" />
        <line x1="32" y1="24" x2="32" y2="48" stroke={stroke} strokeWidth="2.8" strokeLinecap="round" />
        <line x1="39" y1="30" x2="39" y2="48" stroke={stroke} strokeWidth="2.8" strokeLinecap="round" />
      </svg>
      <span className="inline-flex items-baseline gap-[0.45em]">
        <span style={{ ...metalText, fontFamily: "'Cinzel', serif", fontWeight: 600, letterSpacing: "0.1em", fontSize: "1.1em" }}>MKR</span>
        <span style={{ ...metalText, fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 500, fontSize: "0.98em" }}>
          Safety Solutions
        </span>
      </span>
    </span>
  );
}
