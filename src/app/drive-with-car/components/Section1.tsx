import React from "react";

const Section1 = () => {
  return (
    <div className="h-fit py-20 px-1">
      <div className=" text-white">
        <h1 className="text-[35px] bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
          Join the car Family
        </h1>
        <h1 className="text-[35px] bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
          Drive, Earn, and Belong!
        </h1>
        <p className="text-xl my-5">
          Become a valued partner in our exclusive driver network!
        </p>
        <button className="bg-green-600 px-5 rounded-xl py-2.5 my-5">
          Apply to Drive Today →
        </button>
      </div>

      <div className="text-white my-5">
        <p className="text-lg font-medium">Start earning right away</p>
        <p className="text-slate-200 text-sm my-1.5">
          Learn about our competitive pay and how to track your weekly income
          easily.
        </p>
        <p className="text-lg font-medium mt-5">
          Thrive in a supportive community
        </p>
        <p className="text-slate-200 text-sm my-1.5">
          Join other happy driver-partners who choose car.
        </p>
        <p className="text-lg font-medium mt-5">
          No investment required
        </p>
        <ul className="text-slate-200 text-sm my-1.5">
          <li>Focus on driving and let us handle the rest.</li>
        </ul>
      </div>
    </div>
  );
};

export default Section1;
