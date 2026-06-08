import { ServicePage } from "./ServicePage";
import heroImg from "@assets/2_1780926045097.png";

const data = {
  title: "Villa Invisible Grills",
  slug: "villa-invisible-grills",
  seoTitle: "Villa Invisible Grills Bangalore | Bespoke Safety Solutions | MKR",
  seoDesc: "Premium villa invisible grills in Bangalore. Custom solutions for independent houses, villas, and bungalows. Full project management. 10-year warranty. MKR Safety Solutions.",
  h1: "Villa Invisible Grills in Bangalore",
  heroImg,
  heroAlt: "Luxury villa balcony with invisible grill cable system and panoramic view",
  intro: "Bespoke invisible grill solutions for villas and independent houses across Bangalore. Designed to complement premium architecture, we handle every aspect of the project — from free site assessment to final handover.",
  price: "140–210 per sq ft",
  benefits: [
    "Comprehensive coverage — all balconies, windows, terraces, and staircases in one project",
    "Dedicated project manager for every villa installation",
    "Custom design that complements your villa's architectural style",
    "Premium 316-grade marine stainless steel across all installations",
    "Large area pricing advantages — more cost-effective than piecemeal installation",
    "Minimal disruption — we coordinate around your household schedule",
    "Trusted by 50+ premium villas across Bangalore's best neighborhoods",
    "10-year warranty covering all installations",
  ],
  features: [
    { title: "Full Villa Coverage", desc: "We handle all grill types in a single project — balcony, window, staircase, terrace, and courtyard." },
    { title: "Dedicated Project Manager", desc: "One point of contact for your entire project — from first call to final handover." },
    { title: "Premium Finish Options", desc: "Mirror-polished, brushed, or powder-coated options to match your villa's aesthetic and existing fixtures." },
    { title: "Architect Coordination", desc: "We work directly with your architect or interior designer to ensure seamless design integration." },
    { title: "Phased Installation", desc: "For large villas, we can phase the installation to minimize disruption to your daily routine." },
  ],
  process: [
    { step: "Project Assessment", desc: "Comprehensive villa assessment — we map every space requiring grills and discuss design preferences." },
    { step: "Design & Quote", desc: "Detailed project design with material specifications and a transparent, itemized quote for the complete villa." },
    { step: "Project Execution", desc: "Coordinated installation across all areas, managed by a dedicated project coordinator." },
    { step: "Final Handover", desc: "Complete inspection of all installations, load testing, and comprehensive warranty documentation." },
  ],
  faqs: [
    { q: "How long does a full villa invisible grill project take?", a: "A typical villa project covering all balconies, windows, and staircases takes 2–4 days depending on the size and complexity. Our dedicated project manager keeps you updated throughout." },
    { q: "Do you offer bulk pricing for large villa projects?", a: "Yes. Larger projects benefit from economies in materials and labor. We provide transparent project-based pricing that is more competitive than individual room-by-room quotations." },
    { q: "Can I get invisible grills installed in phases as budget allows?", a: "Yes. We can begin with high-priority areas (balconies and child safety zones) and expand to other areas in subsequent phases. Our team maintains design consistency across all phases." },
    { q: "Do you work with interior designers and architects?", a: "Yes, frequently. We regularly collaborate with Bangalore's leading interior designers and architects to ensure our installations complement the overall design vision of the villa." },
  ],
  relatedServices: [
    { label: "Balcony Grills", href: "/balcony-invisible-grills" },
    { label: "Terrace Grills", href: "/terrace-invisible-grills" },
    { label: "Staircase Grills", href: "/staircase-invisible-grills" },
  ],
  relatedLocations: [
    { label: "Whitefield", href: "/invisible-grills-whitefield" },
    { label: "Sarjapur Road", href: "/invisible-grills-sarjapur-road" },
    { label: "Indiranagar", href: "/invisible-grills-indiranagar" },
    { label: "Jayanagar", href: "/invisible-grills-jayanagar" },
  ],
};

export default function VillaGrills() {
  return <ServicePage data={data} />;
}
