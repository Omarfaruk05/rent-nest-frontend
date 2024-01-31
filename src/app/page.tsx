import About from "@/components/ui/About";
import CreateFeedback from "@/components/ui/CreateFeedback";
import FaqPage from "@/components/ui/Faq";
import Feedback from "@/components/ui/Feedback";
import FooterComponent from "@/components/ui/FooterComponent";
import Hero from "@/components/ui/Hero";
import LatestProperty from "@/components/ui/LatestProperty";
import OurPartners from "@/components/ui/OurPartners";
import Overview from "@/components/ui/Overview";
import PropertyCategory from "@/components/ui/PropertyCategory";
import Servey from "@/components/ui/Servey";
import UpComingCategory from "@/components/ui/UpComingCategory";

const HomePage = () => {
  return (
    <div>
      <Hero text={"Discover Your Perfect Property"} />
      <PropertyCategory />
      <About />
      <UpComingCategory />
      <LatestProperty />
      <Overview />
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
