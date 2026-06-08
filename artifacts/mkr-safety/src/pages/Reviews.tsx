import { Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { testimonials } from "@/data/services";

const allReviews = [
  ...testimonials,
  { name: "Kavitha L.", location: "Sarjapur Road", rating: 5, text: "The installation team was incredibly professional. They finished our 14th floor balcony in less than 4 hours and the cables are practically invisible from inside. Highly recommended for any Bangalore apartment owner.", service: "Balcony Invisible Grills" },
  { name: "Mohan D.", location: "KR Puram", rating: 5, text: "We got grills for all our windows and the main balcony. The view is completely unaffected — our kids can play on the balcony safely and we don't feel claustrophobic at all. Excellent value.", service: "Window & Balcony Grills" },
  { name: "Rashmi T.", location: "Yelahanka", rating: 5, text: "MKR was punctual, professional, and reasonably priced. Our staircase grills look stunning — you'd never know they were a safety feature. They blend so well with our modern interior.", service: "Staircase Grills" },
  { name: "Krishnamurthy S.", location: "Jayanagar", rating: 4, text: "Good quality grills and professional service. The site visit was thorough and the quote was transparent. Installation was done cleanly. Would recommend MKR for anyone in Bangalore.", service: "Balcony Grills" },
  { name: "Latha M.", location: "Marathahalli", rating: 5, text: "Three years since installation and not a single cable has lost tension or shown any corrosion. The 316-grade steel is clearly superior. MKR's team responds quickly to any queries too.", service: "Balcony & Window Grills" },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MKR Safety Solutions",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500" },
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
        description="Read genuine customer reviews for MKR Safety Solutions. 4.9-star rating from 500+ customers across Bangalore for invisible grill installations."
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
              <span className="text-2xl font-bold text-foreground">4.9</span>
              <span className="text-muted-foreground text-sm">/ 5 from 500+ reviews</span>
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
