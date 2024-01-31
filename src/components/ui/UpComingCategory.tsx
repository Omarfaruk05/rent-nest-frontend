/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import UpcomingIcon from "../../assects/upcoming.png";
import backgroundImage from "../../assects/banner2.jpg";
import { Button } from "antd";
import Link from "next/link";

const UpComingCategory = () => {
  return (
    <div>
      <div className="mt-12 max-w-7xl mx-auto p-3">
        <h1 className="text-center text-slate-500">Upcoming Category</h1>
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
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[50vh]  mt-12 bg-fixed"
      >
        <div className="text-white align-left max-w-7xl mx-auto p-4">
          <h3 className="pt-4 md:pt-32 pb-4">CORPORATE HOUSING</h3>
          <h1 className="mb-4 text-5xl">Rent Apartments for Your Company</h1>
          <p>
            Manage easily all your corporate apartments needs with flexibility
            and exclusive support. Save time and money. Ideal for you and your
            team.
          </p>
          <br />

          <Link href={"/blog"}>
            <Button className="mt-4 font-semibold rounded-md bg-teal-400 ">
              GET TO KNOW US
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpComingCategory;
