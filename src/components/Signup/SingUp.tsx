"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import { Button, message } from "antd";
import { SubmitHandler } from "react-hook-form";
import Link from "next/link";
import FormTextArea from "../forms/FormTextArea";
import FormSelectField from "../forms/FormSelectField";
import { useAddUserMutation } from "@/redux/api/userApi";
import FooterComponent from "../ui/FooterComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/schemas/user";
import backgroundImage from "../../assects/signupBg.webp";

type FromValues = {
  name: string;
  email: string;
  contactNumber: string;
  role: "House Renter" | "house_renter";
  password: string;
  profileImage?: string;
  address?: string;
};

const SingUp = () => {
  const router = useRouter();

  const [addUser] = useAddUserMutation();

  const onSubmit: SubmitHandler<FromValues> = async (data: FromValues) => {
    try {
      const res = await addUser(data).unwrap();
      message.loading("Creating...");

      if (res?.id) {
        message.success("Signup Successfull. Please login.");
        router.push("/login");
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const roleOptions = [
    {
      label: "House Renter",
      value: "house_renter",
    },
    {
      label: "House Owner",
      value: "house_owner",
    },
  ];
  return (
    <div>
      <div>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center h-[94vh]">
          <div className="mt-12 mx-2 md:ml-5">
            <Link
              href={"/"}
              className="font-semibold cursor-pointer border text-2xl no-underline flex justify-center mb-4 text-green-900"
            >
              Rent Nest
            </Link>
            <Form submitHandler={onSubmit} resolver={yupResolver(userSchema)}>
              <div>
                <FormInput type="text" name="name" size="large" label="Name" />
              </div>
              <div>
                <FormInput
                  type="email"
                  name="email"
                  size="large"
                  label="Email"
                />
              </div>
              <div>
                <FormInput
                  type="text"
                  name="contactNumber"
                  size="large"
                  label="Contact Numbe"
                />
              </div>
              <div>
                <FormSelectField
                  name="role"
                  size="large"
                  label="Role"
                  options={roleOptions}
                />
              </div>
              <div>
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </div>

              <div>
                <FormInput
                  type="text"
                  name="profileImage"
                  size="large"
                  label="Profile Image Link"
                />
              </div>
              <div>
                <FormTextArea name="address" label="Address" />
              </div>

              <div className="text-center">
                <Button
                  className="w-full mt-4"
                  type="primary"
                  size="large"
                  htmlType="submit"
                >
                  Sign Up
                </Button>
              </div>
              <Link
                href={"/login"}
                className="text-sm no-underline hover:underline"
              >
                Already have Account?
              </Link>
            </Form>
          </div>
          <div
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: "rgb(5 74 60)",
              backgroundSize: "1200px",
              backgroundPosition: "center",
            }}
            className="hidden sm:block h-full w-full md:col-span-2 lg:col-span-3"
          ></div>
        </div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default SingUp;
