"use client";
import React, { useEffect, useState } from "react";
import { BiSolidBookmarkAltPlus } from "react-icons/bi";

interface CardProps {
  tagline: string;
  summary: string;
}
const Card: React.FC<CardProps> = ({ tagline, summary }) => {
  return (
    <div className="shadow-xl px-6 py-2 border border-slate-300 rounded-xl">
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

function Section5() {
  const [scale, setScale] = useState(false);
  useEffect(() => {
    setScale(true);
  }, []);
  return (
    <div
      className={`grid grid-cols-1 xl:grid-cols-2 gap-5 transition-transform duration-1000 ${
        scale ? "scale-100" : "scale-0"
      } px-2 sm:px-5 md:px-10 lg:px-32 py-10 bg-gradient-to-r from-amber-50 to-rose-200`}
    >
      <div className="space-y-6  ">
        <div className="flex justify-center md:justify-start">
          <div className="p-2 bg-green-500 rounded-lg ">
            <BiSolidBookmarkAltPlus size={50} color="#fff" className="" />
          </div>
        </div>
        <h1 className="text-4xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text text-center md:text-left">
          car Plus
        </h1>
        <p className=" text-lg font-semibold text-slate-500 text-center md:text-left">
          Exclusive Perks for a Premium Experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {flexItemContent.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
      <img
        src="/assets/images/ride-with-us/ridewithus.png"
        alt="ridewithus"
        className="xl:max-w-xl mx-auto"
      />
    </div>
  );
}

export default Section5;
