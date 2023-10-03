"use client";

import StepperFrom from "@/components/stepperForm/StepperFrom";
import GurdianInfo from "@/components/studentFroms/GurdianInfo";
import LocalgurdianInfo from "@/components/studentFroms/LocalgurdianInfo";
import StudentBasicInfo from "@/components/studentFroms/StudentBasicInfo";
import StudentInfo from "@/components/studentFroms/StudentInfo";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const CreateStudentPage = () => {
  const { role } = getUserInfo() as any;

  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Gurdian Information",
      content: <GurdianInfo />,
    },
    {
      title: "Local Gurdian Information",
      content: <LocalgurdianInfo />,
    },
  ];
  return (
    <div
      style={{
        padding: "10px",
      }}
    >
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
      <h1>Create Student</h1>
      <StepperFrom steps={steps} />
    </div>
  );
};

export default CreateStudentPage;
