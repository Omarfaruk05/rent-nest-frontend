"use client";

import Loading from "@/app/loading";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormTextArea from "@/components/forms/FormTextArea";
import {
  useGetSingUserQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/userApi";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

import { SubmitHandler } from "react-hook-form";

type FromValues = {
  name: string;
  email: string;
  contactNumber: string;
  profiltImage: string;
  address: string;
};

const UpdateProfilePage = () => {
  const router = useRouter();
  const [updateMyProfile] = useUpdateMyProfileMutation();

  const { data, isLoading } = useGetSingUserQuery(undefined);
  if (isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit: SubmitHandler<FromValues> = async (
    updatedData: FromValues
  ) => {
    try {
      message.loading("Please wite");
      const res = await updateMyProfile({ ...updatedData }).unwrap();

      if (res?.id) {
        message.success("User Updated Successfully.");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const defaultValues = {
    name: data?.name || "",
    email: data?.email || "",
    contactNumber: data?.contactNumber || "",
    address: data?.address || "",
    profileImage: data?.profileImage || "",
  };

  return (
    <div>
      <h1 className=" mt-12 text-center">Update Your Profile Info.</h1>
      <div>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <Form submitHandler={onSubmit} defaultValues={defaultValues}>
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
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput type="text" name="name" size="large" label="Name" />
              </Col>
              <Col
                className="gutter-row"
                span={12}
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
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormInput
                  type="text"
                  name="contactNumber"
                  size="large"
                  label="Contact Number"
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
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
