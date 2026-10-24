import { Link } from "wouter";
import { CheckCircle, ArrowRight, Phone, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InquiryForm } from "@/components/InquiryForm";
import { TrustBadges } from "@/components/TrustBadges";
import { FadeUp, FadeLeft, FadeRight, ScaleIn, StaggerList, StaggerItem } from "@/components/Animated";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { testimonials } from "@/data/services";
import { trackGoogleAdsConversion } from "@/lib/gtag";

export interface ServicePageData {
  title: string;
  slug: string;
  seoTitle: string;
  seoDesc: string;
  h1: string;
  heroImg: string;
  heroAlt: string;
  intro: string;
  benefits: string[];
  features: { title: string; desc: string }[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: { label: string; href: string }[];
  relatedLocations: { label: string; href: string }[];
  price: string;
}

export function ServicePage({ data }: { data: ServicePageData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    description: data.seoDesc,
    provider: {
      "@type": "LocalBusiness",
      name: "MKR Safety Solutions",
      url: "https://mkrsafetysolutions.com",
      telephone: "+91-77801-14547",
      address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressRegion: "Karnataka", addressCountry: "IN" },
    },
    areaServed: { "@type": "City", name: "Bangalore" },
    offers: { "@type": "Offer", price: data.price, priceCurrency: "INR" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Layout>
      <SEOHead
        title={data.seoTitle}
        description={data.seoDesc}
        canonical={`https://mkrsafetysolutions.com/${data.slug}`}
        schema={[schema, faqSchema]}
      />

      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Services", href: "/invisible-grills-bangalore" }, { label: data.title }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={data.heroImg}
            alt={data.heroAlt}
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.28 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover"
            width={1200}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <FadeLeft>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-xs font-semibold mb-5 uppercase tracking-wide">
              <Shield className="w-3 h-3" /> MKR Safety Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4 leading-tight">{data.h1}</h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">{data.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+917780114547" onClick={trackGoogleAdsConversion} className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </FadeLeft>
          <FadeRight delay={0.2}>
            <div className="hidden lg:block bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
              <InquiryForm title="Book Free Site Visit" compact />
            </div>
          </FadeRight>
        </div>
      </section>

      <TrustBadges />

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeLeft>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose MKR for {data.title}</h2>
              <StaggerList className="space-y-3">
                {data.benefits.map((b, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{b}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </FadeLeft>
            <FadeRight delay={0.1}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
              <StaggerList className="space-y-4">
                {data.features.map((f) => (
                  <StaggerItem key={f.title}>
                    <div className="border-l-2 border-secondary pl-4">
                      <div className="font-semibold text-foreground text-sm">{f.title}</div>
                      <div className="text-muted-foreground text-sm mt-1">{f.desc}</div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">Our Installation Process</h2>
          </FadeUp>
          <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((p, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-center bg-white rounded-xl p-6 shadow-sm border border-border"
                >
                  <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">{i + 1}</div>
                  <div className="font-semibold text-foreground text-sm mb-2">{p.step}</div>
                  <div className="text-muted-foreground text-xs leading-relaxed">{p.desc}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Happy Customers</h2>
          </FadeUp>
          <StaggerList className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.2 }}
                  className="bg-muted rounded-xl p-5 border border-border h-full"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed mb-3">"{t.text}"</p>
                  <div className="text-xs text-muted-foreground">{t.name} · {t.location}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {data.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4 bg-white">
                  <AccordionTrigger className="text-left font-medium text-sm py-4 hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4 leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-8">
              {data.relatedServices.length > 0 && (
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Related Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.relatedServices.map(s => (
                      <motion.div key={s.href} whileHover={{ scale: 1.04 }} transition={{ duration: 0.15 }}>
                        <Link href={s.href} className="px-3 py-1.5 border border-border rounded-full text-sm text-foreground hover:border-secondary hover:text-secondary transition-all">{s.label}</Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              {data.relatedLocations.length > 0 && (
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Service Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.relatedLocations.map(l => (
                      <motion.div key={l.href} whileHover={{ scale: 1.04 }} transition={{ duration: 0.15 }}>
                        <Link href={l.href} className="px-3 py-1.5 border border-border rounded-full text-sm text-foreground hover:border-secondary hover:text-secondary transition-all">{l.label}</Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <ScaleIn>
        <section className="py-12 bg-secondary/10 border-t border-secondary/20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">Book a free site visit. Our team will visit your home, take measurements, and provide a transparent quote within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact-us" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">Book Free Site Visit</Link>
              <a href="tel:+917780114547" onClick={trackGoogleAdsConversion} className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">Call +91 77801 14547</a>
            </div>
          </div>
        </section>
      </ScaleIn>
    </Layout>
  );
}
