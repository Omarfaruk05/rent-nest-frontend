import { useGetHousesQuery } from "@/redux/api/houseApi";
import React from "react";
import ProductCart from "./ProductCart";
import Loading from "@/app/loading";

const RelatedHouse = ({ city }: { city: string }) => {
  const { data, isLoading } = useGetHousesQuery({
    city: city,
    limit: 2,
    page: 1,
  });
  const houses = data?.houses;

  if (isLoading) {
    return <Loading></Loading>;
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
