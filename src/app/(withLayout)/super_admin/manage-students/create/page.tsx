"use client";

import StepperForm from "@/components/stepperForm/StepperFrom";
import GurdianInfo from "@/components/studentFroms/GurdianInfo";
import LocalGurdianInfo from "@/components/studentFroms/LocalGurdianInfo";
import StudentBasicInfo from "@/components/studentFroms/StudentBasicInfo";
import StudentInfo from "@/components/studentFroms/StudentInfo";

const CreateStudentPage = () => {
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
      title: "Guardian Information",
      content: <GurdianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGurdianInfo />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Create Student</h1>
      <StepperForm
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;
