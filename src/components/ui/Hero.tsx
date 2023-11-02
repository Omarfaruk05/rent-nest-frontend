import backgroundImage from "../../assects/imageBackgroundLarge.ea3d629bf8eb6227abebba2d160de5b8.jpg";

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
      className="h-[30vh] md:h[60vh]"
    >
      <div className="max-w-7xl mx-auto">
        <div className=" flex justify-center items-center ">
          <div className="flex  justify-center  items-center backdrop-blur-lg bg-white/50 p-4 mx-4  w-[600px] h-40 rounded-md  ">
            <h1 className="text-slate-500 animate-bounce">{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
