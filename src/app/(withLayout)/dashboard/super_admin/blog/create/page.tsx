"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormTextArea from "@/components/forms/FormTextArea";
import { useAddBlogMutation } from "@/redux/api/blogApi";
import { Button, Col, Row, message } from "antd";

const CreateBlog = () => {
  const [addBlog] = useAddBlogMutation();
  const createBlog = async (data: any) => {
    try {
      message.loading("Please wite");
      const res = await addBlog(data).unwrap();
      if (res?.id) {
        message.success("Blog created successfully.");
      }
    } catch (error: any) {
      message.error(error.message);
      console.error(error.message);
    }
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto  p-4 md:px-20 lg:px-40">
        <h2 className="text-slate-700 text-center mt-20">Creat Blog</h2>
        <Form submitHandler={createBlog}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={24}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormInput
                type="text"
                name="title"
                size="large"
                label="Title"
                placeholder="Title"
              />
            </Col>
            <Col
              className="gutter-row"
              span={24}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormTextArea name="blog" label="Blog" placeholder="Blog" />
            </Col>
          </Row>
          <div className="text-center">
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              className="px-12"
            >
              Create
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateBlog;
