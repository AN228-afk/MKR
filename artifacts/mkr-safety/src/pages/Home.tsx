import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Star, ArrowRight, Phone, MessageCircle, Award, Eye, Ruler, BadgeCheck, Quote, MapPin } from "lucide-react";
import { FadeUp, FadeLeft, FadeRight, ScaleIn, StaggerList, StaggerItem } from "@/components/Animated";
import { trackGoogleAdsConversion } from "@/lib/gtag";
import { socialLinks } from "@/lib/social";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { TrustBadges } from "@/components/TrustBadges";
import { PriceCalculator } from "@/components/PriceCalculator";
import { InquiryForm } from "@/components/InquiryForm";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { testimonials, services, blogPosts } from "@/data/services";
import hero1 from "@assets/MKR_3_1780926061320.webp";
import hero2 from "@assets/MKR_1_of_child_1780926061320.webp";
import img2 from "@assets/MKR_2_1780926061320.webp";
import img5 from "@assets/MKR_5_1780926061320.webp";
import img4 from "@assets/MKR_4_1780926061320.webp";
import img2Card from "@assets/MKR_2_thumb_1780926061320.webp";
import img5Card from "@assets/MKR_5_thumb_1780926061320.webp";
import img4Card from "@assets/MKR_4_thumb_1780926061320.webp";
import img6 from "@assets/2_1780926045097.webp";
import kidsBalcony from "@assets/mkr-real-kids-balcony.webp";
import petsBalcony from "@assets/mkr-real-pets-balcony.webp";
import img8 from "@assets/5_1780926045097.webp";
import realBalcony from "@assets/mkr-real-balcony-night.webp";
import villaTerrace from "@assets/mkr-real-villa-terrace.webp";
import realWindow from "@assets/mkr-real-window-view.webp";
import realSunset from "@assets/mkr-real-sunset-2.webp";

const WA = "https://wa.me/917780114547?text=Hi%2C%20I%20need%20invisible%20grills%20in%20Bangalore.";

const heroSlides = [
  {
    src: realBalcony,
    alt: "Apartment balcony fitted with MKR invisible grills overlooking the Bangalore city lights at night",
    label: "Balcony Invisible Grills",
    heading: "Protect Your Balcony.",
    accent: "Keep The View Forever.",
    sub: "Ultra-fine 316-grade marine SS cables secured at 3mm spacing — nearly invisible from a distance, load-tested to 250 kg/m.",
  },
  {
    src: kidsBalcony,
    alt: "Two children safely looking out from a balcony protected by MKR invisible grills at sunset",
    position: "center 72%",
    label: "Child Safety Grills",
    heading: "Your Child Deserves",
    accent: "A Safe, Open World.",
    sub: "2.5mm child-safe cable variants certified for toddlers and pets. Trusted by Bangalore families in high-rise apartments.",
  },
  {
    src: petsBalcony,
    alt: "Golden retriever and cat relaxing beside a high-rise balcony secured with MKR invisible grills",
    label: "Pet Safety Grills",
    heading: "Let Your Pets Enjoy",
    accent: "The View, Safely.",
    sub: "Closely spaced 316-grade SS cables keep cats and dogs safely inside while they relax by the balcony or window.",
    position: "center 60%",
  },
  {
    src: villaTerrace,
    alt: "Long luxury balcony with MKR invisible grills overlooking the city skyline",
    position: "center 55%",
    label: "Villa Invisible Grills",
    heading: "Luxury Villas Deserve",
    accent: "Invisible Protection.",
    sub: "Bespoke cable grill systems designed for large villa balconies and terraces — seamlessly blending with premium architecture.",
  },
  {
    src: realWindow,
    alt: "Apartment window fitted with MKR invisible grills overlooking the Bangalore skyline on a sunny day",
    label: "Window Invisible Grills",
    heading: "Maximum Light.",
    accent: "Maximum Safety.",
    sub: "Window invisible grills that let air, light and views flow freely. No more dark iron bars ruining your interior design.",
  },
  {
    src: img5,
    alt: "Elegant staircase invisible grill cable system in modern interior",
    label: "Staircase Invisible Grills",
    heading: "Staircases That Look",
    accent: "Clean & Modern.",
    sub: "Vertical SS cable systems for open staircases that look stunning in contemporary homes while keeping children safe.",
  },
  {
    src: img6,
    alt: "Balcony with invisible grills and planter arrangement, Bangalore apartment",
    label: "2000+ Installations",
    heading: "Bangalore's Most",
    accent: "Trusted Grill Brand.",
    sub: "5-Star rated by our customers on Google. Every installation backed by a 15-year warranty and lifetime customer support.",
  },
  {
    src: realSunset,
    alt: "Balcony with MKR invisible grills and a golden sunset view in Bangalore",
    label: "15-Year Warranty",
    heading: "316 Marine SS Steel.",
    accent: "Zero Rust. Ever.",
    sub: "The same grade used in marine environments. Resistant to Bangalore humidity, rain, and coastal conditions — guaranteed.",
  },
];

