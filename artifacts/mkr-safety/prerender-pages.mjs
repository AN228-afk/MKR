// Prerender the main (non-blog) pages to static HTML so Google sees each page's
// own title, description, canonical URL and main text without running JavaScript.
//
// Runs after `vite build` (and after prerender-blog.mjs). For every route it writes
// dist/public/<route>.html (and index.html for "/"). Firebase "cleanUrls" serves
// /pricing from pricing.html, etc. React then loads and replaces #root as usual.
// The untouched SPA shell is saved as app.html and used for unknown URLs.

import fs from "fs";
import path from "path";

const SITE = "https://mkrsafetysolutions.com";
const distDir = path.resolve(process.env.PRERENDER_DIST || "dist/public");
const src = (p) => fs.readFileSync(path.resolve("src", p), "utf-8");

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Evaluate an object literal from a .tsx file. Unknown identifiers (image imports etc.) become "".
function evalObject(text) {
  const scope = new Proxy({}, { has: () => true, get: (_, k) => (k === Symbol.unscopables ? undefined : "") });
  return new Function("scope", `with (scope) { return (${text}); }`)(scope);
}
function sliceObject(file, marker) {
  const s = file.indexOf(marker);
  if (s === -1) return null;
  const start = s + marker.length;
  const end = file.indexOf("\n};", start);
  return end === -1 ? null : file.slice(start, end + 2);
}

// Pull plain text out of JSX: drop {expressions} and tags, collapse spaces.
const jsxText = (s) =>
  s.replace(/\{[^{}]*\}/g, " ").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();

// ---------- shared HTML ----------
const shellPath = path.join(distDir, "index.html");
let shell = fs.readFileSync(shellPath, "utf-8");
// Keep a clean copy of the SPA shell (no page-specific tags) for unknown URLs.
const appPath = path.join(distDir, "app.html");
if (!fs.existsSync(appPath) || !shell.includes('data-prerendered')) fs.writeFileSync(appPath, shell);
shell = fs.readFileSync(appPath, "utf-8");

const strip = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name="description"[\s\S]*?>/i, "")
    .replace(/<meta\s+property="og:(title|description|type|url)"[\s\S]*?>/gi, "")
    .replace(/<meta\s+name="twitter:(title|description)"[\s\S]*?>/gi, "")
    .replace(/<link\s+rel="canonical"[\s\S]*?>/gi, "");

function head({ title, desc, url, schema }) {
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(desc)}" />`,
    schema ? `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>` : "",
  ].join("\n  ");
}

const SERVICES = [
  ["Invisible Grills Bangalore", "/invisible-grills-bangalore"],
  ["Balcony Invisible Grills", "/balcony-invisible-grills"],
  ["Window Invisible Grills", "/window-invisible-grills"],
  ["Staircase Invisible Grills", "/staircase-invisible-grills"],
  ["Terrace Invisible Grills", "/terrace-invisible-grills"],
  ["Villa Invisible Grills", "/villa-invisible-grills"],
  ["Child Safety Grills", "/child-safety-grills"],
  ["School Safety Grills", "/school-safety-grills"],
];
const PAGES = [
  ["Pricing", "/pricing"], ["Gallery", "/gallery"], ["Projects", "/projects"], ["Reviews", "/reviews"],
  ["FAQs", "/faqs"], ["About Us", "/about-us"], ["Contact Us", "/contact-us"], ["Blog", "/blog"],
];

function footerNav(areas) {
  const li = (arr) => arr.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join("");
  return `<nav aria-label="Site"><h2>Our services</h2><ul>${li(SERVICES)}</ul>
<h2>Areas we serve</h2><ul>${li(areas)}</ul><ul>${li(PAGES)}</ul>
<p>MKR Safety Solutions · Call or WhatsApp <a href="tel:+917780114547">+91 77801 14547</a> · Bangalore, Karnataka</p></nav>`;
}

const written = [];
function write(route, meta, bodyHtml, areas) {
  const url = route === "/" ? `${SITE}/` : `${SITE}${route}`;
  const html = strip(shell)
    .replace("<html", '<html data-prerendered="1"')
    .replace("</head>", `  ${head({ ...meta, url })}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root"><main class="mkr-prerender">${bodyHtml}${footerNav(areas)}</main></div>`);
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  fs.writeFileSync(path.join(distDir, file), html);
  written.push(route);
}

const faqSchema = (faqs) =>
  faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : undefined;
const faqHtml = (faqs) =>
  faqs?.length ? `<section><h2>Frequently asked questions</h2>${faqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("")}</section>` : "";

