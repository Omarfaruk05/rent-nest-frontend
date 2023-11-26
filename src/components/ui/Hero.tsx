"use client";
import backgroundImage from "../../assects/imageBackgroundLarge.ea3d629bf8eb6227abebba2d160de5b8.jpg";
import { motion } from "framer-motion";

const Hero = ({ text }: { text: string }) => {
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
      className="h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh]"
    >
      <div className="max-w-7xl mx-auto">
        <div className=" flex justify-center items-center ">
          <motion.div
            className="box"
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [null, -100, 0],
              transition: { duration: 0.5 },
            }}
            transition={{
              duration: 0.3,

              scale: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                restDelta: 0.002,
              },
            }}
          >
            <div className="flex  justify-center  items-center backdrop-blur-lg bg-white/50 p-4 mx-4 w-96  md:w-[600px] h-40 rounded-md  ">
              <h1 className="text-slate-500 animate-bounce">{text}</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
