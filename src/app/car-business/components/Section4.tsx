import { SwatchIcon } from "@heroicons/react/24/outline";
import React from "react";
import { BiLeaf } from "react-icons/bi";
import Image from "next/image";

const cardData = [
  {
    icon: <BiLeaf size={30} className="text-green-500" />,
    header: "Cost-Effective Choice",
    label: "Shared Ride Savings",
    content:
      "Reduce costs by up to 40% compared to traditional methods by opting for shared rides.",
  },
  {
    icon: <BiLeaf size={30} className="text-green-500" />,
    header: "Effortless Management",
    label: "One-Click Rostering",
    content:
      "Easily create pre-scheduled ride bookings for your entire team with a single click.",
  },
  {
    icon: <BiLeaf size={30} className="text-green-500" />,
    header: "Full Transparency",
    label: "Real-Time Tracking",
    content:
      "Monitor ongoing and upcoming rides in real-time for complete peace of mind.",
  },
];
const Card = () => {
  return (
    <div className="">
      <h1
        className="text-2xl md:text-[40px] bg-gradient-to-r text-center md:text-left
       from-green-500 to-blue-700 text-transparent bg-clip-text md:leading-10"
      >
        Our Streamlined Employee Transportation
      </h1>
      <p className="text-lg font-semibold text-slate-500 text-center md:text-left my-5">
        Enjoy door-to-door pickups for a smooth, efficient, and eco-friendly
        employee transportation solution.
      </p>
      {cardData.map((item, index) => {
        return (
          <div key={index} className="flex items-start gap-5 my-5">
            <div className="p-2 rounded-full bg-green-100">{item.icon}</div>
            <div>
              <p className="text-xl font-semibold text-slate-800">
                {item.header}
              </p>
              <p className="text-lg font-medium">{item.label}</p>
              <p className="">{item.content}</p>
            </div>
          </div>
        );
      })}
      <button
        className="border p-3 px-10 rounded-full shadow-lg text-white bg-green-700
      duration-200 hover:opacity-90 mt-5"
      >
        Apply Now
      </button>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 py-10 px-2 sm:px-5 md:px-10 lg:px-32">
      <img
        className="hover:scale-105 overflow-hidden duration-300"
        src={`/assets/images/home/sections/driveWithcar2.png`}
        // width={600}
        // height={450}
        alt="director"
      />
      <Card />
    </div>
  );
};

export default Section4;
