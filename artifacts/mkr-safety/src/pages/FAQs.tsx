import { Layout } from "@/components/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "About Invisible Grills",
    faqs: [
      { q: "What are invisible grills made of?", a: "Our invisible grills are made of premium 316-grade marine stainless steel cables, typically 3mm in diameter. They are coated with nylon or Teflon for added durability. This is the same grade of steel used in marine vessels, known for its superior resistance to rust and corrosion." },
      { q: "How are invisible grills different from traditional iron grills?", a: "Traditional iron grills use thick bars that block your view, rust over time, and require regular painting. Invisible grills use ultra-thin stainless steel cables that are nearly see-through, never rust (with 316-grade SS), require zero maintenance, and can be customized to fit any space perfectly." },
      { q: "Can invisible grills be seen from outside?", a: "Yes, while the name 'invisible' is slightly hyperbolic, the grills are nearly impossible to see from more than 3–4 meters away. The 3mm ultra-thin cables disappear visually against most backdrops, allowing your views to remain completely unobstructed." },
      { q: "What cable spacing is standard for invisible grills?", a: "Our standard cable spacing is 3mm — small enough to prevent children and adults from putting their head or body through, while maximizing ventilation and visibility. For child safety variants, we offer 2.5mm spacing for even tighter protection." },
    ],
  },
  {
    category: "Safety & Certifications",
    faqs: [
      { q: "Are invisible grills safe for children and toddlers?", a: "Yes, our child safety invisible grills are specifically designed to prevent toddler falls. With 2.5mm cable spacing and load testing to 250kg per linear meter, they provide certified protection even for active toddlers. We've installed child safety grills in 300+ Bangalore homes." },
      { q: "What is the weight load capacity of your invisible grills?", a: "Each cable in our invisible grill system is tensioned and load-tested to withstand 250kg per linear meter. This far exceeds international safety standards for balcony railing systems, making it suitable for residential, commercial, and school applications." },
      { q: "Are your grills certified or tested?", a: "Yes, our cables are tension-tested and quality-checked before and after installation. We follow IS (Indian Standards) and international safety guidelines for balcony protection systems. Our 10-year warranty covers the integrity of the entire installation." },
      { q: "Can invisible grills be cut by intruders?", a: "316-grade marine stainless steel requires heavy-duty industrial cable cutters to cut — ordinary tools will not work. For ground-floor or accessible windows where security is a concern, we recommend supplementing with other security measures." },
    ],
  },
  {
    category: "Installation Process",
    faqs: [
      { q: "How long does installation take?", a: "A standard balcony installation (20–40 sq ft) typically takes 3–5 hours. A full apartment with multiple balconies and windows is usually completed in 1–2 days. We clean up completely and leave your home as we found it." },
      { q: "What is the installation process?", a: "Step 1: Free site visit and measurement. Step 2: Custom fabrication based on your exact dimensions. Step 3: On-site installation — mounting the top channel, threading and tensioning cables, and securing bottom anchors. Step 4: Quality inspection and load testing. Step 5: Handover and warranty documentation." },
      { q: "Will the installation damage my walls?", a: "Minimal drilling is required to mount anchor points. Our team uses precision drill bits sized to minimize wall damage, and all holes are properly sealed and finished. The process is significantly less invasive than installing traditional iron grills." },
      { q: "Do you provide a free site visit before installation?", a: "Yes, absolutely. We offer a free site visit where our technician measures your space, assesses the installation requirements, and provides a transparent written quote — all at no cost and with no obligation to proceed." },
    ],
  },
  {
    category: "Pricing & Warranty",
    faqs: [
      { q: "How much do invisible grills cost in Bangalore?", a: "Prices range from ₹100–₹220 per square foot depending on the type (balcony, window, staircase), the grade of steel, and the complexity of installation. We provide detailed, itemized quotes after a free site visit with absolutely no hidden charges." },
      { q: "What does the 10-year warranty cover?", a: "Our 10-year warranty covers the stainless steel cables, anchor points, channel systems, and all fittings. It covers structural integrity and rust protection. Natural wear on nylon coatings is not covered. We also offer annual maintenance inspection services." },
      { q: "Do you offer EMI or payment plans?", a: "We offer flexible payment terms for large projects. For residential projects, we accept 50% at the time of booking confirmation and the remaining 50% upon successful installation and your satisfaction." },
      { q: "Are there any hidden charges?", a: "No. Our quote includes all materials, labor, hardware, and installation. We provide itemized quotes so you know exactly what you're paying for. There are no surprises." },
    ],
  },
  {
    category: "Maintenance & Durability",
    faqs: [
      { q: "How do I maintain my invisible grills?", a: "Maintenance is minimal. Wipe the cables with a damp cloth every 3–6 months to remove dust. For coastal areas, a mild soap solution once a month helps maintain the marine-grade finish. Never use abrasive cleaners or steel wool on the cables." },
      { q: "Will invisible grills rust in Bangalore's monsoon?", a: "316-grade marine stainless steel is specifically formulated to resist rust in high-humidity and wet environments. Bangalore's monsoon does not affect the integrity of our cables. We guarantee this with our 10-year warranty." },
      { q: "How long do invisible grills last?", a: "With proper installation and minimal maintenance, 316-grade stainless steel invisible grills last 20+ years. The cables themselves are extremely durable. Our 10-year warranty is our conservative guarantee — most installations significantly outlast this period." },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap(cat => cat.faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }))),
};

export default function FAQs() {
  return (
    <Layout>
      <SEOHead
        title="FAQs About Invisible Grills in Bangalore | MKR Safety Solutions"
        description="Answers to all your questions about invisible grills in Bangalore — safety, cost, installation, warranty, and maintenance. MKR Safety Solutions."
        canonical="https://mkrsafetysolutions.com/faqs"
        schema={faqSchema}
      />

      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "FAQs" }]} />
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground">Everything you need to know about invisible grills in Bangalore</p>
          </div>

          <div className="space-y-10">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">{cat.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {cat.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`${cat.category}-${i}`} className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="text-left font-medium text-sm py-4 hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm pb-4 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
