"use client";

import {
  Button,
  Col,
  DatePicker,
  DatePickerProps,
  Input,
  Row,
  message,
} from "antd";
import { SendOutlined } from "@ant-design/icons";
import FormInput from "../forms/FormInput";
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import Form from "../forms/Form";
import FormDatePicker from "../forms/FormDatePicker";
import {
  useAddHouseVisitMutation,
  useGetAvailableSlotQuery,
} from "@/redux/api/houseVisitApi";
import { useState } from "react";

const CreateSchedule = ({ houseId }: any) => {
  const { id } = getUserInfo() as any;
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(dateString);
  };

  const { data, isLoading } = useGetAvailableSlotQuery({ date, houseId });
  const [addHouseVisit] = useAddHouseVisitMutation();

  const onSubmit = async (data: any) => {
    data.visitDate = date;
    data.houseId = houseId;
    if (slot === "10:00AM - 12:00PM") {
      data.visitSlot = "MORNING";
    }
    if (slot === "1:00PM - 3:00PM") {
      data.visitSlot = "NOON";
    }
    if (slot === "4:00PM - 6:00PM") {
      data.visitSlot = "EVENING";
    }
    message.loading("Creating...");
    try {
      const res = await addHouseVisit(data).unwrap();
      if (res?.id) {
        message.success("Schedule Added Successfully.");
      }
    } catch (error: any) {
      console.error(error.message);
      message.error(error.message);
    }
  };
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
            <Input value={slot} />
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
                      <Button
                        onClick={() => setSlot("10:00AM - 12:00PM")}
                        className=" bg-gray-500 text-white rounded-md mb-2"
                      >
                        10:00AM - 12:00PM
                      </Button>
                    )}
                    {schedule === "NOON" && (
                      <Button
                        onClick={() => setSlot("1:00PM - 3:00PM")}
                        className="bg-gray-500 text-white  rounded-md mb-2"
                      >
                        1:00PM - 3:00PM
                      </Button>
                    )}
                    {schedule === "EVENING" && (
                      <Button
                        onClick={() => setSlot("4:00PM - 6:00PM")}
                        className="bg-gray-500 text-white  rounded-md"
                      >
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
