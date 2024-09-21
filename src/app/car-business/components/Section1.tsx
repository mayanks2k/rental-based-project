import React from "react";

const Section1 = () => {
  return (
    <div className="h-[550px] grid grid-cols-1 md:grid-cols-2 items-center">
      <div className=" text-white">
        <h1 className="text-[42px] bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
          Green Your Business Travel
        </h1>
        <p className="my-5 font-light leading-8 w-10/12">
          car offers eco-friendly, efficient transportation solutions designed
          specifically for businesses. Let us help you make sustainability a
          seamless part of your operations.
        </p>
        <button className="bg-green-600 px-5 rounded-xl py-2.5 my-7">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Section1;
