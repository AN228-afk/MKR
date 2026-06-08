import { LocationPage, LocationPageData } from "./LocationPage";

const locationData: Record<string, LocationPageData> = {
  whitefield: {
    area: "Whitefield",
    slug: "whitefield",
    landmarks: "ITPL, Phoenix Marketcity, Whitefield Metro, Prestige Shantiniketan",
    seoTitle: "Invisible Grills Whitefield Bangalore | MKR Safety Solutions | Best Price",
    seoDesc: "Invisible grills in Whitefield Bangalore. Balcony, window & staircase grills near ITPL, Phoenix Mall. 316 SS, 10-yr warranty, free site visit. Call MKR now.",
    h1: "Invisible Grills in Whitefield, Bangalore",
    intro: "Premium invisible grill installation across Whitefield's apartment communities — from Prestige Shantiniketan to Brigade Cosmopolis. Serving all major residential projects in Whitefield.",
    localContent: "Whitefield is home to some of Bangalore's most premium high-rise apartments and gated communities. With thousands of families living in towers like Prestige Shantiniketan, Brigade Exotica, and Sobha Dream Gardens, invisible grills are essential safety infrastructure. MKR Safety Solutions has completed 150+ installations in Whitefield alone, making us the neighborhood's most trusted invisible grill provider. Our team is familiar with the construction types, apartment layouts, and building management requirements of Whitefield's major residential complexes. We offer same-day site visits and flexible scheduling to work around Whitefield's busy working professionals.",
    faqs: [
      { q: "How much do invisible grills cost in Whitefield?", a: "Invisible grills in Whitefield cost ₹100–₹220 per sq ft with MKR Safety Solutions. Balcony grills start at ₹120/sq ft. We provide free site visits with transparent quotes." },
      { q: "Do you serve all apartment complexes in Whitefield?", a: "Yes. We serve all residential complexes in Whitefield including Prestige, Brigade, Sobha, Tata, and other major developers' properties. Our team is familiar with HOA requirements in most major complexes." },
      { q: "How quickly can you visit for a site assessment in Whitefield?", a: "We offer same-day or next-day site visits in Whitefield. Call or WhatsApp us and our team will schedule a visit at your convenience, including weekends." },
    ],
    relatedAreas: [
      { label: "Marathahalli", href: "/invisible-grills-marathahalli" },
      { label: "Bellandur", href: "/invisible-grills-bellandur" },
      { label: "Sarjapur Road", href: "/invisible-grills-sarjapur-road" },
      { label: "HSR Layout", href: "/invisible-grills-hsr-layout" },
    ],
  },
  "sarjapur-road": {
    area: "Sarjapur Road",
    slug: "sarjapur-road",
    landmarks: "Wipro Campus, Prestige Ferns Residency, Sobha Habitech, Carmelaram",
    seoTitle: "Invisible Grills Sarjapur Road Bangalore | MKR Safety Solutions",
    seoDesc: "Invisible grills on Sarjapur Road Bangalore. Premium 316 SS cable grills for balcony, window & staircase. Free site visit, 10-year warranty. Call MKR Safety Solutions.",
    h1: "Invisible Grills on Sarjapur Road, Bangalore",
    intro: "Trusted invisible grill installation across Sarjapur Road's growing residential corridor — from Carmelaram to Attibele. Serving all apartment communities along Sarjapur Road.",
    localContent: "Sarjapur Road has emerged as one of Bangalore's fastest-growing residential corridors, with premium apartment projects developed by Prestige, Sobha, Puravankara, and others. The area's proximity to the Outer Ring Road and Electronic City makes it a hub for IT professionals, many of whom are parents seeking child safety solutions. MKR Safety Solutions provides invisible grill installation across all of Sarjapur Road's residential zones, from Carmelaram and Bellandur junction to Attibele. Our experience with the area's predominant apartment types — high-rise towers and mid-rise complexes — allows us to complete installations efficiently without disrupting residents.",
    faqs: [
      { q: "Do you serve all areas along Sarjapur Road?", a: "Yes. We cover the entire Sarjapur Road stretch from Bellandur junction to Attibele, including Carmelaram, Dommasandra, and Chandapura." },
      { q: "Are invisible grills suitable for Sarjapur Road's newer apartments?", a: "Yes. Our installations are designed for all types of construction — newer concrete-framed towers and older buildings alike. We assess the structure before installation." },
    ],
    relatedAreas: [
      { label: "Bellandur", href: "/invisible-grills-bellandur" },
      { label: "Electronic City", href: "/invisible-grills-electronic-city" },
      { label: "HSR Layout", href: "/invisible-grills-hsr-layout" },
      { label: "Whitefield", href: "/invisible-grills-whitefield" },
    ],
  },
  "electronic-city": {
    area: "Electronic City",
    slug: "electronic-city",
    landmarks: "Infosys Campus, HCL, Wipro, Electronic City Phase 1 & 2, Neeladri Road",
    seoTitle: "Invisible Grills Electronic City Bangalore | MKR Safety Solutions",
    seoDesc: "Invisible grills in Electronic City Bangalore. Balcony, window, and staircase grills near Infosys & HCL. 316 SS, free site visit, 10-year warranty. MKR Safety Solutions.",
    h1: "Invisible Grills in Electronic City, Bangalore",
    intro: "Premium invisible grill installation serving Electronic City's thriving residential community — from Phase 1 near Neeladri Road to Phase 2's expanding apartment townships.",
    localContent: "Electronic City is home to tens of thousands of IT professionals and their families living in modern high-rise apartments. The area around Electronic City Phase 1 and Phase 2 has seen rapid residential development, with many families on upper floors requiring balcony and window safety solutions. MKR Safety Solutions has extensive experience installing invisible grills in Electronic City's diverse apartment stock. We understand the building management policies of major complexes here and work efficiently to minimize installation time. Our team can reach Electronic City from our Bangalore base quickly, making same-day site visits a regular offering.",
    faqs: [
      { q: "Do you serve both Electronic City Phase 1 and Phase 2?", a: "Yes. We serve the entire Electronic City area including Phase 1 (near Neeladri Road) and Phase 2 (near Hebbagodi). Same-day site visits available." },
      { q: "How much do invisible grills cost in Electronic City?", a: "Invisible grills in Electronic City cost ₹100–₹220 per sq ft with MKR Safety Solutions. We provide free site visits and transparent itemized quotes." },
    ],
    relatedAreas: [
      { label: "HSR Layout", href: "/invisible-grills-hsr-layout" },
      { label: "Sarjapur Road", href: "/invisible-grills-sarjapur-road" },
      { label: "Bellandur", href: "/invisible-grills-bellandur" },
      { label: "Koramangala", href: "/invisible-grills-koramangala" },
    ],
  },
  "hsr-layout": {
    area: "HSR Layout",
    slug: "hsr-layout",
    landmarks: "BDA Complex, Agara Lake, 27th Main Road, Sector 1–7, Silkboard",
    seoTitle: "Invisible Grills HSR Layout Bangalore | MKR Safety Solutions",
    seoDesc: "Invisible grills in HSR Layout Bangalore. Child safe, premium quality grills for balcony and window near Silkboard & Agara Lake. Free site visit. MKR Safety Solutions.",
    h1: "Invisible Grills in HSR Layout, Bangalore",
    intro: "Trusted by hundreds of HSR Layout families across all 7 sectors — MKR Safety Solutions is the preferred invisible grill installer in one of Bangalore's most sought-after neighborhoods.",
    localContent: "HSR Layout's well-planned sectors have attracted Bangalore's tech elite and young families in equal measure. From the high-rises on 27th Main Road to independent villas in the quieter sectors, invisible grills are a popular safety upgrade. MKR Safety Solutions has completed over 120 installations across HSR Layout's diverse housing stock. We're experienced with HSR's mix of apartment towers, row houses, and independent villas, offering bespoke solutions for each property type. Our proximity makes response times particularly fast for HSR Layout — we can typically offer same-day or next-morning site visits.",
    faqs: [
      { q: "Do you serve all sectors of HSR Layout?", a: "Yes, all 7 sectors of HSR Layout. We're also familiar with the major apartment complexes on 27th Main Road and 80 Feet Road." },
      { q: "Do you install invisible grills in HSR Layout independent houses?", a: "Yes. In addition to apartments, we install invisible grills in independent villas and row houses across HSR Layout, including staircase and terrace grill projects." },
    ],
    relatedAreas: [
      { label: "Koramangala", href: "/invisible-grills-koramangala" },
      { label: "Bellandur", href: "/invisible-grills-bellandur" },
      { label: "Electronic City", href: "/invisible-grills-electronic-city" },
      { label: "Indiranagar", href: "/invisible-grills-indiranagar" },
    ],
  },
  bellandur: {
    area: "Bellandur",
    slug: "bellandur",
    landmarks: "Bellandur Lake, Adarsh Palm Retreat, Outer Ring Road, ORR Signal",
    seoTitle: "Invisible Grills Bellandur Bangalore | MKR Safety Solutions",
    seoDesc: "Invisible grills in Bellandur Bangalore. Premium balcony and window grills near Adarsh Palm Retreat. 316 SS steel, free site visit, 10-year warranty. MKR Safety Solutions.",
    h1: "Invisible Grills in Bellandur, Bangalore",
    intro: "Serving Bellandur's premium residential community along the Outer Ring Road — from Adarsh Palm Retreat to the newer towers rising near Bellandur Lake.",
    localContent: "Bellandur's transformation from an industrial area to a premium residential destination has been dramatic. Today it houses some of Bangalore's most sought-after apartment communities, many on the banks of Bellandur Lake. High-rise apartments dominate Bellandur's skyline, and families on upper floors frequently seek invisible grill solutions for balcony and window safety. MKR Safety Solutions serves all of Bellandur's residential zones and has established relationships with building management in major complexes like Adarsh Palm Retreat, Prestige Botanique, and several newer Tata and Lodha properties.",
    faqs: [
      { q: "Can you install invisible grills in Bellandur's lakeside apartments?", a: "Yes. Lakeside apartments with higher humidity from the lake benefit especially from our 316-grade marine stainless steel, which is specifically rated for high-humidity coastal environments." },
      { q: "How long does installation take in Bellandur?", a: "Installation typically takes 3–5 hours for a standard balcony. We provide transparent timelines during the site visit based on your specific requirements." },
    ],
    relatedAreas: [
      { label: "Marathahalli", href: "/invisible-grills-marathahalli" },
      { label: "Whitefield", href: "/invisible-grills-whitefield" },
      { label: "HSR Layout", href: "/invisible-grills-hsr-layout" },
      { label: "Sarjapur Road", href: "/invisible-grills-sarjapur-road" },
    ],
  },
  marathahalli: {
    area: "Marathahalli",
    slug: "marathahalli",
    landmarks: "Marathahalli Bridge, Innovative Film City, BEML Layout, Outer Ring Road",
    seoTitle: "Invisible Grills Marathahalli Bangalore | MKR Safety Solutions",
    seoDesc: "Invisible grills in Marathahalli Bangalore. Balcony, window & child safety grills near Marathahalli Bridge. Free site visit, 10-year warranty. MKR Safety Solutions.",
    h1: "Invisible Grills in Marathahalli, Bangalore",
    intro: "Comprehensive invisible grill installation in Marathahalli — from the apartment towers near Marathahalli Bridge to the villas and row houses of BEML Layout.",
    localContent: "Marathahalli sits at the intersection of several of Bangalore's major IT corridors, making it a home for large numbers of tech professionals. The area around Marathahalli Bridge has numerous mid-rise and high-rise apartment buildings, and the BEML Layout area has many independent villas. MKR Safety Solutions has completed 80+ installations across Marathahalli, gaining deep familiarity with the area's diverse property types. We're particularly experienced with the apartment complexes on Outer Ring Road and the villa communities in and around BEML Layout.",
    faqs: [
      { q: "How quickly can you come for a site visit in Marathahalli?", a: "We offer same-day or next-day site visits in Marathahalli. Call or WhatsApp us to schedule a convenient appointment including weekends." },
      { q: "Do you cover BEML Layout within Marathahalli?", a: "Yes. We serve BEML Layout, Marathahalli Bridge area, Kundalahalli, and all surrounding residential zones." },
    ],
    relatedAreas: [
      { label: "Whitefield", href: "/invisible-grills-whitefield" },
      { label: "Bellandur", href: "/invisible-grills-bellandur" },
      { label: "KR Puram", href: "/invisible-grills-kr-puram" },
      { label: "Koramangala", href: "/invisible-grills-koramangala" },
    ],
  },
  koramangala: {
    area: "Koramangala",
    slug: "koramangala",
    landmarks: "Forum Mall, 80 Feet Road, 1st to 8th Block, Jyoti Nivas College, Koramangala Water Tank",
    seoTitle: "Invisible Grills Koramangala Bangalore | MKR Safety Solutions",
    seoDesc: "Invisible grills in Koramangala Bangalore. Premium invisible grill installation near Forum Mall and 80 Feet Road. 10-year warranty. Free site visit. MKR Safety Solutions.",
    h1: "Invisible Grills in Koramangala, Bangalore",
    intro: "Trusted by Koramangala's discerning residents — from luxury apartments on 80 Feet Road to the independent villas of 5th and 7th Block. Bangalore's startup capital deserves the best safety solutions.",
    localContent: "Koramangala is one of Bangalore's most prestigious and densely populated neighborhoods, home to startup founders, senior executives, and established families. The area's mix of luxury high-rise apartments and independent villas across its 8 blocks creates diverse invisible grill requirements. MKR Safety Solutions has completed over 140 installations in Koramangala, making it one of our busiest service areas. We're deeply familiar with Koramangala's property landscape — from the premium towers near Forum Mall to the villa communities in 5th, 7th, and 8th Block. Our 4.9-star reputation in Koramangala speaks for itself: we receive more referrals from this neighborhood than any other.",
    faqs: [
      { q: "Which blocks of Koramangala do you serve?", a: "We serve all blocks of Koramangala — 1st through 8th Block. We're familiar with the major apartment complexes and villa communities across all blocks." },
      { q: "Do you work on weekends in Koramangala?", a: "Yes. We understand Koramangala's residents have busy schedules. We offer site visits and installations on Saturdays and Sundays." },
    ],
    relatedAreas: [
      { label: "Indiranagar", href: "/invisible-grills-indiranagar" },
      { label: "HSR Layout", href: "/invisible-grills-hsr-layout" },
      { label: "Jayanagar", href: "/invisible-grills-jayanagar" },
      { label: "Electronic City", href: "/invisible-grills-electronic-city" },
    ],
  },
  jayanagar: {
    area: "Jayanagar",
    slug: "jayanagar",
    landmarks: "Jayanagar Shopping Complex, Lalbagh, 4th Block, 9th Block, Banashankari Temple",
    seoTitle: "Invisible Grills Jayanagar Bangalore | MKR Safety Solutions",
    seoDesc: "Invisible grills in Jayanagar Bangalore. Balcony, window and staircase grills near Lalbagh and Jayanagar Shopping Complex. Free site visit. MKR Safety Solutions.",
    h1: "Invisible Grills in Jayanagar, Bangalore",
    intro: "Serving Jayanagar's established residential community with premium invisible grill solutions — from the elegant independent homes in 4th Block to modern apartment complexes in 9th Block.",
    localContent: "Jayanagar is one of Bangalore's oldest and most respected residential neighborhoods, known for its tree-lined streets, established families, and mix of traditional independent homes and modern apartment complexes. MKR Safety Solutions serves the entire Jayanagar neighborhood including 1st through 9th Block, as well as nearby Banashankari and JP Nagar areas. We understand that Jayanagar's independent villas and bungalows often require custom staircase and balcony grill solutions tailored to older construction types, and our experienced team handles these with the precision they deserve.",
    faqs: [
      { q: "Can you install invisible grills in older Jayanagar independent homes?", a: "Yes. Our team is experienced with older construction types common in Jayanagar — brick walls, older RCC structures, and traditional balcony designs. We assess each home individually." },
      { q: "Do you serve JP Nagar from Jayanagar?", a: "Yes. We serve JP Nagar, BTM Layout, and Banashankari in addition to all Jayanagar blocks." },
    ],
    relatedAreas: [
      { label: "Koramangala", href: "/invisible-grills-koramangala" },
      { label: "Indiranagar", href: "/invisible-grills-indiranagar" },
      { label: "HSR Layout", href: "/invisible-grills-hsr-layout" },
      { label: "Electronic City", href: "/invisible-grills-electronic-city" },
    ],
  },
  indiranagar: {
    area: "Indiranagar",
    slug: "indiranagar",
    landmarks: "100 Feet Road, CMH Road, Defence Colony, HAL Airport Road, 80 Feet Road",
    seoTitle: "Invisible Grills Indiranagar Bangalore | MKR Safety Solutions",
    seoDesc: "Invisible grills in Indiranagar Bangalore. Premium balcony and window grills near 100 Feet Road. 316 SS, 10-year warranty, free site visit. MKR Safety Solutions.",
    h1: "Invisible Grills in Indiranagar, Bangalore",
    intro: "Indiranagar's premium properties deserve premium safety — MKR Safety Solutions brings 8+ years of expertise to balcony, window, staircase, and terrace grill installations across this vibrant neighborhood.",
    localContent: "Indiranagar is synonymous with premium living in Bangalore. The area around 100 Feet Road, CMH Road, and Defence Colony attracts high-income professionals, expats, and established families who demand the best in every aspect of their homes — including safety. MKR Safety Solutions has built a strong reputation in Indiranagar, completing 110+ installations ranging from individual balcony projects in luxury apartments to full villa invisible grill systems. Our clients in Indiranagar include many discerning homeowners who have researched their options extensively before choosing MKR for our quality, reliability, and transparent pricing.",
    faqs: [
      { q: "Do you serve Defence Colony in Indiranagar?", a: "Yes, we serve all areas of Indiranagar including Defence Colony, CMH Road, 100 Feet Road, and surrounding areas including Domlur and HAL 2nd Stage." },
      { q: "Can you handle villa-sized projects in Indiranagar?", a: "Yes. We have extensive experience with Indiranagar's premium villas and bungalows, handling complex full-home invisible grill projects with a dedicated project manager." },
    ],
    relatedAreas: [
      { label: "Koramangala", href: "/invisible-grills-koramangala" },
      { label: "Whitefield", href: "/invisible-grills-whitefield" },
      { label: "Hebbal", href: "/invisible-grills-hebbal" },
      { label: "HSR Layout", href: "/invisible-grills-hsr-layout" },
    ],
  },
  yelahanka: {
    area: "Yelahanka",
    slug: "yelahanka",
    landmarks: "Yelahanka New Town, CRPF Campus, Shivakote, Jakkur Lake, Air Force Base",
    seoTitle: "Invisible Grills Yelahanka Bangalore | MKR Safety Solutions",
    seoDesc: "Invisible grills in Yelahanka Bangalore. Balcony, window & child safety grills near Yelahanka New Town. Free site visit, 10-year warranty. MKR Safety Solutions.",
    h1: "Invisible Grills in Yelahanka, Bangalore",
    intro: "Serving Yelahanka's rapidly growing residential areas — from Yelahanka New Town to the premium villa communities near Jakkur Lake and the CRPF Campus area.",
    localContent: "Yelahanka has transformed from a quiet suburb to a thriving residential destination, particularly with premium villa communities and apartment complexes developing around Jakkur Lake, Yelahanka New Town, and the areas near Kempegowda International Airport. Many defence personnel families living near CRPF Campus and Air Force Base Station have chosen MKR Safety Solutions for their invisible grill needs. The area's growing expat community and premium villa density make invisible grill solutions particularly in demand. We offer same-day site visits across Yelahanka and all areas up to the airport.",
    faqs: [
      { q: "Do you serve areas near Bangalore Airport in Yelahanka?", a: "Yes. We serve the entire Yelahanka region including areas close to Kempegowda International Airport, Hebbal, and the Outer Ring Road corridor." },
      { q: "Are invisible grills suitable for Yelahanka's villa communities?", a: "Absolutely. Villa installations are our specialty. Many of Yelahanka's premium villa communities have multiple MKR installations across the project." },
    ],
    relatedAreas: [
      { label: "Hebbal", href: "/invisible-grills-hebbal" },
      { label: "KR Puram", href: "/invisible-grills-kr-puram" },
      { label: "Whitefield", href: "/invisible-grills-whitefield" },
      { label: "Marathahalli", href: "/invisible-grills-marathahalli" },
    ],
  },
  hebbal: {
    area: "Hebbal",
    slug: "hebbal",
    landmarks: "Hebbal Flyover, Manyata Tech Park, Hebbal Lake, Nagawara, Thanisandra Road",
    seoTitle: "Invisible Grills Hebbal Bangalore | MKR Safety Solutions",
    seoDesc: "Invisible grills in Hebbal Bangalore. Premium balcony grills near Manyata Tech Park & Hebbal Lake. 316 SS, free site visit, 10-year warranty. MKR Safety Solutions.",
    h1: "Invisible Grills in Hebbal, Bangalore",
    intro: "Premium invisible grill installation in Hebbal — serving the high-rise towers around Manyata Tech Park and the lakeside premium apartments near Hebbal Lake.",
    localContent: "Hebbal has become one of North Bangalore's most desirable residential addresses, driven by the proximity to Manyata Tech Park and the beautiful Hebbal Lake. The area's luxury high-rise apartments — many with stunning lake or city views — are perfect candidates for invisible grills that protect families without blocking the remarkable vistas. MKR Safety Solutions serves all of Hebbal's residential areas including Thanisandra Road, Nagawara, and the Outer Ring Road corridor. Our team is familiar with the premium apartment developers active in the Hebbal area and has successfully navigated HOA requirements in most major complexes.",
    faqs: [
      { q: "Are invisible grills good for Hebbal's lakeside apartments?", a: "Yes, especially. Our 316-grade marine stainless steel is specifically rated for high-humidity environments near water bodies, making it ideal for apartments near Hebbal Lake." },
      { q: "Do you serve Manyata Tech Park area apartments?", a: "Yes, all residential projects around Manyata Tech Park including Thanisandra Road, Nagawara, and the Outer Ring Road corridor near Hebbal." },
    ],
    relatedAreas: [
      { label: "Yelahanka", href: "/invisible-grills-yelahanka" },
      { label: "Indiranagar", href: "/invisible-grills-indiranagar" },
      { label: "KR Puram", href: "/invisible-grills-kr-puram" },
      { label: "Whitefield", href: "/invisible-grills-whitefield" },
    ],
  },
  "kr-puram": {
    area: "KR Puram",
    slug: "kr-puram",
    landmarks: "KR Puram Bridge, BEML Township, Tin Factory, Hoodi, Old Madras Road",
    seoTitle: "Invisible Grills KR Puram Bangalore | MKR Safety Solutions",
    seoDesc: "Invisible grills in KR Puram Bangalore. Balcony and window grills near BEML Township and Tin Factory. Free site visit, 10-year warranty. MKR Safety Solutions.",
    h1: "Invisible Grills in KR Puram, Bangalore",
    intro: "Trusted invisible grill installation in KR Puram — from the established BEML Township to the rapidly developing residential zones along Old Madras Road toward Whitefield.",
    localContent: "KR Puram has evolved from an industrial township into a diverse residential area, with BEML Township's established housing stock and new apartment developments along Old Madras Road and around Tin Factory. The area's growing connectivity via the Purple Metro Line is attracting new residents and investment. MKR Safety Solutions serves all of KR Puram's residential areas, offering the same premium 316-grade invisible grill solutions available in Bangalore's more upscale neighborhoods. We pride ourselves on providing premium quality regardless of the neighborhood — every family deserves the best in safety.",
    faqs: [
      { q: "Do you serve BEML Township in KR Puram?", a: "Yes. BEML Township is one of our regular service areas in KR Puram. We're familiar with the residential layouts and building types in the township." },
      { q: "How far does your KR Puram service coverage extend?", a: "We serve KR Puram, Hoodi, Channasandra, Rammurthy Nagar, and the Tin Factory to Whitefield corridor along Old Madras Road." },
    ],
    relatedAreas: [
      { label: "Whitefield", href: "/invisible-grills-whitefield" },
      { label: "Marathahalli", href: "/invisible-grills-marathahalli" },
      { label: "Hebbal", href: "/invisible-grills-hebbal" },
      { label: "Yelahanka", href: "/invisible-grills-yelahanka" },
    ],
  },
};

export function WhitefieldPage() { return <LocationPage data={locationData.whitefield} />; }
export function SarjapurRoadPage() { return <LocationPage data={locationData["sarjapur-road"]} />; }
export function ElectronicCityPage() { return <LocationPage data={locationData["electronic-city"]} />; }
export function HSRLayoutPage() { return <LocationPage data={locationData["hsr-layout"]} />; }
export function BellandurPage() { return <LocationPage data={locationData.bellandur} />; }
export function MarathahilliPage() { return <LocationPage data={locationData.marathahalli} />; }
export function KoramangalaPage() { return <LocationPage data={locationData.koramangala} />; }
export function JayanagarPage() { return <LocationPage data={locationData.jayanagar} />; }
export function IndirangarPage() { return <LocationPage data={locationData.indiranagar} />; }
export function YelahankPage() { return <LocationPage data={locationData.yelahanka} />; }
export function HebbalPage() { return <LocationPage data={locationData.hebbal} />; }
export function KRPuramPage() { return <LocationPage data={locationData["kr-puram"]} />; }
