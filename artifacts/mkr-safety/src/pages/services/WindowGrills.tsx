import { ServicePage } from "./ServicePage";
import heroImg from "@assets/MKR_4_1780926061320.png";

const data = {
  title: "Window Invisible Grills",
  slug: "window-invisible-grills",
  seoTitle: "Window Invisible Grills Bangalore | Child Safety | MKR Safety Solutions",
  seoDesc: "Window invisible grills in Bangalore. Protect your windows without blocking light or views. 316 SS cables, free site visit, 10-year warranty. Call MKR today.",
  h1: "Window Invisible Grills in Bangalore",
  heroImg,
  heroAlt: "Window invisible grills with panoramic view of Bangalore greens and cityscape",
  intro: "Protect your windows without sacrificing natural light or the outside view. Our ultra-fine 316-grade stainless steel cables fit any window shape and size, providing certified child safety while remaining virtually invisible.",
  price: "100–160 per sq ft",
  benefits: [
    "Maximum natural light — cables don't block sunlight like traditional grills",
    "Child and pet safe — prevents accidental falls from open windows",
    "Fits any window shape — rectangular, arched, or custom",
    "316-grade marine SS — no rust, no maintenance, no painting",
    "Easy to open and close windows with grills installed",
    "Transparent pricing — no hidden charges",
    "Same-day site visit available across Bangalore",
    "10-year warranty covering all materials and installation",
  ],
  features: [
    { title: "Fits Any Window Style", desc: "Custom fabricated for your exact window dimensions — sliding, casement, fixed, or louvered windows." },
    { title: "Maximum Light Transmission", desc: "The 3mm ultra-thin cables allow 98%+ of natural light through — significantly more than traditional grills." },
    { title: "Child Safety Certified", desc: "3mm cable spacing prevents children from putting their head or body through the window." },
    { title: "Weather Sealed", desc: "Marine-grade steel and precision installation ensure no water ingress or cable movement during monsoons." },
    { title: "Silent Operation", desc: "Properly tensioned cables don't vibrate or make noise in wind — unlike loose traditional grill bars." },
  ],
  process: [
    { step: "Free Site Visit", desc: "We visit your home, measure all windows requiring grills, and provide a transparent written quote." },
    { step: "Custom Fabrication", desc: "Window frames are custom-fabricated using 316-grade marine SS cables to match your exact dimensions." },
    { step: "Clean Installation", desc: "Installation is completed in 1–2 hours per window. We minimize drilling and protect your walls." },
    { step: "Final Inspection", desc: "Each window grill is tension-tested and inspected before handover with full warranty documentation." },
  ],
  faqs: [
    { q: "Can I still open my windows after installing invisible grills?", a: "Yes, absolutely. Our window grill installation is designed to work with your existing window operation. You can open and close sliding, casement, or hopper windows as usual." },
    { q: "Do window invisible grills reduce airflow?", a: "No. The 3mm cable spacing maintains 97%+ of natural airflow compared to an open window. You'll feel no difference in ventilation." },
    { q: "Are window grills suitable for all floor levels?", a: "We recommend invisible grills for all floors above ground level. They're especially important on floors 2 and above where fall risk is significant, particularly for homes with children." },
    { q: "How many windows can be installed in a day?", a: "Our team can typically install 6–10 windows in a single day depending on size and complexity. A full apartment is usually completed in 1 day." },
  ],
  relatedServices: [
    { label: "Balcony Grills", href: "/balcony-invisible-grills" },
    { label: "Child Safety Grills", href: "/child-safety-grills" },
    { label: "Staircase Grills", href: "/staircase-invisible-grills" },
  ],
  relatedLocations: [
    { label: "Whitefield", href: "/invisible-grills-whitefield" },
    { label: "Indiranagar", href: "/invisible-grills-indiranagar" },
    { label: "Koramangala", href: "/invisible-grills-koramangala" },
    { label: "HSR Layout", href: "/invisible-grills-hsr-layout" },
  ],
};

export default function WindowGrills() {
  return <ServicePage data={data} />;
}
