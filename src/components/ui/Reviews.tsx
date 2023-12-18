"use client";

import React, { useState } from "react";
import Form from "../forms/Form";
import FormTextArea from "../forms/FormTextArea";
import { Avatar, Button, Rate, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  useAddReviewMutation,
  useGetReviewsQuery,
} from "@/redux/api/reivewApi";
import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Reviews = ({ houseId }: any) => {
  const { id, role } = getUserInfo() as any;
  const [value, setValue] = useState(0);

  const { data, isLoading } = useGetReviewsQuery({ houseId });
  const [addReview] = useAddReviewMutation();

  const reviews = data?.reviews;

  const handleSubmit = async (data: any) => {
    data.rating = value;
    data.houseId = houseId;

    try {
      const res = await addReview(data).unwrap();
      if (res?.id) {
        message.success("Successfully added review.");
      } else {
        message.error("Cant't added Review.");
      }
    } catch (error: any) {
      message.error(error.message);
      console.error(error.message);
    }
  };

  return (
    <div>
      {reviews?.length &&
        reviews?.map((review, index) => (
          <div key={index} className="bg-slate-50 p-2 rounded-md my-2">
            <div className="mb-4 flex justify-between">
              <span>
                <Rate value={review?.rating} disabled />
              </span>
              <span className="mr-3 text-gray-500">
                <Avatar className="mx-1" size="small" icon={<UserOutlined />} />
                {review?.user?.name}
              </span>
            </div>

            <small>{review?.review}</small>
          </div>
        ))}
      {/* review and rating area  */}
      <div className="bg-gray-50 p-2 rounded-md">
        <h2 className=" mt-4 ml-1 text-teal-700">Write a Review</h2>
        <Form submitHandler={handleSubmit}>
          <FormTextArea name="review" placeholder="Enter yor Review." />
          <div className="flex justify-between mt-4">
            <span>
              <Rate tooltips={desc} onChange={setValue} value={value} />
              {value ? (
                <span className="ant-rate-text">{desc[value - 1]}</span>
              ) : (
                ""
              )}
            </span>
            {id ? (
              <Button className="bg-teal-600 text-white" htmlType="submit">
                Submit
              </Button>
            ) : (
              <Link href={"/login"}>
                <Button className="bg-teal-400">Submit</Button>
              </Link>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Reviews;
