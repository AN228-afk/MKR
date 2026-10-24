import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { FloatingCTA } from "./FloatingCTA";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { trackGoogleAdsConversion } from "@/lib/gtag";

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

const footerLocations = [
  ["Whitefield", "/invisible-grills-whitefield"],
  ["Koramangala", "/invisible-grills-koramangala"],
  ["HSR Layout", "/invisible-grills-hsr-layout"],
  ["Indiranagar", "/invisible-grills-indiranagar"],
  ["Electronic City", "/invisible-grills-electronic-city"],
  ["Marathahalli", "/invisible-grills-marathahalli"],
  ["Bellandur", "/invisible-grills-bellandur"],
  ["Hebbal", "/invisible-grills-hebbal"],
];

const quickLinks = [
  ["About Us", "/about-us"],
  ["Pricing", "/pricing"],
  ["Projects", "/projects"],
  ["Gallery", "/gallery"],
  ["Customer Reviews", "/reviews"],
  ["FAQs", "/faqs"],
  ["Blog", "/blog"],
  ["Contact Us", "/contact-us"],
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On the home page the header sits on top of the hero photo until you scroll.
  const overlay = location === "/" && !scrolled && !menuOpen;
  const linkTone = overlay ? "text-white/90 hover:text-white" : "text-foreground hover:text-secondary";

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 border-b ${
          overlay ? "bg-transparent border-transparent" : "bg-background/95 backdrop-blur border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 gap-6">
            <Link href="/" className="flex items-center min-w-0" aria-label="MKR Safety Solutions - Invisible Grills Bangalore">
              <Logo variant={overlay ? "dark" : "light"} className="text-[19px] sm:text-[22px] lg:text-[18px] xl:text-[22px]" />
            </Link>

            <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
              <div className="relative group">
                <button className={`caps flex items-center gap-1.5 py-2 transition-colors ${linkTone}`} aria-haspopup="true">
                  Services <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-3 w-64 bg-background border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-5 py-3 text-sm text-foreground border-b border-border last:border-b-0 hover:text-secondary transition-colors"
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
                  aria-current={location === link.href ? "page" : undefined}
                  className={`caps py-2 transition-colors ${location === link.href && !overlay ? "text-secondary" : linkTone}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="tel:+917780114547"
                onClick={trackGoogleAdsConversion}
                className={`hidden xl:inline text-sm font-medium tracking-wider transition-colors ${linkTone}`}
                aria-label="Call MKR Safety Solutions"
              >
                +91 77801 14547
              </a>
              <Link
                href="/contact-us"
                className={`caps hidden sm:inline-flex items-center min-h-[44px] px-6 border rounded-full transition-colors ${
                  overlay
                    ? "bg-[#2a8af0] text-white border-[#2a8af0] hover:bg-[#4198f2] hover:border-[#4198f2]"
                    : "bg-[#2a8af0] text-white border-[#2a8af0] hover:bg-[#4198f2] hover:border-[#4198f2]"
                }`}
              >
                Free Quote
              </Link>
              <button
                className={`lg:hidden w-11 h-11 -mr-2 flex items-center justify-center ${overlay ? "text-white" : "text-foreground"}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-background border-t border-border max-h-[calc(100svh-64px)] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-5 pb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-4 text-[1.05rem] text-foreground border-b border-border"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <p className="sec-no mt-6 mb-1">Services</p>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block py-3 text-[0.98rem] text-muted-foreground border-b border-border"
                  onClick={() => setMenuOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
              <SocialLinks className="mt-6" />
              <Link
                href="/contact-us"
                className="caps mt-6 flex items-center justify-center min-h-[52px] rounded-full bg-[#2a8af0] text-white"
                onClick={() => setMenuOpen(false)}
              >
                Get a free quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-[#f5f5f7] text-[#6e6e73] border-t border-[#d2d2d7]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
            <div className="col-span-2 lg:col-span-1">
              <Logo variant="light" className="text-[22px]" />
              <p className="text-sm leading-relaxed mt-5 max-w-[34ch]">
                Bangalore's most trusted invisible grill installer. Protecting families without compromising views since 2016.
              </p>
              <div className="flex flex-col gap-1.5 text-sm mt-5">
                <a href="tel:+917780114547" onClick={trackGoogleAdsConversion} className="text-[#1d1d1f] hover:text-secondary transition-colors">+91 77801 14547</a>
                <a href="mailto:mkrsafetysolutions@gmail.com" className="hover:text-secondary transition-colors">mkrsafetysolutions@gmail.com</a>
                <span>Bangalore, Karnataka, India</span>
              </div>
              <SocialLinks className="mt-6" />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-[#1d1d1f] text-[0.7rem] tracking-[0.24em] uppercase font-normal mb-5">Services</h3>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-sm hover:text-secondary transition-colors">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[#1d1d1f] text-[0.7rem] tracking-[0.24em] uppercase font-normal mb-5">Locations</h3>
              <ul className="space-y-2.5">
                {footerLocations.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-sm hover:text-secondary transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[#1d1d1f] text-[0.7rem] tracking-[0.24em] uppercase font-normal mb-5">Quick Links</h3>
              <ul className="space-y-2.5">
                {quickLinks.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-sm hover:text-secondary transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-[#d2d2d7] flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#6e6e73]">
            <p>© {new Date().getFullYear()} MKR Safety Solutions. All rights reserved. Bangalore, Karnataka, India.</p>
            <p>Invisible Grills · Balcony Safety · Child Protection · Bangalore</p>
          </div>
        </div>
      </footer>

      {/* room for the phone call / WhatsApp bar */}
      <div className="h-14 sm:hidden" aria-hidden="true" />
      <FloatingCTA />
    </div>
  );
}
