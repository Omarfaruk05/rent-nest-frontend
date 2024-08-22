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
import RevelMotion from "../motions/RevelMotion";

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
    <div className="bg-slate-100 py-8">
      <div className="max-w-7xl mx-auto">
        <RevelMotion>
          <h1 className="text-center text-slate-600">Send Feedback</h1>
          <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-1 mb-3"></div>
        </RevelMotion>
        <RevelMotion>
          <p className="text-center w-72 mx-auto text-sm">
            You can send us anything you liked or disliked. Your feedback
            improve our website.
          </p>
        </RevelMotion>
        <div className="mx-4 md:flex gap-4 justify-center items-center">
          <div className="md:w-1/2 hidden md:block">
            <RevelMotion>
              <Image
                className="w-full lg:w-[500px] h-auto lg:m-4"
                src={backgroundImage}
                alt=""
              />
            </RevelMotion>
          </div>
          <div className="mt-4 md:w-1/2">
            <Form submitHandler={onSubmit}>
              <div className="lg:w-[520px] px-4 pt-8 pb-8  bg-slate-200 rounded-md">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col
                    className="gutter-row"
                    span={24}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <RevelMotion>
                      <FormInput
                        type="text"
                        name="name"
                        size="large"
                        label="Name"
                      />
                    </RevelMotion>
                  </Col>
                  <Col
                    className="gutter-row"
                    span={24}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <RevelMotion>
                      <FormInput
                        type="text"
                        name="email"
                        size="large"
                        label="Email"
                      />
                    </RevelMotion>
                  </Col>
                  <Col
                    className="gutter-row"
                    span={24}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <RevelMotion>
                      <FormTextArea name="feedback" label="Feedback" />
                    </RevelMotion>
                  </Col>
                </Row>
                <div className="text-center">
                  {id ? (
                    <RevelMotion>
                      <Button
                        size="large"
                        className="bg-teal-700 text-white px-8"
                        htmlType="submit"
                      >
                        Send
                        <SendOutlined />
                      </Button>
                    </RevelMotion>
                  ) : (
                    <Link href={"/login"}>
                      <RevelMotion>
                        <Button
                          size="large"
                          className="bg-teal-700 text-white px-8"
                        >
                          Send
                          <SendOutlined />
                        </Button>
                      </RevelMotion>
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
