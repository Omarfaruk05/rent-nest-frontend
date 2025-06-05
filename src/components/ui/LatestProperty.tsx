/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useGetHousesQuery } from "@/redux/api/houseApi";
import ProductCart from "./ProductCart";
import ProductCartLoading from "./ProductCartLoading";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";
import Link from "next/link";
import SlideUp from "../motions/SlideUp";
const loadingNumber = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestProperty = () => {
  const query = {
    limit: 8,
    page: 1,
  };
  const { data, isLoading } = useGetHousesQuery({ ...query });
  const houses = data?.houses;

  if (isLoading) {
    return (
      <div className="mt-12 mb-4 max-w-7xl mx-auto">
        <SlideUp>
          <h1 className="text-slate-500">Latest Property</h1>
          <div className="h-[2px] w-20 bg-slate-800 mt-3"></div>
        </SlideUp>
        <div className=" mx-2 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {loadingNumber?.map((x, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <ProductCartLoading />
            </SlideUp>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mt-12 mb-4 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center mx-4">
          <SlideUp>
            <h1 className="text-slate-500">Latest Property</h1>
            <div className="h-[2px] w-20 bg-slate-800 mt-3"></div>
          </SlideUp>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {houses?.map((house: any, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <ProductCart house={house} />
              </SlideUp>
            ))}
          </div>
          <Link href={"/houses"} className="mt-6">
            <SlideUp>
              <Button className="bg-teal-100 px-12" size="large">
                See More
                <ArrowRightOutlined />
              </Button>
            </SlideUp>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestProperty;
