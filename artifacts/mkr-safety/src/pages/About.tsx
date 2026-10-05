import { Shield, Award, Users, MapPin, CheckCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { TrustBadges } from "@/components/TrustBadges";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InquiryForm } from "@/components/InquiryForm";
import logoPath from "@assets/MKR_PHOTO_small_1780926061320.jpeg";
import hero from "@assets/MKR_3_1780926061320.webp";

export default function About() {
  return (
    <Layout>
      <SEOHead
        title="About MKR Safety Solutions | Bangalore's Trusted Invisible Grill Company"
        description="Learn about MKR Safety Solutions — Bangalore's leading invisible grill company with 8+ years of experience, 2000+ installations, and a 5.0-star Google rating."
        canonical="https://mkrsafetysolutions.com/about-us"
      />

      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About Us" }]} />
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={logoPath} alt="MKR Safety Solutions Logo" className="h-16 w-auto object-contain mb-6" width={160} height={64} />
              <h1 className="text-4xl font-bold text-foreground mb-6">
                Bangalore's Most Trusted Invisible Grill Specialists
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2016, MKR Safety Solutions was born from a simple belief: every family in Bangalore deserves to live safely in their home without sacrificing the views they paid for. We've spent over 8 years perfecting the art and science of invisible grill installation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From a single balcony project in Koramangala to over 1,000 completed installations across 12 neighborhoods, our journey has been built on one principle — safety without compromise.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We use only 316-grade marine stainless steel, the same grade trusted in boats and coastal buildings. Every cable is tensioned to withstand 250kg per linear meter and backed by a 10-year warranty.
              </p>
              <div className="space-y-3">
                {["8+ years of installation expertise", "316-grade marine SS cables only", "Free site visits with no obligation", "10-year comprehensive warranty", "Serving 12+ Bangalore neighborhoods"].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span className="text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={hero} alt="MKR Safety Solutions team installing invisible grills on a Bangalore apartment balcony" className="rounded-2xl w-full object-cover shadow-lg" loading="lazy" width={600} height={500} />
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Safety First", desc: "Every installation meets the highest safety standards, tested to 250kg per linear meter." },
              { icon: Award, title: "Uncompromising Quality", desc: "We only use 316-grade marine stainless steel — never inferior substitutes." },
              { icon: Users, title: "Customer Trust", desc: "5.0 stars on Google from 10+ reviews. We earn trust one family at a time." },
              { icon: MapPin, title: "Local Expertise", desc: "Deep knowledge of Bangalore's construction styles, weather, and apartment types." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 bg-muted rounded-xl border border-border">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl mb-4">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Request a Free Consultation</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
            <InquiryForm title="" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