const homeFaqs = [
  {
    q: "What are invisible grills and how do they work?",
    a: "Invisible grills use ultra-fine 316-grade marine stainless steel cables (3mm diameter) tensioned between a top channel and bottom anchors. The cables are so thin and precisely spaced that they are nearly invisible from a distance while providing a robust safety barrier rated at 250kg per linear meter.",
  },
  {
    q: "How much do invisible grills cost in Bangalore?",
    a: "Invisible grill prices in Bangalore range from ₹100 to ₹160 per square foot for both 3mm and 2.5mm cables, depending on the type (balcony, window, staircase). MKR Safety Solutions provides free site visits and transparent quotations with no hidden charges.",
  },
  {
    q: "Are invisible grills safe for children and pets?",
    a: "Yes. Our grills use 3mm cable spacing (2.5mm for child safety variants), load-tested to 250kg per linear meter. They are certified safe for children, toddlers, and pets. Over 1000 Bangalore families trust MKR for their child safety needs.",
  },
  {
    q: "How long does invisible grill installation take?",
    a: "A standard balcony installation takes 3–5 hours. A full apartment with multiple balconies and windows is typically completed in 1–2 days. Our team ensures a clean, hassle-free process.",
  },
  {
    q: "Do invisible grills rust in Bangalore's climate?",
    a: "We exclusively use 316-grade marine stainless steel, which is highly resistant to rust, corrosion, and humidity. This is the same grade used in marine environments. We back every installation with a 15-year warranty.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MKR Safety Solutions",
  description: "Premium invisible grill installation in Bangalore. Balcony, window, staircase, terrace, and villa grills. 316-grade marine SS cables. 15-year warranty.",
  url: "https://mkrsafetysolutions.com",
  telephone: "+91-77801-14547",
  email: "mkrsafetysolutions@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 12.9716, longitude: 77.5946 },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "13" },
  priceRange: "₹₹",
  areaServed: ["Bangalore", "Whitefield", "Koramangala", "HSR Layout", "Indiranagar", "Bellandur", "Marathahalli"],
  openingHours: "Mo-Sa 09:00-19:00",
  image: "https://mkrsafetysolutions.com/og-image.jpg",
  ...(socialLinks.length ? { sameAs: socialLinks } : {}),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {


  return (
    <Layout>
      <SEOHead
        title="Invisible Grills Bangalore | MKR Safety Solutions | Best Price"
        description="Bangalore's #1 invisible grill installer. 316-grade SS cables for balcony, window, staircase & terrace. 2000+ installs, 5.0★ rating, 15-year warranty. Free site visit."
        canonical="https://mkrsafetysolutions.com/"
        schema={[localBusinessSchema, faqSchema]}
      />

      <HeroSlideshow slides={heroSlides} whatsappUrl={WA} />

      {/* Moving trust strip */}
      <div className="bg-secondary text-secondary-foreground overflow-hidden py-3" aria-label="Why MKR">
        <div className="mkr-marquee flex w-max gap-10 whitespace-nowrap text-sm font-semibold tracking-wide">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-10" aria-hidden={k === 1}>
              {["15-Year Warranty", "2000+ Installations", "5.0★ Google Rating", "Free Site Visit", "Marine-Grade SS 316 Cables", "Child & Pet Safe", "All Bangalore Areas"].map((t) => (
                <span key={t} className="inline-flex items-center gap-10">{t}<span className="opacity-60">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <TrustBadges />

      <PriceCalculator />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="mkr-eyebrow">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Invisible Grill Services in Bangalore
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From balconies to staircases, every space deserves a safety solution that doesn't compromise on beauty or views.
            </p>
          </FadeUp>
          <StaggerList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Balcony Invisible Grills",
                tag: "Most Popular",
                href: "/balcony-invisible-grills",
                desc: "Secure open balconies with 3mm ultra-fine 316-grade SS cables. Load-tested to 250 kg/m. Panoramic views fully preserved.",
                img: hero1,
                waMsg: "Hi, I need Balcony Invisible Grills in Bangalore. Please share details.",
              },
              {
                title: "Window Invisible Grills",
                tag: "Light & Air",
                href: "/window-invisible-grills",
                desc: "Replace heavy iron grills with nearly invisible cables. Maximum light, ventilation, and safety for every window.",
                img: img4Card,
                waMsg: "Hi, I need Window Invisible Grills in Bangalore. Please share details.",
              },
              {
                title: "Staircase Invisible Grills",
                tag: "Child Safe",
                href: "/staircase-invisible-grills",
                desc: "Elegant vertical cable railings for open staircases — child-safe, pet-safe, and stunning in modern interiors.",
                img: img5Card,
                waMsg: "Hi, I need Staircase Invisible Grills in Bangalore. Please share details.",
              },
              {
                title: "Villa Invisible Grills",
                tag: "Custom Built",
                href: "/villa-invisible-grills",
                desc: "Bespoke cable grill systems for independent villas with large balconies, terraces, and custom architectural needs.",
                img: img2Card,
                waMsg: "Hi, I need Villa Invisible Grills in Bangalore. Please share details.",
              },
            ].map(({ title, tag, href, desc, img, waMsg }) => (
              <StaggerItem key={href} className="h-full">
                <div className="mkr-card group flex flex-col h-full">
                  <Link href={href} data-testid={`card-service-${href}`} className="block p-2 pb-0">
                    <div className="relative h-52 overflow-hidden rounded-xl">
                      <img
                        src={img}
                        alt={`${title} in Bangalore by MKR Safety Solutions`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                        width={400}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-secondary shadow-sm">{tag}</span>
                      <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-foreground shadow-sm transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:-rotate-45">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <h3 className="absolute bottom-3 left-3 right-3 text-white font-bold text-base leading-tight">{title}</h3>
                    </div>
                  </Link>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
                    <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                      <Link href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group/lm">
                        Learn more<span className="sr-only"> about {title}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/lm:translate-x-1" />
                      </Link>
                      <div className="flex items-center gap-2">
                        <a
                          href={`https://wa.me/917780114547?text=${encodeURIComponent(waMsg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`WhatsApp about ${title}`}
                          onClick={trackGoogleAdsConversion}
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white hover:scale-110 transition-all"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                        <a
                          href="tel:+917780114547"
                          onClick={trackGoogleAdsConversion}
                          aria-label={`Call about ${title}`}
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white hover:scale-110 transition-all"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
          <div className="text-center mt-12">
            <Link href="/invisible-grills-bangalore" className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-xl">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose MKR */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeLeft>
              <span className="mkr-eyebrow">Why MKR</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                Why 2000+ Bangalore Families Choose MKR
              </h2>
              <StaggerList className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: "316 Grade Marine Stainless Steel", desc: "The highest grade used in marine environments — zero rust even after years of Bangalore rain and humidity." },
                  { icon: Award, title: "250kg Load-Tested Safety", desc: "Each cable is tension-tested to withstand 250kg per linear meter. Certified, not just claimed." },
                  { icon: Eye, title: "Nearly Invisible From Any Angle", desc: "3mm ultra-thin cables spaced precisely to disappear visually while remaining structurally robust." },
                  { icon: Ruler, title: "Free Site Visit & Custom Quote", desc: "We visit your home, measure every corner, and give a transparent quote — no obligation." },
                  { icon: BadgeCheck, title: "15-Year Warranty", desc: "Every installation is backed by 15 years of warranty covering cables, anchors, and fittings.", wide: true },
                ].map(({ icon: Icon, title, desc, wide }) => (
                  <StaggerItem key={title} className={wide ? "sm:col-span-2" : ""}>
                    <div className="mkr-card group h-full p-5 flex gap-4">
                      <div className="mkr-icon shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">{title}</h3>
                        <p className="text-muted-foreground text-[13px] mt-1 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerList>
              <div className="mt-8">
                <Link href="/about-us" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                  About MKR Safety Solutions <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeLeft>
            <FadeRight delay={0.15}>
              <div className="relative p-3 sm:p-4">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-secondary/25 via-secondary/5 to-transparent -rotate-2" aria-hidden="true" />
                <motion.img
                  src={hero2}
                  alt="Child safely watching city view through MKR invisible grills on Bangalore apartment balcony"
                  className="relative rounded-2xl w-full object-cover shadow-2xl"
                  loading="lazy"
                  width={600}
                  height={500}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mkr-float absolute -bottom-2 -left-2 sm:-left-4 bg-white rounded-2xl p-4 shadow-xl border border-border"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <span className="text-sm font-bold">5.0 / 5</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Based on verified Google Reviews</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mkr-float-slow absolute -top-2 -right-2 sm:-right-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-border flex items-center gap-3"
                >
                  <div className="mkr-icon !w-10 !h-10"><BadgeCheck className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm font-bold text-foreground leading-tight">15-Year</div>
                    <div className="text-xs text-muted-foreground">Warranty</div>
                  </div>
                </motion.div>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="mkr-eyebrow">Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">What Bangalore Families Say</h2>
            <p className="text-muted-foreground">Real reviews from real customers across Bangalore</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                className="mkr-card relative p-7 flex flex-col"
                data-testid={`card-testimonial-${i}`}
              >
                <Quote className="absolute top-5 right-5 w-10 h-10 text-secondary/15 fill-secondary/10" aria-hidden="true" />
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <blockquote className="text-foreground/90 text-[14.5px] leading-relaxed mb-6 flex-1">"{t.text}"</blockquote>
                <figcaption className="flex items-center gap-3 pt-5 border-t border-border">
                  <span className="w-11 h-11 rounded-full bg-gradient-to-br from-[hsl(40_62%_58%)] to-secondary text-white font-bold flex items-center justify-center shadow-md">
                    {t.name.trim().charAt(0).toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                      {t.name} <BadgeCheck className="w-4 h-4 text-[#1a73e8]" aria-label="Verified" />
                    </div>
                    <div className="text-xs text-muted-foreground truncate">{t.location} · {t.service}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/reviews" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-secondary/40 text-secondary font-semibold hover:bg-secondary hover:text-white transition-colors">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="mkr-eyebrow">Service Areas</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Serving All Major Areas in Bangalore</h2>
            <p className="text-primary-foreground/70">Same-day site visits available across 12+ neighborhoods</p>
          </FadeUp>
          <StaggerList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {[
              ["Whitefield", "/invisible-grills-whitefield"],
              ["Koramangala", "/invisible-grills-koramangala"],
              ["HSR Layout", "/invisible-grills-hsr-layout"],
              ["Indiranagar", "/invisible-grills-indiranagar"],
              ["Electronic City", "/invisible-grills-electronic-city"],
              ["Marathahalli", "/invisible-grills-marathahalli"],
              ["Bellandur", "/invisible-grills-bellandur"],
              ["Sarjapur Road", "/invisible-grills-sarjapur-road"],
              ["Jayanagar", "/invisible-grills-jayanagar"],
              ["Hebbal", "/invisible-grills-hebbal"],
              ["Yelahanka", "/invisible-grills-yelahanka"],
              ["KR Puram", "/invisible-grills-kr-puram"],
            ].map(([area, href]) => (
              <StaggerItem key={href}>
                <Link
                  href={href}
                  className="group flex items-center gap-2.5 px-4 py-3 bg-white rounded-xl border border-border text-sm font-medium text-foreground shadow-sm hover:border-secondary hover:shadow-md hover:-translate-y-0.5 transition-all"
                  data-testid={`link-location-${area}`}
                >
                  <span className="w-7 h-7 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <MapPin className="w-3.5 h-3.5" />
                  </span>
                  <span className="truncate">{area}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto text-secondary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all hidden sm:block" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="flex justify-between items-end mb-12">
            <div>
              <span className="mkr-eyebrow">Blog</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Latest from Our Blog</h2>
              <p className="text-muted-foreground mt-1">Expert tips on invisible grills and home safety</p>
            </div>
            <Link href="/blog" className="hidden sm:flex items-center gap-2 text-secondary font-semibold">
              All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
          <StaggerList className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.filter((post, i, arr) => {
              const baseSlug = post.slug.replace(/-\d+$/, "");
              return arr.findIndex(p => p.slug.replace(/-\d+$/, "") === baseSlug) === i;
            }).slice(0, 3).map((post, i) => (
              <StaggerItem key={post.slug} className="h-full">
                <Link href={`/blog/${post.slug}`} data-testid={`card-blog-${post.slug}`} className="block h-full">
                  <article className="mkr-card group relative h-full p-7 flex flex-col overflow-hidden">
                    <span className="absolute top-0 left-0 h-1 w-12 bg-gradient-to-r from-secondary to-[hsl(40_62%_58%)] transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">{post.readTime}</span>
                      <span className="text-4xl font-bold text-secondary/15 leading-none">0{i + 1}</span>
                    </div>
                    <h3 className="font-semibold text-foreground text-lg mb-2 leading-snug group-hover:text-secondary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                        Read <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <ScaleIn>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mkr-cta relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[hsl(38_70%_36%)] via-[hsl(40_62%_46%)] to-[hsl(38_70%_32%)] px-6 py-14 sm:px-14 text-center text-white shadow-2xl">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 mkr-float-slow" aria-hidden="true" />
              <div className="absolute -bottom-28 -left-20 w-72 h-72 rounded-full bg-white/10 mkr-float" aria-hidden="true" />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 !text-white">Ready to Secure Your Home?</h2>
                <p className="text-white/85 mb-9 max-w-2xl mx-auto">Book a free site visit today. Our team will assess your space and provide a transparent, no-obligation quote within 24 hours.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link href="/contact-us" onClick={trackGoogleAdsConversion} className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-secondary font-bold rounded-xl shadow-lg w-full">
                      Book Free Site Visit <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <a href="tel:+917780114547" onClick={trackGoogleAdsConversion} className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors w-full">
                      <Phone className="w-4 h-4" /> Call +91 77801 14547
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>
      </section>

      {/* Book a site visit */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <FadeLeft>
            <span className="mkr-eyebrow">Free Site Visit</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get Your Free Quote in 24 Hours</h2>
            <p className="text-muted-foreground mb-6">Tell us about your balcony, window or staircase. Our team visits, measures and gives you a clear price — no obligation.</p>
            <ul className="space-y-3">
              {["Free measurement at your home", "Transparent price per sq.ft", "15-year warranty on every installation"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <span className="mkr-icon !w-8 !h-8 !rounded-lg"><BadgeCheck className="w-4 h-4" /></span>{x}
                </li>
              ))}
            </ul>
          </FadeLeft>
          <FadeRight delay={0.1}>
            <div className="mkr-nolift bg-white border border-border shadow-2xl rounded-[1.75rem] p-6 sm:p-8">
              <InquiryForm title="Book Free Site Visit" compact />
            </div>
          </FadeRight>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <span className="mkr-eyebrow">FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about invisible grills in Bangalore</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {homeFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="mkr-faq">
                  <AccordionTrigger className="text-left font-semibold text-sm py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeUp>
          <FadeUp delay={0.2} className="text-center mt-8">
            <Link href="/faqs" className="inline-flex items-center gap-2 text-secondary font-semibold">
              View All FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
