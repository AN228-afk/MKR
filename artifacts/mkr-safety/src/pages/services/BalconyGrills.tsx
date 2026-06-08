import { ServicePage } from "./ServicePage";
import heroImg from "@assets/MKR_3_1780926061320.png";

const data = {
  title: "Balcony Invisible Grills",
  slug: "balcony-invisible-grills",
  seoTitle: "Balcony Invisible Grills Bangalore | MKR Safety Solutions | Best Price",
  seoDesc: "Premium balcony invisible grills in Bangalore. 316-grade SS cables, 250kg load tested, 10-year warranty. Free site visit. Serving all Bangalore areas. Call now.",
  h1: "Balcony Invisible Grills in Bangalore",
  heroImg,
  heroAlt: "Invisible grills on apartment balcony with panoramic Bangalore city view",
  intro: "Transform your balcony into a safe, open sanctuary with ultra-fine 316-grade marine stainless steel cables. Nearly invisible from a distance, load-tested to 250kg, and backed by a 10-year warranty.",
  price: "120–180 per sq ft",
  benefits: [
    "Complete unobstructed views from your balcony — cables disappear visually",
    "Child and pet safe — 3mm cable spacing prevents falls",
    "316-grade marine stainless steel — zero rust guaranteed",
    "Custom measured and fabricated for your exact balcony dimensions",
    "Withstands Bangalore's monsoon rains and humidity perfectly",
    "No maintenance required beyond occasional wipe-down",
    "Professional installation completed in 3–5 hours",
    "10-year comprehensive warranty on materials and installation",
  ],
  features: [
    { title: "316-Grade Marine SS Cables", desc: "The highest grade stainless steel used in marine environments. Immune to rust and corrosion in any weather." },
    { title: "3mm Cable Spacing", desc: "Precisely spaced to prevent children and pets from passing through while maximizing air flow and view." },
    { title: "250kg Load Rating", desc: "Each cable is tension-tested to withstand 250kg per linear meter — certified safe for the whole family." },
    { title: "Custom Fit Installation", desc: "Every balcony is unique. We measure, fabricate, and install to your exact dimensions for a perfect fit." },
    { title: "Invisible from Distance", desc: "The 3mm ultra-thin cables virtually disappear against any backdrop, preserving your view completely." },
  ],
  process: [
    { step: "Free Site Visit", desc: "Our technician visits your balcony, takes precise measurements and assesses installation requirements." },
    { step: "Custom Fabrication", desc: "We fabricate your invisible grill system to exact measurements using 316-grade marine SS cables." },
    { step: "Expert Installation", desc: "Our certified team installs the top channel, threads cables, and applies precision tensioning in 3–5 hours." },
    { step: "Quality Check", desc: "Every cable is load-tested and inspected. We clean up completely and hand over with warranty documentation." },
  ],
  faqs: [
    { q: "How much do balcony invisible grills cost in Bangalore?", a: "Balcony invisible grills in Bangalore typically cost ₹120–₹180 per square foot with MKR Safety Solutions. The exact price depends on the balcony size and complexity. We provide free site visits with transparent, itemized quotes." },
    { q: "Can invisible grills be installed on any balcony type?", a: "Yes. Our team has installed grills on straight balconies, curved balconies, L-shaped balconies, and open terraces across Bangalore. We custom-fabricate for every shape and size." },
    { q: "Will my balcony view be affected after installation?", a: "No. The 3mm ultra-thin cables are virtually invisible from more than 3 meters away. Most customers report that their view appears completely unchanged after installation. That's why we call them invisible grills." },
    { q: "How do I maintain balcony invisible grills?", a: "Maintenance is minimal — wipe cables with a damp cloth every 3–6 months to remove dust. No painting, no oiling, no rust treatment required. The 316-grade steel handles Bangalore's weather on its own." },
    { q: "Are balcony invisible grills safe in high winds?", a: "Yes. Our cables are tensioned precisely to withstand high winds and lateral forces. They have been tested in coastal environments far more severe than inland Bangalore conditions." },
  ],
  relatedServices: [
    { label: "Window Grills", href: "/window-invisible-grills" },
    { label: "Terrace Grills", href: "/terrace-invisible-grills" },
    { label: "Child Safety Grills", href: "/child-safety-grills" },
    { label: "Villa Grills", href: "/villa-invisible-grills" },
  ],
  relatedLocations: [
    { label: "Whitefield", href: "/invisible-grills-whitefield" },
    { label: "Koramangala", href: "/invisible-grills-koramangala" },
    { label: "HSR Layout", href: "/invisible-grills-hsr-layout" },
    { label: "Electronic City", href: "/invisible-grills-electronic-city" },
    { label: "Marathahalli", href: "/invisible-grills-marathahalli" },
    { label: "Bellandur", href: "/invisible-grills-bellandur" },
  ],
};

export default function BalconyGrills() {
  return <ServicePage data={data} />;
}
