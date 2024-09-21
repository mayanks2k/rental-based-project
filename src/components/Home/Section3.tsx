import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HiCreditCard } from "react-icons/hi2";
import { IoTime } from "react-icons/io5";

const businessData = [
  {
    label: "Effortless & Reliable",
    content:
      "Seamless transition to subscription-based model ensuring reliable access without the complexities of ownership.",
    icon: <FaCheckCircle size={25} />,
  },
  {
    label: "Guaranteed On-Time Pickups",
    content:
      "Hasselfree on-time arrivals, enhancing your experience with assured vehicle availability.",
    icon: <IoTime size={25} />,
  },
  {
    label: "Flexible Payment and Hassle-Free Accounting",
    content:
      "Straightforward expense management, tailored to simplify and optimize costs.",
    icon: <HiCreditCard size={25} />,
  },
];

const Section3 = () => {
  return (
    <div
      className="text-white grid grid-cols-1 xl:grid-cols-8 py-10 md:py-16
      md:my-10 md:rounded-3xl px-2 sm:px-5 md:mx-10 lg:mx-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
        url(/assets/images/home/sections/2.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="col-span-3"></div>
      <div className="col-span-5">
        <p className="text-4xl font-bold">GROW WITH car</p>
        <div className="py-5">
          <p>Efficient and Sustainable Mobility Solutions</p>
          <p>
            Customized to Enhance Your Business—Making Green Practices
            Achievable
          </p>
        </div>
        <div className="bg-blue-500 p-5 rounded-2xl py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-10">
            {businessData.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="border border-white p-2 w-fit rounded-full">
                    {item.icon}
                  </div>
                  <p className="text-lg font-medium mt-2 mb-1 ">{item.label}</p>
                  <p className="text-sm font-light">{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="bg-gradient-to-r from-green-400 to-green-600 text-lg font-medium
        text-white px-8 py-3 mt-8 rounded-full"
        >
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default Section3;
