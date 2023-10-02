"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import React from "react";

const CreateAdminPage = () => {
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
      <h1>Admin Create</h1>
    </div>
  );
};

export default CreateAdminPage;
