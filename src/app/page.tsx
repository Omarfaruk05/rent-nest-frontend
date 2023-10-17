import FaqPage from "@/components/ui/Faq";
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
      <OurPartners />
      <Overview />
      <FaqPage />
    </div>
  );
};
export default HomePage;
