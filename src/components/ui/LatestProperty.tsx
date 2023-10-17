"use client";

import { Button, Carousel, Image } from "antd";
import { useGetHousesQuery } from "@/redux/api/houseApi";
import Loading from "@/app/loading";

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
        <div className="mt-12 grid grid-cols-3 gap-8 lg:gap-12">
          {houses?.map((house) => (
            <div
              key={house?.id}
              className="text-center rounded-md border bordered-1 shadow-md p-4"
            >
              {house.houseImage && (
                <Image src={house?.houseImage[0]} alt="HouseIcon" />
              )}
              <p className="my-4">{house?.name}</p>
              <small>
                RENTS Corporation help businesses find the right way to work. We
                are facilitators connecting people with spaces. And most
                importantly, in the communities where we live and work, we are
                trusted insiders, advisors and friends.
              </small>
              <div className="mt-4">
                <Button className="bg-teal-100">Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProperty;
