import { useId } from "react";

export type PremiumIconName = "shield" | "load" | "eye" | "visit" | "rupee" | "award" | "home" | "star" | "clock";

/**
 * Custom two-tone icons with soft gradients and a highlight, for the feature cards.
 * Blue matches the site buttons; the rating star is gold.
 */
export function PremiumIcon({ name, className = "w-16 h-16" }: { name: PremiumIconName; className?: string }) {
  const uid = "pi" + useId().replace(/[^a-zA-Z0-9]/g, "");
  const blue = `url(#${uid}b)`;
  const soft = `url(#${uid}s)`;
  const gold = `url(#${uid}g)`;

  return (
    <svg viewBox="0 0 64 64" className={`${className} drop-shadow-[0_10px_14px_rgba(42,138,240,.28)]`} aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}b`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6cb6ff" />
          <stop offset="1" stopColor="#1f78e0" />
        </linearGradient>
        <linearGradient id={`${uid}s`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4f9ff" />
          <stop offset="1" stopColor="#d6e8ff" />
        </linearGradient>
        <linearGradient id={`${uid}g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd666" />
          <stop offset="1" stopColor="#f0a500" />
        </linearGradient>
      </defs>

      {name === "shield" && (
        <g>
          <path d="M32 4 L54 12 V30 C54 44 44 54 32 60 C20 54 10 44 10 30 V12 Z" fill={blue} />
          <path d="M21 32 L29 40 L44 24" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}

      {name === "load" && (
        <g>
          <path d="M23 18 a9 9 0 0 1 18 0" fill="none" stroke={blue} strokeWidth="5" strokeLinecap="round" />
          <path d="M16 20 H48 L56 56 H8 Z" fill={blue} strokeLinejoin="round" />
          <text x="32" y="47" textAnchor="middle" fontFamily="-apple-system, BlinkMacSystemFont, 'Jost', sans-serif" fontSize="13" fontWeight="700" fill="#fff">250</text>
        </g>
      )}

      {name === "eye" && (
        <g>
          <path d="M4 32 C14 16 50 16 60 32 C50 48 14 48 4 32 Z" fill={soft} stroke="#bcd9ff" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="12" fill={blue} />
          <circle cx="32" cy="32" r="5" fill="#0d3f7a" />
          <circle cx="36" cy="27" r="3.2" fill="#fff" />
        </g>
      )}

      {name === "visit" && (
        <g>
          <path d="M32 60 C32 60 10 38 10 24 a22 22 0 0 1 44 0 C54 38 32 60 32 60 Z" fill={blue} />
          <path d="M20 27 L32 17 L44 27 V38 H20 Z" fill="#fff" strokeLinejoin="round" />
          <rect x="29" y="30" width="6" height="8" rx="1" fill="#2a8af0" />
        </g>
      )}

      {name === "rupee" && (
        <g>
          <circle cx="32" cy="32" r="27" fill={blue} />
          <circle cx="32" cy="32" r="21" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="1.5" />
          <text x="32" y="42" textAnchor="middle" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" fontSize="28" fontWeight="700" fill="#fff">₹</text>
        </g>
      )}

      {name === "award" && (
        <g>
          <path d="M20 34 L12 58 L22 54 L27 62 L32 40 Z" fill="#9ccaff" />
          <path d="M44 34 L52 58 L42 54 L37 62 L32 40 Z" fill="#9ccaff" />
          <circle cx="32" cy="26" r="21" fill={blue} />
          <path d="M32 14 L35.5 21.5 L43.5 22.3 L37.5 27.7 L39.2 35.6 L32 31.6 L24.8 35.6 L26.5 27.7 L20.5 22.3 L28.5 21.5 Z" fill="#fff" />
        </g>
      )}

      {name === "home" && (
        <g>
          <path d="M6 30 L32 8 L58 30 V56 a3 3 0 0 1 -3 3 H9 a3 3 0 0 1 -3 -3 Z" fill={blue} strokeLinejoin="round" />
          <line x1="22" y1="34" x2="22" y2="59" stroke="#fff" strokeOpacity=".9" strokeWidth="2" />
          <line x1="32" y1="28" x2="32" y2="59" stroke="#fff" strokeOpacity=".9" strokeWidth="2" />
          <line x1="42" y1="34" x2="42" y2="59" stroke="#fff" strokeOpacity=".9" strokeWidth="2" />
        </g>
      )}

      {name === "star" && (
        <g className="drop-shadow-[0_8px_10px_rgba(240,165,0,.3)]">
          <path d="M32 4 L40.2 20.8 L58.6 23.4 L45.3 36.4 L48.5 54.8 L32 46 L15.5 54.8 L18.7 36.4 L5.4 23.4 L23.8 20.8 Z" fill={gold} strokeLinejoin="round" />
        </g>
      )}

      {name === "clock" && (
        <g>
          <circle cx="32" cy="32" r="27" fill={blue} />
          <circle cx="32" cy="32" r="21" fill={soft} />
          <path d="M32 19 V32 L41 38" fill="none" stroke="#1f78e0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="32" cy="32" r="3" fill="#1f78e0" />
        </g>
      )}
    </svg>
  );
}
