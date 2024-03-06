/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, message } from "antd";
import { UnlockOutlined } from "@ant-design/icons";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/redux/slice/userSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/user";
import backgroundImage from "../../assects/loginbg.svg";
import { useState } from "react";

type FromValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userlogin] = useUserLoginMutation();
  const dispatch = useDispatch();

  const router = useRouter();

  const onSubmit: SubmitHandler<FromValues> = async (data: FromValues) => {
    try {
      message.loading("Please wait");

      const res = await userlogin({ ...data }).unwrap();

      if (res?.errorMessages) {
        message.error(`${res?.errorMessages}`);
      }

      if (res?.accessToken) {
        router.push("/");
        message.success("Login Successfull.");
        await storeUserInfo({ accessToken: res?.accessToken });
      }

      const { id } = (await getUserInfo()) as any;

      if (id) {
        dispatch(loginSuccess());
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const handleCredentials = (pass: string, email: string) => {
    setPassword(pass);
    setEmail(email);
  };
  const defaultValues = {
    email: email || "",
    password: password || "",
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center h-[94vh]">
        <div className="mt-12 mx-2 md:ml-5">
          <Link
            href={"/"}
            className="font-semibold cursor-pointer border text-2xl no-underline flex justify-center mb-4 text-green-900"
          >
            Rent Nest
          </Link>
          <Form
            submitHandler={onSubmit}
            defaultValues={defaultValues}
            resolver={yupResolver(loginSchema)}
          >
            <div>
              <FormInput
                name="email"
                type="email"
                size="large"
                placeholder="Enter Email"
                label="Email"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                placeholder="Enter Password"
                label="Password"
              />
            </div>
            <Button
              className="w-full mb-2"
              size="large"
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
            <Link
              href={"/signup"}
              className="no-underline hover:underline text-sm ml-1"
            >
              Want to creat Account?
            </Link>
          </Form>
          <div className="my-8">
            <h3 className="text-center mb-4 text-green-900 bg-gray-100 py-1 rounded-md">
              Credentials <UnlockOutlined />
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={() =>
                  handleCredentials("123456", "omarfaruk@gmail.com")
                }
                type="dashed"
              >
                Super Admin{" "}
              </Button>
              <Button
                onClick={() => handleCredentials("123456", "tonmoy@gmail.com")}
                type="dashed"
              >
                Admin{" "}
              </Button>
              <Button
                onClick={() => handleCredentials("123456", "emon@gmail.com")}
                type="dashed"
              >
                House Renter
              </Button>
              <Button
                onClick={() => handleCredentials("123456", "saiful@gmail.com")}
                type="dashed"
              >
                House Owner
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
          }}
          className="hidden md:block h-full w-full md:col-span-2 lg:col-span-3"
        ></div>
      </div>
    </div>
  );
};

export default LoginPage;
