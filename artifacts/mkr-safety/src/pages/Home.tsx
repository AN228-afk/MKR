import { useState, useEffect } from "react";
import { Link } from "wouter";
import { FadeUp } from "@/components/Animated";
import { PremiumIcon, type PremiumIconName } from "@/components/PremiumIcon";
import { trackGoogleAdsConversion } from "@/lib/gtag";
import { socialLinks } from "@/lib/social";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { PriceCalculator } from "@/components/PriceCalculator";
import { InquiryForm } from "@/components/InquiryForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { testimonials, blogPosts } from "@/data/services";
import hero1 from "@assets/MKR_3_1780926061320.webp";
import img2 from "@assets/MKR_2_1780926061320.webp";
import img5 from "@assets/MKR_5_1780926061320.webp";
import img4 from "@assets/MKR_4_1780926061320.webp";
import img6 from "@assets/2_1780926045097.webp";
import img7 from "@assets/6_1780926045097.jpg";
import img8 from "@assets/5_1780926045097.webp";
import img9 from "@assets/3_1780926045097.jpg";

const WA = "https://wa.me/917780114547?text=Hi%2C%20I%20need%20invisible%20grills%20in%20Bangalore.";
const SLIDE_MS = 6000;

const heroSlides = [
  {
    src: hero1,
    alt: "Invisible grills on luxury apartment balcony with panoramic Bangalore city view",
    label: "Balcony Invisible Grills",
    heading: "Protect Your Balcony.",
    accent: "Keep The View Forever.",
    sub: "Ultra-fine 316-grade marine SS cables secured at 3mm spacing — nearly invisible from a distance, load-tested to 250 kg/m.",
  },
  {
    src: img7,
    alt: "Child safely looking out from a high-rise balcony through MKR invisible grills at sunset",
    label: "Child Safety Grills",
    heading: "Your Child Deserves",
    accent: "A Safe, Open World.",
    sub: "2.5mm child-safe cable variants certified for toddlers and pets. Trusted by Bangalore families in high-rise apartments.",
  },
  {
    src: img2,
    alt: "Premium villa balcony with near-invisible stainless steel cable grills",
    label: "Villa Invisible Grills",
    heading: "Luxury Villas Deserve",
    accent: "Invisible Protection.",
    sub: "Bespoke cable grill systems designed for large villa balconies and terraces — seamlessly blending with premium architecture.",
  },
  {
    src: img4,
    alt: "Window invisible grills with lush greenery view preserved completely",
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
    src: img8,
    alt: "Open balcony with stainless steel invisible grills overlooking green trees",
    label: "15-Year Warranty",
    heading: "316 Marine SS Steel.",
    accent: "Zero Rust. Ever.",
    sub: "The same grade used in marine environments. Resistant to Bangalore humidity, rain, and coastal conditions — guaranteed.",
  },
];

const serviceCards = [
  {
    title: "Balcony Invisible Grills",
    href: "/balcony-invisible-grills",
    desc: "Secure open balconies with 3mm ultra-fine 316-grade SS cables. Load-tested to 250 kg/m. Panoramic views fully preserved.",
    img: hero1,
    waMsg: "Hi, I need Balcony Invisible Grills in Bangalore. Please share details.",
  },
  {
    title: "Window Invisible Grills",
    href: "/window-invisible-grills",
    desc: "Replace heavy iron grills with nearly invisible cables. Maximum light, ventilation, and safety for every window.",
    img: img4,
    waMsg: "Hi, I need Window Invisible Grills in Bangalore. Please share details.",
  },
  {
    title: "Staircase Invisible Grills",
    href: "/staircase-invisible-grills",
    desc: "Elegant vertical cable railings for open staircases — child-safe, pet-safe, and stunning in modern interiors.",
    img: img5,
    waMsg: "Hi, I need Staircase Invisible Grills in Bangalore. Please share details.",
  },
  {
    title: "Villa Invisible Grills",
    href: "/villa-invisible-grills",
    desc: "Bespoke cable grill systems for independent villas with large balconies, terraces, and custom architectural needs.",
    img: img2,
    waMsg: "Hi, I need Villa Invisible Grills in Bangalore. Please share details.",
  },
];

