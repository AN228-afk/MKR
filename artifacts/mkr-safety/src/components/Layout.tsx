import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { FloatingCTA } from "./FloatingCTA";
import logoPath from "@assets/MKR_PHOTO_1780926061320.jpeg";

const services = [
  { label: "Invisible Grills Bangalore", href: "/invisible-grills-bangalore" },
  { label: "Balcony Grills", href: "/balcony-invisible-grills" },
  { label: "Window Grills", href: "/window-invisible-grills" },
  { label: "Staircase Grills", href: "/staircase-invisible-grills" },
  { label: "Terrace Grills", href: "/terrace-invisible-grills" },
  { label: "Villa Grills", href: "/villa-invisible-grills" },
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
  { label: "Contact", href: "/contact-us" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3">
              <img
                src={logoPath}
                alt="MKR Safety Solutions - Invisible Grills Bangalore"
                className="h-10 md:h-12 w-auto object-contain"
                width={120}
                height={48}
              />
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
                href="tel:+919876543210"
                className="hidden md:flex items-center gap-2 text-sm text-foreground hover:text-secondary transition-colors"
                aria-label="Call MKR Safety Solutions"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 98765 43210</span>
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

      <main className="flex-1">{children}</main>

      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <img
                src={logoPath}
                alt="MKR Safety Solutions"
                className="h-12 w-auto object-contain mb-4 brightness-0 invert"
                width={120}
                height={48}
              />
              <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">
                Bangalore's most trusted invisible grill installer. Protecting families without compromising views since 2016.
              </p>
              <div className="flex flex-col gap-1 text-sm text-primary-foreground/80">
                <a href="tel:+919876543210" className="hover:text-secondary transition-colors">+91 98765 43210</a>
                <a href="mailto:info@mkrsafetysolutions.com" className="hover:text-secondary transition-colors">info@mkrsafetysolutions.com</a>
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wide text-secondary mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wide text-secondary mb-4">Locations</h3>
              <ul className="space-y-2">
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
                    <Link href={href} className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wide text-secondary mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  ["About Us", "/about-us"],
                  ["Projects", "/projects"],
                  ["Gallery", "/gallery"],
                  ["Customer Reviews", "/reviews"],
                  ["FAQs", "/faqs"],
                  ["Blog", "/blog"],
                  ["Contact Us", "/contact-us"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-primary-foreground/60">
                © {new Date().getFullYear()} MKR Safety Solutions. All rights reserved. Bangalore, Karnataka, India.
              </p>
              <p className="text-xs text-primary-foreground/60">
                Invisible Grills | Balcony Safety | Child Protection | Bangalore
              </p>
            </div>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </div>
  );
}
