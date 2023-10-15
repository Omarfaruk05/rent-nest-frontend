"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";

type FromValues = {
  email: string;
};

const SingUp = () => {
  const router = useRouter();

  const onSubmit: SubmitHandler<FromValues> = async (data: any) => {
    try {
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div className="bg-gradient-to-r from-gray-200 to-blue-400 h-full opacity-75 ">
      <div>
        <div className=" flex justify-center items-center h-[90vh]">
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
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
                label="User Password"
              />
            </div>
            <Button
              className="w-full"
              size="large"
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
