import React from "react";
import RevelMotion from "../motions/RevelMotion";

const Servey = () => {
  return (
    <div className="bg-gray-100 max-w-7xl mx-auto rounded-md text-center flex gap-4 justify-around lg:justify-center lg:gap-12 flex-wrap px-3  pt-8 pb-8 mt-8">
      <RevelMotion>
        <div className="p-4 rounded-md bg-teal-500 shadow-md">
          <h2>4.5 Lac+</h2>
          <p className="font-mono">Clients Served</p>
        </div>
      </RevelMotion>
      <RevelMotion>
        <div className="p-4 rounded-md bg-teal-400 shadow-md">
          <h2>5.5 Lac+</h2>
          <p className="font-mono">Property Onboarded</p>
        </div>
      </RevelMotion>
      <RevelMotion>
        <div className="p-4 rounded-md bg-teal-200 shadow-md">
          <h2>700+</h2>
          <p className="font-mono">Brands Served</p>
        </div>
      </RevelMotion>
      <RevelMotion>
        <div className="p-4 rounded-md bg-teal-100 shadow-md">
          <h2>2000+</h2>
          <p className="font-mono">Daily User Visit</p>
        </div>
      </RevelMotion>
    </div>
  );
};

export default Servey;
