import React from "react";

interface ItemInterface {
  icon: React.ReactNode; // Adjust the icon type to accept JSX elements
  label: string;
}

const TenureCard: React.FC<{ item: ItemInterface }> = ({ item }) => {
  return (
    <div
      className="border border-slate-200 shadow-2xl flex flex-col justify-center items-center
     px-5 h-[300px] rounded-xl bg-white"
    >
      <button className="shadow bg-white border border-slate-100 p-7 rounded-full">
        {item.icon}
      </button>
      <p className="text-center text-lg text-blue-900 font-medium py-2">
        {item.label}
      </p>
    </div>
  );
};

export default TenureCard;
