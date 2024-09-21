"use client";
import React, { useState } from 'react'
import { carColors } from '../constants';

const SelectColor = () => {
    const [selectedColor, setSelectedColor] = useState<string>(
        carColors[0].label
      );
  return (
    <div className="py-3">
    <p className="font-medium mb-1">Select Color</p>
    <div className="flex flex-wrap items-center">
      {carColors.map((item, index) => (
        <label key={index} className="flex items-center my-2 me-5 ms-0">
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
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-white"
                fill={item.label === "white" ? "#000" : "#fff"}
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm4.293-11.707a1 1 0 00-1.414-1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5.5-5.5z"
                />
              </svg>
            )}
          </div>
        </label>
      ))}
    </div>
  </div>
  )
}

export default SelectColor