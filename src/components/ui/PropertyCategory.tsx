/* eslint-disable @next/next/no-img-element */
import React from "react";
import HouseIcon from "../../assects/house.png";
import ResidentialIcon from "../../assects/residential.png";
import LuxuryIcon from "../../assects/luxury.png";
import OfficeIcon from "../../assects/office.png";
import BannerImg from "../../assects/banner.jpeg";
import Image from "next/image";
import { Carousel } from "antd";

const PropertyCategory = () => {
  return (
    <div className="mt-12 max-w-7xl mx-auto">
      <div className="items-center">
        <h2 className="text-center text-slate-500">What Do You Want?</h2>
        <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-3"></div>
        <div className="mt-12 flex flex-wrap justify-around items-center gap-8 md:gap-12 lg:gap-[100px] mx-20">
          <div className="text-center cursor-pointer">
            <Image height={50} src={HouseIcon} alt="HouseIcon" />
            <p>Furnished Apartment</p>
          </div>
          <div className="text-center cursor-pointer">
            <Image height={50} src={ResidentialIcon} alt="HouseIcon" />
            <p>Residential Apartment</p>
          </div>
          <div className="text-center cursor-pointer">
            <Image height={50} src={LuxuryIcon} alt="HouseIcon" />
            <p>Luxury Apartment</p>
          </div>
          <div className="text-center cursor-pointer">
            <Image height={50} src={OfficeIcon} alt="HouseIcon" />
            <p>Office Space</p>
          </div>
        </div>
        <Carousel autoplay className="mt-12">
          <div>
            <img
              className="rounded-lg mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px]"
              src={BannerImg.src}
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-lg mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px]"
              src={BannerImg.src}
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-lg mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px]"
              src={BannerImg.src}
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PropertyCategory;
