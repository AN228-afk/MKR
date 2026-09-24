import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const FAQs = lazy(() => import("@/pages/FAQs"));
const Projects = lazy(() => import("@/pages/Projects"));
const Reviews = lazy(() => import("@/pages/Reviews"));
const Blog = lazy(() => import("@/pages/Blog"));
const StoreLocator = lazy(() => import("@/pages/StoreLocator"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const InvisibleGrillsBangalore = lazy(() => import("@/pages/services/InvisibleGrillsBangalore"));
const BalconyGrills = lazy(() => import("@/pages/services/BalconyGrills"));
const WindowGrills = lazy(() => import("@/pages/services/WindowGrills"));
const StaircaseGrills = lazy(() => import("@/pages/services/StaircaseGrills"));
const TerraceGrills = lazy(() => import("@/pages/services/TerraceGrills"));
const VillaGrills = lazy(() => import("@/pages/services/VillaGrills"));
const ChildSafetyGrills = lazy(() => import("@/pages/services/ChildSafetyGrills"));
const SchoolGrills = lazy(() => import("@/pages/services/SchoolGrills"));

const WhitefieldPage = lazy(() => import("@/pages/locations").then(m => ({ default: m.WhitefieldPage })));
const SarjapurRoadPage = lazy(() => import("@/pages/locations").then(m => ({ default: m.SarjapurRoadPage })));
const ElectronicCityPage = lazy(() => import("@/pages/locations").then(m => ({ default: m.ElectronicCityPage })));
const HSRLayoutPage = lazy(() => import("@/pages/locations").then(m => ({ default: m.HSRLayoutPage })));
const BellandurPage = lazy(() => import("@/pages/locations").then(m => ({ default: m.BellandurPage })));
const MarathahilliPage = lazy(() => import("@/pages/locations").then(m => ({ default: m.MarathahilliPage })));
const KoramangalaPage = lazy(() => import("@/pages/locations").then(m => ({ default: m.KoramangalaPage })));
const JayanagarPage = lazy(() => import("@/pages/locations").then(m => ({ default: m.JayanagarPage })));
const IndirangarPage = lazy(() => import("@/pages/locations").then(m => ({ default: m.IndirangarPage })));
const YelahankPage = lazy(() => import("@/pages/locations").then(m => ({ default: m.YelahankPage })));
const HebbalPage = lazy(() => import("@/pages/locations").then(m => ({ default: m.HebbalPage })));
const KRPuramPage = lazy(() => import("@/pages/locations").then(m => ({ default: m.KRPuramPage })));

const BenefitsBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.BenefitsBlogPost })));
const VsTraditionalBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.VsTraditionalBlogPost })));
const ChildSafetyBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.ChildSafetyBlogPost })));
const BalconySafetyBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.BalconySafetyBlogPost })));
const HowItWorksBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.HowItWorksBlogPost })));
const BestGrillsBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.BestGrillsBlogPost })));
const MaintenanceBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.MaintenanceBlogPost })));
const SteelGradeBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.SteelGradeBlogPost })));
const BalconySafetyNetAlternativeBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.BalconySafetyNetAlternativeBlogPost })));
const BalconySafetyNetAlternative2BlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.BalconySafetyNetAlternative2BlogPost })));
const StainlessSteelSafetyWireBalconyBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.StainlessSteelSafetyWireBalconyBlogPost })));
const InvisibleGrillVsIronGrillBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillVsIronGrillBlogPost })));
const InvisibleGrillCostBangaloreBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillCostBangaloreBlogPost })));
const BalconySafetyNetAlternative3BlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.BalconySafetyNetAlternative3BlogPost })));
const PetSafetyBalconyGrillBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.PetSafetyBalconyGrillBlogPost })));
const InvisibleGrillVsIronGrill2BlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillVsIronGrill2BlogPost })));
const HighRiseApartmentBalconySafetyBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.HighRiseApartmentBalconySafetyBlogPost })));
const InvisibleGrillCostBangalore2BlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillCostBangalore2BlogPost })));
const InvisibleGrillCostBangalore3BlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillCostBangalore3BlogPost })));
const BalconySafetyNetAlternative4BlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.BalconySafetyNetAlternative4BlogPost })));
const TerraceSafetyRailingBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.TerraceSafetyRailingBlogPost })));
const PetSafetyBalconyGrill2BlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.PetSafetyBalconyGrill2BlogPost })));
const WindowSafetyGrillForApartmentsBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.WindowSafetyGrillForApartmentsBlogPost })));
const WindowSafetyGrillForApartments2BlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.WindowSafetyGrillForApartments2BlogPost })));
const PetSafetyBalconyGrill3BlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.PetSafetyBalconyGrill3BlogPost })));

const queryClient = new QueryClient();

