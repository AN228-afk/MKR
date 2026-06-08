import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Star, CheckCircle, ArrowRight, Phone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { TrustBadges } from "@/components/TrustBadges";
import { InquiryForm } from "@/components/InquiryForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { testimonials, services, blogPosts } from "@/data/services";
import hero1 from "@assets/MKR_3_1780926061320.png";
import hero2 from "@assets/MKR_1_of_child_1780926061320.png";
import img2 from "@assets/MKR_2_1780926061320.png";
import img5 from "@assets/MKR_5_1780926061320.png";
import img4 from "@assets/MKR_4_1780926061320.png";
import img6 from "@assets/2_1780926045097.png";
import img7 from "@assets/6_1780926045097.jpg";

const heroSlides = [
  { src: hero1, alt: "Invisible grills on luxury apartment balcony with panoramic Bangalore city view", label: "Balcony Invisible Grills" },
  { src: hero2, alt: "Child safely enjoying the view through MKR invisible grills on high-rise balcony", label: "Child Safety Grills" },
  { src: img2, alt: "Premium villa balcony with near-invisible stainless steel cable grills", label: "Villa Invisible Grills" },
  { src: img4, alt: "Window invisible grills with lush greenery view preserved completely", label: "Window Invisible Grills" },
  { src: img5, alt: "Elegant staircase invisible grill cable system in modern interior", label: "Staircase Grills" },
  { src: img6, alt: "Balcony with invisible grills and planter arrangement, Bangalore apartment", label: "Balcony Grills" },
  { src: img7, alt: "Apartment balcony with stainless steel invisible grills at dusk", label: "Premium Installations" },
];

