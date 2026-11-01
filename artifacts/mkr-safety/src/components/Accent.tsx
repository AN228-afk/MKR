import type { ReactNode } from "react";

/** Gold italic serif accent for key words in headings (style B). */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="mkr-accent">{children}</em>;
}

/** Puts the last `n` words of a heading in the accent style. */
export function accentTail(text: string, n = 2): ReactNode {
  const words = text.trim().split(/\s+/);
  if (words.length <= n) return <Accent>{text}</Accent>;
  return (
    <>
      {words.slice(0, -n).join(" ")} <Accent>{words.slice(-n).join(" ")}</Accent>
    </>
  );
}
