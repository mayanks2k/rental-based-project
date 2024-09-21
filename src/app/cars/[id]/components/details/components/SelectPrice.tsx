"use client";
import React, { useEffect, useState } from "react";
import { VehicleDetailsType } from "../../../constants";
import { subscriptionType } from "../constants";

interface vehicleDetailProps {
  vehicleDetails: VehicleDetailsType;
  setSelectedPrice: any;
}

const SelectPrice: React.FC<vehicleDetailProps> = ({
  vehicleDetails,
  setSelectedPrice,
}) => {
  const [selectedTenure, setSelectedTenure] = useState<string>("84");
  const [selectedDistance, setSelectedDistance] = useState<string>("10000");
  const [selectedSubscription, setSelectedSubscription] = useState<string>(
    subscriptionType[0]
  );
  
  useEffect(() => {
    const selectedPrice = vehicleDetails.prices.find(
      (item) => Number(item.tenure_months) === Number(selectedTenure)
    );
    setSelectedPrice(selectedPrice?.price_per_month);
  }, []);

  const uniquePrices = vehicleDetails.prices.filter(
    (price, index, self) =>
      index === self.findIndex((t) => t?.km_per_year === price?.km_per_year)
  );

  const tenureHandler = (e: any) => {
    setSelectedTenure(e.target.value);
    const selectedPrice = vehicleDetails?.prices?.find(
      (item) => Number(item.tenure_months) === Number(e.target.value)
    );
    setSelectedPrice(selectedPrice?.price_per_month);
  };
  const distanceHandler = (e: any) => {
    setSelectedDistance(e.target.value);
    const selectedPrice = vehicleDetails?.prices?.find(
      (item) => Number(item.tenure_months) === Number(e.target.value)
    );
    setSelectedPrice(selectedPrice?.price_per_month);
  };

  return (
    <div>
      {/* Select Subscription Type */}
      <div className="py-3">
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
      {/* Select Tenure and Distance */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-5 py-3">
      {/* Select Tenure (Months) */}
      <div>
        <p className="font-medium mb-1">Select Tenure (Months)</p>
        <select
          className="text-[15px] border border-gray-300 px-1 py-2 rounded outline-none w-full"
          value={selectedTenure}
          onChange={tenureHandler}
        >
          {vehicleDetails?.prices?.map((item, index) => (
            <option key={index} value={item.tenure_months}>
              {item.tenure_months}
            </option>
          ))}
        </select>
      </div>
      {/* Select Distance (km) */}
      <div>
        <p className="font-medium mb-1">Select Distance (km/year)</p>
        <select
          className="text-[15px] border border-gray-300 px-1 py-2 rounded outline-none w-full"
          value={selectedDistance}
          onChange={distanceHandler}
        >
          {uniquePrices.map((item, index) => (
            <option key={index} value={item.km_per_year}>
              {item.km_per_year}
            </option>
          ))}
        </select>
      </div>
    </div>
    </div>
  );
};

export default SelectPrice;
