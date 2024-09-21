"use client";
import React, { useState, useEffect, useCallback } from "react";
import { CiMedicalCase } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const data = [
  {
    label: "Flexible Rentals",
    content:
      "Create customized recurring packages suited to your company’s needs.",
  },
  {
    label: "Diverse Payment options",
    content: "Payment solution options catering to your specific needs.",
  },
  {
    label: "Preferential Slots",
    content: "Priority access to slot bookings only with car  for Business.",
  },
  {
    label: "Carbon Saving Certificate",
    content:
      "Boast your contribution towards nature with our carbon saving certificate.",
  },
  {
    label: "24x7 Support",
    content: "Assistance whenever you ask.",
  },
  {
    label: "International Booking",
    content: "We support international phone nos. for booking rides.",
  },
  {
    label: "Easy User Management",
    content: "Keep track of your employees’ onboarding.",
  },
  {
    label: "Guest booking",
    content: "Effortlessly book guest reservations.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItemsCount, setVisibleItemsCount] = useState(3);
  const totalItems = data.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  }, [totalItems]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  }, [totalItems]);

  useEffect(() => {
    const updateVisibleItemsCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItemsCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleItemsCount(2);
      } else {
        setVisibleItemsCount(1);
      }
    };

    updateVisibleItemsCount();
    window.addEventListener("resize", updateVisibleItemsCount);

    return () => {
      window.removeEventListener("resize", updateVisibleItemsCount);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [handleNext]);

  const visibleItems = data
    .slice(currentIndex, currentIndex + visibleItemsCount)
    .concat(
      data.slice(0, Math.max(0, currentIndex + visibleItemsCount - totalItems))
    );

  return (
    <div className="relative w-full flex justify-center items-center mt-10 p-10 md:p-0">
      <button
        onClick={handlePrev}
        className="absolute left-0 p-3 bg-green-400 text-white rounded-full shadow-md z-10"
      >
        <FaArrowLeft />
      </button>

      <div className="flex justify-center md:gap-5 overflow-hidden w-[30rem] md:w-[40rem] lg:w-[50rem]">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="carousel-item border border-slate-300 shadow-xl rounded-xl p-5 w-90 md:w-80
            transition-transform duration-500 transform "
          >
            <CiMedicalCase
              size={40}
              color="#fff"
              className="rounded-full bg-green-500 p-2"
            />
            <p className="text-[25px] font-semibold my-3">{item.label}</p>
            <p className="font-light">{item.content}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        className="absolute right-0 p-3 bg-green-400 text-white rounded-full shadow-md z-10"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
