import { ServicePage } from "./ServicePage";
import heroImg from "@assets/MKR_5_1780926061320.png";

const data = {
  title: "Staircase Invisible Grills",
  slug: "staircase-invisible-grills",
  seoTitle: "Staircase Invisible Grills Bangalore | Interior Safety | MKR Safety",
  seoDesc: "Elegant staircase invisible grills in Bangalore. Vertical cable systems for duplex and villa staircases. Safety meets design. Free site visit. MKR Safety Solutions.",
  h1: "Staircase Invisible Grills in Bangalore",
  heroImg,
  heroAlt: "Beautiful interior staircase with vertical invisible grill cable system",
  intro: "Elegant vertical cable systems for staircases that enhance aesthetics while providing essential fall protection for children and the elderly. Trusted by architects and interior designers across Bangalore.",
  price: "150–220 per sq ft",
  benefits: [
    "Replaces bulky staircase railings with a sleek, modern cable aesthetic",
    "Essential fall protection for children and elderly family members",
    "Trusted by interior designers for premium duplex and villa projects",
    "Custom fit for any staircase angle, height, and configuration",
    "316-grade SS — maintenance-free and rust-proof for 20+ years",
    "Vertical and horizontal cable patterns available",
    "Complements modern, contemporary, and minimalist interiors",
    "10-year warranty on materials and installation",
  ],
  features: [
    { title: "Vertical Cable Design", desc: "Clean vertical lines that enhance the visual height of your staircase while maintaining complete transparency." },
    { title: "Floor-to-Ceiling Fit", desc: "Custom tensioned from floor to ceiling or handrail — perfectly fitted regardless of stair angle or height." },
    { title: "Architectural Integration", desc: "Works with glass, wood, concrete, and steel staircase structures. We adapt to your existing materials." },
    { title: "Interior Grade Finish", desc: "Mirror-polished or brushed finish options to match your interior aesthetic and stainless steel fixtures." },
    { title: "High Tensile Strength", desc: "Load-tested to withstand lateral impact forces — no cable flex or vibration under load." },
  ],
  process: [
    { step: "Design Consultation", desc: "We assess your staircase design, suggest cable pattern options, and provide a detailed quote." },
    { step: "Custom Fabrication", desc: "Stainless steel channel systems and cables are custom fabricated for your exact staircase dimensions." },
    { step: "Expert Installation", desc: "Our team installs with precision — correctly aligned cables, properly tensioned, and architecturally matched." },
    { step: "Handover", desc: "Full inspection, load test, and warranty documentation. Your staircase is now safe and stunning." },
  ],
  faqs: [
    { q: "Can staircase invisible grills be installed on existing railings?", a: "Yes, in most cases. Our team assesses your existing handrail and post structure and integrates the cable system accordingly. In some cases, a new horizontal handrail may be recommended." },
    { q: "Are staircase grills suitable for curved staircases?", a: "Yes. We have extensive experience installing cable systems on curved, spiral, and helical staircases. Custom fabrication ensures a perfect fit regardless of curve radius." },
    { q: "What is the installation time for staircase grills?", a: "A single-flight staircase typically takes 4–6 hours. Multi-floor installations may take 1–2 days depending on complexity." },
    { q: "Do staircase invisible grills look good in modern interiors?", a: "Absolutely. The vertical cable aesthetic is a hallmark of contemporary interior design. Architects and interior designers across Bangalore specifically recommend invisible cable systems for premium staircase projects." },
  ],
  relatedServices: [
    { label: "Balcony Grills", href: "/balcony-invisible-grills" },
    { label: "Villa Grills", href: "/villa-invisible-grills" },
    { label: "Child Safety Grills", href: "/child-safety-grills" },
  ],
  relatedLocations: [
    { label: "Indiranagar", href: "/invisible-grills-indiranagar" },
    { label: "Koramangala", href: "/invisible-grills-koramangala" },
    { label: "Jayanagar", href: "/invisible-grills-jayanagar" },
    { label: "Whitefield", href: "/invisible-grills-whitefield" },
  ],
};

export default function StaircaseGrills() {
  return <ServicePage data={data} />;
}
