import { Link } from "wouter";
import { Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InquiryForm } from "@/components/InquiryForm";
import { blogPosts } from "@/data/services";

export interface BlogPostData {
  slug: string;
  title: string;
  seoTitle: string;
  seoDesc: string;
  date: string;
  readTime: string;
  keyword: string;
  content: { heading?: string; body: string }[];
  relatedServices: { label: string; href: string }[];
}

export function BlogPostPage({ data }: { data: BlogPostData }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.seoDesc,
    datePublished: data.date,
    author: { "@type": "Organization", name: "MKR Safety Solutions" },
    publisher: {
      "@type": "Organization",
      name: "MKR Safety Solutions",
      url: "https://mkrsafetysolutions.com",
    },
    mainEntityOfPage: `https://mkrsafetysolutions.com/blog/${data.slug}`,
  };

  const others = blogPosts.filter(p => p.slug !== data.slug).slice(0, 3);

  return (
    <Layout>
      <SEOHead
        title={data.seoTitle}
        description={data.seoDesc}
        canonical={`https://mkrsafetysolutions.com/blog/${data.slug}`}
        schema={articleSchema}
      />

      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "Blog", href: "/blog" },
            { label: data.title }
          ]} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Clock className="w-3 h-3" />
              {data.readTime} · {data.date}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">{data.title}</h1>

            <div className="prose prose-slate max-w-none">
              {data.content.map((section, i) => (
                <div key={i} className="mb-6">
                  {section.heading && (
                    <h2 className="text-xl font-bold text-foreground mb-3 mt-8 first:mt-0">{section.heading}</h2>
                  )}
                  <p className="text-muted-foreground leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-wrap gap-2 mb-6">
                {data.relatedServices.map(s => (
                  <Link key={s.href} href={s.href} className="px-3 py-1.5 border border-border rounded-full text-sm text-foreground hover:border-secondary hover:text-secondary transition-all">
                    {s.label}
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="inline-flex items-center gap-2 text-secondary font-semibold text-sm">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
            </div>
          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-muted rounded-xl p-6 border border-border">
              <h3 className="font-bold text-foreground mb-4">Get a Free Quote</h3>
              <InquiryForm compact />
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-4">More Articles</h3>
              <div className="space-y-3">
                {others.map(post => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <div className="p-3 border border-border rounded-lg hover:shadow-sm transition-shadow">
                      <div className="text-sm font-medium text-foreground leading-snug mb-1">{post.title}</div>
                      <div className="text-xs text-muted-foreground">{post.readTime}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-xl p-6">
              <h3 className="font-bold mb-2">Need Invisible Grills?</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">Free site visit. No obligation. Our team will assess your space and provide a transparent quote.</p>
              <a href="tel:+917780114547" className="block text-center px-4 py-2.5 bg-secondary text-secondary-foreground font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity">
                Call +91 77801 14547
              </a>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
