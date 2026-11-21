import { Link } from "wouter";
import { Accent, accentTail } from "@/components/Accent";
import { MapPin, CheckCircle, ArrowRight, Phone, MessageCircle, BadgeCheck, Ruler, Wrench, Cable, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InquiryForm } from "@/components/InquiryForm";
import { TrustBadges } from "@/components/TrustBadges";
import { FadeUp, FadeLeft, FadeRight, ScaleIn, StaggerList, StaggerItem } from "@/components/Animated";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import hero from "@assets/MKR_3_1780926061320.webp";
import imgBalcony from "@assets/mkr-real-balcony-night-card.webp";
import imgWindow from "@assets/mkr-real-window-view-card.webp";
import imgStair from "@assets/MKR_5_1780926061320.webp";
import imgKids from "@assets/mkr-real-kids-balcony-card.webp";
import imgPets from "@assets/mkr-real-pets-balcony-card.webp";
import imgVilla from "@assets/mkr-real-villa-terrace-card.webp";
import imgSunset from "@assets/mkr-real-sunset-2-card.webp";
import { trackGoogleAdsConversion } from "@/lib/gtag";

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
  /** For other cities: leave empty so the page says "Hyderabad", not "Hyderabad, Bangalore". */
  city?: string;
  state?: string;
}

