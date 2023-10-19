"use client";

import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormTextArea from "@/components/forms/FormTextArea";
import { useAddBlogMutation } from "@/redux/api/blogApi";
import { useAddFAQMutation } from "@/redux/api/faqApi";
import { Button, Col, Row, message } from "antd";

const CreateFaq = () => {
  const [addFaq] = useAddFAQMutation();
  const createFaq = async (data: any) => {
    try {
      message.loading("Please wite");
      const res = await addFaq(data).unwrap();
      if (res?.id) {
        message.success("FAQ created successfully.");
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
        <Form submitHandler={createFaq}>
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
                name="question"
                size="large"
                label="Question"
                placeholder="Question"
              />
            </Col>
            <Col
              className="gutter-row"
              span={24}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormTextArea name="answer" label="Answer" placeholder="Answer" />
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

export default CreateFaq;
