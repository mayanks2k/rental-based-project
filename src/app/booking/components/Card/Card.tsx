import React from "react";
import { data } from "../../../../components/Form/Stepper/constants";

export const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mb-10 relative py-10">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="relative text-center border border-slate-200 shadow-xl rounded-lg px-5 overflow-hidden"
          >
            <div className="bg-green-500 w-fit p-3 rounded mx-auto z-10 relative">
              {item.icon}
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
              <p className="text-green-500 font-bold text-[160px] opacity-25 leading-none z-0">
                {index + 1}
              </p>
            </div>
            <div className="py-5 z-10 relative">
              <p className="text-xl font-medium pt-3">{item.label}</p>
              <p className="my-3 w-11/12 mx-auto text-base leading-7 text-slate-600">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
