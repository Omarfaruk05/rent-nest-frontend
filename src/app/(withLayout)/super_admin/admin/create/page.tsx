"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Col, Row } from "antd";
import React from "react";

const CreateAdminPage = () => {
  const { role } = getUserInfo() as any;

  const onSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `create`,
            link: `create`,
          },
        ]}
      />
      <h1>Create Admin</h1>

      <div>
        <Form submitHandler={onSubmit}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="name"
                size="large"
                label="FristName"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="name"
                size="large"
                label="FristName"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="name"
                size="large"
                label="FristName"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="password"
                name="password"
                size="large"
                label="Password"
              />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdminPage;
