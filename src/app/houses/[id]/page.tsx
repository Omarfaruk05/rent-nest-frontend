/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetHousesQuery, useGetSingHouseQuery } from "@/redux/api/houseApi";
import { Button, Carousel, Image } from "antd";
import Bed from "../../../assects/bed_1986188.png";
import Balcony from "../../../assects/balcony_259592.png";
import {
  AppstoreOutlined,
  CarOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { Footer } from "antd/es/layout/layout";
import FooterComponent from "@/components/ui/FooterComponent";
import dayjs, { Dayjs } from "dayjs";
import Loading from "@/app/loading";
import RelatedHouse from "@/components/ui/RelatedHouse";
import Reviews from "@/components/ui/Reviews";
import CreateSchedule from "@/components/ui/CreateSchedule";
import { getUserInfo } from "@/services/auth.service";
import Save from "@/components/ui/Save";
import BookForRent from "@/components/ui/BookForRent";

const ProductDetailsPage = ({ params }: any) => {
  const { role } = getUserInfo() as any;
  const { id } = params;

  const { data, isLoading } = useGetSingHouseQuery(id);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="">
      <div className="max-w-7xl mx-auto mt-2 px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <Carousel autoplay>
              <Image
                height={400}
                width={1000}
                src={data?.houseImage[0]}
                alt="HouseImage"
              />
              <Image
                height={400}
                width={1000}
                src={data?.houseImage[1]}
                alt="HouseImage"
              />
              <Image
                height={400}
                width={1000}
                src={data?.houseImage[2]}
                alt="HouseImage"
              />
            </Carousel>
            <div className="flex justify-between text-gray-600 mt-4">
              <div>
                <span className="font-semibold">BDT</span>
                <span className="text-4xl font-semibold">
                  {data?.rentPerMonth}
                </span>
                /<span className="font-semibold">month</span>
                <p className="mt-2">{data?.address}</p>
                <div className="mt-4 flex  flex-wrap  gap-2">
                  <div className="flex items-center gap-1">
                    <span>
                      <img width={25} src={Bed.src} alt="" />
                    </span>
                    <span className="text-xs">{data?.bedrooms} bed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>
                      <img width={20} src={Balcony.src} alt="" />
                    </span>
                    <span className="text-xs">{data?.bedrooms} balcony</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>
                      <AppstoreOutlined />
                    </span>
                    <span className="text-xs">{data?.roomSize} sqft</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>
                      <CarOutlined />
                    </span>
                    <span className="text-xs">{data?.roomSize} sqft</span>
                  </div>
                </div>
              </div>
              <div>
                {/* save and booking */}
                <div className="md:flex  gap-2 justify-center">
                  <BookForRent houseId={data?.id} />
                  <Save houseId={data?.id} />
                </div>
              </div>
            </div>
          </div>
          <div>
            {role === "house_renter" || role === "house_owner" ? (
              <>
                <h2 className="text-slate-700">Schedule For Visit House.</h2>
                <CreateSchedule houseId={data?.id} />
              </>
            ) : (
              <h1>
                Only House Owner and House Renter can see house visit schedule.
              </h1>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between w-full">
              <div>
                <h2 className="text-slate-700 mt-8">Description</h2>
                <hr />
                <div className="flex justify-between my-2 mx-6">
                  <p>PropertyId :</p>
                  <p>{data?.propertyId}</p>
                </div>
                <hr />
                <div className="flex justify-between my-2 mx-6">
                  <p>City :</p>
                  <p>{data?.city}</p>
                </div>
                <hr />
                <div className="flex justify-between my-2 mx-6">
                  <p>Bedrooms :</p>
                  <p>{data?.bedrooms}</p>
                </div>
                <hr />
                <div className="flex justify-between my-2 mx-6">
                  <p>Balcony :</p>
                  <p>{data?.numberOfBalcony}</p>
                </div>
                <hr />
                <div className="flex justify-between my-2 mx-6">
                  <p>Parking :</p>
                  <p>{data?.parking}</p>
                </div>
                <hr />
                <div className="flex justify-between my-2 mx-6">
                  <p>RoomSize :</p>
                  <p>{data?.roomSize}</p>
                </div>
                <hr />
              </div>
              <div className="md:mt-12 md:pt-[13px]">
                <hr />
                <div className="flex justify-between my-2 mx-6">
                  <p>Built Year :</p>
                  <p>{data?.yearBuilt}</p>
                </div>
                <hr />
                <div className="flex justify-between my-2 mx-6">
                  <p>GAS :</p>
                  <p>{data?.gas}</p>
                </div>
                <hr />
                <div className="flex justify-between my-2 mx-6">
                  <p>Property Type :</p>
                  <p>{data?.propertyType}</p>
                </div>
                <hr />
                <div className="flex justify-between my-2 mx-6">
                  <p>Interior :</p>
                  <p>{data?.interior}</p>
                </div>
                <hr />
                <div className="flex justify-between my-2 mx-6">
                  <p>Status :</p>
                  <p>{data?.status}</p>
                </div>
                <hr />
                <div className="flex justify-between my-2 mx-6">
                  <p>Available In :</p>
                  <p>{dayjs(data?.availabilityDate).format("DD/MM/YYYY")}</p>
                </div>
                <hr />
              </div>
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded-md">
              <h2>Details</h2>
              <hr />
              <p className="mt-4">{data?.description}</p>
            </div>
            <div>
              <h2 className="mt-12">Reviews</h2>
              <Reviews houseId={data?.id} />
            </div>
          </div>
          <div>
            <h2 className="text-center my-4 text-slate-600">Related Houses</h2>
            <RelatedHouse city={data?.city} />
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ProductDetailsPage;
