import { useAddBookingMutation } from "@/redux/api/bookingApi";
import { getUserInfo } from "@/services/auth.service";
import { ArrowDownOutlined } from "@ant-design/icons";

import { Button, message } from "antd";
import Link from "next/link";

const BookForRent = ({ houseId }: any) => {
  const { role } = getUserInfo() as any;

  const [addBooking] = useAddBookingMutation();

  const bookForRent = async () => {
    message.loading("Booking...");
    try {
      const res = await addBooking({ houseId }).unwrap();

      if (res.id) {
        message.success("House Booked Successfully.");
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
          onClick={bookForRent}
          className="bg-orange-100"
          icon={<ArrowDownOutlined />}
        >
          Book For Rent
        </Button>
      ) : (
        <Link href={"/login"}>
          <Button className="bg-orange-100" icon={<ArrowDownOutlined />}>
            Book For Rent
          </Button>
        </Link>
      )}
    </>
  );
};

export default BookForRent;
