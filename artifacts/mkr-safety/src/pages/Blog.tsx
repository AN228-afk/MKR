import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { blogPosts } from "@/data/services";

export default function Blog() {
  return (
    <Layout>
      <SEOHead
        title="Invisible Grills Blog | Tips, Guides & News | MKR Safety Solutions"
        description="Expert articles on invisible grills, home safety, child protection, and balcony safety tips for Bangalore apartment owners. MKR Safety Solutions blog."
        canonical="https://mkrsafetysolutions.com/blog"
      />
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog" }]} />
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Invisible Grill Tips & Guides</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Expert knowledge on invisible grills, balcony safety, and home protection for Bangalore families.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} data-testid={`card-blog-${post.slug}`}>
                <article className="border border-border rounded-xl p-6 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Clock className="w-3 h-3" />
                    {post.readTime} · {post.date}
                  </div>
                  <h2 className="font-bold text-foreground text-base mb-3 leading-snug">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-secondary">
                    Read article <ArrowRight className="w-3 h-3" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
