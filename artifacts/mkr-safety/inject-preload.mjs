import fs from "fs";
import path from "path";

const assetsDir = path.resolve("dist/public/assets");
const indexPath = path.resolve("dist/public/index.html");

const files = fs.readdirSync(assetsDir);
const heroFile = files.find((f) => f.startsWith("MKR_3_") && f.endsWith(".webp"));

if (!heroFile) {
  console.error("Hero image not found in dist/public/assets — skipping preload injection");
  process.exit(0);
}

let html = fs.readFileSync(indexPath, "utf-8");
const preloadTag = `<link rel="preload" as="image" fetchpriority="high" href="/assets/${heroFile}">`;

if (html.includes(preloadTag)) {
  console.log("Preload tag already present, skipping");
  process.exit(0);
}

html = html.replace("</head>", `  ${preloadTag}\n</head>`);
fs.writeFileSync(indexPath, html);
console.log(`Injected preload for: ${heroFile}`);
