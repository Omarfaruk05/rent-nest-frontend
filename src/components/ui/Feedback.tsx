/* eslint-disable react/no-unescaped-entities */
"use client";

import { useGetFeedbacksQuery } from "@/redux/api/feedbackApi";
import Loading from "@/app/loading";
import backgroundImage from "../../assects/banner2.jpg";
import Link from "next/link";
import { Button } from "antd";

const Feedback = () => {
  const query = {
    limit: 3,
    page: 1,
  };
  const { data, isLoading } = useGetFeedbacksQuery({ ...query });

  const feedbacks = data?.feedbacks;

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="my-12 max-w-7xl mx-auto py-4">
        <h1 className=" text-center text-slate-500">Feedbacks</h1>
        <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-3"></div>

        <div className=" text-center mx-3 flex flex-wrap gap-4 justify-center items-center">
          {feedbacks &&
            feedbacks.map((feedback: any) => (
              <div
                key={feedback?.id}
                className=" bg-white pb-4 shadow-lg rounded-md w-96 h-40"
              >
                <h3 className="bg-teal-50 py-4 text-purple-500">
                  {feedback?.user?.name}{" "}
                </h3>
                <p className="mt-8 ">{feedback?.feedback}</p>
              </div>
            ))}
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[50vh]  mt-12 bg-fixed"
      >
        <div className="text-white align-left max-w-7xl mx-auto p-4">
          <h3 className="pt-4 md:pt-32 pb-4">CORPORATE HOUSING</h3>
          <h1 className="mb-4 text-5xl">Rent Apartments for Your Company</h1>
          <p>
            Manage easily all your corporate apartments needs with flexibility
            and exclusive support. Save time and money. Ideal for you and your
            team.
          </p>
          <br />

          <Link href={"/blog"}>
            <Button className="mt-4 font-semibold rounded-md bg-teal-400 ">
              GET TO KNOW US
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
