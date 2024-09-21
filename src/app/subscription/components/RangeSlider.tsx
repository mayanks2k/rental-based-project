"use client";
import React, { useState } from "react";

const RangeSlider: React.FC = () => {
  const [value, setValue] = useState<number>(50);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <input
      id="default-range"
      type="range"
      min="0"
      max="60"
      value={value}
      onChange={handleChange}
      className="w-full h-0.5 outline-none bg-gray-200 rounded-lg appearance-none cursor-pointer 
        dark:bg-gray-700"
      style={{
        background: `linear-gradient(to right, #0891b2 0%, #0891b2 ${
          value * (100 / 60)
        }%, #d1d5db ${value * (100 / 60)}%, #d1d5db 100%)`,
      }}
    />
  );
};

export default RangeSlider;
