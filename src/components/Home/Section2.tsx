import { SwatchIcon } from "@heroicons/react/24/outline";
import {  MdCardGiftcard, MdSettings } from "react-icons/md";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="p-6 space-y-9 max-w-3xl flex flex-col items-center md:items-start">
      <h1 className="text-5xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
        Drive With car
      </h1>
      <p className="text-lg font-semibold text-slate-500 text-center md:text-left">
        Join our thriving community and experience the freedom of being our
        driver-partner. Unmatched Benefits
      </p>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center">
          <div className=" p-2 rounded-full bg-green-100">
            <MdCardGiftcard className="w-6 h-6 text-green-700" />
          </div>
          <p className="ml-4">
            Receive monthly payouts with rewarding bonuses.
          </p>
        </div>
        <div className="flex items-center">
          <div className=" p-2 rounded-full bg-green-100">
            <MdSettings className="w-6 h-6 text-green-700" />
          </div>
          <p className="ml-4">
            Craft your own work hours for ultimate flexibility.
          </p>
        </div>
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-green-100">
            <SwatchIcon className="w-6 text-green-700" />
          </div>
          <p className="ml-4">No car ownership costs. We've got you covered.</p>
        </div>
      </div>
      <p>Become a car driver-partner today.</p>
      <button
        className="border p-3 px-10 rounded-full shadow-lg text-white bg-green-700
        duration-200 hover:opacity-90"
      >
        Apply Now
      </button>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 sm:gap-10 px-2 sm:px-5 md:px-10 lg:px-32 sm:my-10">
      <img
        src={`/assets/images/home/sections/driveWithcar2.png`}
        alt="director"
      />
      <Card />
    </div>
  );
};

export default Section2;
