"use client";
import backgroundImage from "../../assects/heroBg.jpg";

const Hero = ({ children }: any) => {
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
          <div
            className="flex justify-center 
            items-center backdrop-blur-lg
           bg-black/20 p-2 md:p-4 mx-4 
             w-92 md:w-[600px] h-40 rounded-md  "
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
