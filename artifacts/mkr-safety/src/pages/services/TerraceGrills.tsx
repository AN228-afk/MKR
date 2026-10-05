import { ServicePage } from "./ServicePage";
import heroImg from "@assets/MKR_2_1780926061320.webp";

const data = {
  title: "Terrace Invisible Grills",
  slug: "terrace-invisible-grills",
  seoTitle: "Terrace Invisible Grills Bangalore | Rooftop Safety | MKR Safety Solutions",
  seoDesc: "Terrace invisible grills in Bangalore for full rooftop perimeter safety. 316 SS cables, weather-resistant, free site visit, 10-year warranty. MKR Safety Solutions.",
  h1: "Terrace Invisible Grills in Bangalore",
  heroImg,
  heroAlt: "Terrace invisible grill installation with panoramic ocean and pool view from rooftop",
  intro: "Secure your rooftop terrace with robust cable systems that withstand Bangalore's climate while preserving panoramic 360-degree views. The perfect solution for terrace parties, family gatherings, and everyday relaxation.",
  price: "130–200 per sq ft",
  benefits: [
    "360-degree perimeter safety — secure every side of your terrace",
    "Enjoy terrace views and natural breezes completely unobstructed",
    "Child and pet safe — essential for multi-story homes and penthouses",
    "Withstands heavy monsoon rains and Bangalore winds",
    "UV-resistant — cables maintain their appearance in direct sunlight",
    "Ideal for penthouses, independent villas, and terrace apartments",
    "Free site survey with professional assessment of terrace structure",
    "10-year warranty on the complete installation",
  ],
  features: [
    { title: "Full Perimeter Coverage", desc: "We install cable systems around the complete terrace perimeter — no gaps, no compromises." },
    { title: "UV and Weather Resistant", desc: "316-grade marine SS with nylon coating resists UV degradation, heat, and monsoon humidity." },
    { title: "Structural Assessment", desc: "Our team assesses your terrace parapet and structure before installation to ensure secure anchoring." },
    { title: "Height Flexibility", desc: "Custom cable heights from 900mm to 1200mm depending on your safety requirements and local building codes." },
    { title: "Post-Free Option", desc: "Where terrace edges have solid parapets, we can install cables without visible posts for a completely clean look." },
  ],
  process: [
    { step: "Terrace Survey", desc: "We assess your terrace structure, parapet condition, and take precise measurements of the entire perimeter." },
    { step: "Custom Design", desc: "We design the cable system for your specific terrace layout and provide a transparent written quote." },
    { step: "Installation", desc: "Cables are installed around the complete perimeter, properly anchored to structural elements and tensioned precisely." },
    { step: "Inspection", desc: "Complete perimeter inspection, load testing, and warranty documentation before handover." },
  ],
  faqs: [
    { q: "Can invisible grills be installed on open terraces without parapets?", a: "Yes. For terraces without parapets, we install a structural post system that anchors to the terrace slab. Our team assesses each terrace individually to determine the best anchoring method." },
    { q: "Are terrace grills suitable for penthouses?", a: "Absolutely. Penthouse terrace grills are one of our most common installations. We work with penthouse owners across Bangalore's premium towers to provide elegant, invisible safety solutions." },
    { q: "Do terrace invisible grills affect cellular or WiFi signals?", a: "No. The stainless steel cables are too thin and sparse to have any meaningful impact on wireless signals." },
    { q: "How much does terrace grill installation cost in Bangalore?", a: "Terrace invisible grills cost ₹130–₹200 per square foot in Bangalore. The total cost depends on the perimeter length and the cable height required. We provide free site visits with itemized quotes." },
  ],
  relatedServices: [
    { label: "Balcony Invisible Grills", href: "/balcony-invisible-grills" },
    { label: "Villa Invisible Grills", href: "/villa-invisible-grills" },
    { label: "Child Safety Grills", href: "/child-safety-grills" },
  ],
  relatedLocations: [
    { label: "Whitefield", href: "/invisible-grills-whitefield" },
    { label: "Hebbal", href: "/invisible-grills-hebbal" },
    { label: "Bellandur", href: "/invisible-grills-bellandur" },
    { label: "HSR Layout", href: "/invisible-grills-hsr-layout" },
  ],
};

export default function TerraceGrills() {
  return <ServicePage data={data} />;
}