// ---------- location pages ----------
const locObj = evalObject(sliceObject(src("pages/locations/index.tsx"), "const locationData: Record<string, LocationPageData> = "));
const AREAS = Object.values(locObj).map((l) => [l.area, `/invisible-grills-${l.slug}`]);

for (const l of Object.values(locObj)) {
  const body = `<h1>${esc(l.h1)}</h1><p>${esc(l.intro)}</p>
<section><h2>Invisible grills in ${esc(l.area)}</h2><p>${esc(l.localContent || "")}</p><p>Near: ${esc(l.landmarks || "")}</p></section>
${faqHtml(l.faqs)}
${l.relatedAreas?.length ? `<section><h2>Nearby areas</h2><ul>${l.relatedAreas.map((r) => `<li><a href="${esc(r.href)}">${esc(r.label)}</a></li>`).join("")}</ul></section>` : ""}`;
  write(`/invisible-grills-${l.slug}`, { title: l.seoTitle, desc: l.seoDesc, schema: faqSchema(l.faqs) }, body, AREAS);
}

// ---------- service pages ----------
for (const f of fs.readdirSync(path.resolve("src/pages/services"))) {
  if (!/Grills\.tsx$/.test(f) || f === "InvisibleGrillsBangalore.tsx") continue;
  const txt = sliceObject(src(`pages/services/${f}`), "const data = ");
  if (!txt) continue;
  const d = evalObject(txt);
  const list = (arr) => (arr?.length ? `<ul>${arr.map((x) => `<li>${esc(typeof x === "string" ? x : `${x.title || x.step}: ${x.desc}`)}</li>`).join("")}</ul>` : "");
  const body = `<h1>${esc(d.h1)}</h1><p>${esc(d.intro)}</p>${d.price ? `<p>Price: ₹${esc(d.price)}</p>` : ""}
<section><h2>Why choose ${esc(d.title)} from MKR</h2>${list(d.benefits)}</section>
<section><h2>Features</h2>${list(d.features)}</section>
<section><h2>Our installation process</h2>${list(d.process)}</section>
${faqHtml(d.faqs)}`;
  write(`/${d.slug}`, { title: d.seoTitle, desc: d.seoDesc, schema: faqSchema(d.faqs) }, body, AREAS);
}

// ---------- other pages (read SEOHead props + visible headings/paragraphs from the JSX) ----------
const STATIC = [
  ["/", "pages/Home.tsx"],
  ["/invisible-grills-bangalore", "pages/services/InvisibleGrillsBangalore.tsx"],
  ["/pricing", "pages/Pricing.tsx"],
  ["/about-us", "pages/About.tsx"],
  ["/contact-us", "pages/Contact.tsx"],
  ["/gallery", "pages/Gallery.tsx"],
  ["/projects", "pages/Projects.tsx"],
  ["/reviews", "pages/Reviews.tsx"],
  ["/faqs", "pages/FAQs.tsx"],
  ["/store-locator", "pages/StoreLocator.tsx"],
];
for (const [route, file] of STATIC) {
  const t = src(file);
  const seo = t.match(/<SEOHead[\s\S]*?\/>/);
  if (!seo) continue;
  const title = (seo[0].match(/title="([^"]+)"/) || [])[1];
  const desc = (seo[0].match(/description="([^"]+)"/) || [])[1];
  if (!title || !desc) continue;
  const parts = [];
  const re = /<(h1|h2|h3|p)(\s[^>]*)?>([\s\S]*?)<\/\1>/g;
  let m;
  while ((m = re.exec(t)) && parts.length < 60) {
    const text = jsxText(m[3]);
    if (text.length < 3 || /[{}]/.test(text)) continue;
    parts.push(`<${m[1]}>${esc(text)}</${m[1]}>`);
  }
  // Pages built from data files: add their FAQs as text.
  let extra = "";
  if (route === "/faqs" || route === "/") {
    const ft = src("data/faqs.ts");
    const a = ft.indexOf("export const faqData = ");
    const b = a === -1 ? -1 : ft.indexOf("\n];", a);
    try {
      const arr = b === -1 ? [] : evalObject(ft.slice(a + "export const faqData = ".length, b + 2));
      if (Array.isArray(arr)) extra = faqHtml(arr.map((x) => ({ q: x.question || x.q, a: x.answer || x.a })).filter((x) => x.q && x.a));
    } catch { /* keep going */ }
  }
  if (!parts.some((p) => p.startsWith("<h1>"))) parts.unshift(`<h1>${esc(title.split("|")[0].trim())}</h1>`);
  write(route, { title, desc }, parts.join("\n") + extra, AREAS);
}

console.log(`prerender-pages: wrote ${written.length} pages`);
