import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import FAQs from "@/pages/FAQs";
import Projects from "@/pages/Projects";
import Reviews from "@/pages/Reviews";
import Blog from "@/pages/Blog";
import StoreLocator from "@/pages/StoreLocator";

import Pricing from "@/pages/Pricing";
import InvisibleGrillsBangalore from "@/pages/services/InvisibleGrillsBangalore";
import BalconyGrills from "@/pages/services/BalconyGrills";
import WindowGrills from "@/pages/services/WindowGrills";
import StaircaseGrills from "@/pages/services/StaircaseGrills";
import TerraceGrills from "@/pages/services/TerraceGrills";
import VillaGrills from "@/pages/services/VillaGrills";
import ChildSafetyGrills from "@/pages/services/ChildSafetyGrills";
import SchoolGrills from "@/pages/services/SchoolGrills";

import {
  WhitefieldPage,
  SarjapurRoadPage,
  ElectronicCityPage,
  HSRLayoutPage,
  BellandurPage,
  MarathahilliPage,
  KoramangalaPage,
  JayanagarPage,
  IndirangarPage,
  YelahankPage,
  HebbalPage,
  KRPuramPage,
} from "@/pages/locations";

import {
  BenefitsBlogPost,
  VsTraditionalBlogPost,
  ChildSafetyBlogPost,
  BalconySafetyBlogPost,
  HowItWorksBlogPost,
  BestGrillsBlogPost,
  MaintenanceBlogPost,
  SteelGradeBlogPost,
  BalconySafetyNetAlternativeBlogPost,
  BalconySafetyNetAlternative2BlogPost,
  StainlessSteelSafetyWireBalconyBlogPost,
  InvisibleGrillVsIronGrillBlogPost,
} from "@/pages/blog/index";

const queryClient = new QueryClient();

function Router() {
  return (
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

      <Route component={NotFound} />
    </Switch>
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
