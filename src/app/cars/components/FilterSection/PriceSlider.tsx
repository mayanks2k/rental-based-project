"use client";
import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

const PriceSlider = () => {
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);
  const handleInput = (e: any) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };
  return (
    <div className="border border-slate-300 shadow-lg py-5 px-8 rounded-lg my-7 first:mt-0 last:mb-0">
      <p className="text-lg font-bold">Price</p>
      <div className="flex justify-between my-5">
        <p>Min: {minValue}</p>
        <p>Max: {maxValue}</p>
      </div>
      <MultiRangeSlider
        min={15000}
        max={100000}
        step={5}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => handleInput(e)}
        ruler={false}
        label={false}
        subSteps={false}
        style={{ border: "none", boxShadow: "none", padding: "0 0 10px" }}
      />
    </div>
  );
};

export default PriceSlider;