const reasons = [
  { title: "316 Grade Marine Stainless Steel", desc: "The highest grade used in marine environments — zero rust even after years of Bangalore rain and humidity." },
  { title: "250kg Load-Tested Safety", desc: "Each cable is tension-tested to withstand 250kg per linear meter. Our grills are certified, not just claimed." },
  { title: "Nearly Invisible From Any Angle", desc: "3mm ultra-thin cables spaced precisely to disappear visually while remaining structurally robust." },
  { title: "Free Site Visit & Custom Quote", desc: "We visit your home, measure every corner, and provide a transparent quote — no obligation required." },
  { title: "15-Year Warranty", desc: "Every installation is backed by a full 15 years of warranty covering cables, anchors, and fittings." },
];

const areas = [
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
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "10" },
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

/* Shared building blocks, in the HomeNest style */
const wrap = "max-w-7xl mx-auto px-5 sm:px-6 lg:px-8";
const section = "pt-[clamp(48px,6vw,88px)]";
const btnBase = "caps inline-flex items-center justify-center min-h-[52px] px-7 border transition-colors";
const btnLight = `${btnBase} bg-white text-foreground border-white hover:bg-secondary hover:border-secondary hover:text-white`;
const btnOutlineLight = `${btnBase} bg-transparent text-white border-white/70 hover:bg-white hover:text-foreground`;
const btnBlue = `${btnBase} rounded-full bg-[#2a8af0] text-white border-[#2a8af0] hover:bg-[#4198f2] hover:border-[#4198f2]`;
const btnOutlineBlue = `${btnBase} rounded-full bg-transparent text-[#2a8af0] border-[#2a8af0] hover:bg-[#2a8af0] hover:text-white`;
const textLink = "caps inline-block pb-1 border-b border-secondary text-foreground hover:text-secondary transition-colors";

function SectionHead({ no, title, link }: { no: string; title: string; link?: { href: string; label: string } }) {
  return (
    <FadeUp className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5 mb-8">
      <div>
        <span className="sec-no">{no}</span>
        <h2 className="text-[clamp(2rem,3.8vw,3.1rem)] text-foreground max-w-[20ch]">{title}</h2>
      </div>
      {link && <Link href={link.href} className={textLink}>{link.label}</Link>}
    </FadeUp>
  );
}

function PhotoBand({ src, alt, title, accent, text }: { src: string; alt: string; title: string; accent: string; text: string }) {
  return (
    <section className="relative mt-[clamp(48px,6vw,88px)] h-[clamp(420px,70vh,760px)] overflow-hidden flex items-end text-white">
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1600} height={1000} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
      <div className={`${wrap} relative z-10 w-full pb-[clamp(32px,5vw,64px)]`}>
        <h2 className="text-white text-[clamp(2.4rem,6vw,5.2rem)] leading-[.98] max-w-[16ch] mb-4">
          {title} <em className="italic text-brand-light">{accent}</em>
        </h2>
        <p className="text-white/85 font-light max-w-[46ch] text-[1.05rem]">{text}</p>
      </div>
    </section>
  );
}

