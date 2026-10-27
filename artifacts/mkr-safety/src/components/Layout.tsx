import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FloatingCTA } from "./FloatingCTA";
import logoPath from "@assets/MKR_PHOTO_small_1780926061320.jpeg";
import { trackGoogleAdsConversion } from "@/lib/gtag";
import { SocialLinks } from "./SocialLinks";
import { useScrollReveal } from "@/lib/useScrollReveal";

const taglines = ["Invisible Grills", "Child Safety Experts", "15-Year Warranty", "Free Site Visit"];

const services = [
  { label: "Invisible Grills Bangalore", href: "/invisible-grills-bangalore" },
  { label: "Balcony Invisible Grills", href: "/balcony-invisible-grills" },
  { label: "Window Invisible Grills", href: "/window-invisible-grills" },
  { label: "Staircase Invisible Grills", href: "/staircase-invisible-grills" },
  { label: "Terrace Invisible Grills", href: "/terrace-invisible-grills" },
  { label: "Villa Invisible Grills", href: "/villa-invisible-grills" },
  { label: "Child Safety Grills", href: "/child-safety-grills" },
  { label: "School Safety Grills", href: "/school-safety-grills" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  { label: "Store Locator", href: "/store-locator" },
  { label: "Contact", href: "/contact-us" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();
  useScrollReveal(location);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const [tagIdx, setTagIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTagIdx((i) => (i + 1) % taglines.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <motion.div className="mkr-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <header className="mkr-header-in sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src={logoPath}
                alt="MKR Safety Solutions - Invisible Grills Bangalore"
                className="h-10 md:h-12 w-auto object-contain flex-shrink-0"
                width={120}
                height={48}
              />
              <div className="lg:hidden flex flex-col leading-tight overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm font-bold text-foreground whitespace-nowrap"
                >
                  MKR Safety Solutions
                </motion.span>
                <div className="h-4 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={tagIdx}
                      initial={{ y: 14, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -14, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="block text-[10px] font-semibold text-[hsl(44,65%,32%)] uppercase tracking-wide whitespace-nowrap"
                    >
                      {taglines[tagIdx]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              <Link href="/" className={`text-sm font-medium transition-colors hover:text-secondary ${location === "/" ? "text-secondary" : "text-foreground"}`}>
                Home
              </Link>

              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-secondary transition-colors"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${location === link.href ? "text-secondary" : "text-foreground"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:+917780114547" onClick={trackGoogleAdsConversion}
                className="hidden md:flex items-center gap-2 text-sm text-foreground hover:text-secondary transition-colors"
                aria-label="Call MKR Safety Solutions"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 77801 14547</span>
              </a>
              <Link
                href="/contact-us"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Free Quote
              </Link>
              <button
                className="lg:hidden p-2 text-foreground"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2.5 px-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                <p className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Services</p>
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block py-2 px-3 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              <div className="pt-3">
                <Link
                  href="/contact-us"
                  className="block w-full text-center px-4 py-3 bg-secondary text-secondary-foreground text-sm font-semibold rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <motion.main
        key={location}
        className="flex-1"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>

      <footer className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-secondary to-transparent" aria-hidden="true" />
        <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-secondary/[0.06]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Brand */}
            <div className="lg:col-span-4">
              <div className="inline-flex items-center bg-white rounded-2xl px-4 py-3 mb-5 shadow-[0_10px_30px_-15px_rgba(60,45,10,.35)] border border-border">
                <img src={logoPath} alt="MKR Safety Solutions" className="h-12 w-auto object-contain" width={140} height={48} />
              </div>
              <p className="text-sm text-primary-foreground/75 leading-relaxed mb-5 max-w-sm">
                Bangalore's most trusted invisible grill installer. Protecting families without compromising views since 2016.
              </p>
              <Link href="/reviews" className="inline-flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-2.5 mb-6 hover:border-secondary transition-colors">
                <span className="text-lg font-bold text-foreground">5.0</span>
                <span className="flex text-yellow-400">{"★★★★★"}</span>
                <span className="text-xs text-muted-foreground">13 Google reviews</span>
              </Link>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="tel:+917780114547" onClick={trackGoogleAdsConversion} className="group flex items-center gap-3 text-primary-foreground/85 hover:text-secondary transition-colors">
                    <span className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-colors"><Phone className="w-4 h-4" /></span>
                    +91 77801 14547
                  </a>
                </li>
                <li>
                  <a href="mailto:mkrsafetysolutions@gmail.com" className="group flex items-center gap-3 text-primary-foreground/85 hover:text-secondary transition-colors break-all">
                    <span className="w-9 h-9 shrink-0 rounded-xl bg-white border border-border flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-colors"><Mail className="w-4 h-4" /></span>
                    mkrsafetysolutions@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-primary-foreground/85">
                  <span className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center text-secondary"><MapPin className="w-4 h-4" /></span>
                  Bangalore, Karnataka, India
                </li>
              </ul>
              <SocialLinks className="mt-6" />
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="mkr-foot-h">Services</h3>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="mkr-foot-link">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="lg:col-span-3">
              <h3 className="mkr-foot-h">Locations</h3>
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2.5">
                {[
                  ["Whitefield", "/invisible-grills-whitefield"],
                  ["Koramangala", "/invisible-grills-koramangala"],
                  ["HSR Layout", "/invisible-grills-hsr-layout"],
                  ["Indiranagar", "/invisible-grills-indiranagar"],
                  ["Electronic City", "/invisible-grills-electronic-city"],
                  ["Marathahalli", "/invisible-grills-marathahalli"],
                  ["Bellandur", "/invisible-grills-bellandur"],
                  ["Hebbal", "/invisible-grills-hebbal"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="mkr-foot-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className="lg:col-span-2">
              <h3 className="mkr-foot-h">Quick Links</h3>
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2.5">
                {[
                  ["About Us", "/about-us"],
                  ["Pricing", "/pricing"],
                  ["Projects", "/projects"],
                  ["Gallery", "/gallery"],
                  ["Reviews", "/reviews"],
                  ["FAQs", "/faqs"],
                  ["Blog", "/blog"],
                  ["Contact Us", "/contact-us"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="mkr-foot-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left md:pr-20">
              <p className="text-xs text-primary-foreground/60">
                © {new Date().getFullYear()} MKR Safety Solutions. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/60">
                Invisible Grills · Balcony Safety · Child Protection · Bangalore
              </p>
            </div>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
}
