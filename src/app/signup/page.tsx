import SingUp from "@/components/Signup/SingUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent Nest/Singup",
  description: "Rent Nest Singup page.",
};

const SingUpPage = () => {
  return (
    <>
      <SingUp></SingUp>
    </>
  );
};
export default SingUpPage;
