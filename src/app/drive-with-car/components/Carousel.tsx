"use client";
import React, { useState, useEffect, useCallback } from "react";
import { CiMedicalCase } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const data = [
  {
    label: "Medical Cover",
    content: "Get a medical insurance coverage from us.",
  },
  {
    label: "Weekly Pay",
    content:
      "Earn a stable amount every week with our Fixed Earning and Bonus Plan.",
  },
  {
    label: "Zero Ownership Cost",
    content: "Start driving without investing in a car.",
  },
  {
    label: "24x7 Help",
    content: "Reach us anytime from anywhere.",
  },
  {
    label: "Ease of Work",
    content: "Be your own boss. Flexible working hours to fit your schedule.",
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
    <div className="relative flex justify-center items-center">
      <button
        onClick={handlePrev}
        className="absolute left-1 p-3 bg-slate-100 text-rose-400 rounded-full shadow-md z-10 outline-none"
      >
        <FaArrowLeft />
      </button>

      <div className="flex justify-center gap-5 overflow-hidden w-[30rem] md:w-[40rem] lg:w-[100rem]">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="carousel-item border border-slate-300 shadow-xl rounded-xl p-5 w-80 
            transition-transform duration-500 transform"
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
        className="absolute right-1 p-3 bg-slate-100 text-rose-400 rounded-full shadow-md z-10 outline-none"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
