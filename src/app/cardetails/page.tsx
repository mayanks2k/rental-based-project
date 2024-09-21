"use client";
import React, { useState } from "react";
import { BsFuelPumpFill } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";
import {
  carColors,
  selectKilometers,
  selectTenure,
  subscriptionType,
  variantData,
} from "./constants";

const Page = () => {
  const [selectedVariant, setSelectedVariant] = useState(variantData[0]);
  const [selectedColor, setSelectedColor] = useState(carColors[0].label);
  const [selectedSubscription, setSelectedSubscription] = useState(
    subscriptionType[0]
  );
  const [selectedTenure, setSelectedTenure] = useState(selectTenure[0]);
  const [selectedKilometers, setSelectedKilometers] = useState(
    selectKilometers[0]
  );

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({
      selectedVariant,
      selectedColor,
      selectedSubscription,
      selectedTenure,
      selectedKilometers,
    });
    // Add further form submission logic here (e.g., API call)
  };

  return (
    <div className="w-1/2 my-5 mx-auto">
      <form
        className="bg-white border border-gray-300 shadow-xl rounded-xl p-5"
        onSubmit={handleFormSubmit}
      >
        <p
          className="text-3xl font-semibold bg-gradient-to-r from-green-500 to-blue-700 
        text-transparent bg-clip-text"
        >
          Mahindra XUV 3XO
        </p>
        <div className="flex items-center gap-5">
          {["Petrol", "Manual"].map((item, index) => (
            <button
              key={index}
              type="button"
              className="flex bg-white shadow-md space-x-2 my-4 items-center border border-gray-300 
              rounded-full px-3 py-1"
            >
              <BsFuelPumpFill color="#7ab" />
              <p>{item}</p>
            </button>
          ))}
        </div>
        {/* Select Variant */}
        <div className="my-5">
          <p className="font-medium mb-1">Select Variant</p>
          <select
            className="text-[15px] border border-gray-300 px-1 py-2 rounded outline-none w-full"
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
          >
            {variantData.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* Select Color */}
        <div className="my-5">
          <p className="font-medium mb-1">Select Color</p>
          <div className="flex items-center space-x-5">
            {carColors.map((item, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  value={item.label}
                  checked={selectedColor === item.label}
                  onChange={() => setSelectedColor(item.label)}
                />
                <div className="relative">
                  <div
                    className={`w-6 h-6 rounded-full ${
                      item.label === "white" ? "border border-slate-500" : ""
                    }`}
                    style={{ backgroundColor: item.color }}
                  ></div>
                  {selectedColor === item.label && (
                    <svg
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-5 h-5 pointer-events-none text-white "
                      fill={item.label === "white" ? "#000" : "#fff"}
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.293-11.707a1 1 0 00-1.414-1.414l-5 5a1 1 0 
                        01-1.414 0l-2-2a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5.5-5.5z"
                      />
                    </svg>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Select Subscription Type */}
        <div className="my-5">
          <p className="font-medium mb-1">Select Subscription Type</p>
          <select
            className="text-[15px] border border-gray-300 px-1 py-2 rounded outline-none w-full"
            value={selectedSubscription}
            onChange={(e) => setSelectedSubscription(e.target.value)}
          >
            {subscriptionType.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Select Tenure (Months) */}
          <div className="my-5">
            <p className="font-medium mb-1">Select Tenure (Months)</p>
            <select
              className="text-[15px] border border-gray-300 px-1 py-2 rounded outline-none w-full"
              value={selectedTenure}
              onChange={(e) => setSelectedTenure(e.target.value)}
            >
              {selectTenure.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {/* Select Kilometers */}
          <div className="my-5">
            <p className="font-medium mb-1">Select Kilometers</p>
            <select
              className="text-[15px] border border-gray-300 px-1 py-2 rounded outline-none w-full"
              value={selectedKilometers}
              onChange={(e) => setSelectedKilometers(e.target.value)}
            >
              {selectKilometers.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 my-5">
          <div>
            <div className="flex items-center space-x-3">
              <p>Lease</p>
              <FiInfo />
            </div>
            <p className="py-2">
              <span className="font-bold text-3xl">₹29,899</span>/month
            </p>
            <p>₹31,992/month</p>
          </div>
          <div>
            <div className="flex items-center space-x-3">
              <p>Buyback Value</p>
              <FiInfo />
            </div>
            <p className="py-2">
              As per the market rates at the end of tenure or closure of
              subscription
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-blue-400 px-3 py-2 rounded-3xl text-white"
        >
          Check Eligibility
        </button>
        <div className="flex items-center space-x-2 mt-5">
          <MdLocalPhone />
          <p>
            Still have queries?{" "}
            <span className="text-blue-500">Request callback</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Page;
