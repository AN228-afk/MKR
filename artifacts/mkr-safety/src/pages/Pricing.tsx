import { Link } from "wouter";
import { CheckCircle, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PriceCalculator } from "@/components/PriceCalculator";
import { FadeUp, FadeLeft, FadeRight, StaggerList, StaggerItem } from "@/components/Animated";

const schema = {
  "@context": "https://schema.org",
  "@type": "PriceSpecification",
  name: "Invisible Grills Price in Bangalore",
  description: "Transparent pricing for invisible grill installation in Bangalore by MKR Safety Solutions. Prices from ₹90/sq ft.",
  priceCurrency: "INR",
  minPrice: "90",
  maxPrice: "150",
};

const rows = [
  { service: "Balcony Invisible Grills", cable3: "₹90–₹130", cable25: "₹110–₹145", note: "Most popular" },
  { service: "Window Invisible Grills", cable3: "₹90–₹125", cable25: "₹108–₹140", note: "" },
  { service: "Staircase Grills", cable3: "₹95–₹135", cable25: "₹112–₹148", note: "" },
  { service: "Terrace Grills", cable3: "₹90–₹130", cable25: "₹110–₹148", note: "" },
  { service: "Villa Full-Home", cable3: "₹95–₹140", cable25: "₹115–₹150", note: "Custom quote" },
  { service: "Child Safety Grills", cable3: "₹95–₹135", cable25: "₹115–₹150", note: "Recommended 2.5mm" },
  { service: "School / Institution", cable3: "₹90–₹130", cable25: "₹108–₹145", note: "Bulk discount" },
];

const included = [
  "316-grade marine stainless steel cables",
  "Aluminium top channel & anchors",
  "Professional installation by certified team",
  "Load testing to 250 kg per linear metre",
  "10-year warranty on materials & workmanship",
  "Post-installation cleaning",
  "Warranty documentation",
];

const faqs = [
  { q: "What is the price of invisible grills in Bangalore?", a: "Invisible grill prices in Bangalore start from ₹90 per sq ft for 3mm cable systems and ₹110 per sq ft for 2.5mm ultra-fine child safety grills. The total cost depends on the area size, space type, and cable thickness. MKR Safety Solutions provides transparent itemised quotes after a free site visit." },
  { q: "Are there any hidden charges?", a: "No. Our quotes are fully itemised — materials, labour, and installation are all included. The only variable is if the site requires special structural anchoring (rare), which we identify and quote for during the free site visit." },
  { q: "Why do 2.5mm cables cost more than 3mm?", a: "2.5mm cables require more cables per linear metre (closer spacing = more cables) and the finer hardware is more expensive to fabricate. The result is a more child-safe grill with smaller gaps — ideal for families with young children or pets." },
  { q: "Do you offer discounts for large projects?", a: "Yes. Villa full-home projects, school and institutional installations, and multi-apartment building projects all qualify for volume pricing. Contact us for a custom quote for projects above 1,000 sq ft." },
  { q: "What is included in the price?", a: "Everything: 316-grade marine SS cables, aluminium top channel, all anchors and fittings, professional installation, load testing to 250 kg/lm, post-installation cleanup, and a 10-year warranty with documentation." },
];

export default function Pricing() {
  return (
    <Layout>
      <SEOHead
        title="Invisible Grills Price in Bangalore 2024 | ₹90/sq ft | MKR Safety Solutions"
        description="Transparent invisible grill prices in Bangalore. 3mm cables from ₹90/sq ft, 2.5mm child safety from ₹110/sq ft. All-inclusive pricing with 10-year warranty. Free site visit. MKR Safety Solutions."
        canonical="https://mkrsafetysolutions.com/pricing"
        schema={[schema]}
      />

      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Pricing" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-xs font-semibold mb-5 uppercase tracking-wide">
              Transparent Pricing — No Surprises
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
              Invisible Grills Price in Bangalore
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-6">
              All-inclusive pricing starting at ₹90/sq ft. Materials, installation, load testing, and 10-year warranty — everything included.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+917780114547" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                <Phone className="w-4 h-4" /> Call for Exact Quote
              </a>
              <a
                href="https://wa.me/917780114547?text=Hi%2C%20I%20want%20to%20know%20the%20price%20of%20invisible%20grills%20for%20my%20home%20in%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Price Calculator */}
      <PriceCalculator />

      {/* Pricing Table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Full Price Breakdown</h2>
            <p className="text-muted-foreground">All prices per square foot · inclusive of materials and installation</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left px-5 py-4 font-semibold">Service Type</th>
                    <th className="text-center px-5 py-4 font-semibold">3mm Cables<br /><span className="text-xs font-normal opacity-80">Standard</span></th>
                    <th className="text-center px-5 py-4 font-semibold">2.5mm Cables<br /><span className="text-xs font-normal opacity-80">Child Safety</span></th>
                    <th className="text-center px-5 py-4 font-semibold hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <motion.tr
                      key={r.service}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                      className={i % 2 === 0 ? "bg-white" : "bg-muted/50"}
                    >
                      <td className="px-5 py-4 font-medium text-foreground">{r.service}</td>
                      <td className="px-5 py-4 text-center font-bold text-primary">{r.cable3}<span className="text-xs text-muted-foreground font-normal">/sq ft</span></td>
                      <td className="px-5 py-4 text-center font-bold text-secondary">{r.cable25}<span className="text-xs text-muted-foreground font-normal">/sq ft</span></td>
                      <td className="px-5 py-4 text-center hidden sm:table-cell">
                        {r.note && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/15 text-secondary">
                            {r.note}
                          </span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              * Prices are indicative. Final price depends on site conditions, balcony shape, and height. Book a free site visit for an exact quote.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeLeft>
              <h2 className="text-3xl font-bold text-foreground mb-6">Everything Included in the Price</h2>
              <StaggerList className="space-y-3">
                {included.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-border">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </FadeLeft>
            <FadeRight delay={0.1}>
              <h2 className="text-3xl font-bold text-foreground mb-6">3mm vs 2.5mm — Which to Choose?</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl border border-border p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-primary inline-block" />
                    <span className="font-semibold text-foreground">3mm Standard Cables</span>
                    <span className="ml-auto text-sm font-bold text-primary">₹90–₹140/sq ft</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Best for most balconies, windows, and terraces. Nearly invisible from 3+ metres. Ideal when aesthetics and views are the top priority.</p>
                </div>
                <div className="bg-white rounded-xl border-2 border-secondary p-5 relative">
                  <div className="absolute -top-3 left-4 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded-full">Recommended for Families</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-secondary inline-block" />
                    <span className="font-semibold text-foreground">2.5mm Ultra-Fine Cables</span>
                    <span className="ml-auto text-sm font-bold text-secondary">₹110–₹150/sq ft</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Tighter 2.5mm spacing — children's fingers and small toys cannot pass through. The gold standard for families with children under 10 or small pets.</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                <p className="text-sm text-foreground font-medium">
                  💡 Not sure which to choose? Our site visit team will assess your space and recommend the right cable thickness for your family's needs — for free.
                </p>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Pricing FAQs</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group border border-border rounded-xl bg-white overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-medium text-sm text-foreground list-none">
                    {f.q}
                    <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-secondary/10 border-t border-secondary/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-2xl font-bold text-foreground mb-3">Ready for an Exact Quote?</h2>
            <p className="text-muted-foreground mb-6">Book a free site visit — our team measures your space and provides a transparent, itemised quote within 24 hours. No obligation.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact-us" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Book Free Site Visit
              </Link>
              <a href="tel:+917780114547" className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call +91 77801 14547
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
