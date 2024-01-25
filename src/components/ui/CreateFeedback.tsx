"use client";

import React from "react";
import Form from "../forms/Form";
import { Button, Col, Row, message } from "antd";
import FormInput from "../forms/FormInput";
import { SendOutlined } from "@ant-design/icons";
import { SubmitHandler } from "react-hook-form";
import { useAddFeedbackMutation } from "@/redux/api/feedbackApi";
import FormTextArea from "../forms/FormTextArea";
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";

type FormValues = {
  id: string;
  name?: string;
  email?: string;
  feedback?: string;
};

const CreateFeedback = () => {
  const { id } = getUserInfo() as any;
  const [addFeedback] = useAddFeedbackMutation();
  const onSubmit: SubmitHandler<FormValues> = async (
    feedbackData: FormValues
  ) => {
    delete feedbackData.name;
    delete feedbackData.email;
    try {
      const res = await addFeedback(feedbackData).unwrap();
      if (res?.id) {
        message.success("Feedback sended successfull.");
      }
    } catch (error: any) {
      message.error(error);
      console.error(error.message);
    }
  };
  return (
    <div className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-slate-600">Send Feedback</h2>
        <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-1 mb-3"></div>
        <Form submitHandler={onSubmit}>
          <p className="text-center mb-8 w-72 mx-auto text-xs">
            You can send us anything you liked or disliked. Your feedback
            improve our website.
          </p>
          <Row
            className="mx-2 md:mx-24 lg:mx-40 xl:mx-60"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
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
              <FormInput type="text" name="email" size="large" label="Email" />
            </Col>
            <Col
              className="gutter-row"
              span={24}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormTextArea name="feedback" label="Feedback" />
            </Col>
          </Row>
          <div className="text-center">
            {id ? (
              <Button
                size="large"
                className="bg-teal-700 text-white px-16"
                htmlType="submit"
              >
                Send
                <SendOutlined />
              </Button>
            ) : (
              <Link href={"/login"}>
                <Button size="large" className="bg-teal-700 text-white px-16">
                  Send
                  <SendOutlined />
                </Button>
              </Link>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateFeedback;
