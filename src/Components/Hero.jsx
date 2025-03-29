import React from "react";
import heroImage from "../assets/banner.jpg"; // Replace with your actual image path

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-end px-10" style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Text Container Positioned to the Right */}
      <div className="bg-[#FCEED5] p-10 rounded-lg max-w-lg shadow-lg">
        <p className="text-sm uppercase text-gray-600 font-semibold tracking-wide">
          New Arrival
        </p>
        <h1 className="text-4xl font-bold text-[#7D6228] leading-tight">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-gray-700 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-5 bg-[#A87B2E] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#7D6228] transition-all">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;