"use client";

import { Button, Col, DatePicker, DatePickerProps, Row } from "antd";
import { SendOutlined } from "@ant-design/icons";
import FormInput from "../forms/FormInput";
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import Form from "../forms/Form";
import FormDatePicker from "../forms/FormDatePicker";
import { useGetAvailableSlotQuery } from "@/redux/api/houseVisitApi";
import { useState } from "react";

const CreateSchedule = ({ houseId }: any) => {
  const { id, role } = getUserInfo() as any;
  const [date, setDate] = useState("");

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(dateString);
  };

  const { data, isLoading } = useGetAvailableSlotQuery({ date, houseId });

  console.log(data);

  const onSubmit = async (data: any) => {};
  return (
    <div className="mx-auto">
      <Form submitHandler={onSubmit}>
        <Row className="mx-2" gutter={{ md: 8 }}>
          <Col
            className="gutter-row"
            span={12}
            style={{
              marginBottom: "10px",
            }}
          >
            <DatePicker onChange={onChange} />
          </Col>
          <Col
            className="gutter-row"
            span={12}
            style={{
              marginBottom: "10px",
            }}
          >
            <DatePicker onChange={onChange} />
          </Col>
          <Col
            className="gutter-row"
            span={24}
            style={{
              marginBottom: "10px",
            }}
          >
            <div>
              {data &&
                data?.map((schedule: any, index: any) => (
                  <div className="" key={index}>
                    {schedule === "MORNING" && (
                      <Button className=" bg-gray-500 text-white rounded-md mb-2">
                        10:00AM - 12:00PM
                      </Button>
                    )}
                    {schedule === "NOON" && (
                      <Button className="bg-gray-500 text-white  rounded-md mb-2">
                        1:00PM - 3:00PM
                      </Button>
                    )}
                    {schedule === "EVENING" && (
                      <Button className="bg-gray-500 text-white  rounded-md">
                        4:00PM - 6:00PM
                      </Button>
                    )}
                  </div>
                ))}
            </div>
          </Col>
        </Row>
        <div className="text-center">
          {id ? (
            <Button
              size="large"
              className="bg-slate-600 text-white px-16"
              htmlType="submit"
            >
              Send
              <SendOutlined />
            </Button>
          ) : (
            <Link href={"/login"}>
              <Button size="large" className="bg-slate-600 text-white px-16">
                Send
                <SendOutlined />
              </Button>
            </Link>
          )}
        </div>
      </Form>
    </div>
  );
};

export default CreateSchedule;
