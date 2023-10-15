"use client";

import { Button, Col, Row } from "antd";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";

const Hero = () => {
  const interiorOptions = [
    { value: "Furnished", label: "Furnished" },
    { value: "Un_Furnished", label: "Un Furnished" },
  ];

  const categoryOptions = [
    { value: "Furnished", label: "Furnished" },
    { value: "Furnished", label: "Residential" },
    { value: "Luxury", label: "Luxury" },
  ];

  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-96">
      <div className="max-w-7xl mx-auto">
        <div className="pt-32 flex justify-center items-center ">
          <div className="bg-white p-4 mx-4  rounded-md  ">
            <Form submitHandler={handleSubmit}>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormSelectField
                    size="large"
                    name="interior"
                    label="interior"
                    options={interiorOptions}
                    placeholder="Interior"
                  />
                </Col>
                <Col
                  className="gutter-row md:w-96"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormInput
                    type="text"
                    name="searchTerm"
                    size="large"
                    label="Location"
                    placeholder="Enter Location"
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
                    size="large"
                    name="propertyType"
                    label="Category"
                    options={categoryOptions}
                    placeholder="Category"
                  />
                </Col>
              </Row>
              <div className="text-center">
                <Button
                  className="px-12 mt-8"
                  size="large"
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
