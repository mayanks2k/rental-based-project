import React from "react";
import { data } from "./constants";

const Stepper = () => {
  return (
    <ul className="relative flex flex-col md:flex-row ">
      {data.map((item, index) => {
        return (
          <li
            key={index}
            className="md:shrink md:basis-0 flex-1 group flex gap-x-4 lg:gap-x-2 md:block"
          >
            <div
              className="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex 
                md:flex-wrap md:flex-row text-xs align-middle"
            >
              <span
                className="bg-green-700 text-white size-9 text-lg rounded-sm flex justify-center 
                  items-center flex-shrink-0 font-medium "
              >
                {index + 1}
              </span>
              <div
                className="mt-2 w-px h-full md:mt-0 md:w-full md:h-px md:flex-1 bg-green-700 
                  group-last:hidden"
              ></div>
            </div>
            <div className="grow md:grow-0 md:mt-3 pb-5">
              <span className="block text-lg my-1 font-medium text-white pr-5">
                {item.label}
              </span>
              <p className="text-sm text-slate-200 pr-5">{item.content}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Stepper;
