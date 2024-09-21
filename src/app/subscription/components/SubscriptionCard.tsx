import Image from "next/image";
import React from "react";

const SubscriptionCard = () => {
  return (
    <div
      className="border border-slate-200 shadow-2xl flex flex-col justify-center
     px-5 rounded-xl bg-white h-full relative overflow-hidden py-5"
    >
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          className="transition-transform duration-500 ease-in-out hover:scale-110"
          src={`/assets/images/cars/car1.jpg`}
          layout="fill"
          objectFit="cover"
          alt="Car"
        />
      </div>
      <p className="text-lg text-blue-900 py-1">
        Maruti Suzuki Ertiga Lxi Petrol Active
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-2">
        <div className="col-span-1">
          <p className="font-light text-base">Subscription</p>
          <p className="font-medium">₹24,999</p>
        </div>
        <div className="col-span-2">
          <p className="font-light text-base">Buyback Value</p>
          <p className="text-blue-900">
            As per the market rates at the end of tenure or closure of
            subscription
          </p>
        </div>
      </div>
      <button
        className="bg-gradient-to-r text-slate-100 my-2 from-green-600 to-green-400 
      px-7 py-2 rounded-full w-full"
      >
        Subscription Now
      </button>
    </div>
  );
};

export default SubscriptionCard;