function Router() {
  return (
    <Suspense fallback={null}>
    <Switch>
      {/* Core Pages */}
      <Route path="/" component={Home} />
      <Route path="/about-us" component={About} />
      <Route path="/contact-us" component={Contact} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/faqs" component={FAQs} />
      <Route path="/projects" component={Projects} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/blog" component={Blog} />
      <Route path="/store-locator" component={StoreLocator} />
      <Route path="/pricing" component={Pricing} />

      {/* Service Pages */}
      <Route path="/invisible-grills-bangalore" component={InvisibleGrillsBangalore} />
      <Route path="/balcony-invisible-grills" component={BalconyGrills} />
      <Route path="/window-invisible-grills" component={WindowGrills} />
      <Route path="/staircase-invisible-grills" component={StaircaseGrills} />
      <Route path="/terrace-invisible-grills" component={TerraceGrills} />
      <Route path="/villa-invisible-grills" component={VillaGrills} />
      <Route path="/child-safety-grills" component={ChildSafetyGrills} />
      <Route path="/school-safety-grills" component={SchoolGrills} />

      {/* Location Pages */}
      <Route path="/invisible-grills-whitefield" component={WhitefieldPage} />
      <Route path="/invisible-grills-sarjapur-road" component={SarjapurRoadPage} />
      <Route path="/invisible-grills-electronic-city" component={ElectronicCityPage} />
      <Route path="/invisible-grills-hsr-layout" component={HSRLayoutPage} />
      <Route path="/invisible-grills-bellandur" component={BellandurPage} />
      <Route path="/invisible-grills-marathahalli" component={MarathahilliPage} />
      <Route path="/invisible-grills-koramangala" component={KoramangalaPage} />
      <Route path="/invisible-grills-jayanagar" component={JayanagarPage} />
      <Route path="/invisible-grills-indiranagar" component={IndirangarPage} />
      <Route path="/invisible-grills-yelahanka" component={YelahankPage} />
      <Route path="/invisible-grills-hebbal" component={HebbalPage} />
      <Route path="/invisible-grills-kr-puram" component={KRPuramPage} />

      {/* Blog Post Pages */}
      <Route path="/blog/benefits-of-invisible-grills" component={BenefitsBlogPost} />
      <Route path="/blog/invisible-grills-vs-traditional-grills" component={VsTraditionalBlogPost} />
      <Route path="/blog/child-safety-for-apartments" component={ChildSafetyBlogPost} />
      <Route path="/blog/balcony-safety-guide" component={BalconySafetyBlogPost} />
      <Route path="/blog/how-invisible-grills-work" component={HowItWorksBlogPost} />
      <Route path="/blog/best-invisible-grills-in-bangalore" component={BestGrillsBlogPost} />
      <Route path="/blog/invisible-grill-maintenance-guide" component={MaintenanceBlogPost} />
      <Route path="/blog/why-choose-316-grade-steel-grills" component={SteelGradeBlogPost} />
      <Route path="/blog/balcony-safety-net-alternative" component={BalconySafetyNetAlternativeBlogPost} />
      <Route path="/blog/balcony-safety-net-alternative-2" component={BalconySafetyNetAlternative2BlogPost} />
      <Route path="/blog/stainless-steel-safety-wire-balcony" component={StainlessSteelSafetyWireBalconyBlogPost} />
      <Route path="/blog/invisible-grill-vs-iron-grill" component={InvisibleGrillVsIronGrillBlogPost} />
      <Route path="/blog/invisible-grill-cost-bangalore" component={InvisibleGrillCostBangaloreBlogPost} />
      <Route path="/blog/balcony-safety-net-alternative-3" component={BalconySafetyNetAlternative3BlogPost} />
      <Route path="/blog/pet-safety-balcony-grill" component={PetSafetyBalconyGrillBlogPost} />
      <Route path="/blog/invisible-grill-vs-iron-grill-2" component={InvisibleGrillVsIronGrill2BlogPost} />
      <Route path="/blog/high-rise-apartment-balcony-safety" component={HighRiseApartmentBalconySafetyBlogPost} />
      <Route path="/blog/invisible-grill-cost-bangalore-2" component={InvisibleGrillCostBangalore2BlogPost} />
      <Route path="/blog/invisible-grill-cost-bangalore-3" component={InvisibleGrillCostBangalore3BlogPost} />
      <Route path="/blog/balcony-safety-net-alternative-4" component={BalconySafetyNetAlternative4BlogPost} />
      <Route path="/blog/terrace-safety-railing" component={TerraceSafetyRailingBlogPost} />
      <Route path="/blog/pet-safety-balcony-grill-2" component={PetSafetyBalconyGrill2BlogPost} />
      <Route path="/blog/window-safety-grill-for-apartments" component={WindowSafetyGrillForApartmentsBlogPost} />
      <Route path="/blog/window-safety-grill-for-apartments-2" component={WindowSafetyGrillForApartments2BlogPost} />
      <Route path="/blog/pet-safety-balcony-grill-3" component={PetSafetyBalconyGrill3BlogPost} />

      <Route component={NotFound} />
    </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
