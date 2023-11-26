"use client";

import Form from "@/components/forms/Form";
import FormDatePicker from "@/components/forms/FormDatePicker";
import FormInput from "@/components/forms/FormInput";
import FormSelectField from "@/components/forms/FormSelectField";
import FormTextArea from "@/components/forms/FormTextArea";
import { useAddHouseMutation } from "@/redux/api/houseApi";
import { houseSchema } from "@/schemas/house";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

import { SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  description: string;
  address: string;
  city: string;
  yearBuilt: string;
  propertyType: string;
  interior: string;
  gas: string;
  bedrooms: number;
  numberOfBalcony: number;
  parking: number;
  rentPerMonth: string;
  roomSize: string;
  status: string;
  availabilityDate: string;
  houseImage1: string;
  houseImage2: string;
  houseImage3: string;
  houseImage?: string[];
};

const CreateHousePage = () => {
  const [addHouse] = useAddHouseMutation();

  const onSubmit: SubmitHandler<FormValues> = async (houseData: FormValues) => {
    houseData.bedrooms = Number(houseData?.bedrooms);
    houseData.numberOfBalcony = Number(houseData?.numberOfBalcony);
    houseData.parking = Number(houseData?.parking);
    console.log(houseData);
    const { houseImage1, houseImage2, houseImage3, ...newHouseData } =
      houseData;
    newHouseData.houseImage = [houseImage1, houseImage2, houseImage3];
    console.log(newHouseData);
    try {
      message.loading("Please wite");
      const res = await addHouse(newHouseData).unwrap();
      console.log(res);
      if (res?.id) {
        message.success("House created successfull.");
      }
    } catch (error: any) {
      message.error(error);
      console.error(error.message);
    }
  };

  const categoryOptions = [
    {
      label: "Furnished",
      value: "Furnished",
    },
    {
      label: "Residential",
      value: "Residential",
    },
    {
      label: "Luxury",
      value: "Luxury",
    },
  ];

  const interiorOptions = [
    {
      label: "Furnished",
      value: "Furnished",
    },
    {
      label: "Un Furnished",
      value: "Un_Furnished",
    },
  ];

  const gasOptions = [
    {
      label: "LPG",
      value: "LPG",
    },
    {
      label: "Govt",
      value: "Govt",
    },
  ];
  const bedroomsOptions = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
      label: "5",
      value: "5",
    },
    {
      label: "6",
      value: "6",
    },
  ];

  return (
    <div>
      <h1 className=" mt-12 text-center">
        Please Input Your House Information
      </h1>
      <div>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <Form submitHandler={onSubmit} resolver={yupResolver(houseSchema)}>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Start Here
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
                <FormInput type="text" name="city" size="large" label="City" />
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
                  name="rentPerMonth"
                  size="large"
                  label="Rent Per Month"
                />
              </Col>

              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  name="bedrooms"
                  size="large"
                  label="Bedrooms"
                  placeholder="Select Bedrooms"
                  options={bedroomsOptions}
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  name="numberOfBalcony"
                  size="large"
                  label="Number of Balcony"
                  placeholder="Select"
                  options={bedroomsOptions}
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  name="parking"
                  size="large"
                  label="Parking"
                  placeholder="Select Parking"
                  options={bedroomsOptions}
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  name="propertyType"
                  size="large"
                  label="Category"
                  options={categoryOptions}
                  placeholder="Select Category"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  name="interior"
                  size="large"
                  label="Interior"
                  options={interiorOptions}
                  placeholder="Select Interior"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  name="gas"
                  size="large"
                  label="GAS"
                  options={gasOptions}
                  placeholder="Select Interior"
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
                  name="roomSize"
                  size="large"
                  label="Room Size"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormDatePicker
                  name="availabilityDate"
                  size="large"
                  label="Availability Date"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormDatePicker
                  name="yearBuilt"
                  size="large"
                  label="Year Built"
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
                  name="houseImage1"
                  size="large"
                  label="House Image Link-1"
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
                  name="houseImage2"
                  size="large"
                  label="House Image Link-2"
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
                  name="houseImage3"
                  size="large"
                  label="House Image Link-3"
                />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormTextArea name="address" label="Address" />
              </Col>
              <Col
                className="gutter-row"
                span={12}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormTextArea name="description" label="Description" />
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

export default CreateHousePage;
