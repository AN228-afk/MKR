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
const StainlessSteelSafetyWireBalconyBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.StainlessSteelSafetyWireBalconyBlogPost })));
const InvisibleGrillVsIronGrillBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillVsIronGrillBlogPost })));
const InvisibleGrillCostBangaloreBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillCostBangaloreBlogPost })));
const PetSafetyBalconyGrillBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.PetSafetyBalconyGrillBlogPost })));
const HighRiseApartmentBalconySafetyBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.HighRiseApartmentBalconySafetyBlogPost })));
const TerraceSafetyRailingBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.TerraceSafetyRailingBlogPost })));
const WindowSafetyGrillForApartmentsBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.WindowSafetyGrillForApartmentsBlogPost })));
const InvisibleGrillElectronicCityBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillElectronicCityBlogPost })));
const BalconySafetyChecklistForParentsBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.BalconySafetyChecklistForParentsBlogPost })));
const InvisibleGrillHorizontalVsVerticalBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillHorizontalVsVerticalBlogPost })));
const InvisibleGrillAndPigeonProblemBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillAndPigeonProblemBlogPost })));
const InvisibleGrillForSchoolBuildingsBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillForSchoolBuildingsBlogPost })));
const InvisibleGrillVsGlassRailingBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillVsGlassRailingBlogPost })));
const InvisibleGrillHsrLayoutBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillHsrLayoutBlogPost })));
const InvisibleGrillGapSpacingForKidsBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillGapSpacingForKidsBlogPost })));
const InvisibleGrillForBalconyBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillForBalconyBlogPost })));
const InvisibleGrillForSeniorCitizensBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillForSeniorCitizensBlogPost })));
const InvisibleGrillInstallationProcessBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillInstallationProcessBlogPost })));
const InvisibleGrillForLiftDuctOrShaftBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillForLiftDuctOrShaftBlogPost })));
const HowToChooseAnInvisibleGrillInstallerBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.HowToChooseAnInvisibleGrillInstallerBlogPost })));
const InvisibleGrillForDuplexStaircaseBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillForDuplexStaircaseBlogPost })));
const InvisibleGrillStrengthAndLoadCapacityBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillStrengthAndLoadCapacityBlogPost })));
const InvisibleGrillPricePerSquareFeetBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillPricePerSquareFeetBlogPost })));
const InvisibleGrillRulesForApartmentAssociationsBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillRulesForApartmentAssociationsBlogPost })));
const InvisibleGrillMonsoonCareBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillMonsoonCareBlogPost })));
const InvisibleGrillForFrenchWindowsBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillForFrenchWindowsBlogPost })));
const StaircaseSafetyGrillBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.StaircaseSafetyGrillBlogPost })));
const InvisibleGrillForUtilityAreaBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillForUtilityAreaBlogPost })));
const InvisibleGrillVsSsPipeRailingBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillVsSsPipeRailingBlogPost })));
const InvisibleGrillForVillaBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillForVillaBlogPost })));
const InvisibleGrillNanoCoatingBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillNanoCoatingBlogPost })));
const InvisibleGrillForOfficeBalconyBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillForOfficeBalconyBlogPost })));
const InvisibleGrillMarathahalliBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillMarathahalliBlogPost })));
const InvisibleGrillSarjapurRoadBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillSarjapurRoadBlogPost })));
const InvisibleGrillMaintenanceTipsBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillMaintenanceTipsBlogPost })));
const InvisibleGrillWarrantyWhatToCheckBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillWarrantyWhatToCheckBlogPost })));
const InvisibleGrillYelahankaBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillYelahankaBlogPost })));
const InvisibleGrillForCornerBalconyBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillForCornerBalconyBlogPost })));
const InvisibleGrillForSlidingWindowsBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillForSlidingWindowsBlogPost })));
const InvisibleGrillForGatedCommunityApartmentsBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillForGatedCommunityApartmentsBlogPost })));
const InvisibleGrillVsAluminiumGrillBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillVsAluminiumGrillBlogPost })));
const InvisibleGrillHebbalBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillHebbalBlogPost })));
const ChildSafetyBalconyIdeasBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.ChildSafetyBalconyIdeasBlogPost })));
const InvisibleGrillBellandurBlogPost = lazy(() => import("@/pages/blog/index").then(m => ({ default: m.InvisibleGrillBellandurBlogPost })));

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
      <Route path="/blog/stainless-steel-safety-wire-balcony" component={StainlessSteelSafetyWireBalconyBlogPost} />
      <Route path="/blog/invisible-grill-vs-iron-grill" component={InvisibleGrillVsIronGrillBlogPost} />
      <Route path="/blog/invisible-grill-cost-bangalore" component={InvisibleGrillCostBangaloreBlogPost} />
      <Route path="/blog/pet-safety-balcony-grill" component={PetSafetyBalconyGrillBlogPost} />
      <Route path="/blog/high-rise-apartment-balcony-safety" component={HighRiseApartmentBalconySafetyBlogPost} />
      <Route path="/blog/terrace-safety-railing" component={TerraceSafetyRailingBlogPost} />
      <Route path="/blog/window-safety-grill-for-apartments" component={WindowSafetyGrillForApartmentsBlogPost} />

      <Route path="/blog/invisible-grill-electronic-city" component={InvisibleGrillElectronicCityBlogPost} />

      <Route path="/blog/balcony-safety-checklist-for-parents" component={BalconySafetyChecklistForParentsBlogPost} />

      <Route path="/blog/invisible-grill-horizontal-vs-vertical" component={InvisibleGrillHorizontalVsVerticalBlogPost} />

      <Route path="/blog/invisible-grill-and-pigeon-problem" component={InvisibleGrillAndPigeonProblemBlogPost} />

      <Route path="/blog/invisible-grill-for-school-buildings" component={InvisibleGrillForSchoolBuildingsBlogPost} />

      <Route path="/blog/invisible-grill-vs-glass-railing" component={InvisibleGrillVsGlassRailingBlogPost} />

      <Route path="/blog/invisible-grill-hsr-layout" component={InvisibleGrillHsrLayoutBlogPost} />

      <Route path="/blog/invisible-grill-gap-spacing-for-kids" component={InvisibleGrillGapSpacingForKidsBlogPost} />

      <Route path="/blog/invisible-grill-for-balcony" component={InvisibleGrillForBalconyBlogPost} />

      <Route path="/blog/invisible-grill-for-senior-citizens" component={InvisibleGrillForSeniorCitizensBlogPost} />

      <Route path="/blog/invisible-grill-installation-process" component={InvisibleGrillInstallationProcessBlogPost} />

      <Route path="/blog/invisible-grill-for-lift-duct-or-shaft" component={InvisibleGrillForLiftDuctOrShaftBlogPost} />

      <Route path="/blog/how-to-choose-an-invisible-grill-installer" component={HowToChooseAnInvisibleGrillInstallerBlogPost} />

      <Route path="/blog/invisible-grill-for-duplex-staircase" component={InvisibleGrillForDuplexStaircaseBlogPost} />

      <Route path="/blog/invisible-grill-strength-and-load-capacity" component={InvisibleGrillStrengthAndLoadCapacityBlogPost} />

      <Route path="/blog/invisible-grill-price-per-square-feet" component={InvisibleGrillPricePerSquareFeetBlogPost} />

      <Route path="/blog/invisible-grill-rules-for-apartment-associations" component={InvisibleGrillRulesForApartmentAssociationsBlogPost} />

      <Route path="/blog/invisible-grill-monsoon-care" component={InvisibleGrillMonsoonCareBlogPost} />

      <Route path="/blog/invisible-grill-for-french-windows" component={InvisibleGrillForFrenchWindowsBlogPost} />

      <Route path="/blog/staircase-safety-grill" component={StaircaseSafetyGrillBlogPost} />

      <Route path="/blog/invisible-grill-for-utility-area" component={InvisibleGrillForUtilityAreaBlogPost} />

      <Route path="/blog/invisible-grill-vs-ss-pipe-railing" component={InvisibleGrillVsSsPipeRailingBlogPost} />

      <Route path="/blog/invisible-grill-for-villa" component={InvisibleGrillForVillaBlogPost} />

      <Route path="/blog/invisible-grill-nano-coating" component={InvisibleGrillNanoCoatingBlogPost} />

      <Route path="/blog/invisible-grill-for-office-balcony" component={InvisibleGrillForOfficeBalconyBlogPost} />

      <Route path="/blog/invisible-grill-marathahalli" component={InvisibleGrillMarathahalliBlogPost} />

      <Route path="/blog/invisible-grill-sarjapur-road" component={InvisibleGrillSarjapurRoadBlogPost} />

      <Route path="/blog/invisible-grill-maintenance-tips" component={InvisibleGrillMaintenanceTipsBlogPost} />

      <Route path="/blog/invisible-grill-warranty-what-to-check" component={InvisibleGrillWarrantyWhatToCheckBlogPost} />

      <Route path="/blog/invisible-grill-yelahanka" component={InvisibleGrillYelahankaBlogPost} />

      <Route path="/blog/invisible-grill-for-corner-balcony" component={InvisibleGrillForCornerBalconyBlogPost} />

      <Route path="/blog/invisible-grill-for-sliding-windows" component={InvisibleGrillForSlidingWindowsBlogPost} />

      <Route path="/blog/invisible-grill-for-gated-community-apartments" component={InvisibleGrillForGatedCommunityApartmentsBlogPost} />

      <Route path="/blog/invisible-grill-vs-aluminium-grill" component={InvisibleGrillVsAluminiumGrillBlogPost} />

      <Route path="/blog/invisible-grill-hebbal" component={InvisibleGrillHebbalBlogPost} />

      <Route path="/blog/child-safety-balcony-ideas" component={ChildSafetyBalconyIdeasBlogPost} />

      <Route path="/blog/invisible-grill-bellandur" component={InvisibleGrillBellandurBlogPost} />

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