const homeFaqs = [
  {
    q: "What are invisible grills and how do they work?",
    a: "Invisible grills use ultra-fine 316-grade marine stainless steel cables (3mm diameter) tensioned between a top channel and bottom anchors. The cables are so thin and precisely spaced that they are nearly invisible from a distance while providing a robust safety barrier rated at 250kg per linear meter.",
  },
  {
    q: "How much do invisible grills cost in Bangalore?",
    a: "Invisible grill prices in Bangalore range from ₹100 to ₹220 per square foot depending on the type (balcony, window, staircase) and the grade of steel used. MKR Safety Solutions provides free site visits and transparent quotations with no hidden charges.",
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
    a: "We exclusively use 316-grade marine stainless steel, which is highly resistant to rust, corrosion, and humidity. This is the same grade used in marine environments. We back every installation with a 10-year warranty.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MKR Safety Solutions",
  description: "Premium invisible grill installation in Bangalore. Balcony, window, staircase, terrace, and villa grills. 316-grade marine SS cables. 10-year warranty.",
  url: "https://mkrsafetysolutions.com",
  telephone: "+91-98765-43210",
  email: "info@mkrsafetysolutions.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 12.9716, longitude: 77.5946 },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500" },
  priceRange: "₹₹",
  areaServed: ["Bangalore", "Whitefield", "Koramangala", "HSR Layout", "Indiranagar", "Bellandur", "Marathahalli"],
  openingHours: "Mo-Sa 09:00-19:00",
  image: "https://mkrsafetysolutions.com/og-image.jpg",
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
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + heroSlides.length) % heroSlides.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((p) => (p + 1) % heroSlides.length);
  };

  return (
    <Layout>
      <SEOHead
        title="Invisible Grills Bangalore | MKR Safety Solutions | Best Price"
        description="Bangalore's #1 invisible grill installer. 316-grade SS cables for balcony, window, staircase & terrace. 1000+ installs, 4.9★ rating, 10-year warranty. Free site visit."
        canonical="https://mkrsafetysolutions.com/"
        schema={[localBusinessSchema, faqSchema]}
      />

      {/* Hero Slideshow Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.img
              key={current}
              src={heroSlides[current].src}
              alt={heroSlides[current].alt}
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: d > 0 ? "8%" : "-8%", opacity: 0, scale: 1.04 }),
                center: { x: 0, opacity: 0.75, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
                exit: (d: number) => ({ x: d > 0 ? "-8%" : "8%", opacity: 0, scale: 0.97, transition: { duration: 0.7, ease: "easeIn" } }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full object-cover"
              width={1200}
              height={800}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        </div>

        {/* Slide Label Pill */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35 }}
              className="px-4 py-1.5 bg-secondary/90 text-secondary-foreground text-xs font-bold rounded-full uppercase tracking-widest shadow"
            >
              {heroSlides[current].label}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 transition-all backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-xs font-semibold mb-6 uppercase tracking-wider">
              <Shield className="w-3 h-3" /> Bangalore's Most Trusted Invisible Grill Company
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Protect Your Family.<br />
              <span className="text-secondary">Never Block The View.</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
              Ultra-fine 316-grade marine stainless steel cables that are nearly invisible from a distance — installed on balconies, windows, staircases and terraces across Bangalore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-all text-base"
                data-testid="button-hero-quote"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20invisible%20grills%20in%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all text-base"
                data-testid="button-hero-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10">
              {[["1000+", "Installations"], ["4.9★", "Google Rating"], ["10 Yr", "Warranty"]].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-secondary">{num}</div>
                  <div className="text-xs text-primary-foreground/70">{label}</div>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2 mt-8">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-secondary"
                      : "w-2 h-2 bg-primary-foreground/30 hover:bg-primary-foreground/60"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
              <InquiryForm title="Book Free Site Visit" compact />
            </div>
          </motion.div>
        </div>
      </section>

      <TrustBadges />

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Invisible Grill Services in Bangalore
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From balconies to staircases, every space deserves a safety solution that doesn't compromise on beauty or views.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Balcony Invisible Grills", href: "/balcony-invisible-grills", desc: "Open balconies secured with near-invisible cables", img: hero1 },
              { title: "Window Invisible Grills", href: "/window-invisible-grills", desc: "Maximum light, maximum safety for every window", img: img4 },
              { title: "Staircase Invisible Grills", href: "/staircase-invisible-grills", desc: "Elegant vertical cable systems for staircases", img: img5 },
              { title: "Villa Invisible Grills", href: "/villa-invisible-grills", desc: "Bespoke solutions for independent villas", img: img2 },
            ].map(({ title, href, desc, img }) => (
              <Link key={href} href={href} data-testid={`card-service-${href}`}>
                <div className="group rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={img}
                      alt={`${title} in Bangalore by MKR Safety Solutions`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width={400}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors" />
                    <div className="absolute bottom-3 left-3 text-white font-bold text-base">{title}</div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground">{desc}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-secondary">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/invisible-grills-bangalore" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose MKR */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why 1000+ Bangalore Families Choose MKR
              </h2>
              <div className="space-y-4">
                {[
                  { title: "316 Grade Marine Stainless Steel", desc: "The highest grade used in marine environments — zero rust even after years of Bangalore rain and humidity." },
                  { title: "250kg Load-Tested Safety", desc: "Each cable is tension-tested to withstand 250kg per linear meter. Our grills are certified, not just claimed." },
                  { title: "Nearly Invisible From Any Angle", desc: "3mm ultra-thin cables spaced precisely to disappear visually while remaining structurally robust." },
                  { title: "Free Site Visit & Custom Quote", desc: "We visit your home, measure every corner, and provide a transparent quote — no obligation required." },
                  { title: "10-Year Warranty", desc: "Every installation is backed by a full decade of warranty covering cables, anchors, and fittings." },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground text-sm">{title}</div>
                      <div className="text-muted-foreground text-sm mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about-us" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                  About MKR Safety Solutions <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={hero2}
                alt="Child safely watching city view through MKR invisible grills on Bangalore apartment balcony"
                className="rounded-2xl w-full object-cover shadow-xl"
                loading="lazy"
                width={600}
                height={500}
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <span className="text-sm font-semibold">4.9 / 5</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Based on 500+ Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">What Bangalore Families Say</h2>
            <p className="text-muted-foreground">Real reviews from real customers across Bangalore</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted rounded-xl p-6 border border-border"
                data-testid={`card-testimonial-${i}`}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location} · {t.service}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-secondary font-semibold">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Serving All Major Areas in Bangalore</h2>
            <p className="text-primary-foreground/70">Same-day site visits available across 12+ neighborhoods</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
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
              <Link
                key={href}
                href={href}
                className="px-4 py-2 border border-primary-foreground/30 rounded-full text-sm text-primary-foreground/90 hover:border-secondary hover:text-secondary transition-all"
                data-testid={`link-location-${area}`}
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Latest from Our Blog</h2>
              <p className="text-muted-foreground mt-1">Expert tips on invisible grills and home safety</p>
            </div>
            <Link href="/blog" className="hidden sm:flex items-center gap-2 text-secondary font-semibold">
              All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} data-testid={`card-blog-${post.slug}`}>
                <article className="border border-border rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <div className="text-xs text-muted-foreground mb-2">{post.date} · {post.readTime}</div>
                  <h3 className="font-semibold text-foreground text-base mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-secondary">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/10 border-t border-secondary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Secure Your Home?</h2>
          <p className="text-muted-foreground mb-8">Book a free site visit today. Our team will assess your space and provide a transparent, no-obligation quote within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Book Free Site Visit
            </Link>
            <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
              <Phone className="w-4 h-4" /> Call +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about invisible grills in Bangalore</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {homeFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium text-sm py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
            <Link href="/faqs" className="inline-flex items-center gap-2 text-secondary font-semibold">
              View All FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
