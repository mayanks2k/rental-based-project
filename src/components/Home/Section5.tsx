import Image from "next/image";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";

const data = [
  "Subscribe an electric car from car for a guaranteed income.",
  "Enjoy tax benefits and earn over 15% return on your investment!",
  "Easy start just 5 cars and 6 simple steps.",
];
const Section5 = () => {
  return (
    <div className="px-2 sm:px-5 md:px-10 lg:px-32 py-5">
      <div className="">
        <div className="text-center">
          <div className="flex justify-center">
            <IoShieldCheckmarkSharp
              color="#fff"
              className="h-24 w-24 bg-green-600 rounded-3xl p-5"
            />
          </div>
          <h1
            className="text-4xl md:text-5xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent 
            bg-clip-text pt-10 pb-5 text-center"
          >
            Ride Secure With car Fleet
          </h1>
          <p className="w-full xl:w-8/12 mx-auto">
            Your safety is our responsibility. We ensure you a carefree ride
            with our trained and tested drivers along with 24x7 emergency
            support.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-16 py-10">
          {/* left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            <div>
              <div className="flex md:flex-col items-center md:items-start space-x-3 md:space-x-0">
                <FaUserAlt
                  color="#22c55e"
                  size={46}
                  className="rounded-full bg-slate-200 p-1.5"
                />
                <p className="text-2xl text-slate-900 font-semibold my-5">
                  Rider Safety
                </p>
              </div>
              <p className="text-lg font-medium">
                Peace of Mind for You and Your Loved Ones
              </p>
              <p className="text-slate-600">
                Share your trip details for real-time tracking and peace of
                mind.
              </p>
            </div>
            <Image
              src={`/assets/images/home/sections/ridesecure1.png`}
              width={300}
              height={450}
              alt="director"
              className="h-[400px] w-full transition-transform duration-500 
            ease-in-out md:hover:scale-105 rounded-md"
            />
          </div>
          {/* Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            <Image
              src={`/assets/images/home/sections/ridesecure2.png`}
              width={300}
              height={300}
              alt="director"
              className="h-[350px] w-full transition-transform duration-500 
            ease-in-out md:hover:scale-105 rounded-md"
            />
            <div>
              <div className="flex md:flex-col items-center md:items-start space-x-3 md:space-x-0">
                <MdOutlineSpeed
                  color="#22c55e"
                  size={46}
                  className="rounded-full bg-slate-200 p-1.5"
                />
                <p className="text-2xl text-slate-900 font-semibold my-5">
                  Driver Partner Safety
                </p>
              </div>
              <p className="text-lg font-medium">
                Promoting a Safe Ride Experience For All
              </p>
              <p className="text-slate-600">
                We prioritize safety with a strict no-tolerance policy for rash
                driving.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------ */}
      <div
        className="bg-gradient-to-r from-indigo-50 to-slate-100 grid grid-cols-1 
        xl:grid-cols-2 items-center gap-10 py-12"
      >
        <Image
          src={`/assets/images/home/sections/GreenerFuturewithcarv2.png`}
          width={450}
          height={700}
          alt="img"
          className="w-full rounded-lg"
        />
        <div>
          <h1
            className="text-4xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent 
              bg-clip-text"
          >
            Invest in a Greener Future with car
          </h1>
          <p className=" text-slate-800 my-5 text-xl">
            Become a partner in car’s mission to reduce pollution!
          </p>
          <div className="flex flex-col">
            {data.map((item, index) => {
              return (
                <div key={index} className="flex items-center space-x-3 my-3">
                  <FaIndianRupeeSign
                    color="#059669"
                    size={35}
                    className="rounded-full bg-gradient-to-r from-green-100 to-green-200 p-2"
                  />
                  <p className="text-slate-600">{item}</p>
                </div>
              );
            })}
          </div>
          <p className="pt-5 text-lg">
            Make a difference while earning. Join car today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
