/* eslint-disable react/no-unescaped-entities */
"use client";

import { useGetFeedbacksQuery } from "@/redux/api/feedbackApi";
import Loading from "@/app/loading";

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
    <div className="my-12 max-w-7xl mx-auto py-4">
      <div className="">
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
    </div>
  );
};

export default Feedback;
