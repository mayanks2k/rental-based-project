import React from "react";
import { CounterContainer } from "./CounterContainer";

export function KpiSection() {
  const counters = [
    { value: "500+", text: "Happy Customer" },
    { value: "100%", text: "Customer Satisfaction" },
    { value: "100", text: "Fleet" },
    { value: "60", text: "Years Founder Experience" },
  ];

  return (
    <div
      className="relative px-2 sm:px-5 md:px-10 lg:px-32 py-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), 
        url('/assets/images/home/sections/kpi1.jpg')`,
      }}
    >
      <div className="relative z-10 flex flex-col lg:flex-row">
        <div className="grid lg:grid-cols-2 gap-5 xl:gap-10 py-5">
          <p className="lg:mb-4 text-4xl leading-normal font-bold text-white text-left">
            We provide holistic solutions for{" "}
            <span className="text-green-500">e-Mobility</span>,{" "}
            <span className="text-green-500">Fleet Management</span>, and{" "}
            <span className="text-green-500">Charging infrastructure</span>,
            promoting environmental sustainability for any occasion.
          </p>
          <p className="text-lg text-left mb-4 text-gray-300">
            car Fleet Limited is a pioneering green energy startup specializing
            in e-Mobility, Fleet Management, and Charging infrastructure. We
            offer a comprehensive range of solutions, from passenger cars to
            commercial vehicles, including mid-mile and last-mile EVs. Our
            mission is to tackle pressing challenges and provide value to our
            customers and communities by promoting environmental sustainability
            and reducing carbon footprints. We prioritize technological
            innovation in Electric Vehicles, EV Infrastructure, Energy
            Analytics, Battery Management, Solar power, Command & Control
            systems, E-Mobility, Fleet Management, and Artificial Intelligence
            for autonomous vehicles.
          </p>
        </div>
      </div>
      <CounterContainer counters={counters} />
    </div>
  );
}
