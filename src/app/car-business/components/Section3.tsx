import React from "react";
import ImageCarousel from "./ImageCarousel";
import { IoCarSportSharp } from "react-icons/io5";

const Section3: React.FC = () => {
  return (
    <div className="px-2 sm:px-5 md:px-10 lg:px-32 py-5">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 pb-5">
        <div className="flex items-center space-x-3">
          <IoCarSportSharp
            size={50}
            color="#fff"
            className="p-2 md:w-12 md:h-12 w-8 h-8 bg-green-500 rounded-full md:mb-0"
          />
          <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
            Rentals
          </h1>
        </div>
        <p className="border-l-4 border-blue-500 ps-2">
          Need a car for a quick errand or a full day trip? car Rentals provide
          both limited-time and all-day options perfect for senior management
          and key executives.
        </p>
      </div>
      <ImageCarousel />
    </div>
  );
};

export default Section3;
