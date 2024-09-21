"use client";
import { CalendarIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const Card = () => {
  return (
    <div className="shadow-xl p-4 max-w-[300px] border rounded-lg">
      <div className="border-4 p-2 bg-green-500 rounded-lg inline-block">
        <CalendarIcon className="h-6" />
      </div>
      <div className="text-bold">Schedule Rides</div>
      <p className="text-slate-400 text-sm">
        Schedule in advance for yourself and your loved ones
      </p>
    </div>
  );
};

function BookCityRide() {
  const [scale, setScale] = useState(false);
  useEffect(() => {
    setScale(true);
  }, []);
  return (
    <div
      className={`mx-auto container bg-green-50  py-[90px] transition-transform duration-1000 ${
        scale ? "scale-100" : "scale-0"
      }`}
    >
      <div className="flex flex-col justify-between items-center md:flex-row space-y-4 ">
        <div className="space-y-6  ">
          <div className="flex justify-center md:justify-start">
            <div className="border-4 p-4 bg-green-500 rounded-lg ">
              <CalendarIcon className="h-6" />
            </div>
          </div>
          <h1 className="text-4xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text text-center md:text-left">
            Book City Rides
          </h1>
          <p className=" text-lg font-semibold text-slate-500 text-center md:text-left">
            Seamless point-to-point pickups, making urban travel smart,
            efficient, and eco-friendly
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl gap-2  text-center md:text-left">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div>
          <img
            src="https://storage.dev.blucgn.com/images/cityRidesNewIcon.png"
            alt="group..."
            className="max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default BookCityRide;
