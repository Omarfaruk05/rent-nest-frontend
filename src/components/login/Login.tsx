"use client";

import { Button, message } from "antd";

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

type FromValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
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
  return (
    <div className=" bg-gradient-to-r from-gray-200 to-blue-400 h-full opacity-75 ">
      <div className=" flex justify-center items-center h-[90vh]">
        <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
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
            className="w-72 md:w-96"
            style={{
              margin: "15px 0px",
            }}
          >
            <FormInput
              name="password"
              type="password"
              size="large"
              placeholder="Enter Password"
              label="User Password"
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
          <Link href={"/signup"} className="no-underline hover:underline">
            Want to creat Account?
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
