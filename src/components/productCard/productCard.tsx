// Card.tsx
import Image from "next/image";
import React from "react";

interface CardProps {
    title: string;
    subtitle?: string;
    imageUrl?: string;
    stats: { key: string; value: string }[];
    actions?: { label: string; href?: string }[];
  }
  
 export const Card: React.FC<CardProps> = ({ title, subtitle, imageUrl, stats, actions }) => {
    return (
      <div className="flex flex-col md:flex-row justify-between bg-white rounded-lg shadow-md overflow-hidden md:px-12 py-4 my-4">
        <div className="flex flex-col md:flex-row">
          {imageUrl && (
            <Image src={imageUrl} alt={title} width={256} height={256} className="align-middle object-cover rounded m-4" />
          )}
          <div className="p-4">
            <h5 className="text-lg font-medium mb-2">{title}</h5>
            <ul className="grid grid-cols-2 gap-2 gap-x-8 sm:gap-x-12">
              {stats.map((stat) => (
                <li key={stat.key} className="flex items-center">
                  <span className="mr-2 text-sm text-gray-700 font-semibold">{stat.key}:</span>
                  <span className="text-sm">{stat.value}</span>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-gray-700">Monthly rate from</span>
          <span className="text-3xl font-bold">{subtitle}</span>
          {actions && (
            <div className="flex mt-4">
              {actions.map((action) => (
                <button
                  key={action.label}
                  className="bg-green-500 px-4 py-2 text-sm font-medium rounded-md shadow-sm mr-2 hover:bg-gray-100 focus:outline-none"
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  