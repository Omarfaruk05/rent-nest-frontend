"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import { Button, Col, Row, message } from "antd";
import { SubmitHandler } from "react-hook-form";
import Link from "next/link";
import FormTextArea from "../forms/FormTextArea";
import FormSelectField from "../forms/FormSelectField";
import { useAddUserMutation } from "@/redux/api/userApi";
import FooterComponent from "../ui/FooterComponent";

type FromValues = {
  email: string;
};

const SingUp = () => {
  const router = useRouter();

  const [addUser] = useAddUserMutation();

  const onSubmit: SubmitHandler<FromValues> = async (data: any) => {
    try {
      const res = await addUser(data).unwrap();
      message.loading("Creating...");

      if (res?.id) {
        message.success("Signup Successfull. Please login.");
        router.push("/login");
      }
    } catch (error: any) {
      console.error(error.message);
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
    <div className="bg-gradient-to-r from-gray-200 to-blue-400 h-full opacity-75 ">
      <div>
        <div className="mx-4 flex justify-center items-center h-[90vh]">
          <Form submitHandler={onSubmit}>
            {/* admin infromation  */}

            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              User Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput type="text" name="name" size="large" label="Name" />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="email"
                  name="email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="contactNumber"
                  size="large"
                  label="Contact Numbe"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  name="role"
                  size="large"
                  label="Role"
                  options={roleOptions}
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>

              <Col
                className="gutter-row"
                span={24}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="profileImage"
                  size="large"
                  label="Profile Image Link"
                />
              </Col>
              <Col
                className="gutter-row"
                span={24}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormTextArea name="address" label="Address" />
              </Col>
            </Row>
            <div className="text-center">
              <Button type="primary" size="large" htmlType="submit">
                Submit
              </Button>
            </div>
            <Link href={"/login"} className="no-underline hover:underline">
              Already have Account?
            </Link>
          </Form>
        </div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default SingUp;
