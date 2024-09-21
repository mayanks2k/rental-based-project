"use client";
import React from "react";
import {
  FaCar,
  FaCertificate,
  FaCarSide,
  FaTachometerAlt,
  FaCogs,
  FaGlobe,
  FaHandsHelping,
  FaMoneyBill,
  FaStar,
  FaDigitalTachograph,
  FaTools,
} from "react-icons/fa";
import CarSubscriptionCard from "./CarSubscriptionCard";
function CarSubscription() {
  const CardItem = [
    {
      title: "Individual Subscription Options",
      subLine: "Ownership Benefits",
      features: [
        { icon: <FaCar />, title: "Truly Yours" },
        { icon: <FaCertificate />, title: "Variety of Choices" },
        { icon: <FaCarSide />, title: "Simple Upgrades" },
        { icon: <FaTachometerAlt />, title: "Legitimate Ownership" },
      ],
    },
    {
      title: "Business Subscription Benefits",
      subLine: "Employer Advantages",
      features: [
        { icon: <FaGlobe />, title: "Nationwide Coverage" },
        { icon: <FaCertificate />, title: "Streamlined Processes" },
        { icon: <FaTools />, title: "No Asset Risk" },
        { icon: <FaTachometerAlt />, title: "Flexibility and Variety" },
        { icon: <FaHandsHelping />, title: "Employee Satisfaction" },
        { icon: <FaCogs />, title: "Dedicated Support" },
      ],
    },
    {
      title: "Employee Perks",
      subLine: "Additional Benefits",
      features: [
        { icon: <FaCar />, title: "Choice of Any Car" },
        { icon: <FaMoneyBill />, title: "Tax Benefits" },
        { icon: <FaStar />, title: "Premium Service" },
        { icon: <FaTachometerAlt />, title: "Flexible Options" },
        { icon: <FaDigitalTachograph />, title: "Digital Convenience" },
        { icon: <FaMoneyBill />, title: "Zero Initial Cost" },
      ],
    },
  ];

  return (
    <div className="py-10">
      <div className=" container mx-auto flex flex-wrap flex-col md:flex-row">
        {CardItem.map((item) => {
          return (
            <CarSubscriptionCard
              title={item.title}
              features={item.features}
              subline={item.subLine}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-center px-6 py-2 rounded-full text-xl">
          View All Benefits
        </button>
      </div>
    </div>
  );
}

export default CarSubscription;
