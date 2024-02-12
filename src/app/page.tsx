import About from "@/components/ui/About";
import CreateFeedback from "@/components/ui/CreateFeedback";
import FaqPage from "@/components/ui/Faq";
import Feedback from "@/components/ui/Feedback";
import FooterComponent from "@/components/ui/FooterComponent";
import HomepageHero from "@/components/ui/HomepageHero";
import LatestProperty from "@/components/ui/LatestProperty";
import OurPartners from "@/components/ui/OurPartners";
import PropertyCategory from "@/components/ui/PropertyCategory";
import Servey from "@/components/ui/Servey";
import UpComingCategory from "@/components/ui/UpComingCategory";

const HomePage = () => {
  return (
    <div>
      <HomepageHero />
      <PropertyCategory />
      <About />
      <UpComingCategory />
      <LatestProperty />
      <Servey />
      <Feedback />
      <FaqPage />
      <OurPartners />
      <CreateFeedback />
      <FooterComponent />
    </div>
  );
};
export default HomePage;
