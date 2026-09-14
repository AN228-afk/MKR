"""
Daily SEO Blog Automation — MKR Safety Solutions
---------------------------------------------------
This script matches the ACTUAL structure of the mkr-safety repo:

1. Picks a trending/related topic (Google Trends, with fallback seed list).
2. Asks Claude to write a full blog post matching the site's BlogPostData shape.
3. Edits THREE source files to add the new post:
   - artifacts/mkr-safety/src/pages/blog/index.tsx  (full post content + export)
   - artifacts/mkr-safety/src/data/services.ts       (blog listing teaser)
   - artifacts/mkr-safety/src/App.tsx                (import + route)
4. Commits and pushes the changes to the repo.
5. Builds the site (cd artifacts/mkr-safety && pnpm build).
6. Deploys to Firebase Hosting (firebase deploy --only hosting:mkr-safety).

Required GitHub Secrets:
  ANTHROPIC_API_KEY        - your Anthropic API key
  FIREBASE_SERVICE_ACCOUNT - full JSON content of your Firebase service account key
                             (you already have this secret set up)
"""

import os
import re
import json
import random
import subprocess
from datetime import date

import requests

try:
    from pytrends.request import TrendReq
except ImportError:
    TrendReq = None

REPO_ROOT = os.getcwd()
APP_DIR = os.path.join(REPO_ROOT, "artifacts", "mkr-safety")
POSTS_FILE = os.path.join(APP_DIR, "src", "pages", "blog", "index.tsx")
SERVICES_FILE = os.path.join(APP_DIR, "src", "data", "services.ts")
APP_TSX_FILE = os.path.join(APP_DIR, "src", "App.tsx")
SITEMAP_FILE = os.path.join(APP_DIR, "public", "sitemap.xml")

ANTHROPIC_API_KEY = os.environ["ANTHROPIC_API_KEY"]
FIREBASE_SERVICE_ACCOUNT = os.environ["FIREBASE_SERVICE_ACCOUNT"]

SEED_TOPICS = [
    "invisible grill for balcony",
    "balcony safety net alternative",
    "staircase safety grill",
    "terrace safety railing",
    "child safety balcony ideas",
    "pet safety balcony grill",
    "high rise apartment balcony safety",
    "invisible grill vs iron grill",
    "balcony safety Bangalore",
    "stainless steel safety wire balcony",
    "invisible grill cost Bangalore",
    "window safety grill for apartments",
]


# ---------------------------------------------------------------------------
# Topic selection
# ---------------------------------------------------------------------------

def get_existing_slugs():
    with open(POSTS_FILE, "r") as f:
        content = f.read()
    return set(re.findall(r'^\s{2}"([a-z0-9-]+)":\s*\{', content, re.MULTILINE))


def get_topic(existing_slugs):
    candidates = []
    if TrendReq is not None:
        try:
            pytrends = TrendReq(hl="en-IN", tz=330)
            seed = random.choice(SEED_TOPICS)
            pytrends.build_payload([seed], timeframe="today 3-m", geo="IN")
            related = pytrends.related_queries()
            data = related.get(seed, {})
            for key in ("rising", "top"):
                df = data.get(key)
                if df is not None and not df.empty:
                    candidates.extend(df["query"].tolist())
        except Exception as e:
            print(f"Trends lookup failed, using fallback topics: {e}")

    candidates.extend(SEED_TOPICS)
    random.shuffle(candidates)
    return candidates[0]


def slugify(text):
    text = text.lower().strip()
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"\s+", "-", text)
    return text[:60].strip("-")


def to_pascal_case(slug):
    return "".join(word.capitalize() for word in slug.split("-"))


# ---------------------------------------------------------------------------
# Content generation
# ---------------------------------------------------------------------------

def _call_claude(prompt):
    response = requests.post(
        "https://api.anthropic.com/v1/messages",
        headers={
            "x-api-key": ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        },
        json={
            "model": "claude-sonnet-5",
            "max_tokens": 6000,
            "messages": [{"role": "user", "content": prompt}],
        },
        timeout=120,
    )
    if response.status_code != 200:
        print(f"Anthropic API error {response.status_code}: {response.text}")
    response.raise_for_status()
    data = response.json()
    text = "".join(
        b.get("text", "") for b in data.get("content", []) if b.get("type") == "text"
    )
    return re.sub(r"^```json|```$", "", text.strip()).strip()


