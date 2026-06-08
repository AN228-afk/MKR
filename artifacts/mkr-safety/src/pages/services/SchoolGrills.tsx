import { ServicePage } from "./ServicePage";
import heroImg from "@assets/7_1780926045097.jpg";

const data = {
  title: "School Safety Invisible Grills",
  slug: "school-safety-grills",
  seoTitle: "School Safety Grills Bangalore | Institutional Invisible Grills | MKR",
  seoDesc: "Invisible grills for schools, colleges, and educational institutions in Bangalore. Certified child safety, bulk pricing, rapid installation. MKR Safety Solutions.",
  h1: "School Safety Invisible Grills in Bangalore",
  heroImg,
  heroAlt: "Architectural balcony with stainless steel vertical invisible grills for institutional safety",
  intro: "Institutional-grade invisible grills for schools, colleges, and educational institutions in Bangalore. Child safety certified, bulk pricing available, and rapid deployment teams for large-scale projects.",
  price: "Custom project quote",
  benefits: [
    "Purpose-designed for educational institutions and high-child-traffic environments",
    "2.5mm cable spacing — maximum child safety for school corridors and classrooms",
    "Bulk project pricing significantly lower than residential rates",
    "Rapid multi-team deployment to minimize school operations disruption",
    "Complies with school building safety regulations",
    "Institutional-grade durability — designed for higher traffic and impact resistance",
    "5-year annual maintenance program available",
    "Comprehensive warranty covering all installations",
  ],
  features: [
    { title: "Institutional Grade", desc: "Heavier cable gauges and reinforced anchoring designed for the higher wear of institutional environments." },
    { title: "Rapid Deployment", desc: "Multi-team installation to complete large school projects quickly, typically during vacation periods." },
    { title: "Regulatory Compliance", desc: "Installations meet BIS standards and Karnataka school building safety requirements." },
    { title: "Corridor and Staircase Coverage", desc: "Comprehensive coverage for open corridors, staircases, and classroom windows in multi-story buildings." },
    { title: "5-Year Maintenance Plans", desc: "Optional annual maintenance inspection and tensioning plans for institutional clients." },
  ],
  process: [
    { step: "Site Survey", desc: "Comprehensive assessment of all school buildings, floors, and safety-critical areas." },
    { step: "Project Plan", desc: "Detailed project plan with phased installation schedule to minimize disruption to classes." },
    { step: "Multi-Team Execution", desc: "Experienced teams deployed simultaneously across different building areas for rapid completion." },
    { step: "Safety Certification", desc: "Complete inspection, safety certification documentation, and handover to school management." },
  ],
  faqs: [
    { q: "Can school grill installation be done during summer vacation?", a: "Yes, and we strongly recommend it. We can mobilize larger teams during vacation periods to complete even large campus projects before schools reopen." },
    { q: "Do you offer maintenance contracts for schools?", a: "Yes. We offer annual maintenance contracts for educational institutions that include bi-annual inspection, cable tensioning adjustment, and priority repair service." },
    { q: "What safety certifications do your school grills meet?", a: "Our school safety grills comply with BIS standards for child fall protection and Karnataka State Education Department building safety guidelines." },
    { q: "Can you provide references from schools in Bangalore?", a: "Yes. We have installed safety grills in 15+ schools and educational institutions across Bangalore. We can provide references upon request during the site visit." },
  ],
  relatedServices: [
    { label: "Child Safety Grills", href: "/child-safety-grills" },
    { label: "Balcony Grills", href: "/balcony-invisible-grills" },
    { label: "Window Grills", href: "/window-invisible-grills" },
  ],
  relatedLocations: [
    { label: "Whitefield", href: "/invisible-grills-whitefield" },
    { label: "Koramangala", href: "/invisible-grills-koramangala" },
    { label: "Indiranagar", href: "/invisible-grills-indiranagar" },
  ],
};

export default function SchoolGrills() {
  return <ServicePage data={data} />;
}
