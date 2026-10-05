import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import img1 from "@assets/MKR_3_1780926061320.webp";
import img2 from "@assets/MKR_2_thumb_1780926061320.webp";
import img3 from "@assets/MKR_5_thumb_1780926061320.webp";
import img4 from "@assets/MKR_4_thumb_1780926061320.webp";
import img5 from "@assets/2_1780926045097.webp";
import img6 from "@assets/7_1780926045097.jpg";

const projects = [
  { title: "Prestige Shantiniketan — 3BHK Balcony & Windows", location: "Whitefield", date: "Nov 2024", area: "320 sq ft", type: "Balcony + Window Grills", img: img1, desc: "Complete invisible grill installation across 2 balconies and 4 windows in a luxury 3BHK apartment on the 18th floor." },
  { title: "Embassy Golf Links Villa", location: "Indiranagar", date: "Oct 2024", area: "680 sq ft", type: "Villa Grills", img: img2, desc: "Full perimeter invisible grill installation for a 4,500 sq ft premium villa including terrace, balconies, and courtyard." },
  { title: "Mantri Alpyne — Staircase & Balcony", location: "Bellandur", date: "Sep 2024", area: "450 sq ft", type: "Staircase + Balcony Grills", img: img3, desc: "3-floor staircase grill installation with vertical cables plus two balcony grills for a luxury duplex apartment." },
  { title: "Brigade Exotica — Child Safety Package", location: "Marathahalli", date: "Aug 2024", area: "280 sq ft", type: "Child Safety Grills", img: img4, desc: "Child safety invisible grills with 2.5mm cable spacing installed across all windows and balconies for a family with toddlers." },
  { title: "Sobha City — Terrace & Balcony", location: "Hebbal", date: "Jul 2024", area: "520 sq ft", type: "Terrace + Balcony Grills", img: img5, desc: "Large-scale terrace perimeter grill and two balcony installations for a 4BHK premium apartment on the 22nd floor." },
  { title: "Adarsh Palm Meadows", location: "Sarjapur Road", date: "Jun 2024", area: "740 sq ft", type: "Complete Villa Package", img: img6, desc: "End-to-end invisible grill installation for a 5,000 sq ft independent villa including all terraces, balconies, and staircases." },
];

export default function Projects() {
  return (
    <Layout>
      <SEOHead
        title="Invisible Grill Projects in Bangalore | MKR Safety Solutions Portfolio"
        description="Explore MKR Safety Solutions' completed invisible grill projects across Bangalore — apartments, villas, staircases, and commercial properties."
        canonical="https://mkrsafetysolutions.com/projects"
      />
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Projects" }]} />
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Our Completed Projects</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Over 1,000 invisible grill installations across Bangalore's most prestigious residential and commercial properties.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <article key={i} className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow" data-testid={`card-project-${i}`}>
                <div className="relative h-52 overflow-hidden">
                  <img src={p.img} alt={`${p.title} invisible grill project by MKR Safety Solutions`} className="w-full h-full object-cover" loading={i > 2 ? "lazy" : undefined} width={600} height={400} />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">{p.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-foreground text-base mb-2">{p.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1"><MapPin className="w-3 h-3" />{p.location}</div>
                    <div className="flex items-center gap-1"><Calendar className="w-3 h-3" />{p.date}</div>
                    <div>{p.area}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
