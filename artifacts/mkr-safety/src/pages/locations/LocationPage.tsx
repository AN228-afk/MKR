import { Link } from "wouter";
import { MapPin, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InquiryForm } from "@/components/InquiryForm";
import { TrustBadges } from "@/components/TrustBadges";
import { FadeUp, FadeLeft, FadeRight, ScaleIn, StaggerList, StaggerItem } from "@/components/Animated";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import hero from "@assets/MKR_3_1780926061320.png";

export interface LocationPageData {
  area: string;
  slug: string;
  landmarks: string;
  seoTitle: string;
  seoDesc: string;
  h1: string;
  intro: string;
  localContent: string;
  faqs: { q: string; a: string }[];
  relatedAreas: { label: string; href: string }[];
}

export function LocationPage({ data }: { data: LocationPageData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MKR Safety Solutions",
    description: `Invisible grill installation in ${data.area}, Bangalore`,
    url: `https://mkrsafetysolutions.com/invisible-grills-${data.slug}`,
    telephone: "+91-77801-14547",
    address: {
      "@type": "PostalAddress",
      addressLocality: data.area,
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: data.area },
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

  const services = [
    { label: "Balcony Grills", href: "/balcony-invisible-grills" },
    { label: "Window Grills", href: "/window-invisible-grills" },
    { label: "Staircase Grills", href: "/staircase-invisible-grills" },
    { label: "Child Safety Grills", href: "/child-safety-grills" },
    { label: "Terrace Grills", href: "/terrace-invisible-grills" },
    { label: "Villa Grills", href: "/villa-invisible-grills" },
  ];

  return (
    <Layout>
      <SEOHead
        title={data.seoTitle}
        description={data.seoDesc}
        canonical={`https://mkrsafetysolutions.com/invisible-grills-${data.slug}`}
        schema={[schema, faqSchema]}
      />

      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "Invisible Grills Bangalore", href: "/invisible-grills-bangalore" },
            { label: data.area }
          ]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={hero}
            alt={`Invisible grills installation in ${data.area} Bangalore`}
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.22 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover"
            width={1200}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <FadeLeft>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-xs font-semibold mb-5 uppercase">
              <MapPin className="w-3 h-3" /> Serving {data.area}, Bangalore
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4 leading-tight">{data.h1}</h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-4">{data.intro}</p>
            <p className="text-primary-foreground/60 text-sm mb-6">Near: {data.landmarks}</p>
            <div className="flex gap-4">
              <Link href="/contact-us" className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+917780114547" className="px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </FadeLeft>
          <FadeRight delay={0.2}>
            <div className="hidden lg:block bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
              <InquiryForm title={`Get Quote for ${data.area}`} compact />
            </div>
          </FadeRight>
        </div>
      </section>

      <TrustBadges />

      {/* Local Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeLeft>
              <h2 className="text-3xl font-bold text-foreground mb-6">Invisible Grills in {data.area}, Bangalore</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{data.localContent}</p>
              <StaggerList className="space-y-3">
                {[
                  `Same-day site visit available in ${data.area}`,
                  "316-grade marine stainless steel cables",
                  "Load-tested to 250kg per linear meter",
                  "Free measurement and transparent quote",
                  "Installation completed in 3–5 hours",
                  "10-year warranty on all installations",
                ].map((b, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground">{b}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </FadeLeft>
            <FadeRight delay={0.1}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Services in {data.area}</h2>
              <StaggerList className="grid grid-cols-2 gap-3">
                {services.map(s => (
                  <StaggerItem key={s.href}>
                    <motion.div whileHover={{ y: -3, boxShadow: "0 6px 20px rgba(0,0,0,0.07)" }} transition={{ duration: 0.2 }}>
                      <Link href={s.href} className="p-4 bg-muted rounded-xl border border-border hover:border-secondary hover:shadow-sm transition-all text-center block">
                        <div className="text-sm font-semibold text-foreground">{s.label}</div>
                        <ArrowRight className="w-3 h-3 text-secondary mx-auto mt-2" />
                      </Link>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Service Area: {data.area}, Bangalore</h2>
            <div className="aspect-video max-h-64 rounded-xl overflow-hidden border border-border">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.99!2d77.35073!3d12.95384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2s${encodeURIComponent(data.area)}%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`MKR Safety Solutions service area in ${data.area} Bangalore`}
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeUp>
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">FAQs — Invisible Grills in {data.area}</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {data.faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium text-sm py-4 hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4 leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h3 className="font-semibold text-foreground mb-4 text-center">Also Serving Nearby Areas</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {data.relatedAreas.map(a => (
                <motion.div key={a.href} whileHover={{ scale: 1.06 }} transition={{ duration: 0.15 }}>
                  <Link href={a.href} className="px-3 py-1.5 border border-border rounded-full text-sm text-foreground hover:border-secondary hover:text-secondary transition-all bg-white">
                    {a.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <ScaleIn>
        <section className="py-12 bg-secondary/10 border-t border-secondary/20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Get Invisible Grills in {data.area} Today</h2>
            <p className="text-muted-foreground mb-6">Same-day site visit. Free measurement. 10-year warranty. Call or WhatsApp us now.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact-us" className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">Book Free Site Visit</Link>
              <a href="tel:+917780114547" className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call +91 77801 14547
              </a>
            </div>
          </div>
        </section>
      </ScaleIn>
    </Layout>
  );
}
