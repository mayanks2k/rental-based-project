import Image from "next/image";
import React from "react";
import { MdElectricCar } from "react-icons/md";
import Carousel from "./Carousel";

const Section2 = () => {
  return (
    <div className="px-2 sm:px-5 md:px-10 lg:px-32 py-10">
      <div className="flex flex-col justify-center items-center">
        <MdElectricCar
          color="#fff"
          className="h-24 w-24 bg-green-600 rounded-3xl p-5"
        />
        <h1
          className="text-4xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent
            bg-clip-text pt-10 pb-5 text-center"
        >
          car for Business
        </h1>
        <p className="text-lg text-slate-500 w-full xl:w-10/12 text-center">
          Take your business travel to the next level with car . Simplify
          expense management with clear pricing and streamlined booking for your
          team. Choose eco-friendly electric vehicles for a sustainable image,
          and enjoy hassle-free payments and transparent invoicing. car
          elevates your business travel experience – all in one place.
        </p>
        <Carousel />
      </div>
    </div>
  );
};

export default Section2;
