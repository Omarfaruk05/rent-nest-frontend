"use client";

import Loading from "@/app/loading";
import { useGetSingUserQuery } from "@/redux/api/userApi";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  const { data, isLoading } = useGetSingUserQuery(undefined);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className=" mt-40 bg-gray-200 md:flex gap-8 justify-center items-center h-[50vh] w-[100vh] mx-auto">
        <div className="p-4">
          <h1>Name: {data?.name}</h1>
          <p>Email: {data?.email}</p>
          <p>Contact Number: {data?.contactNumber}</p>
          <p>Role: {data?.role}</p>
          <p>Address: {data?.address}</p>
        </div>
        <div className=" p-4 ">
          {data?.profileImage ? (
            <img
              width={500}
              height={300}
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
