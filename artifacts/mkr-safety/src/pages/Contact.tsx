import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InquiryForm } from "@/components/InquiryForm";

export default function Contact() {
  return (
    <Layout>
      <SEOHead
        title="Contact MKR Safety Solutions | Free Quote for Invisible Grills Bangalore"
        description="Get a free quote for invisible grills in Bangalore. Call, WhatsApp, or fill our form. Same-day site visit available. MKR Safety Solutions, Bangalore."
        canonical="https://mkrsafetysolutions.com/contact-us"
      />

      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact Us" }]} />
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact MKR Safety Solutions</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get a free site visit and quote for invisible grills at your home or commercial property in Bangalore.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-muted rounded-2xl p-8 border border-border mb-6">
                <InquiryForm title="Get a Free Quote" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-6">Reach Us Directly</h2>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                    { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/919876543210" },
                    { icon: Mail, label: "Email", value: "info@mkrsafetysolutions.com", href: "mailto:info@mkrsafetysolutions.com" },
                    { icon: MapPin, label: "Location", value: "Bangalore, Karnataka, India", href: undefined },
                    { icon: Clock, label: "Hours", value: "Mon–Sat: 9 AM – 7 PM", href: undefined },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4 p-4 bg-muted rounded-xl border border-border">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{label}</div>
                        {href ? (
                          <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-foreground font-medium hover:text-secondary transition-colors">
                            {value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">{value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Service Areas</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">We serve all major areas in Bangalore including:</p>
                <div className="flex flex-wrap gap-2">
                  {["Whitefield", "Koramangala", "HSR Layout", "Indiranagar", "Electronic City", "Marathahalli", "Bellandur", "Sarjapur Road", "Jayanagar", "Hebbal", "Yelahanka", "KR Puram"].map(area => (
                    <span key={area} className="px-2.5 py-1 bg-primary-foreground/10 rounded-full text-xs text-primary-foreground/90">{area}</span>
                  ))}
                </div>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.99!2d77.35073!3d12.95384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MKR Safety Solutions service area in Bangalore"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
