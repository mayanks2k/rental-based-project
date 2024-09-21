"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface DataItem {
  detail: string;
  img: string;
}

const data: DataItem[] = [
  {
    detail: "Download the app.",
    img: "/assets/images/ride-with-us/DownloadTheApp.png",
  },
  {
    detail: "Select your locations.",
    img: "/assets/images/ride-with-us/SelectYourLocations.png",
  },
  {
    detail: "Choose your desired time.",
    img: "/assets/images/ride-with-us/ChooseYourDesiredTime.png",
  },
  {
    detail: "Check your fare and enjoy the ride!",
    img: "/assets/images/ride-with-us/Checkyourfareandenjoytheride.png",
  },
];

function Section4() {
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
    <section className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-indigo-50 to-indigo-100 gap-10 px-4 md:px-8 xl:px-32 py-16">
      <div className="flex justify-center items-center">
        <img
          className="w-full max-w-[512px] rounded-xl md:shadow-2xl transition-transform transform hover:scale-105 duration-500"
          src={data[currentSlide]["img"]}
          // width={500}
          // height={500}
          alt="image"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl text-center md:text-left bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text font-extrabold mb-8">
          Book Your car Ride in 4 Easy Steps
        </h1>
        <div className="flex flex-col space-y-8">
          {data.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-12 h-12 flex text-green-700 items-center bg-green-100 justify-center rounded-full border-4 transition-colors duration-300 ${
                  index === currentSlide
                    ? "border-green-500"
                    : "border-green-200"
                }`}
              >
                {index + 1}
              </div>
              <p className="ml-6 text-lg text-gray-800 transition-colors duration-300">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section4;
