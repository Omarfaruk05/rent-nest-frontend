"use client";
import { useAddToCartMutation } from "@/redux/api/savedHouseApi";
import { getUserInfo } from "@/services/auth.service";
import { HeartOutlined } from "@ant-design/icons";

import { Button, message } from "antd";
import Link from "next/link";

const Save = ({ houseId }: any) => {
  const { role } = getUserInfo() as any;

  const [addToCart] = useAddToCartMutation();

  const handleSave = async () => {
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
        <Button
          onClick={handleSave}
          className="bg-teal-100"
          icon={<HeartOutlined />}
        >
          Save
        </Button>
      ) : (
        <Link href={"/login"}>
          <Button className="bg-teal-100" icon={<HeartOutlined />}>
            Save
          </Button>
        </Link>
      )}
    </>
  );
};

export default Save;
