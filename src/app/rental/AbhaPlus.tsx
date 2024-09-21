"use client";
import { CalendarIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

interface CardProps {
  tagline: string;
  summary: string;
}
const Card: React.FC<CardProps> = ({ tagline, summary }) => {
  return (
    <div className="shadow-xl px-6 py-2 max-w-[300px] border rounded">
      <div className="px-4 py-2">
        <div className="font-semibold">{tagline}</div>
        <p className="text-sm">{summary}</p>
      </div>
    </div>
  );
};
const flexItemContent = [
  {
    tagline: "Effortless Travel",
    summary: "Schedule recurring rides for seamless travel planning.",
  },
  {
    tagline: "Explore More",
    summary: " Access intercity rides and expand your travel horizons.",
  },
  {
    tagline: "Relax and Wait",
    summary: " Enjoy extended waiting times for a stress-free pick-up.",
  },
  {
    tagline: "Birthday Treat",
    summary:
      "Celebrate with us! Get a free birthday ride as an car  Plus member.",
  },
];

function carPlus() {
  const [scale, setScale] = useState(false);
  useEffect(() => {
    setScale(true);
  }, []);
  return (
    <div
      className={`mx-auto container  bg-green-50  py-[90px] transition-transform duration-1000 ${
        scale ? "scale-100" : "scale-0"
      }`}
    >
      <div className="flex flex-col-reverse justify-between items-center md:flex-row space-y-4 ">
        <div className="space-y-6  ">
          <div className="flex justify-center md:justify-start">
            <div className="border-4 p-4 bg-green-500 rounded-lg ">
              <CalendarIcon className="h-6" />
            </div>
          </div>
          <h1 className="text-4xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text text-center md:text-left">
            car Plus
          </h1>
          <p className=" text-lg font-semibold text-slate-500 text-center md:text-left">
            Exclusive Perks for a Premium Experience
          </p>
          <div className="flex flex-wrap flex-col md:flex-row items-center justify-between max-w-5xl gap-4  text-center md:text-left">
            {flexItemContent.map((item, index) => (
              <Card key={index} {...item} />
            ))}
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

export default carPlus;
