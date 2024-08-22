import React from "react";
import AboutPhoto from "../../assects/about_img.png";
import { Image } from "antd";
import RevelMotion from "../motions/RevelMotion";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-8">
      <RevelMotion>
        <h1 className="text-center text-slate-600">About Us</h1>
        <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-1 mb-3"></div>
      </RevelMotion>
      <div className="grid md:grid-cols-2 gap-4 justify-center md:items-center mx-3 mt-12">
        <div>
          <RevelMotion>
            {" "}
            <h2>At A Glance</h2>
          </RevelMotion>
          <RevelMotion>
            <p className="text-slate-500 lg:text-xl mb-4">
              Starting back in 2016, Rent Nest has now become the only real
              estate solutions provider in Bangladesh and its largest
              transacting real estate company. Combining an unmatched online and
              offline presence with our incomparable database of information,
              Rent Nest has become the pioneer that caters to the needs of those
              with real estate queries.{" "}
            </p>
          </RevelMotion>{" "}
          <RevelMotion>
            <p className="text-slate-500 lg:text-xl">
              {" "}
              whether property search or customization, providing supporting
              services such as legal, mortgage, and interior to ensure all
              solutions are under one roof. Rent Nest utilizes technology to
              drive solutions for all stakeholders within the real estate
              industry with the vision to ensure that all Bangladeshis have
              access to a trusted and secure real estate service provider.
            </p>
          </RevelMotion>
        </div>
        <div className="mx-auto">
          <RevelMotion>
            <Image
              className="rounded-md"
              src={AboutPhoto.src}
              alt="aboutPhoto"
            />{" "}
          </RevelMotion>
        </div>
      </div>
    </div>
  );
};

export default About;