def generate_post(topic, slug):
    prompt = f"""You are writing a new blog post for MKR Safety Solutions, an
invisible grill safety business (balcony, staircase, terrace, window grills)
serving Bangalore.

Topic/keyword to target: "{topic}"

Write content matching this exact JSON structure (matches their existing
blog posts):

{{
  "title": "...",
  "seoTitle": "... | MKR Safety Solutions",
  "seoDesc": "... (under 160 chars, includes keyword)",
  "readTime": "N min read",
  "keyword": "...",
  "excerpt": "... (1-2 sentence teaser for the blog listing page)",
  "content": [
    {{"body": "intro paragraph, no heading"}},
    {{"heading": "...", "body": "..."}},
    ... (6-9 total sections, matching the style of their existing posts:
         practical, Bangalore-specific, benefits-focused, no fabricated
         statistics or certifications) ...
  ],
  "relatedServices": [
    {{"label": "...", "href": "/..."}}
    ... (2-4 items, hrefs should be real service pages like
        /balcony-invisible-grills, /window-invisible-grills,
        /staircase-invisible-grills, /terrace-invisible-grills,
        /child-safety-grills, /villa-invisible-grills,
        /invisible-grills-bangalore, /contact-us, /about-us) ...
  ]
}}

Respond ONLY with valid JSON, no other text, no markdown fences. Keep the
"content" array to 6 sections maximum so the full response fits comfortably.
"""

    last_error = None
    for attempt in range(3):
        text = _call_claude(prompt)
        try:
            post = json.loads(text)
            post["slug"] = slug
            post["date"] = date.today().isoformat()
            return post
        except json.JSONDecodeError as e:
            last_error = e
            print(f"Attempt {attempt + 1}: got invalid JSON ({e}). Retrying...")
    raise last_error


# ---------------------------------------------------------------------------
# File editing
# ---------------------------------------------------------------------------

def ts_string(s):
    """Escape a string for embedding in a TS double-quoted string literal."""
    return json.dumps(s)  # JSON string escaping matches TS double-quote escaping


def build_content_array_ts(content_sections):
    lines = []
    for section in content_sections:
        if section.get("heading"):
            lines.append(
                f'      {{ heading: {ts_string(section["heading"])}, body: {ts_string(section["body"])} }},'
            )
        else:
            lines.append(f'      {{ body: {ts_string(section["body"])} }},')
    return "\n".join(lines)


def build_related_services_ts(related):
    lines = []
    for r in related:
        lines.append(
            f'      {{ label: {ts_string(r["label"])}, href: {ts_string(r["href"])} }},'
        )
    return "\n".join(lines)


def update_posts_file(post, component_name):
    with open(POSTS_FILE, "r") as f:
        content = f.read()

    entry = f'''  {ts_string(post["slug"])}: {{
    slug: {ts_string(post["slug"])},
    title: {ts_string(post["title"])},
    seoTitle: {ts_string(post["seoTitle"])},
    seoDesc: {ts_string(post["seoDesc"])},
    date: {ts_string(post["date"])},
    readTime: {ts_string(post["readTime"])},
    keyword: {ts_string(post["keyword"])},
    content: [
{build_content_array_ts(post["content"])}
    ],
    relatedServices: [
{build_related_services_ts(post["relatedServices"])}
    ],
  }},
'''

    anchor = "};\n\nexport function BenefitsBlogPost"
    if anchor not in content:
        raise RuntimeError("Could not find posts object closing anchor in posts file")
    content = content.replace(anchor, f"{entry}}};\n\nexport function BenefitsBlogPost", 1)

    new_export = (
        f'\nexport function {component_name}() '
        f'{{ return <BlogPostPage data={{posts[{ts_string(post["slug"])}]}} />; }}\n'
    )
    content = content.rstrip("\n") + "\n" + new_export

    with open(POSTS_FILE, "w") as f:
        f.write(content)


