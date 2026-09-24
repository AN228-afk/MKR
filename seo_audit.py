"""
Weekly SEO/Performance audit for mkrsafetysolutions.com.

What it does automatically (safe, mechanical fixes):
  - Checks PageSpeed Insights scores (mobile + desktop)
  - Finds any image in attached_assets/ over 150 KB and auto-compresses it
    with sharp (matching the size/quality approach used throughout this repo)
  - If any image was fixed, rebuilds and redeploys the site
  - Writes a dated report to seo-reports/

What it does NOT do (flagged in the report instead):
  - Any color/contrast/layout change
  - Any structural code change
  - Anything the PageSpeed audit calls out that isn't a simple image fix
"""
import json
import os
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent
ASSETS_DIR = REPO_ROOT / "attached_assets"
REPORTS_DIR = REPO_ROOT / "seo-reports"
SITE_URL = "https://mkrsafetysolutions.com"

def run(cmd, cwd=None, env=None):
    print(f"$ {cmd}")
    result = subprocess.run(cmd, shell=True, cwd=cwd or REPO_ROOT, env=env)
    if result.returncode != 0:
        print(f"WARNING: command exited with code {result.returncode}")
    return result.returncode

def fetch_pagespeed(strategy):
    import urllib.request
    api_key = os.environ.get("PAGESPEED_API_KEY", "")
    key_param = f"&key={api_key}" if api_key else ""
    url = (
        "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
        f"?url={SITE_URL}&strategy={strategy}&category=performance"
        f"&category=accessibility&category=seo&category=best-practices{key_param}"
    )
    try:
        with urllib.request.urlopen(url, timeout=60) as resp:
            data = json.loads(resp.read())
        cats = data["lighthouseResult"]["categories"]
        return {k: round(v["score"] * 100) for k, v in cats.items()}
    except Exception as e:
        print(f"PageSpeed fetch failed for {strategy}: {e}")
        return None

def find_oversized_images(max_kb=150):
    oversized = []
    for f in ASSETS_DIR.glob("*"):
        if f.suffix.lower() in (".webp", ".jpg", ".jpeg", ".png"):
            size_kb = f.stat().st_size / 1024
            if size_kb > max_kb:
                oversized.append((f, size_kb))
    return oversized

def compress_image(path):
    out_path = path.with_name(path.stem + "_compressed" + path.suffix)
    mkr_dir = REPO_ROOT / "artifacts" / "mkr-safety"
    script = f'''
import sharp from "sharp";
sharp("{path}").resize({{ width: 1000, withoutEnlargement: true }}).toFile("{out_path}")
  .then(info => console.log("OK", info.size))
  .catch(e => {{ console.error(e); process.exit(1); }});
'''
    script_path = mkr_dir / "_compress_tmp.mjs"
    script_path.write_text(script)
    rc = run(f"node {script_path}", cwd=mkr_dir)
    script_path.unlink()
    if rc == 0 and out_path.exists():
        orig_size = path.stat().st_size
        new_size = out_path.stat().st_size
        if new_size < orig_size:
            out_path.replace(path)
            return orig_size / 1024, new_size / 1024
        else:
            out_path.unlink()
    return None

def main():
    REPORTS_DIR.mkdir(exist_ok=True)
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    report_lines = [f"# SEO Audit Report — {today}\n"]

    mobile = fetch_pagespeed("mobile")
    desktop = fetch_pagespeed("desktop")

    report_lines.append("## PageSpeed Scores\n")
    if mobile:
        report_lines.append(f"**Mobile:** Performance {mobile.get('performance','?')}, "
                             f"Accessibility {mobile.get('accessibility','?')}, "
                             f"Best Practices {mobile.get('best-practices','?')}, "
                             f"SEO {mobile.get('seo','?')}\n")
    if desktop:
        report_lines.append(f"**Desktop:** Performance {desktop.get('performance','?')}, "
                             f"Accessibility {desktop.get('accessibility','?')}, "
                             f"Best Practices {desktop.get('best-practices','?')}, "
                             f"SEO {desktop.get('seo','?')}\n")

    oversized = find_oversized_images()
    fixed_any = False
    report_lines.append("\n## Image Check\n")
    if not oversized:
        report_lines.append("No oversized images found (>150 KB).\n")
    else:
        for path, size_kb in oversized:
            result = compress_image(path)
            if result:
                orig, new = result
                report_lines.append(f"- Auto-compressed `{path.name}`: {orig:.0f} KB -> {new:.0f} KB\n")
                fixed_any = True
            else:
                report_lines.append(f"- Could not auto-compress `{path.name}` ({size_kb:.0f} KB) — needs manual review\n")

    report_lines.append("\n## Needs Your Review\n")
    report_lines.append("- Any drop in Performance/Accessibility/SEO score above 5 points since last week\n")
    report_lines.append("- Anything not covered by the automated image check\n")
    report_lines.append("- Run PageSpeed Insights manually for full details: https://pagespeed.web.dev/\n")

    report_path = REPORTS_DIR / f"{today}.md"
    report_path.write_text("\n".join(report_lines))
    print(f"Report written to {report_path}")

    if fixed_any:
        Path(REPO_ROOT / "_seo_fixed_flag").write_text("1")
    else:
        Path(REPO_ROOT / "_seo_fixed_flag").write_text("0")

if __name__ == "__main__":
    main()
