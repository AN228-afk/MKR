import { useState } from "react";
import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import img1 from "@assets/MKR_1_of_child_thumb_1780926061320.webp";
import img2 from "@assets/MKR_2_thumb_1780926061320.webp";
import img3 from "@assets/MKR_3_1780926061320.webp";
import img4 from "@assets/MKR_4_thumb_1780926061320.webp";
import img5 from "@assets/MKR_5_thumb_1780926061320.webp";
import img6 from "@assets/2_1780926045097.webp";
import img7 from "@assets/3_1780926045097.jpg";
import img8 from "@assets/4_1780926045097.webp";
import img9 from "@assets/5_1780926045097.webp";
import img10 from "@assets/6_1780926045097.jpg";
import img11 from "@assets/7_1780926045097.jpg";

const galleryImages = [
  { src: img3, alt: "Invisible grills on luxury apartment balcony with city skyline view, Bangalore", category: "Balcony" },
  { src: img1, alt: "Child safety invisible grill on high-rise apartment balcony, MKR Safety Solutions", category: "Child Safety" },
  { src: img2, alt: "Villa balcony invisible grills with ocean view, premium installation Bangalore", category: "Villa" },
  { src: img4, alt: "Window invisible grills with panoramic greenery view, MKR Bangalore", category: "Window" },
  { src: img5, alt: "Staircase invisible grills with vertical cable design, elegant interior", category: "Staircase" },
  { src: img6, alt: "Apartment balcony invisible grills with planter box and city view", category: "Balcony" },
  { src: img7, alt: "Curved balcony with stainless steel invisible grills at night, Bangalore", category: "Balcony" },
  { src: img8, alt: "Window invisible grills with forest view, natural light preserved", category: "Window" },
  { src: img9, alt: "Balcony invisible grills on terrace apartment, Bangalore installation", category: "Balcony" },
  { src: img10, alt: "Child watching city view safely through invisible grills at sunset", category: "Child Safety" },
  { src: img11, alt: "Architectural balcony with vertical stainless steel cable grills", category: "Balcony" },
];

const categories = ["All", "Balcony", "Window", "Staircase", "Villa", "Child Safety"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryImages : galleryImages.filter(i => i.category === active);

  return (
    <Layout>
      <SEOHead
        title="Invisible Grills Gallery | MKR Safety Solutions Bangalore Projects"
        description="View our gallery of invisible grill installations in Bangalore — balcony, window, staircase, villa, and child safety grills. 2000+ completed projects."
        canonical="https://mkrsafetysolutions.com/gallery"
      />

      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Gallery" }]} />
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-foreground mb-4">Our Invisible Grill Projects in Bangalore</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Browse our portfolio of 2000+ invisible grill installations across Bangalore's top neighborhoods.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                data-testid={`button-filter-${cat}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === cat ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-muted" data-testid={`img-gallery-${i}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading={i > 2 ? "lazy" : undefined}
                  width={600}
                  height={450}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">{img.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
