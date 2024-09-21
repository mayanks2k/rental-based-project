import React from "react";

const Section6 = () => {
  return (
    <div className="px-2 sm:px-5 md:px-10 py-10 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-x-10 gap-y-5">
        <h1
          className="text-4xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent 
            bg-clip-text"
        >
          See How We're Shaping the Future of Rides
        </h1>
        <div>
          <p className="text-xl text-slate-600">
            Get the latest on our eco-friendly innovations. Stay ahead of the
            curve with sustainable mobility solutions. Discover how car is
            transforming your ride.
          </p>
          <button className="text-blue-500 text-xl my-3">
            See All Stories →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section6;
