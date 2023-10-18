"use client";

import { Button, Carousel, Image } from "antd";
import { useGetHousesQuery } from "@/redux/api/houseApi";
import Loading from "@/app/loading";
import ProductCart from "./ProductCart";

const LatestProperty = () => {
  const query = {
    limit: 6,
    page: 1,
  };
  const { data, isLoading } = useGetHousesQuery({ ...query });
  const houses = data?.houses;

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-12 mb-4 max-w-7xl mx-auto">
      <div className="flex flex-col justify-center items-center mx-4">
        <h2 className="text-slate-500">Latest Property For Rent</h2>
        <div className="h-[2px] w-20 bg-slate-800 mt-3"></div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {houses?.map((house: any, index) => (
            <ProductCart house={house} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProperty;
