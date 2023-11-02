/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useGetHousesQuery } from "@/redux/api/houseApi";
import ProductCart from "./ProductCart";
import ProductCartLoading from "./ProductCartLoading";
import { ArrowRightOutlined } from "@ant-design/icons";
import backgroundImage from "../../assects/banner2.jpg";
import { Button } from "antd";
import Link from "next/link";
const loadingNumber = [1, 2, 3, 4];

const LatestProperty = () => {
  const query = {
    limit: 4,
    page: 1,
  };
  const { data, isLoading } = useGetHousesQuery({ ...query });
  const houses = data?.houses;

  if (isLoading) {
    return (
      <div className="mt-12 mb-4 max-w-7xl mx-auto">
        <div className=" mx-2 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {loadingNumber?.map((x, index) => (
            <ProductCartLoading key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-12 mb-4 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center mx-4">
          <h2 className="text-slate-500">Latest Property For Rent</h2>
          <div className="h-[2px] w-20 bg-slate-800 mt-3"></div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {houses?.map((house: any, index) => (
              <ProductCart house={house} key={index} />
            ))}
          </div>
          <Link href={"/houses"} className="mt-6">
            <Button className="bg-teal-100 px-12" size="large">
              See More
              <ArrowRightOutlined />
            </Button>
          </Link>
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
          <h3 className="pt-32 pb-4">CORPORATE HOUSING</h3>
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

export default LatestProperty;
