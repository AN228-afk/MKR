// Prerender blog posts to static HTML so Google sees the full article

import fs from "fs";
import path from "path";

// keyword → page internal links (same rules as src/lib/keywordLinks.ts)
const KW = JSON.parse(fs.readFileSync(new URL("./src/data/keywordLinks.json", import.meta.url), "utf8")).map((r) => ({ re: new RegExp(r.re, "i"), href: r.href }));
function makeLinker(self, max = 3) {
  const used = new Set();
  return (text) => {
    const out = []; let rest = text;
    while (used.size < max) {
      let best = null;
      for (const r of KW) {
        if (used.has(r.href) || r.href === self) continue;
        const m = r.re.exec(rest);
        if (m && (!best || m.index < best.i)) best = { i: m.index, len: m[0].length, href: r.href };
      }
      if (!best) break;
      if (best.i) out.push({ text: rest.slice(0, best.i) });
      out.push({ text: rest.slice(best.i, best.i + best.len), href: best.href });
      used.add(best.href); rest = rest.slice(best.i + best.len);
    }
    if (rest) out.push({ text: rest });
    return out;
  };
}
// (title, description, canonical, headings, text) without running JavaScript.
//
// Runs after `vite build`. For every post in src/pages/blog/index.tsx it writes
// dist/public/blog/<slug>.html, a copy of the built index.html with the post's
// SEO tags in <head> and the article text inside <div id="root">.
// Firebase "cleanUrls" serves /blog/<slug> from blog/<slug>.html; React then
// loads and takes over the page as usual (createRoot replaces #root content).


const SITE = "https://mkrsafetysolutions.com";
const distDir = path.resolve("dist/public");
const indexPath = path.join(distDir, "index.html");
const postsSrc = fs.readFileSync(path.resolve("src/pages/blog/index.tsx"), "utf-8");

// Pull the `posts` object literal out of the TSX file and evaluate it as plain JS.
const startMarker = "const posts: Record<string, BlogPostData> = ";
const start = postsSrc.indexOf(startMarker);
const end = postsSrc.indexOf("\n};\n", start);
if (start === -1 || end === -1) {
  console.error("prerender-blog: could not find posts object — skipping");
  process.exit(0);
}
const objText = postsSrc.slice(start + startMarker.length, end + 2);
const posts = new Function(`return (${objText});`)();

const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const template = fs.readFileSync(indexPath, "utf-8");

// Remove tags from the template head that each page will set itself.
function stripHeadTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name="description"[\s\S]*?>/i, "")
    .replace(/<meta\s+property="og:(title|description|type|url)"[\s\S]*?>/gi, "")
    .replace(/<meta\s+name="twitter:(title|description)"[\s\S]*?>/gi, "")
    .replace(/<link\s+rel="canonical"[\s\S]*?>/gi, "");
}

function headTags({ title, desc, url, type, schema }) {
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(desc)}" />`,
    schema ? `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>` : "",
  ].join("\n  ");
}

function render(html, head, body) {
  return stripHeadTags(html)
    .replace("</head>", `  ${head}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

const list = Object.values(posts).sort((a, b) => (a.date < b.date ? 1 : -1));
fs.mkdirSync(path.join(distDir, "blog"), { recursive: true });

for (const p of list) {
  const url = `${SITE}/blog/${p.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.seoDesc,
    datePublished: p.date,
    author: { "@type": "Organization", name: "MKR Safety Solutions" },
    publisher: { "@type": "Organization", name: "MKR Safety Solutions", url: SITE },
    mainEntityOfPage: url,
  };
  const link = makeLinker(`/blog/${p.slug}`);
  const sections = p.content
    .map((s) => `${s.heading ? `<h2>${esc(s.heading)}</h2>` : ""}<p>${link(s.body).map((g) => (g.href ? `<a href="${g.href}">${esc(g.text)}</a>` : esc(g.text))).join("")}</p>`)
    .join("\n");
  const related = (p.relatedServices || [])
    .map((r) => `<li><a href="${esc(r.href)}">${esc(r.label)}</a></li>`)
    .join("");
  const others = list
    .filter((o) => o.slug !== p.slug)
    .slice(0, 5)
    .map((o) => `<li><a href="/blog/${o.slug}">${esc(o.title)}</a></li>`)
    .join("");
  const body = `<main><nav><a href="/">Home</a> › <a href="/blog">Blog</a></nav>
<article><h1>${esc(p.title)}</h1><p>${esc(p.readTime)} · ${esc(p.date)}</p>
${sections}</article>
<section><h2>Related services</h2><ul>${related}</ul></section>
<section><h2>More articles</h2><ul>${others}</ul></section></main>`;
  const html = render(
    template,
    headTags({ title: p.seoTitle || p.title, desc: p.seoDesc, url, type: "article", schema }),
    body,
  );
  fs.writeFileSync(path.join(distDir, "blog", `${p.slug}.html`), html);
}

// Blog listing page (/blog) with links to every post, so Google can find them all.
const listBody = `<main><h1>Invisible Grill Blog — MKR Safety Solutions</h1><ul>${list
  .map((p) => `<li><a href="/blog/${p.slug}">${esc(p.title)}</a> — ${esc(p.date)}</li>`)
  .join("\n")}</ul></main>`;
fs.writeFileSync(
  path.join(distDir, "blog.html"),
  render(
    template,
    headTags({
      title: "Invisible Grill Blog | Tips & Guides | MKR Safety Solutions",
      desc: "Guides on invisible grills, balcony safety, child and pet safety, costs and maintenance for Bangalore homes, from MKR Safety Solutions.",
      url: `${SITE}/blog`,
      type: "website",
    }),
    listBody,
  ),
);

console.log(`prerender-blog: wrote ${list.length} blog pages + blog listing`);
