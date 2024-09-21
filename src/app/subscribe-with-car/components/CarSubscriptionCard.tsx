'use client'
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="text-4xl text-green-500 ">{icon}</div>
      <div className="text-lg">{title}</div>
    </div>
  );
};

interface CardProps {
    subline?:string;
  title: string;
  features: { icon: React.ReactNode; title: string }[];
}

const CarSubscriptionCard: React.FC<CardProps> = ({ title, features,subline }) => {
  return (
    <div className="text-center rounded-lg shadow-md border w-full md:w-[48%] m-6 mx-auto">
        <div className="my-8">
      <h2 className="text-2xl  font-semibold text-green-700">{title}</h2>
        <p className="text-blue-500">{subline}</p>

        </div>
      <div className="flex flex-wrap justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 flex justify-center mb-8"
          >
            <FeatureCard icon={feature.icon} title={feature.title} />
          </div>
        ))}
        {features.length % 3 !== 0 && (
          <div
            className={`w-full md:w-${((3 - (features.length % 3)) * 1) / 3} flex justify-center mb-8`}
          />
        )}
      </div>
    </div>
  );
};

export default CarSubscriptionCard;