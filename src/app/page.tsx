import CreateFeedback from "@/components/ui/CreateFeedback";
import FaqPage from "@/components/ui/Faq";
import Feedback from "@/components/ui/Feedback";
import FooterComponent from "@/components/ui/FooterComponent";
import Hero from "@/components/ui/Hero";
import LatestProperty from "@/components/ui/LatestProperty";
import OurPartners from "@/components/ui/OurPartners";
import Overview from "@/components/ui/Overview";
import PropertyCategory from "@/components/ui/PropertyCategory";
import UpComingCategory from "@/components/ui/UpComingCategory";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <PropertyCategory />
      <UpComingCategory />
      <LatestProperty />
      <Overview />
      <Feedback />
      <FaqPage />
      <OurPartners />
      <CreateFeedback />
      <FooterComponent />
    </div>
  );
};
export default HomePage;
