/* eslint-disable react/no-unescaped-entities */
"use client";

import { useGetFeedbacksQuery } from "@/redux/api/feedbackApi";
import Loading from "@/app/loading";
import backgroundImage from "../../assects/banner2.jpg";
import Link from "next/link";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";

const Feedback = () => {
  const query = {
    limit: 3,
    page: 1,
  };
  const { data, isLoading } = useGetFeedbacksQuery({ ...query });

  const feedbacks = data?.feedbacks;
  console.log(feedbacks);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="my-12 max-w-7xl mx-auto py-4">
        <h1 className=" text-center text-slate-500">Feedbacks</h1>
        <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-3"></div>

        <div className=" text-center mx-2 flex flex-wrap gap-4 justify-center items-center">
          {feedbacks &&
            feedbacks.map((feedback: any) => (
              <div
                key={feedback?.id}
                className=" w-[394px] h-36 relative bg-gray-50 rounded-lg mt-10 p-3"
              >
                <h3 className="font-normal relative">
                  <span className="text-teal-600">❝ </span>
                  {feedback?.feedback}
                  <span className="text-teal-600"> ❞</span>
                </h3>
                <div className="absolute bottom-2 text-center w-full">
                  <h4 className="text-center text-slate-700">
                    {feedback?.user?.name}{" "}
                  </h4>
                  {feedback?.user?.profileImage ? (
                    <Image
                      className=" w-9 h-9 bg-gray-300 rounded-full"
                      src={feedback?.user?.profileImage.src}
                      alt=""
                    />
                  ) : (
                    <Avatar size={"large"} icon={<UserOutlined />} />
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* feedback bottom banner  */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[50vh] w-full bg-fixed"
      >
        <div className="max-w-7xl mx-auto h-full text-white p-3">
          <div className="flex items-center justify-start h-full w-full">
            <div>
              <h3 className="pt-4  pb-4">CORPORATE HOUSING</h3>
              <h1 className="mb-4 text-5xl">
                Rent Apartments for Your Company
              </h1>
              <p>
                Manage easily all your corporate apartments needs with
                flexibility and exclusive support. Save time and money. Ideal
                for you and your team.
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
      </div>
    </div>
  );
};

export default Feedback;
