import HouseIcon from "../../assects/house.png";
import ResidentialIcon from "../../assects/residential.png";
import LuxuryIcon from "../../assects/luxury.png";
import OfficeIcon from "../../assects/office.png";
import Image from "next/image";
import FooterComponent from "./FooterComponent";
import PropertyCategory from "./PropertyCategory";
import UpComingCategory from "./UpComingCategory";
import Hero from "./Hero";

const Category = () => {
  return (
    <div>
      <Hero>
        <h1 className=" text-center text-5xl text-slate-800">Categories</h1>
      </Hero>
      <div className="max-w-7xl mx-auto  mt-12">
        <div className=" mb-4">
          <PropertyCategory />
          <UpComingCategory />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Category;
