"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface DataItem {
  detail: string;
  img: string;
}
const data: DataItem[] = [
  {
    detail:
      "Get your team up and running quickly with our simple onboarding process.",
    img: "/assets/images/ride-with-us/DownloadTheApp.png",
  },
  {
    detail:
      "Enjoy seamless user management for admins, allowing you to easily add, edit, and remove users.",
    img: "/assets/images/ride-with-us/SelectYourLocations.png",
  },
  {
    detail: "Track and monitor all business rides for complete transparency.",
    img: "/assets/images/ride-with-us/ChooseYourDesiredTime.png",
  },
  {
    detail:
      "Choose from flexible payment and invoicing methods to suit your needs.",
    img: "/assets/images/ride-with-us/Checkyourfareandenjoytheride.png",
  },
];

function Section6() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const handleInterval = (): NodeJS.Timeout => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return intervalId;
  };

  useEffect(() => {
    const intervalId = handleInterval();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 bg-indigo-50
       px-2 sm:px-5 md:px-10 lg:px-32 py-10 gap-10"
    >
      <div className="flex justify-center items-center">
        <img
          className="w-full max-w-[512px] rounded-xl md:shadow-2xl transition-transform transform hover:scale-105 duration-500"
          src={data[currentSlide]["img"]}
          // width={500}
          // height={500}
          alt="image"
        />
      </div>
      <div>
        <h1
          className="text-[40px] text-center md:text-left bg-gradient-to-r from-green-500 to-blue-700 
        text-transparent bg-clip-text"
        >
          Effortless Onboarding & Management
        </h1>
        <div className="flex flex-col space-y-6 my-10">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div
                className={`md:w-10 md:h-10 flex items-center justify-center text-green-700  md:bg-green-100
                    rounded-full md:border ${
                      index === currentSlide
                        ? "border-green-500"
                        : "border-green-200"
                    }`}
              >
                <p className="md:w-10 md:h-10 flex items-center justify-center">
                  {index + 1}
                </p>
              </div>
              <p className="my-3">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section6;
