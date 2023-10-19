import HouseIcon from "../../assects/house.png";
import ResidentialIcon from "../../assects/residential.png";
import LuxuryIcon from "../../assects/luxury.png";
import OfficeIcon from "../../assects/office.png";
import Image from "next/image";
import FooterComponent from "./FooterComponent";
import PropertyCategory from "./PropertyCategory";
import UpComingCategory from "./UpComingCategory";

const Category = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-teal-400 to-violet-600 h-96">
        <div className="pt-32 flex justify-center items-center ">
          <div className="flex  justify-center  items-center backdrop-blur-lg bg-white/50 p-4 mx-4  w-[600px] h-40 rounded-md  ">
            <h1 className="text-indigo-500">All Categories</h1>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto  mt-12">
        <div className="mx-4 p-4 mb-4 rounded-md">
          <PropertyCategory />
          <UpComingCategory />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Category;