def update_services_file(post):
    with open(SERVICES_FILE, "r") as f:
        content = f.read()

    entry = f'''  {{
    title: {ts_string(post["title"])},
    slug: {ts_string(post["slug"])},
    excerpt: {ts_string(post["excerpt"])},
    date: {ts_string(post["date"])},
    readTime: {ts_string(post["readTime"])},
    keyword: {ts_string(post["keyword"])},
  }},
'''

    anchor = "];\n\nexport const testimonials"
    if anchor not in content:
        raise RuntimeError("Could not find blogPosts array closing anchor in services file")
    content = content.replace(anchor, f"{entry}];\n\nexport const testimonials", 1)

    with open(SERVICES_FILE, "w") as f:
        f.write(content)


def update_sitemap(post):
    with open(SITEMAP_FILE, "r") as f:
        content = f.read()

    new_url = (
        f'  <url><loc>https://mkrsafetysolutions.com/blog/{post["slug"]}</loc>'
        f'<changefreq>monthly</changefreq><priority>0.6</priority></url>\n'
    )

    anchor = "</urlset>"
    if anchor not in content:
        raise RuntimeError("Could not find </urlset> closing tag in sitemap.xml")
    content = content.replace(anchor, f"{new_url}{anchor}", 1)

    with open(SITEMAP_FILE, "w") as f:
        f.write(content)


def update_app_tsx(post, component_name):
    with open(APP_TSX_FILE, "r") as f:
        content = f.read()

    import_close = '} from "@/pages/blog/index";'
    if import_close not in content:
        raise RuntimeError("Could not find blog import block in App.tsx")
    content = content.replace(
        import_close,
        f'  {component_name},\n{import_close}',
        1,
    )

    route_anchor = "<Route component={NotFound} />"
    if route_anchor not in content:
        raise RuntimeError("Could not find NotFound route anchor in App.tsx")
    new_route = (
        f'<Route path="/blog/{post["slug"]}" component={{{component_name}}} />\n\n'
        f'      {route_anchor}'
    )
    content = content.replace(route_anchor, new_route, 1)

    with open(APP_TSX_FILE, "w") as f:
        f.write(content)


# ---------------------------------------------------------------------------
# Git / build / deploy
# ---------------------------------------------------------------------------

def run(cmd, cwd=None, env=None):
    print(f"$ {cmd}")
    subprocess.run(cmd, shell=True, check=True, cwd=cwd, env=env)


def git_commit_and_push(post):
    run('git config user.name "blog-bot"')
    run('git config user.email "blog-bot@users.noreply.github.com"')
    run("git add -A")
    run(f'git commit -m "Add blog post: {post["title"]}" || echo "Nothing to commit"')
    run("git push")


def build_site():
    run("pnpm install --no-frozen-lockfile", cwd=REPO_ROOT)
    env = os.environ.copy()
    env["BASE_PATH"] = "/"
    env["PORT"] = "5173"
    run("pnpm install --no-frozen-lockfile", cwd=APP_DIR, env=env)
    run("pnpm build", cwd=APP_DIR, env=env)


def deploy_site():
    key_path = os.path.join(REPO_ROOT, "firebase-service-account.json")
    with open(key_path, "w") as f:
        f.write(FIREBASE_SERVICE_ACCOUNT)

    env = os.environ.copy()
    env["GOOGLE_APPLICATION_CREDENTIALS"] = key_path

    run("npm install -g firebase-tools@latest", env=env)
    run("firebase deploy --only hosting:mkr-safety --project mkr-1-34060", cwd=REPO_ROOT, env=env)

    os.remove(key_path)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    existing_slugs = get_existing_slugs()

    topic = get_topic(existing_slugs)
    print(f"Selected topic: {topic}")

    post = generate_post(topic, slugify(topic))
    # Ensure slug uniqueness
    base_slug = post["slug"]
    n = 2
    while post["slug"] in existing_slugs:
        post["slug"] = f"{base_slug}-{n}"
        n += 1

    component_name = to_pascal_case(post["slug"]) + "BlogPost"
    print(f"Generated post: {post['title']} ({post['slug']})")

    update_posts_file(post, component_name)
    update_services_file(post)
    update_app_tsx(post, component_name)
    update_sitemap(post)
    print("Source files updated.")

    git_commit_and_push(post)
    print("Changes committed and pushed.")

    build_site()
    print("Build completed.")

    deploy_site()
    print("Deployed to Firebase Hosting.")


if __name__ == "__main__":
    main()