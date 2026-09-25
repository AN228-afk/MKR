import { Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { testimonials } from "@/data/services";

const allReviews = [...testimonials];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MKR Safety Solutions",
  review: allReviews.map(r => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
    reviewBody: r.text,
  })),
};

export default function Reviews() {
  return (
    <Layout>
      <SEOHead
        title="Customer Reviews | MKR Safety Solutions Invisible Grills Bangalore"
        description="Read genuine customer reviews for MKR Safety Solutions. 5.0-star rating from 10+ customers across Bangalore for invisible grill installations."
        canonical="https://mkrsafetysolutions.com/reviews"
        schema={reviewSchema}
      />
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Reviews" }]} />
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h1>
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="flex">{[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}</div>
              <span className="text-2xl font-bold text-foreground">5.0</span>
              <span className="text-muted-foreground text-sm">/ 5 from 10+ reviews</span>
            </div>
            <p className="text-muted-foreground">Real customers, real experiences across Bangalore</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((r, i) => (
              <article key={i} className="bg-muted rounded-xl p-6 border border-border" data-testid={`card-review-${i}`}>
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className={`w-4 h-4 ${s <= r.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`} />)}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="border-t border-border pt-3">
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.location} · {r.service}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
