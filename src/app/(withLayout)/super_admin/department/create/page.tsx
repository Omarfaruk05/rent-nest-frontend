"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import React from "react";

const CreateDepartment = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `create`,
            link: `create`,
          },
        ]}
      />
      <h1>Department Create</h1>
    </div>
  );
};
export default CreateDepartment;
