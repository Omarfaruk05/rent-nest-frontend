const Hero = ({ text }: { text: string }) => {
  return (
    <div className="bg-gradient-to-r from-teal-200 to-teal-400 h-96">
      <div className="max-w-7xl mx-auto">
        <div className="pt-32 flex justify-center items-center ">
          <div className="flex  justify-center  items-center backdrop-blur-lg bg-white/50 p-4 mx-4  w-[600px] h-40 rounded-md  ">
            <h1 className="text-slate-500 animate-bounce">{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
