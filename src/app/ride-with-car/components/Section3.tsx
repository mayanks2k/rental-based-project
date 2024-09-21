import React from "react";
import ImageCarousel from "./ImageCarousel";
import { MdLocalAirport } from "react-icons/md";
import Image from "next/image";

const data = [
  {
    imgUrl: "/assets/images/ride-with-us/img1.png",
    label: "Dedicated Pick-up Zones",
    content:
      "Forget airport hassles. We have dedicated pick-up zones at the airports.",
  },
  {
    imgUrl: "/assets/images/ride-with-us/img2.png",
    label: "Fast & Easy",
    content:
      "Shortened airport pick-up wait times mean you can get on your way quickly.",
  },
  {
    imgUrl: "/assets/images/ride-with-us/img3.png",
    label: "Travel in Style",
    content:
      "Choose from our standard or premium airport ride options for added comfort.",
  },
  {
    imgUrl: "/assets/images/ride-with-us/img4.png",
    label: "Need Help?",
    content:
      "Kiosk and usher support are available to assist you at the airport.",
  },
];

const Section3: React.FC = () => {
  return (
    <div className="py-10 px-2 md:px-5 xl:px-28">
      <div className="flex flex-col justify-center md:flex-row items-center space-x-0 md:space-x-2 pb-10">
        <MdLocalAirport
          size={50}
          color="#fff"
          className="p-2 bg-green-500 rounded-full mb-4 md:mb-0"
        />
        <h1
          className="text-4xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent 
           bg-clip-text text-center"
        >
          Effortless Airport Transit with car
        </h1>
      </div>

      <div className="relative">
        <div className="flex flex-col justify-center">
          <div className="hidden md:block">
            <ImageCarousel />
          </div>
          <div className="md:absolute inset-0 p-y-5">
            <p
              className="text-xl text-slate-700 md:text-slate-200 text-center font-semibold 
            pt-0 md:pt-5 pb-5 xl:pb-0"
            >
              Take the stress out of airport commutes
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 p-4 lg:py-10">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex p-5 space-x-3 bg-slate-100 rounded-xl mx-auto w-full md:w-10/12 lg:w-8/12"
                >
                  <img
                    className="w-12 h-12 rounded-full border-2 p-1 bg-green-200 border-green-500"
                    src={item.imgUrl}
                    alt="car"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold">{item.label}</p>
                    <p className="">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