/* Icon feature card (used in place of photos in two sections) */
function FeatureCard({ icon, title, children }: { icon: PremiumIconName; title: string; no?: string; children: React.ReactNode }) {
  return (
    <div className="h-full bg-white rounded-[24px] p-8 sm:p-9 flex flex-col gap-3 shadow-[0_1px_2px_rgba(0,0,0,.04),0_8px_24px_-12px_rgba(0,0,0,.08)] transition-transform duration-500 hover:-translate-y-1">
      <PremiumIcon name={icon} className="w-16 h-16 mb-3" />
      <h3 className="text-[#1d1d1f] font-semibold text-[1.2rem] tracking-[-0.01em] leading-snug">{title}</h3>
      <div className="text-[#6e6e73] text-[0.98rem] leading-relaxed">{children}</div>
    </div>
  );
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % heroSlides.length), SLIDE_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const slide = heroSlides[current];
  const uniquePosts = blogPosts
    .filter((post, i, arr) => arr.findIndex((p) => p.slug.replace(/-\d+$/, "") === post.slug.replace(/-\d+$/, "")) === i)
    .slice(0, 3);

  return (
    <Layout>
      <SEOHead
        title="Invisible Grills Bangalore | MKR Safety Solutions | Best Price"
        description="Bangalore's #1 invisible grill installer. 316-grade SS cables for balcony, window, staircase & terrace. 2000+ installs, 5.0★ rating, 15-year warranty. Free site visit."
        canonical="https://mkrsafetysolutions.com/"
        schema={[localBusinessSchema, faqSchema]}
      />

      {/* ---------- Hero: full-screen photos, header sits on top ---------- */}
      <section
        className="relative -mt-16 md:-mt-20 h-[100svh] min-h-[600px] max-h-[1100px] overflow-hidden bg-[#0b0a09] text-white flex flex-col justify-end"
        aria-roledescription="carousel"
        aria-label="Our work"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {heroSlides.map((s, i) => (
          <div
            key={s.label}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ${i === current ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== current}
          >
            <img
              src={s.src}
              alt={s.alt}
              className={`w-full h-full object-cover ${i === current ? "mkr-zoom" : ""}`}
              width={1600}
              height={1000}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          </div>
        ))}
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(90deg,rgba(0,0,0,.78)_0%,rgba(0,0,0,.55)_40%,rgba(0,0,0,.18)_75%,rgba(0,0,0,.05)_100%)]" />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(180deg,rgba(0,0,0,.6)_0%,rgba(0,0,0,0)_22%,rgba(0,0,0,0)_55%,rgba(0,0,0,.75)_100%)]" />
        {/* thin cables that drop in when the page opens */}
        <div className="absolute inset-0 z-[2] flex justify-around px-[4vw] pointer-events-none" aria-hidden="true">
          {Array.from({ length: 22 }).map((_, i) => (
            <i key={i} className={`mkr-cable ${i >= 10 ? "hidden md:block" : ""}`} style={{ ["--i" as string]: i } as React.CSSProperties} />
          ))}
        </div>

        <div className={`${wrap} relative z-[3] w-full pb-8`}>
          <div key={current} className="mkr-rise [text-shadow:0_2px_24px_rgba(0,0,0,.45)]">
            <p className="caps flex items-center gap-3.5 text-white/80 mb-5 before:content-[''] before:w-11 before:h-px before:bg-brand-light">
              {slide.label}
            </p>
            <h1 className="text-white text-[clamp(2.5rem,7vw,6.2rem)] leading-[1] max-w-[15ch] mb-6">
              {slide.heading} <em className="italic text-white/90">{slide.accent}</em>
            </h1>
            <p className="text-white/90 font-normal text-[clamp(1rem,1.3vw,1.18rem)] max-w-[44ch] mb-8">{slide.sub}</p>
          </div>
          <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3">
            <Link href="/contact-us" className={btnBlue} data-testid="button-hero-quote">
              Get a free quote
            </Link>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnOutlineLight} rounded-full`}
              data-testid="button-hero-whatsapp"
              onClick={trackGoogleAdsConversion}
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className={`${wrap} relative z-[3] w-full`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-t border-white/25 pt-4 pb-6">
            <ul className="hidden sm:flex flex-wrap gap-x-10 gap-y-1 text-[0.72rem] tracking-[0.16em] uppercase text-white/80">
              <li>2000+ installations</li>
              <li>5.0★ Google rating</li>
              <li>15-year warranty</li>
              <li>Free site visit</li>
            </ul>
            <div className="flex gap-1.5 md:w-[240px]">
              {heroSlides.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setCurrent(i)}
                  aria-label={`Show slide ${i + 1}: ${s.label}`}
                  aria-current={i === current}
                  className="flex-1 h-8 flex items-center"
                >
                  <span className={`block w-full h-[2px] transition-colors ${i === current ? "bg-brand-light" : "bg-white/35"}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Statement + numbers ---------- */}
      <section className={section}>
        <div className={`${wrap} grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-end`}>
          <FadeUp>
            <p className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.12] text-foreground">
              We make balconies, windows and staircases <em className="italic text-secondary">safe for children and pets</em>, with cables so fine the view stays exactly as it was.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-foreground pt-8">
              {[
                ["2000+", "Installations"],
                ["5.0★", "Google rating"],
                ["8+ yrs", "Experience"],
                ["15 yrs", "Warranty"],
              ].map(([num, label]) => (
                <div key={label} className="flex flex-col-reverse">
                  <dt className="caps text-muted-foreground mt-3">{label}</dt>
                  <dd className="font-serif text-[clamp(2.2rem,3.4vw,3rem)] leading-none text-foreground">{num}</dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>
      </section>

      {/* ---------- 01 Services ---------- */}
      <section className={section}>
        <div className={wrap}>
          <SectionHead no="01 — Services" title="Invisible grill services in Bangalore" link={{ href: "/invisible-grills-bangalore", label: "All services" }} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3.5 sm:gap-x-8 gap-y-12">
            {serviceCards.map(({ title, href, desc, img, waMsg }) => (
              <FadeUp key={href}>
                <article className="group">
                  <Link href={href} data-testid={`card-service-${href}`} className="block">
                    <div className="aspect-[4/5] overflow-hidden bg-muted mb-5">
                      <img
                        src={img}
                        alt={`${title} in Bangalore by MKR Safety Solutions`}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                        loading="lazy"
                        width={800}
                        height={1000}
                      />
                    </div>
                    <h3 className="font-serif text-[1.25rem] sm:text-[1.65rem] font-medium leading-[1.1] text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {title}
                    </h3>
                  </Link>
                  <p className="hidden sm:block text-[0.95rem] text-muted-foreground leading-relaxed">{desc}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-[0.68rem] tracking-[0.18em] uppercase">
                    <a href="tel:+917780114547" onClick={trackGoogleAdsConversion} className="text-foreground hover:text-secondary py-1">
                      Call
                    </a>
                    <a
                      href={`https://wa.me/917780114547?text=${encodeURIComponent(waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={trackGoogleAdsConversion}
                      className="text-foreground hover:text-secondary py-1"
                    >
                      WhatsApp
                    </a>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-[clamp(48px,6vw,88px)] py-[clamp(44px,5.5vw,76px)] bg-[#f5f5f7]">
        <div className={wrap}>
          <SectionHead no="Trusted across Bangalore" title="Bangalore's most trusted grill brand" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {[
              { icon: "home" as PremiumIconName, num: "2000+", label: "Homes secured" },
              { icon: "star" as PremiumIconName, num: "5.0★", label: "Google rating" },
              { icon: "clock" as PremiumIconName, num: "8+ yrs", label: "Experience" },
              { icon: "award" as PremiumIconName, num: "15 yrs", label: "Warranty on every job" },
            ].map(({ icon, num, label }) => (
              <FadeUp key={label}>
                <div className="h-full bg-white rounded-[24px] p-6 sm:p-8 flex flex-col gap-5 shadow-[0_1px_2px_rgba(0,0,0,.04),0_8px_24px_-12px_rgba(0,0,0,.08)]">
                  <PremiumIcon name={icon} className="w-14 h-14" />
                  <div>
                    <div className="font-serif text-[clamp(2.2rem,3.6vw,3rem)] leading-none text-[#1d1d1f]">{num}</div>
                    <div className="text-sm text-muted-foreground mt-2">{label}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-[clamp(48px,6vw,88px)]">
        <PriceCalculator />
      </div>

      {/* ---------- 02 Why MKR ---------- */}
      <section className="mt-[clamp(48px,6vw,88px)] py-[clamp(44px,5.5vw,76px)] bg-[#f5f5f7]">
        <div className={wrap}>
          <SectionHead no="02 — Why MKR" title="Why 2000+ Bangalore families choose MKR" link={{ href: "/about-us", label: "About MKR" }} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <FadeUp><FeatureCard icon="shield" title="316 Grade Marine Stainless Steel">The highest grade used in marine environments — zero rust even after years of Bangalore rain and humidity.</FeatureCard></FadeUp>
            <FadeUp delay={0.05}><FeatureCard icon="load" title="250kg Load-Tested Safety">Each cable is tension-tested to withstand 250kg per linear meter. Our grills are certified, not just claimed.</FeatureCard></FadeUp>
            <FadeUp delay={0.1}><FeatureCard icon="eye" title="Nearly Invisible From Any Angle">3mm ultra-thin cables spaced precisely to disappear visually while remaining structurally robust.</FeatureCard></FadeUp>
            <FadeUp><FeatureCard icon="visit" title="Free Site Visit & Custom Quote">We visit your home, measure every corner, and provide a transparent quote — no obligation required.</FeatureCard></FadeUp>
            <FadeUp delay={0.05}><FeatureCard icon="rupee" title="Clear, Honest Pricing">₹100 to ₹160 per sq ft, with the same price for 2.5mm and 3mm cables. No hidden charges.</FeatureCard></FadeUp>
            <FadeUp delay={0.1}><FeatureCard icon="award" title="15-Year Warranty">Every installation is backed by a full 15 years of warranty covering cables, anchors, and fittings.</FeatureCard></FadeUp>
          </div>
          <p className="flex items-center gap-3 mt-8 text-sm text-muted-foreground">
            <span className="text-foreground tracking-[0.2em]" aria-hidden="true">★★★★★</span>
            5.0 / 5 — based on verified Google Reviews
          </p>
        </div>
      </section>

      {/* ---------- 03 Reviews ---------- */}
      <section className={section}>
        <div className={wrap}>
          <SectionHead no="03 — Reviews" title="What Bangalore families say" link={{ href: "/reviews", label: "Read all reviews" }} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {testimonials.slice(0, 6).map((t, i) => (
              <FadeUp key={i} delay={(i % 3) * 0.08}>
                <figure className="border-t border-foreground pt-6" data-testid={`card-testimonial-${i}`}>
                  <span className="text-secondary tracking-[0.2em] text-sm" aria-label="5 out of 5 stars">★★★★★</span>
                  <blockquote className="font-serif italic text-[1.35rem] leading-snug text-foreground mt-4 mb-6">“{t.text}”</blockquote>
                  <figcaption>
                    <div className="text-foreground font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.location} · {t.service}</div>
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <PhotoBand
        src={img9}
        alt="Curved apartment balcony fitted with stainless steel invisible grills"
        title="316 marine SS steel."
        accent="Zero rust. Ever."
        text="The same grade used in marine environments. Resistant to Bangalore humidity, rain, and coastal conditions — guaranteed."
      />

      {/* ---------- 04 Areas ---------- */}
      <section className={section}>
        <div className={wrap}>
          <SectionHead no="04 — Areas" title="Serving all major areas in Bangalore" />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 border-t border-border">
            {areas.map(([area, href], i) => (
              <li key={href} className="border-b border-border">
                <Link
                  href={href}
                  data-testid={`link-location-${area}`}
                  className={`flex items-baseline justify-between gap-3 py-5 font-serif text-[clamp(1.4rem,2vw,1.8rem)] transition-all duration-300 hover:text-secondary hover:pl-2.5 ${i === 0 ? "text-secondary" : "text-foreground"}`}
                >
                  {area}
                  <span className="font-sans text-[0.64rem] tracking-[0.18em] uppercase text-muted-foreground whitespace-nowrap">Invisible grills</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-sm mt-6">Same-day site visits available across 12+ neighborhoods.</p>
        </div>
      </section>

      {/* ---------- 05 Blog ---------- */}
      <section className={section}>
        <div className={wrap}>
          <SectionHead no="05 — Journal" title="Latest from our blog" link={{ href: "/blog", label: "All posts" }} />
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
            {uniquePosts.map((post) => (
              <FadeUp key={post.slug}>
                <article className="border-t border-foreground pt-6 h-full">
                  <Link href={`/blog/${post.slug}`} data-testid={`card-blog-${post.slug}`} className="group block">
                    <div className="text-[0.68rem] tracking-[0.18em] uppercase text-muted-foreground mb-3">{post.date} · {post.readTime}</div>
                    <h3 className="font-serif text-[1.5rem] font-medium leading-[1.15] text-foreground mb-3 group-hover:text-secondary transition-colors">{post.title}</h3>
                    <p className="text-[0.95rem] text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  </Link>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 06 FAQ ---------- */}
      <section className={section}>
        <div className={`${wrap} grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20`}>
          <FadeUp>
            <span className="sec-no">06 — Questions</span>
            <h2 className="text-[clamp(2rem,3.8vw,3.1rem)] text-foreground mb-6">Frequently asked questions</h2>
            <Link href="/faqs" className={textLink}>View all FAQs</Link>
          </FadeUp>
          <Accordion type="single" collapsible className="border-t border-foreground">
            {homeFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-serif text-[1.3rem] font-medium text-foreground py-6 hover:no-underline hover:text-secondary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[0.98rem] pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ---------- Closing: call, WhatsApp or book a visit ---------- */}
      <section className="mt-[clamp(48px,6vw,88px)] bg-[#f5f5f7] text-[#1d1d1f] py-[clamp(48px,6vw,88px)]">
        <div className={`${wrap} grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
          <div>
            <span className="sec-no">Free site visit</span>
            <h2 className="text-foreground text-[clamp(2.2rem,4.5vw,3.6rem)] mb-5">Ready to secure your home?</h2>
            <p className="text-muted-foreground max-w-[44ch] mb-8">
              Book a free site visit today. Our team will assess your space and provide a transparent, no-obligation quote within 24 hours.
            </p>
            <a
              href="tel:+917780114547"
              onClick={trackGoogleAdsConversion}
              className="block font-serif text-foreground text-[clamp(2rem,4vw,3.2rem)] leading-none hover:text-secondary transition-colors mb-8"
            >
              +91 77801 14547
            </a>
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer" onClick={trackGoogleAdsConversion} className={btnBlue}>
                WhatsApp us
              </a>
              <Link href="/contact-us" onClick={trackGoogleAdsConversion} className={btnOutlineBlue}>
                Book free site visit
              </Link>
            </div>
          </div>
          <div className="bg-white text-foreground border border-border rounded-[22px] p-6 sm:p-10">
            <InquiryForm title="Book a free site visit" compact />
          </div>
        </div>
      </section>
    </Layout>
  );
}
