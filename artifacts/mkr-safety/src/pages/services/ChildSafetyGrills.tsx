import { ServicePage } from "./ServicePage";
import heroImg from "@assets/MKR_1_of_child_1780926061320.webp";

const data = {
  title: "Child Safety Invisible Grills",
  slug: "child-safety-grills",
  seoTitle: "Child Safety Invisible Grills Bangalore | Prevent Falls | MKR Safety",
  seoDesc: "Child safety invisible grills in Bangalore with 2.5mm cable spacing. Prevent toddler falls from balconies and windows. Certified safe. Free site visit. MKR Safety Solutions.",
  h1: "Child Safety Invisible Grills in Bangalore",
  heroImg,
  heroAlt: "Child safely exploring Bangalore city view through MKR child safety invisible grills on apartment balcony",
  intro: "Purpose-built child safety invisible grills with tighter cable spacing specifically designed to prevent toddler falls. Trusted by 300+ Bangalore families with young children. Peace of mind guaranteed.",
  price: "130–190 per sq ft",
  benefits: [
    "2.5mm ultra-tight cable spacing — prevents even toddlers from squeezing through",
    "Load-tested to 250kg per linear meter — withstands any child impact",
    "Designed specifically for homes with children aged 6 months to 6 years",
    "Installed on balconies, windows, staircases, and terraces",
    "Internationally recognized safety specifications followed",
    "Loved by pediatricians and child safety experts",
    "300+ installations in family homes across Bangalore",
    "10-year warranty on all child safety installations",
  ],
  features: [
    { title: "2.5mm Cable Spacing", desc: "Tighter than standard (3mm), our child safety variant prevents toddlers from pushing their head or body through." },
    { title: "BIS Compliant", desc: "Installed to Bureau of Indian Standards requirements for child fall protection systems." },
    { title: "Toddler-Tested Design", desc: "Cable tension and spacing designed to withstand the exploratory force of active toddlers." },
    { title: "No Sharp Edges", desc: "All cable ends are capped and smooth. No protrusions that could scratch or harm curious children." },
    { title: "Aesthetically Invisible", desc: "Even with tighter spacing, the cables remain nearly invisible — your family gets safety without compromise." },
  ],
  process: [
    { step: "Child Safety Assessment", desc: "We assess all high-risk areas in your home — balconies, windows, staircases — based on your children's ages and mobility." },
    { step: "Safety-First Design", desc: "We design a comprehensive child safety grill plan prioritizing the highest-risk areas first." },
    { step: "Certified Installation", desc: "Installation using our child safety specification cables with 2.5mm spacing and extra anchoring." },
    { step: "Safety Handover", desc: "Complete inspection, tensioning verification, and guidance on monthly maintenance checks." },
  ],
  faqs: [
    { q: "What age children are child safety grills designed for?", a: "Our child safety grills with 2.5mm spacing are designed to protect children from 6 months (when they begin to be mobile) through approximately 8 years of age. The 2.5mm spacing ensures even the smallest toddler heads cannot pass through." },
    { q: "Are child safety grills different from standard invisible grills?", a: "Yes. Child safety grills use a tighter 2.5mm cable spacing (vs. 3mm standard) and higher tensioning to ensure they can withstand active toddler force. The cables themselves use the same 316-grade marine stainless steel." },
    { q: "Do child safety grills need to be removed when children grow up?", a: "No. The grills continue to function perfectly as standard safety grills even after children grow up. The investment serves your home for decades." },
    { q: "Can child safety grills be installed in rental apartments?", a: "Yes. Our installation uses minimal drilling that can be easily patched. We also offer removable systems for renters who need to restore the original state at the end of their tenancy." },
  ],
  relatedServices: [
    { label: "Balcony Grills", href: "/balcony-invisible-grills" },
    { label: "Window Grills", href: "/window-invisible-grills" },
    { label: "School Safety Grills", href: "/school-safety-grills" },
  ],
  relatedLocations: [
    { label: "Whitefield", href: "/invisible-grills-whitefield" },
    { label: "Electronic City", href: "/invisible-grills-electronic-city" },
    { label: "HSR Layout", href: "/invisible-grills-hsr-layout" },
    { label: "Marathahalli", href: "/invisible-grills-marathahalli" },
  ],
};

export default function ChildSafetyGrills() {
  return <ServicePage data={data} />;
}
