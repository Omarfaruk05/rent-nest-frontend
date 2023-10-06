"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useGetSingleDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

type IdProps = {
  params: string;
};

const EditDepartmentPage = ({ params }: any) => {
  const { id } = params;

  const { data, isLoading } = useGetSingleDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating.....");

    try {
      await updateDepartment({ id, body: values });
      message.success("Department updated successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
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
            label: `super_admin`,
            link: `/super_admin`,
          },
          {
            label: `department`,
            link: `/super_admin/department`,
          },
        ]}
      />
      <ActionBar title="Update Department"></ActionBar>{" "}
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <Row gutter={{ xs: 24, xl: 24, lg: 24, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormInput name="title" label="Title" size="large" />
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
