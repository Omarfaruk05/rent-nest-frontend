"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";

import React from "react";

const CreateAcademicFacultyPage = () => {
  const { role } = getUserInfo() as any;

  const [addFaculty] = useAddAcademicFacultyMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating...");
    try {
      console.log(data);
      // const res = await addFaculty(data);
      // if (!!res) {
      //   message.success("Academic Faculty creted successfully.");
      // }
    } catch (error: any) {
      console.error(error.message);
      message.error(error.message);
    }
  };
  return (
    <div
      style={{
        padding: "15px",
      }}
    >
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `academic-faculty`,
            link: `/${role}/academic/faculty`,
          },
        ]}
      />
      <h1>Academic Faculty Create</h1>
      <Form submitHandler={onSubmit}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput name="title" label="Title" size="large" />
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">
            add
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateAcademicFacultyPage;
