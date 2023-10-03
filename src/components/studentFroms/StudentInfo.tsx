"use client";
import { Col, Row } from "antd";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import { departmentOptions, genderOptions } from "@/constants/global";
import UploadImage from "../ui/UploadImage";
import Form from "@/components/forms/Form";

const StudentInfo = () => {
  const onSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Student info from.</h1>{" "}
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="student.name.firstName"
              size="large"
              label="Frist Name"
            />
          </Col>
          <Col
            className="gutter-row"
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="student.name.middleName"
              size="large"
              label="Middle Name"
            />
          </Col>
          <Col
            className="gutter-row"
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput
              type="text"
              name="student.name.lastName"
              size="large"
              label="Last Name"
            />
          </Col>
          <Col
            className="gutter-row"
            span={6}
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
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectField
              size="large"
              name="student.academicDepartment"
              options={genderOptions}
              label="Academic Departmen"
              placeholder="Select"
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
              name="student.academicFaculty"
              options={genderOptions}
              label="Academic Faculty"
              placeholder="Select"
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
              name="student.academicSemester"
              options={genderOptions}
              label="Academic Semester"
              placeholder="Select"
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
              name="student.managementDepartment"
              options={departmentOptions}
              label="Department"
              placeholder="Select"
            />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <UploadImage />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudentInfo;
