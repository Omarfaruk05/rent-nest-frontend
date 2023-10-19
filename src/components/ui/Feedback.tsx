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
      <div className="mx-4">
        <h2 className=" text-center text-slate-500">Feedbacks</h2>
        <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-3"></div>

        <div className=" text-center flex gap-4 justify-center items-center">
          {feedbacks &&
            feedbacks.map((feedback: any) => (
              <div
                key={feedback?.id}
                className=" bg-white p-4 rounded-md shadow-lg w-96 h-40"
              >
                <h3 className="bg-green-200 py-4 rounded-md text-purple-500">
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
