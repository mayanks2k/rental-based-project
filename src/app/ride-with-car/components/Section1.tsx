"use client";
import { CalendarIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa6";
import { LuTimer } from "react-icons/lu";
import { MdAddLocationAlt, MdElectricBike } from "react-icons/md";
import { SiExpensify } from "react-icons/si";

const data = [
  {
    label: "Book Rides in Advance",
    icon: <LuTimer color="#fff" className="w-5 h-5" />,
    content:
      "Easily schedule rides for yourself or others with our straightforward booking system.",
  },
  {
    label: "Express Rides",
    icon: <SiExpensify color="#fff" className="w-5 h-5" />,
    content:
      "In a hurry? Take advantage of our Express Rides at designated spots.",
  },
  {
    label: "Add Multiple Stops",
    icon: <MdAddLocationAlt color="#fff" className="w-5 h-5" />,
    content:
      "Include up to two stops during your journey, ideal for running errands or collecting companions.",
  },
];

const Card = ({ item }: any) => {
  return (
    <div className="shadow-xl p-4 max-w-[300px] border rounded-xl">
      <div className="border-4 p-2 bg-green-500 rounded-lg inline-block">
        {item.icon}
      </div>
      <div className="text-bold text-lg py-1">{item.label}</div>
      <p className="text-slate-700 text-sm">{item.content}</p>
    </div>
  );
};

function Section1() {
  const [scale, setScale] = useState(false);
  useEffect(() => {
    setScale(true);
  }, []);
  return (
    <div
      className={`mx-auto container bg-slate-50 transition-transform duration-1000 ${
        scale ? "scale-100" : "scale-0"
      } px-2 md:px-5 xl:px-32 py-10`}
    >
      <div className="flex flex-col xl:flex-row justify-between items-center space-y-4 ">
        <div>
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start">
              <MdElectricBike
                color="#fff"
                className="w-20 h-20  p-4 bg-green-500 rounded-lg"
              />
            </div>
            <p className="text-center md:text-start">
              Get where you need to be, easily.
            </p>
            <h1 className="text-4xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text text-center md:text-left">
              Book Your City Rides
            </h1>
            <h2>Get Around Town with car</h2>
            <p className=" text-lg font-semibold text-slate-500 text-center md:text-left">
              Easy point-to-point pickups for your daily commutes. Eco-friendly
              and convenient!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
            {data.map((item, index) => {
              return <Card key={index} item={item} />;
            })}
          </div>
        </div>
        <img
          src="/assets/images/ride-with-us/ridewithus.png"
          alt="ridewithus"
          className="xl:max-w-lg"
        />
      </div>
    </div>
  );
}

export default Section1;
