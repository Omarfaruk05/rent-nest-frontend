"use client";
import { useAddToCartMutation } from "@/redux/api/savedHouseApi";
import { getUserInfo } from "@/services/auth.service";
import { HeartOutlined } from "@ant-design/icons";

import { Button, Tooltip, message } from "antd";
import Link from "next/link";

const Save = ({ houseId }: any) => {
  const { role } = getUserInfo() as any;

  const [addToCart] = useAddToCartMutation();

  const handleSave = async () => {
    message.loading("Loading...");
    try {
      const res = await addToCart({ houseId }).unwrap();

      if (res.id) {
        message.success("House Saved Successfully.");
      }
    } catch (error: any) {
      console.error(error.message);
      message.error(error.message);
    }
  };

  return (
    <>
      {role === "house_renter" || role === "house_owner" ? (
        <Tooltip title="Save" placement="bottom" color="teal">
          <HeartOutlined
            className="text-teal-200 text-xl"
            onClick={handleSave}
          />
        </Tooltip>
      ) : (
        <Link href={"/login"}>
          <Tooltip title="Save" placement="bottom" color="teal">
            <HeartOutlined className="text-teal-200 text-xl" />
          </Tooltip>
        </Link>
      )}
    </>
  );
};

export default Save;
