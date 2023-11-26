/* eslint-disable @next/next/no-img-element */
import React from "react";
import HouseIcon from "../../assects/house.png";
import ResidentialIcon from "../../assects/residential.png";
import LuxuryIcon from "../../assects/luxury.png";
import OfficeIcon from "../../assects/office.png";
import BannerImg1 from "../../assects/banner.jpeg";
import BannerImg2 from "../../assects/banner2.jpg";
import BannerImg3 from "../../assects/banner3.jpg";
import Image from "next/image";
import { Button, Carousel } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { motion } from "framer-motion";

const PropertyCategory = () => {
  return (
    <div className="mt-12 max-w-7xl mx-auto p-3">
      <div className="items-center">
        <h2 className="text-center text-slate-500">What Do You Want?</h2>
        <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-3"></div>
        <div className="mt-12 flex flex-wrap justify-around items-center gap-8 md:gap-12 lg:gap-[100px] mx-20">
          <Link
            href={"/houses"}
            className="text-center cursor-pointer no-underline text-slate-700"
          >
            <Image
              className="text-gray-400"
              height={50}
              src={HouseIcon}
              alt="HouseIcon"
            />
            <p>Furnished Apartment</p>
          </Link>
          <Link
            href={"/houses"}
            className="text-center cursor-pointer no-underline text-slate-700"
          >
            <Image height={50} src={ResidentialIcon} alt="HouseIcon" />
            <p>Residential Apartment</p>
          </Link>
          <Link
            href={"/houses"}
            className="text-center cursor-pointer no-underline text-slate-700"
          >
            <Image height={50} src={LuxuryIcon} alt="HouseIcon" />
            <p>Luxury Apartment</p>
          </Link>
          <Link
            href={"/houses"}
            className="text-center cursor-pointer no-underline text-slate-700"
          >
            <Image height={50} src={OfficeIcon} alt="HouseIcon" />
            <p>Office Space</p>
          </Link>
        </div>
        <Carousel autoplay className="mt-12">
          <div className="relative">
            <img
              className="rounded-lg mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px]"
              src={BannerImg3.src}
              alt=""
            />
            <div className="absolute top-0 left-0 md:pt-12 pl-8 text-gray-200 h-full mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px] rounded-md bg-gradient-to-r from-teal-500 to-[#0bc29512] bg-opacity-50">
              <h1>Discover impresive virtual property tours </h1>
              <p className="md:my-2 text-lg">
                Explore properties form the comfort of your home
              </p>
              <Link href={"/houses"}>
                <Button className="bg-white px-12 rounded-md md:mt-4 text-teal-700 font-semibold">
                  View Now <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              className="rounded-lg mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px]"
              src={BannerImg2.src}
              alt=""
            />
            <div className="absolute top-0 left-0 md:pt-12 pl-8 text-gray-200 h-full mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px] rounded-md bg-gradient-to-r from-teal-500 to-[#0bc29512] bg-opacity-50">
              <h1>Discover impresive virtual property tours </h1>
              <p className="md:my-2 text-lg">
                Explore properties form the comfort of your home
              </p>
              <Link href={"/houses"}>
                <Button className="bg-white px-12 rounded-md md:mt-4 text-teal-700 font-semibold">
                  View Now <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              className="rounded-lg mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px]"
              src={BannerImg1.src}
              alt=""
            />
            <div className="absolute top-0 left-0 md:pt-12 pl-8 text-gray-200 h-full mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px] rounded-md bg-gradient-to-r from-teal-500 to-[#0bc29512] bg-opacity-50">
              <h1>Explore your future home with detailed videos </h1>
              <p className="md:my-2 text-lg">View your dream houses online</p>
              <Link href={"/houses"}>
                <Button className="bg-white px-12 rounded-md md:mt-4 text-teal-700 font-semibold">
                  View Now <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PropertyCategory;
