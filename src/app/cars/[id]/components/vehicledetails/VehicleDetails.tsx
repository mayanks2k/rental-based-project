"use client";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { VehicleDetailsType } from "../../constants";

const VehicleDetails = ({ VehicleDetails }: { VehicleDetails: VehicleDetailsType }) => {
  return (
    <div>
      <p className="font-semibold text-lg">Specifications</p>
      <div className="">
        <div className="grid grid-cols-2 space-y-3 items-center">
          <p>Power</p>
          <p className="font-semibold">{VehicleDetails.power}</p>
        </div>
        <hr />
        <div className="grid grid-cols-2 space-y-3 items-center">
          <p>Doors</p>
          <p className="font-semibold">{VehicleDetails.num_of_doors}</p>
        </div>
        <hr />
        <div className="grid grid-cols-2 space-y-3 items-center">
          <p>Seating Capacity</p>
          <p className="font-semibold">{VehicleDetails.seating_capacity}</p>
        </div>
        <hr />
        <div className="grid grid-cols-2 space-y-3 items-center">
          <p>Range</p>
          <p className="font-semibold">{VehicleDetails.range} km</p>
        </div>
        <hr />
        <div className="grid grid-cols-2 space-y-3 items-center">
          <p>Color</p>
          <p className="font-semibold">{VehicleDetails.color}</p>
        </div>
        <hr />
        <div className="grid grid-cols-2 space-y-3 items-center">
          <p>Ex-Showroom Price</p>
          <p className="font-semibold">₹{VehicleDetails.ex_showroom_price}</p>
        </div>
        <hr />
        <hr />
      </div>
      {Array.isArray(VehicleDetails.features.features) && (
        <>
          <p className="text-xl font-semibold mt-5 mb-2">Features</p>
          {VehicleDetails.features.features?.map((item, index) => {
            return (
              <div key={index} className="flex items-center space-x-3 my-1">
                <FaCheck color="#16a34a" />
                <p>{item}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default VehicleDetails;
