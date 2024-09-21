import Image from "next/image";
import React from "react";
import { BsFillTagsFill } from "react-icons/bs";
import { FaMapPin } from "react-icons/fa6";
import { LuCheckCircle } from "react-icons/lu";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const OurFeatures = () => {
  return (
    <div className="px-2 sm:px-5 md:px-10 lg:px-32">
      <div className="text-center mt-16">
        <p className="text-green-600 font-bold bg-slate-300 rounded px-5 py-1.5 w-fit mx-auto">
          Why Choose Us
        </p>
        <p className="text-4xl font-bold my-5">Our Features</p>
        <p className="lg:w-1/2 mx-auto">
          Embark on a journey of convenience, safety, and tailored experiences,
          unlocking memorable adventures and seamless mobility solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:space-x-10 my-14">
        <div className="col-span-1 space-y-8">
          <div className="flex items-start space-x-4 opacity-0 animate-slide-left-delay-1">
            <div className="bg-green-600 flex items-center justify-center p-2 rounded">
              <RiMoneyRupeeCircleFill size={30} color="#fff" className="" />
            </div>
            <div>
              <p className="font-semibold">No Initial Payment Required</p>
              <p className="font-light w-full lg:w-10/11">
                Instead of making a hefty down payment when purchasing a car
                traditionally, which can deplete your savings and burden you
                with EMIs, we require zero down payment from you.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 opacity-0 animate-slide-left-delay-2">
            <div className="bg-green-600 flex items-center justify-center p-2 rounded">
              <LuCheckCircle size={30} color="#fff" className="" />
            </div>
            <div>
              <p className="font-semibold">Covered Insurance & Maintenance</p>
              <p className="font-light w-full lg:w-10/11">
                All the expenses associated with owning a car, such as
                servicing, maintenance, insurance, and compliance, are included
                in a single monthly fee. A small security deposit is all that's
                needed when you subscribe.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 mx-auto opacity-0 my-auto animate-slide-up">
          <Image
            src="/assets/images/XUV 400.png"
            width={1200}
            height={1000}
            alt="Car"
          />
        </div>

        <div className="col-span-1 space-y-8">
          <div className="flex items-start space-x-4 opacity-0 animate-slide-right-delay-1">
            <div>
              <p className="font-semibold text-right">
                Flexible Terms & Upgrade Options
              </p>
              <p className="font-light w-full lg:w-10/11 text-right">
                Enjoy flexible tenure options from 24 to 48 months, allowing you
                to upgrade your car model or extend your lease as needed. With
                car, adapt to life's changes with ease.
              </p>
            </div>
            <div className="bg-green-600 flex items-center justify-center p-2 rounded">
              <BsFillTagsFill size={30} color="#fff" className="" />
            </div>
          </div>
          <div className="flex items-start space-x-4 opacity-0 animate-slide-right-delay-2">
            <div>
              <p className="font-semibold text-right">
                Round-the-Clock Roadside Assistance
              </p>
              <p className="font-light w-full lg:w-10/11 text-right">
                In case of emergencies, simply reach out to us for assistance.
                We have an extensive network of service centers and partnerships
                to ensure that your car is towed and repaired promptly, no
                matter where you are.
              </p>
            </div>
            <div className="bg-green-600 flex items-center justify-center p-2 rounded">
              <FaMapPin size={30} color="#fff" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
