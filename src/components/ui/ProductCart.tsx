/* eslint-disable @next/next/no-img-element */
import { Button, Carousel, Image } from "antd";
import Bed from "../../assects/bed_1986188.png";
import Balcony from "../../assects/balcony_259592.png";
import { AppstoreOutlined } from "@ant-design/icons";
import Link from "next/link";
import Save from "./Save";
import { motion } from "framer-motion";
import RevelMotion from "../motions/RevelMotion";

const ProductCart = ({ house }: any) => {
  return (
    <RevelMotion>
      <div className=" rounded-md border bordered-1 shadow-md p-4">
        <div className="relative">
          {house.houseImage ? (
            <Carousel autoplay>
              {house?.houseImage?.map((x: string, index: any) => (
                <div key={index}>
                  <Image src={x} alt="HouseImage" className="rounded-md" />
                </div>
              ))}
            </Carousel>
          ) : (
            <div>No Image</div>
          )}
          <small className="absolute  left-1 text-white bg-slate-800 px-2 p-1 rounded-md top-1">
            {house?.status}
          </small>
          <small className="absolute right-1 text-white px-2 p-1 rounded-md top-1">
            <Save houseId={house?.id} save={"Save"}></Save>
          </small>
        </div>
        <div className="cursor-pointer">
          <Link
            href={`/houses/${house?.id}`}
            className=" text-black no-underline "
          >
            <RevelMotion>
              {" "}
              <h4 className="my-3 text-teal-600">
                BDT {house?.rentPerMonth}/<small>month</small>
              </h4>
            </RevelMotion>
            <RevelMotion>
              {" "}
              <p className="">{house?.name}</p>
            </RevelMotion>
            <RevelMotion>
              <small className="text-gray-400">{house?.city} city</small>
            </RevelMotion>
            <RevelMotion>
              <small>{house?.address}</small>
            </RevelMotion>
            <RevelMotion>
              {" "}
              <div className="mt-4 flex gap-2">
                <div className="flex items-center gap-1">
                  <span>
                    <img width={25} src={Bed.src} alt="" />
                  </span>
                  <span className="text-xs">{house?.bedrooms} bed</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <img width={20} src={Balcony.src} alt="" />
                  </span>
                  <span className="text-xs">{house?.bedrooms} balcony</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <AppstoreOutlined />
                  </span>
                  <span className="text-xs">{house?.roomSize} sqft</span>
                </div>
              </div>
            </RevelMotion>
          </Link>
        </div>
      </div>
    </RevelMotion>
  );
};

export default ProductCart;