export function LocationPage({ data }: { data: LocationPageData }) {
  const city = data.city === undefined ? "Bangalore" : data.city;
  const place = city ? `${data.area}, ${city}` : data.area;
  const isOtherCity = !!data.state;
  const pageUrl = `https://mkrsafetysolutions.com/invisible-grills-${data.slug}`;
  const cityWa = `https://wa.me/917780114547?text=${encodeURIComponent(`Hi MKR, I need invisible grills in ${data.area}. Please book a free site visit.`)}`;
  const schema = isOtherCity
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Invisible grill installation",
        name: `Invisible grills in ${data.area}`,
        url: pageUrl,
        areaServed: { "@type": "City", name: data.area, containedInPlace: { "@type": "State", name: data.state } },
        provider: {
          "@type": "LocalBusiness",
          name: "MKR Safety Solutions",
          telephone: "+91-77801-14547",
          url: "https://mkrsafetysolutions.com/",
          address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
        },
      }
    : {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "MKR Safety Solutions",
        description: `Invisible grill installation in ${place}`,
        url: pageUrl,
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
    { label: "Balcony Invisible Grills", href: "/balcony-invisible-grills" },
    { label: "Window Invisible Grills", href: "/window-invisible-grills" },
    { label: "Staircase Invisible Grills", href: "/staircase-invisible-grills" },
    { label: "Child Safety Grills", href: "/child-safety-grills" },
    { label: "Terrace Invisible Grills", href: "/terrace-invisible-grills" },
    { label: "Villa Invisible Grills", href: "/villa-invisible-grills" },
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
          <Breadcrumb items={isOtherCity ? [{ label: `Invisible Grills ${data.area}` }] : [
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
            alt={`Invisible grills installation in ${place}`}
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
              <MapPin className="w-3 h-3" /> Serving {place}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4 leading-tight">{accentTail(data.h1, 2)}</h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-4">{data.intro}</p>
            <p className="text-primary-foreground/60 text-sm mb-6">Near: {data.landmarks}</p>
            <div className="flex gap-4">
              {isOtherCity ? (
                <a href={cityWa} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <Link href="/contact-us" className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              <a href="tel:+917780114547" onClick={trackGoogleAdsConversion} className="px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </FadeLeft>
          <FadeRight delay={0.2}>
            <div className="hidden lg:block bg-white border border-border rounded-2xl p-6">
              <InquiryForm title={`Get Quote for ${data.area}`} compact city={isOtherCity ? data.area : "Bangalore"} />
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Invisible Grills in {place}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{data.localContent}</p>
              <StaggerList className="space-y-3">
                {(isOtherCity ? [
                  `Free site visit in ${data.area}: call or WhatsApp to schedule`,
                  "316-grade marine stainless steel cables",
                  "Load-tested up to 400 kg",
                  "2-inch or 3-inch cable spacing",
                  "Free measurement and transparent quote",
                  "15-year guarantee on all installations",
                ] : [
                  `Same-day site visit available in ${data.area}`,
                  "316-grade marine stainless steel cables",
                  "Load-tested to 400kg per linear meter",
                  "Free measurement and transparent quote",
                  "Installation completed in 3–5 hours",
                  "15-year guarantee on all installations",
                ]).map((b, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground">{b}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
            </FadeLeft>
            {isOtherCity ? (
            <FadeRight delay={0.1}>
              <div className="mkr-card p-6 sm:p-8">
                <span className="mkr-eyebrow">Price & spacing</span>
                <h2 className="text-2xl font-bold text-foreground mb-2">Invisible grill price in {data.area}</h2>
                <p className="text-3xl font-bold text-secondary mb-1">₹100–₹160 <span className="text-base font-semibold text-muted-foreground">/ sq ft</span></p>
                <p className="text-sm text-muted-foreground mb-6">Your exact price is confirmed after a free site visit and measurement.</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { g: "2″", t: "2-inch spacing", d: "Pets, pigeons and toddlers" },
                    { g: "3″", t: "3-inch spacing", d: "Standard child safety, more open view" },
                  ].map((o) => (
                    <div key={o.g} className="rounded-2xl border-2 border-secondary/30 bg-secondary/[0.05] p-4">
                      <div className="text-3xl font-bold text-secondary">{o.g}</div>
                      <div className="text-sm font-semibold text-foreground mt-1">{o.t}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{o.d}</div>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/917780114547?text=${encodeURIComponent(`Hi MKR, I need invisible grills in ${data.area}. Please share the price and book a free site visit.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1ebe5b] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Get price on WhatsApp
                </a>
              </div>
            </FadeRight>
            ) : (
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
            )}
          </div>
        </div>
      </section>

      {isOtherCity && (
        <>
          {/* Services in this city */}
          <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="mkr-eyebrow">Our services</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Invisible grills for every space <Accent>in {data.area}</Accent></h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { img: imgBalcony, t: "Balcony invisible grills", d: `Keep your ${data.area} balcony view open while children and pets stay safe.`, p: ["316 marine-grade SS cables", "2″ or 3″ spacing"] },
                  { img: imgWindow, t: "Window invisible grills", d: "A slim, rust-free replacement for heavy iron window grills. Full light and air.", p: ["Openable and sliding windows", "No painting, no rust"] },
                  { img: imgStair, t: "Staircase & duplex grills", d: "Vertical cable railings for open staircases, duplex landings and mezzanines.", p: ["Child and pet safe", "Modern, open look"] },
                  { img: imgKids, t: "Child safety grills", d: "Closely spaced cables for homes with toddlers and young children.", p: ["2″ spacing for toddlers", "Load-tested up to 400 kg"] },
                  { img: imgPets, t: "Pet & anti-pigeon grills", d: "2-inch spacing keeps cats, dogs and pigeons where they belong.", p: ["No messy nets", "Stops pigeon nesting"] },
                  { img: imgVilla, t: "Terrace & villa grills", d: "Custom systems for terraces, sit-outs and large villa openings.", p: ["Measured for each opening", "15-year guarantee"] },
                ].map((sv) => (
                  <div key={sv.t} className="mkr-card group flex flex-col overflow-hidden">
                    <div className="p-2 pb-0">
                      <div className="relative h-48 overflow-hidden rounded-xl">
                        <img src={sv.img} alt={`${sv.t} in ${data.area} by MKR Safety Solutions`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={600} height={400} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <h3 className="absolute bottom-3 left-4 right-4 text-white font-bold text-lg leading-tight">{sv.t} <span className="font-medium text-white/85">in {data.area}</span></h3>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-sm text-muted-foreground leading-relaxed">{sv.d}</p>
                      <ul className="mt-3 space-y-1.5 flex-1">
                        {sv.p.map((pt) => (
                          <li key={pt} className="flex items-center gap-2 text-[13px] font-medium text-foreground">
                            <BadgeCheck className="w-4 h-4 text-secondary shrink-0" /> {pt}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={`https://wa.me/917780114547?text=${encodeURIComponent(`Hi MKR, I need ${sv.t.toLowerCase()} in ${data.area}. Please share a quote.`)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-secondary text-secondary-foreground text-sm font-semibold"
                      >
                        <MessageCircle className="w-4 h-4" /> Get quote in {data.area}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="mkr-eyebrow">How it works</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">From call to safe home <Accent>in 4 steps</Accent></h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { i: Ruler, t: "Free site visit", d: `We visit your home in ${data.area}, measure every opening and suggest the right spacing.` },
                  { i: Wrench, t: "Channel & anchors", d: "A slim top channel and strong base anchors are fixed neatly, with no breaking of walls." },
                  { i: Cable, t: "Cables tensioned", d: "316 marine-grade cables are threaded and tensioned one by one, then load-tested." },
                  { i: ShieldCheck, t: "15-year guarantee", d: "We clean up, hand over and back every installation with a 15-year guarantee." },
                ].map((st, n) => (
                  <div key={st.t} className="mkr-card p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="mkr-icon"><st.i className="w-5 h-5" /></span>
                      <span className="text-4xl font-bold text-secondary/15">0{n + 1}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{st.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{st.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our work */}
          <section className="py-16 bg-muted overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <span className="mkr-eyebrow">Our work</span>
                <h2 className="text-3xl font-bold text-foreground">Real installations by <Accent>MKR</Accent></h2>
              </div>
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {[imgBalcony, imgKids, imgVilla, imgPets, imgWindow, imgStair, imgSunset].map((im, k) => (
                  <img key={k} src={im} alt={`MKR invisible grill installation ${k + 1}`} loading="lazy" className="snap-center shrink-0 w-[75vw] sm:w-[320px] h-[240px] object-cover rounded-2xl shadow-[0_20px_40px_-24px_rgba(60,45,10,.5)]" />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Map */}
      <section className="py-8 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Service Area: {place}</h2>
            <div className="aspect-video max-h-64 rounded-xl overflow-hidden border border-border">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.99!2d77.35073!3d12.95384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2s${encodeURIComponent(isOtherCity ? `${data.area}, ${data.state}` : `${data.area}, Bengaluru, Karnataka`)}%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`MKR Safety Solutions service area in ${place}`}
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
            <p className="text-muted-foreground mb-6">{isOtherCity ? "Free site visit. Free measurement. 15-year guarantee. Call or WhatsApp us now." : "Same-day site visit. Free measurement. 15-year guarantee. Call or WhatsApp us now."}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {isOtherCity ? (
                <a href={cityWa} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">Book Free Site Visit</a>
              ) : (
                <Link href="/contact-us" className="px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">Book Free Site Visit</Link>
              )}
              <a href="tel:+917780114547" onClick={trackGoogleAdsConversion} className="px-6 py-3 border border-foreground/25 text-foreground font-semibold rounded-lg hover:bg-primary/5 transition-colors inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call +91 77801 14547
              </a>
            </div>
          </div>
        </section>
      </ScaleIn>
    </Layout>
  );
}
