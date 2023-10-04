"use client";
import { Col, Row } from "antd";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";
import {
  academicDepartmentOptions,
  academicFacultyOptions,
  academicSemesterOptions,
  departmentOptions,
  genderOptions,
} from "@/constants/global";
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
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        margin: "10px 0px",
      }}
    >
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
              options={academicDepartmentOptions}
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
              options={academicFacultyOptions}
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
              options={academicSemesterOptions}
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
              name="student.gender"
              options={genderOptions}
              label="Gender"
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
