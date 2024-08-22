/* eslint-disable @next/next/no-img-element */
"use client";

import UpcomingIcon from "../../assects/upcoming.png";
import { Button, Carousel } from "antd";
import BannerImg1 from "../../assects/banner.jpeg";
import BannerImg2 from "../../assects/banner2.jpg";
import BannerImg3 from "../../assects/banner3.jpg";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import RevelMotion from "../motions/RevelMotion";

const UpComingCategory = () => {
  return (
    <div>
      <div className="mt-12 max-w-7xl mx-auto p-3">
        <RevelMotion>
          <h1 className="text-center text-slate-500">Upcoming Category</h1>
          <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-3"></div>{" "}
        </RevelMotion>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 justify-center mx-auto gap-8 lg:gap-12">
          <RevelMotion>
            <div className="text-center rounded-md border bordered-1 shadow-md p-4">
              <RevelMotion>
                <Image
                  className="mt-4"
                  height={50}
                  src={UpcomingIcon}
                  alt="HouseIcon"
                />{" "}
              </RevelMotion>
              <RevelMotion>
                <p className="my-4">Buy Apartment</p>{" "}
              </RevelMotion>
              <RevelMotion>
                <small>
                  RENTS Corporation help businesses find the right way to work.
                  We are facilitators connecting people with spaces. And most
                  importantly, in the communities where we live and work, we are
                  trusted insiders.
                </small>
              </RevelMotion>
              <br />
              <Link href={"/blog"}>
                <RevelMotion>
                  <Button className="bg-teal-100 mt-4">Read More</Button>
                </RevelMotion>
              </Link>
            </div>
          </RevelMotion>
          <RevelMotion>
            <div className="text-center rounded-md shadow-md p-4 ">
              <RevelMotion>
                <Image
                  className="mt-4"
                  height={50}
                  src={UpcomingIcon}
                  alt="HouseIcon"
                />
              </RevelMotion>{" "}
              <RevelMotion>
                <p className="my-4">Buy Hotel</p>{" "}
              </RevelMotion>
              <RevelMotion>
                <small>
                  Find your new place with thousands of constantly updated
                  listings, robust filters and impressive photo experience with
                  RENTS Incorporation.we are trusted insiders.
                </small>
              </RevelMotion>
              <br />
              <Link href={"/blog"}>
                {" "}
                <RevelMotion>
                  <Button className="bg-teal-100 mt-4">Read More</Button>
                </RevelMotion>
              </Link>{" "}
            </div>
          </RevelMotion>
          <RevelMotion>
            <div className="text-center rounded-md shadow-md p-4">
              <RevelMotion>
                <Image
                  className="mt-4"
                  height={50}
                  src={UpcomingIcon}
                  alt="HouseIcon"
                />
              </RevelMotion>{" "}
              <RevelMotion>
                <p className="my-4">Buy Resort</p>
              </RevelMotion>{" "}
              <RevelMotion>
                <small>
                  Explore a variety of Modern, Stylish, Safe & Comfortable
                  Furnished homes without leaving yours. RENTS Corporation
                  furnishing make it easy to find flexible housing without
                  sacrificing quality.
                </small>
              </RevelMotion>
              <br />
              <Link href={"/blog"}>
                {" "}
                <RevelMotion>
                  <Button className="bg-teal-100 mt-4">Read More</Button>
                </RevelMotion>
              </Link>
            </div>
          </RevelMotion>
        </div>
        <Carousel autoplay effect="fade" className="mt-12">
          <div className="relative">
            <img
              className="rounded-lg mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px]"
              src={BannerImg1.src}
              alt=""
            />
            <div className="absolute top-0 left-0 md:pt-12 pl-8 text-gray-200 h-full mx-auto w-[350px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px] rounded-md bg-gradient-to-r from-[#033c79] to-[#0bc29512] bg-opacity-50">
              <h1>Explore your future home with detailed videos </h1>
              <p className="md:my-2 text-lg">View your dream houses online</p>
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
            <div className="absolute top-0 left-0 md:pt-12 pl-8 text-gray-200 h-full mx-auto w-[350px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px] rounded-md bg-gradient-to-r from-gray-900 to-[#0bc29512] bg-opacity-50">
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
              src={BannerImg3.src}
              alt=""
            />
            <div className="absolute top-0 left-0 md:pt-12 pl-8 text-gray-200 h-full mx-auto w-[350px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px] rounded-md bg-gradient-to-r from-lime-900 to-[#0bc29512] bg-opacity-50">
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
        </Carousel>
      </div>
    </div>
  );
};

export default UpComingCategory;
