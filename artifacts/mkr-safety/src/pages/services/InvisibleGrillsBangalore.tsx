import { Link } from "wouter";
import { Shield, Star, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TrustBadges } from "@/components/TrustBadges";
import { InquiryForm } from "@/components/InquiryForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { testimonials, services, locations } from "@/data/services";
import hero from "@assets/MKR_3_1780926061320.webp";
import img2 from "@assets/MKR_2_1780926061320.webp";
import { trackGoogleAdsConversion } from "@/lib/gtag";

const faqs = [
  { q: "What is the best invisible grill company in Bangalore?", a: "MKR Safety Solutions is widely recognized as Bangalore's top invisible grill company, with a 4.9-star Google rating from 500+ reviews, 1000+ installations, and 8+ years of experience. We use only 316-grade marine stainless steel backed by a 10-year warranty." },
  { q: "How much do invisible grills cost in Bangalore?", a: "Invisible grill prices in Bangalore range from ₹100–₹220 per sq ft with MKR Safety Solutions. Balcony grills: ₹120–₹180/sq ft. Window grills: ₹100–₹160/sq ft. Staircase grills: ₹150–₹220/sq ft. We provide free site visits with transparent quotes." },
  { q: "Which areas in Bangalore does MKR Safety Solutions serve?", a: "MKR Safety Solutions serves all major areas of Bangalore including Whitefield, Koramangala, HSR Layout, Indiranagar, Electronic City, Marathahalli, Bellandur, Sarjapur Road, Jayanagar, Hebbal, Yelahanka, and KR Puram." },
  { q: "How long does invisible grill installation take in Bangalore?", a: "A standard balcony installation takes 3–5 hours. Full apartment installations with multiple balconies and windows are typically completed in 1–2 days. We work around your schedule including weekends." },
  { q: "Are invisible grills safe for children in Bangalore apartments?", a: "Yes. Our invisible grills — especially our child safety variant with 2.5mm cable spacing — are specifically tested and designed to prevent toddler falls. We have 300+ child safety installations across Bangalore's family apartments." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Invisible Grills Bangalore",
  description: "Premium invisible grill installation services across all areas of Bangalore. Balcony, window, staircase, terrace, and villa grills using 316-grade marine stainless steel.",
  provider: {
    "@type": "LocalBusiness",
    name: "MKR Safety Solutions",
    url: "https://mkrsafetysolutions.com",
    telephone: "+91-77801-14547",
    address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressRegion: "Karnataka", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500" },
  },
  areaServed: locations.map(l => ({ "@type": "City", name: l.name })),
};

export default function InvisibleGrillsBangalore() {
  return (
    <Layout>
      <SEOHead
        title="Invisible Grills Bangalore | Best Price, 10-Yr Warranty | MKR Safety Solutions"
        description="Bangalore's #1 invisible grill company. Balcony, window, staircase & terrace grills. 316-grade SS, 4.9★ rating, 1000+ installs, 10-year warranty. Free site visit."
        canonical="https://mkrsafetysolutions.com/invisible-grills-bangalore"
        schema={schema}
      />

      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Invisible Grills Bangalore" }]} />
        </div>
      </div>

      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Invisible grills on apartment balcony with Bangalore skyline view" className="w-full h-full object-cover opacity-25" width={1200} height={600} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-xs font-semibold mb-5 uppercase">
              <Shield className="w-3 h-3" /> Bangalore's #1 Invisible Grill Company
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Invisible Grills in Bangalore — Premium, Safe & Affordable
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
              MKR Safety Solutions is Bangalore's most trusted invisible grill installer. From individual balconies to entire villa complexes, we protect families with ultra-fine 316-grade marine stainless steel cables.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {["1000+ Installs", "4.9★ Google", "10-Yr Warranty", "Free Site Visit"].map(b => (
                <span key={b} className="px-3 py-1.5 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-xs font-semibold">{b}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <Link href="/contact-us" className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+917780114547" onClick={trackGoogleAdsConversion} className="px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
          <div className="hidden lg:block bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
            <InquiryForm title="Get Free Quote" compact />
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">All Invisible Grill Services in Bangalore</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">Comprehensive invisible grill solutions for every application — from individual apartments to large villas.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Balcony Grills", href: "/balcony-invisible-grills", price: "₹120–180/sq ft", img: hero },
              { label: "Window Grills", href: "/window-invisible-grills", price: "₹100–160/sq ft", img: img2 },
              { label: "Staircase Grills", href: "/staircase-invisible-grills", price: "₹150–220/sq ft", img: hero },
              { label: "Child Safety Grills", href: "/child-safety-grills", price: "₹130–190/sq ft", img: img2 },
            ].map(s => (
              <Link key={s.href} href={s.href}>
                <div className="group border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-36 overflow-hidden">
                    <img src={s.img} alt={`${s.label} in Bangalore`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" width={400} height={200} />
                    <div className="absolute inset-0 bg-primary/40" />
                    <div className="absolute bottom-2 left-3 text-white font-semibold text-sm">{s.label}</div>
                  </div>
                  <div className="p-3">
                    <div className="text-xs text-muted-foreground">Starting from</div>
                    <div className="font-bold text-secondary text-sm">{s.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Areas We Serve in Bangalore</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map(l => (
              <Link key={l.slug} href={`/invisible-grills-${l.slug}`}>
                <div className="p-4 bg-white rounded-xl border border-border hover:border-secondary hover:shadow-sm transition-all text-center">
                  <div className="font-semibold text-foreground text-sm">{l.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">{l.landmarks}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Why Choose MKR for Invisible Grills in Bangalore</h2>
          <p className="text-center text-muted-foreground mb-10">What sets us apart from other invisible grill companies in Bangalore</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "8+ years of experience in Bangalore's invisible grill market",
              "316-grade marine stainless steel — the highest available grade",
              "Load tested to 250kg per linear meter — certified safe",
              "4.9-star Google rating from 500+ genuine Bangalore customers",
              "Free site visit with transparent, itemized quotations",
              "Same-day site visits available across all Bangalore areas",
              "Professional installation completed in 3–5 hours",
              "10-year comprehensive warranty on all installations",
              "Dedicated after-sales support and annual maintenance",
              "1000+ successful installations across 12+ Bangalore neighborhoods",
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4 bg-white">
                <AccordionTrigger className="text-left font-medium text-sm py-4 hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-4 leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-12 bg-secondary/10 border-t border-secondary/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Get the Best Invisible Grills in Bangalore</h2>
          <p className="text-muted-foreground mb-6">Free site visit. Transparent pricing. 10-year warranty. Call or WhatsApp us now.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact-us" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">Book Free Site Visit</Link>
            <a href="tel:+917780114547" onClick={trackGoogleAdsConversion} className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors inline-flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call +91 77801 14547
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
