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
import backgroundImage from "../../assects/Feedback.webp";
import Image from "next/image";

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
    <div className="bg-slate-100 pt-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-slate-600">Send Feedback</h1>
        <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-1 mb-3"></div>
        <p className="text-center w-72 mx-auto text-sm">
          You can send us anything you liked or disliked. Your feedback improve
          our website.
        </p>
        <div className="mx-4 md:flex gap-4 justify-center items-center">
          <div className="md:w-1/2 lg:w-2/5 hidden md:block">
            <Image className="w-full h-auto" src={backgroundImage} alt="" />
          </div>
          <div className="md:-mt-4 md:w-1/2  lg:w-3/5">
            <Form submitHandler={onSubmit}>
              <div className="lg:w-[520px] px-4 pt-8 pb-4  bg-slate-200 rounded-md">
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
                      name="name"
                      size="large"
                      label="Name"
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
                      name="email"
                      size="large"
                      label="Email"
                    />
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
                      className="bg-teal-700 text-white px-8"
                      htmlType="submit"
                    >
                      Send
                      <SendOutlined />
                    </Button>
                  ) : (
                    <Link href={"/login"}>
                      <Button
                        size="large"
                        className="bg-teal-700 text-white px-8"
                      >
                        Send
                        <SendOutlined />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFeedback;
