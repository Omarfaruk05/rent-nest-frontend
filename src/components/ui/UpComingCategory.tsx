/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import UpcomingIcon from "../../assects/upcoming.png";
import BannerImg1 from "../../assects/banner.jpeg";
import BannerImg2 from "../../assects/banner2.jpg";
import { Button, Carousel } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";

const UpComingCategory = () => {
  return (
    <div className="mt-12 max-w-7xl mx-auto">
      <div className="mx-4">
        <h2 className="text-center text-slate-500">Upcoming Category</h2>
        <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-3"></div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 justify-center mx-auto gap-8 lg:gap-12">
          <div className="text-center rounded-md border bordered-1 shadow-md p-4">
            <Image
              className="mt-4"
              height={50}
              src={UpcomingIcon}
              alt="HouseIcon"
            />
            <p className="my-4">Buy Apartment</p>
            <small>
              RENTS Corporation help businesses find the right way to work. We
              are facilitators connecting people with spaces. And most
              importantly, in the communities where we live and work, we are
              trusted insiders.
            </small>
            <br />
            <Link href={"/blog"}>
              <Button className="bg-teal-100 mt-4">Read More</Button>
            </Link>
          </div>
          <div className="text-center rounded-md shadow-md p-4 ">
            <Image
              className="mt-4"
              height={50}
              src={UpcomingIcon}
              alt="HouseIcon"
            />
            <p className="my-4">Buy Hotel</p>
            <small>
              Find your new place with thousands of constantly updated listings,
              robust filters and impressive photo experience with RENTS
              Incorporation.we are trusted insiders.
            </small>
            <br />
            <Link href={"/blog"}>
              <Button className="bg-teal-100 mt-4">Read More</Button>
            </Link>
          </div>
          <div className="text-center rounded-md shadow-md p-4">
            <Image
              className="mt-4"
              height={50}
              src={UpcomingIcon}
              alt="HouseIcon"
            />
            <p className="my-4">Buy Resort</p>
            <small>
              Explore a variety of Modern, Stylish, Safe & Comfortable Furnished
              homes without leaving yours. RENTS Corporation furnishing make it
              easy to find flexible housing without sacrificing quality.
            </small>
            <br />
            <Link href={"/blog"}>
              <Button className="bg-teal-100 mt-4">Read More</Button>
            </Link>
          </div>
        </div>
        <Carousel autoplay effect="fade" className="mt-12">
          <div className="relative">
            <img
              className="rounded-lg mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px]"
              src={BannerImg1.src}
              alt=""
            />
            <div className="absolute top-0 left-0 pt-12 pl-8 text-gray-200 h-full mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px] rounded-md bg-gradient-to-r from-teal-500 to-[#0bc29512] bg-opacity-50">
              <h1>Explore your future home with detailed videos </h1>
              <p className="my-2 text-lg">View your dream houses online</p>
              <Link href={"/houses"}>
                <Button className="bg-white px-12 rounded-md mt-4 text-teal-700 font-semibold">
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
            <div className="absolute top-0 left-0 pt-12 pl-8 text-gray-200 h-full mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px] rounded-md bg-gradient-to-r from-teal-500 to-[#0bc29512] bg-opacity-50">
              <h1>Discover impresive virtual property tours </h1>
              <p className="my-2 text-lg">
                Explore properties form the comfort of your home
              </p>
              <Link href={"/houses"}>
                <Button className="bg-white px-12 rounded-md mt-4 text-teal-700 font-semibold">
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
