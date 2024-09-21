import Image from "next/image";
import React from "react";

const data = [
  "Download and log in.",
  "See ride requests and navigate to pick-up points.",
  "Complete trips by dropping off customers.",
  "Track your earnings and receive weekly payments.",
];
const Section4 = () => {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10 bg-gradient-to-r from-blue-100 to-indigo-50 
      px-2 md:px-5 py-10 lg:px-32"
    >
      {/* left section */}
      <div className="">
        <h1
          className="text-4xl text-center md:text-left bg-gradient-to-r from-green-500 to-blue-700 
        text-transparent bg-clip-text"
        >
          Your All-in-One App
        </h1>
        <p className="text-lg font-medium text-slate-700 text-center md:text-left my-7">
          The car app simplifies everything - from logging in and accepting
          rides to resolving issues and tracking payments. It's designed for a
          smooth and hassle-free experience.
        </p>
        <div className="flex flex-col space-y-6">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className="flex text-green-700 items-center bg-green-100 justify-center 
                  rounded-full border border-green-500 w-8 h-8"
                >
                  {index + 1}
                </div>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* right section */}
      <Image
        width={500}
        height={400}
        src={"/assets/images/image-devices.png"}
        alt="pc..."
        className="w-full"
      />
    </section>
  );
};

export default Section4;
