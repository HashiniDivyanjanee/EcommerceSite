import React from "react";
import image from "../assets/image4.png";
const HeroSection = () => {
  return (
    <div className="bg-[#3e5c4a] min-h-45 flex items-center px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Modern Interior <br /> Design Studio
          </h1>
          <p className="text-gray-300 max-w-md">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold px-6 py-3 rounded-full">
              Shop now
            </button>
            <button className="text-white border border-gray-400 rounded-full px-6 py-3 font-semibold hover:bg-white hover:text-[#3e5c4a]">
              Explore
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div className="mt-10 lg:mt-0">
          <img className="w-full max-w-[600px] mx-auto" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
