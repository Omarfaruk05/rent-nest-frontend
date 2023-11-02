import { useGetHousesQuery } from "@/redux/api/houseApi";
import React from "react";
import ProductCart from "./ProductCart";
import Loading from "@/app/loading";
import ProductCartLoading from "./ProductCartLoading";

const RelatedHouse = ({ city }: { city: string }) => {
  const { data, isLoading } = useGetHousesQuery({
    city: city,
    limit: 2,
    page: 1,
  });
  const houses = data?.houses;

  if (isLoading) {
    return (
      <div>
        <ProductCartLoading />
        <ProductCartLoading />
      </div>
    );
  }
  return (
    <div>
      {houses &&
        houses?.map((house, index) => (
          <ProductCart house={house} key={index} />
        ))}
    </div>
  );
};

export default RelatedHouse;
