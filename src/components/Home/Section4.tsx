import React from "react";
import { MdElectricCar } from "react-icons/md";
import { FaDollarSign, FaShieldAlt, FaLeaf } from "react-icons/fa"; // Importing appropriate icons

const data = [
  { text: "Special Subscription Rates", icon: FaDollarSign },
  { text: "Quality you can trust", icon: FaShieldAlt },
  { text: "No carbon emissions", icon: FaLeaf },
];

const Section4 = () => {
  return (
    <div className="px-2 sm:px-5 md:px-10 lg:px-32 py-10 ">
      <div className="flex flex-col justify-center items-center w-full xl:w-10/12 mx-auto">
        <MdElectricCar
          color="#fff"
          className="h-24 w-24 bg-green-600 rounded-3xl p-5 shadow-lg"
        />
        <h1
          className="text-4xl md:text-5xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent 
        bg-clip-text pt-10 pb-5 text-center font-bold leading-tight"
        >
          100% Electric Vehicles Powered by Clean Energy
        </h1>
        <p className="text-xl text-slate-600 mb-6 text-center">
          Uncompromising Safety and Comfort
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-5 py-5">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center px-3 py-2.5 space-x-4 rounded-xl bg-white border border-gray-200 
              shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Icon
                size={40}
                color="#fff"
                className="bg-green-500 rounded-full p-2"
              />
              <p className="xl:text-xl text-slate-700 font-medium">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section4;
