"use client";

import { Button, Col, Row } from "antd";
import Form from "../forms/Form";
import FormInput from "../forms/FormInput";
import FormSelectField from "../forms/FormSelectField";

const Hero = () => {
  const interiorOptions = [
    { value: "Furnished", label: "Furnished" },
    { value: "Un_Furnished", label: "Un Furnished" },
  ];

  const categoryOptions = [
    { value: "Furnished", label: "Furnished" },
    { value: "Furnished", label: "Residential" },
    { value: "Luxury", label: "Luxury" },
  ];

  const handleSubmit = (data: any) => {};
  return (
    <div className="bg-gradient-to-r from-teal-400 to-violet-600 h-96">
      <div className="max-w-7xl mx-auto">
        <div className="pt-32 flex justify-center items-center ">
          <div className="flex  justify-center  items-center backdrop-blur-lg bg-white/50 p-4 mx-4  w-[600px] h-40 rounded-md  ">
            <h1 className="text-slate-500 animate-bounce">
              Discover Your Perfect Property
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
