import React from "react";
import { data } from "./constants";
import { FaQuoteRight } from "react-icons/fa6";

const Review = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 px-2 sm:px-5 md:px-10 lg:px-32">
      {data.map((item, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden h-[600px] bg-cover bg-center 
          flex flex-col justify-between"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${item.img})`,
          }}
        >
          <div className="p-3 md:px-8 md:py-5">
            <div className="flex justify-end pb-2">
              <FaQuoteRight size={50} className="text-green-500" />
            </div>
            <p className="text-2xl font-bold text-white">{item.label}</p>
            <p className="text-slate-300 py-4">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
