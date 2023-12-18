/* eslint-disable @next/next/no-img-element */
"use client";

import Loading from "@/app/loading";
import { useGetSingUserQuery } from "@/redux/api/userApi";
import { Button, Image } from "antd";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  const { data, isLoading } = useGetSingUserQuery(undefined);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="bg-slate-200 p-2 rounded-md shadow-lg w-fit mt-40 md:flex flex-col-reverse gap-8 justify-center items-center mx-auto">
        <div className="p-4">
          <h1>
            Name: <span>{data?.name}</span>
          </h1>
          <p>
            Email:{" "}
            <span className="text-gray-600 font-semibold">{data?.email}</span>
          </p>
          <p>
            Contact Number:{" "}
            <span className="font-semibold">{data?.contactNumber}</span>
          </p>
          <p className="">
            Role:{" "}
            <span className="text-orange-700 font-semibold">{data?.role}</span>
          </p>
          <p className="bg-orange-100 w-fit -ml-1 py-1 px-2 rounded-md font-semibold text-gray-600 mt-1">
            Address: <span>{data?.address}</span>
          </p>
        </div>
        <div className=" p-4 ">
          {data?.profileImage ? (
            <img
              className="w-60 rounded-full"
              src={data?.profileImage}
              alt="profileImage"
            />
          ) : (
            <div>
              <h1>No Profile Image</h1>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 text-center w-full">
        <Link href={`/dashboard/${data?.role}/profile/update`}>
          <Button type="primary">Update Profile</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
