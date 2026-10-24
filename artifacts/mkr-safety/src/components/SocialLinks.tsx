import { Instagram, Youtube } from "lucide-react";
import { INSTAGRAM_URL, YOUTUBE_URL } from "@/lib/social";

export function SocialLinks({ className = "" }: { className?: string }) {
  const items = [
    { href: INSTAGRAM_URL, label: "MKR Safety Solutions on Instagram", Icon: Instagram },
    { href: YOUTUBE_URL, label: "MKR Safety Solutions on YouTube", Icon: Youtube },
  ].filter((i) => i.href);
  if (items.length === 0) return null;
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-border text-foreground hover:bg-secondary hover:border-secondary hover:text-white transition-colors"
        >
          <Icon className="w-5 h-5" strokeWidth={1.6} />
        </a>
      ))}
    </div>
  );
}
