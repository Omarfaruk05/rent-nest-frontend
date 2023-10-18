/* eslint-disable @next/next/no-img-element */
import { Button, Carousel, Image } from "antd";
import Bed from "../../assects/bed_1986188.png";
import Balcony from "../../assects/balcony_259592.png";
import { AppstoreOutlined, HeartOutlined } from "@ant-design/icons";
import Link from "next/link";

const ProductCart = ({ house }: any) => {
  return (
    <div className=" rounded-md border bordered-1 shadow-md p-4">
      {house.houseImage ? (
        <Carousel autoplay>
          <Image
            src={house?.houseImage[0]}
            alt="HouseImage"
            className="rounded-md"
          />
          <Image
            src={house?.houseImage[1]}
            alt="HouseImage"
            className="rounded-md"
          />
          <Image
            src={house?.houseImage[2]}
            alt="HouseImage"
            className="rounded-md"
          />
        </Carousel>
      ) : (
        <div>No Image</div>
      )}
      <Link
        href={`/houses/${house?.id}`}
        className="cursor-pointer text-black no-underline "
      >
        <h4 className="my-3">
          BDT {house?.rentPerMonth}/<small>month</small>
        </h4>
        <p className="">{house?.name}</p>
        <small className="text-gray-400">{house?.city} city</small>
        <br />
        <small>{house?.address}</small>
        <div className="mt-8 flex gap-2">
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
      </Link>

      <div className="flex  gap-2 justify-center">
        <Button className="bg-yellow-400" icon={<HeartOutlined />}>
          Save
        </Button>
        <Link href={`/houses/${house?.id}`}>
          <Button className="bg-teal-100">Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCart;
