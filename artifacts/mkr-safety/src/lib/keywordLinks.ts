import rules from "@/data/keywordLinks.json";

export type Seg = { text: string; href?: string };
const compiled = (rules as { re: string; href: string }[]).map((r) => ({ re: new RegExp(r.re, "i"), href: r.href }));

/** Links the first match of each keyword (once per page, max 3), never to the page itself. */
export function makeLinker(selfPath: string, max = 3) {
  const used = new Set<string>();
  return (text: string): Seg[] => {
    const out: Seg[] = [];
    let rest = text;
    for (;;) {
      if (used.size >= max) break;
      let best: { i: number; len: number; href: string } | null = null;
      for (const r of compiled) {
        if (used.has(r.href) || r.href === selfPath) continue;
        const m = r.re.exec(rest);
        if (m && (!best || m.index < best.i)) best = { i: m.index, len: m[0].length, href: r.href };
      }
      if (!best) break;
      if (best.i) out.push({ text: rest.slice(0, best.i) });
      out.push({ text: rest.slice(best.i, best.i + best.len), href: best.href });
      used.add(best.href);
      rest = rest.slice(best.i + best.len);
    }
    if (rest) out.push({ text: rest });
    return out;
  };
}
