"use client";
import { useEffect, useRef } from "react";
import backgroundImage from "../../assects/heroBg.jpg";
import { motion, useAnimation, useInView } from "framer-motion";
import RevelMotion from "../motions/RevelMotion";

const Hero = ({ children }: any) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControles = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControles.start("visible");
    }
  });
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,

        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="h-[35vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh]"
    >
      <div className="max-w-7xl mx-auto">
        <div className=" flex justify-center items-center ">
          <RevelMotion>
            <div
              className="flex justify-center 
            items-center backdrop-blur-md
           bg-black/20 p-2 md:p-4 mx-4 
             w-92 md:w-[600px] h-40 rounded-md  "
            >
              {children}
            </div>
          </RevelMotion>
        </div>
      </div>
    </div>
  );
};

export default Hero;
