'use client'
import React, { useState, useEffect } from 'react';

interface DataItem {
    detail: string;
    img:string;
  }
function StepToBook() {
    const data: DataItem[] = [
        {
          detail: 'Download BluSmart and register',
          img:'https://storage.dev.blucgn.com/images/fourStepImg1.png'

        },
        {
          detail: ' Enter pickup & drop location',
          img:'https://storage.dev.blucgn.com/images/fourStepImg2.png'
        },
        {
          detail: ' Select desired time slot',
          img:'	https://storage.dev.blucgn.com/images/fourStepImg3.png'
        },
        {
          detail: 'Download the app and log in',
          img:'https://storage.dev.blucgn.com/images/fourStepImg4.png'
        },

      ];
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
    <div>  <section className="bg-blue-50 py-[90px]">
    <div className="">
      <div className="relative flex flex-col md:flex-row md:space-x-12 container mx-auto px-4 py-20">
      <div className="group md:w-1/2 flex justify-center md:justify-end relative">


      <img
        src="https://blu-smart.com/assets/mobileFrame2.png"
        alt="first image"
        className="absolute md:right-[50%] md:top-0 w-[300px] h-[550px] max-w-md group-hover:scale-105 duration-300"
        style={{ zIndex: 1 }} // Ensure this image is on top
      />
      <img
        src={data[currentSlide]['img']}
        alt="second image"
        className="absolute md:right-[51%] md:top-5 w-[280px] h-[510px] max-w-md group-hover:scale-105 duration-300"
      />
    </div>

        <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mt-0 md:mb-0 md:w-1/2 md:text-left max-w-3xl items-center md:items-start">
          <h1 className="text-5xl text-center md:text-left bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
          Four Steps to Book BluSmart Rides
          </h1>
          <p className="text-lg font-semibold text-slate-500 text-center md:text-left">
          Schedule your rides in three easy steps through our app and enjoy noiseless cabs with punctual pickups.
          </p>
          <div className="flex flex-col space-y-6">
      {data.map((item, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-10 h-10 flex text-green-700 items-center bg-green-100 justify-center rounded-full border ${
              index === currentSlide ? 'border-green-500' : 'border-green-200'
            }`}
          >
            {index + 1}
          </div>
          <p className="ml-4">{item.detail}</p>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default StepToBook