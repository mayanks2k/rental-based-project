import React from "react";
import Card from "./Card";
import { cardItems } from "./constants";
import styles from "./CarRentalExperience.module.css"; // Import the CSS module

export function CarRentalExperience() {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-4 gap-10 px-2 sm:px-5 md:px-10 lg:px-32
        bg-cover bg-center py-14 min-h-[400px] justify-center text-white text-center 
        ${styles.bgPositionMobile} ${styles.bgPositionXl}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), 
          url('/assets/images/home/sections/embark.jpg')`,
        }}
    >
      <div className="col-span-1 text-start text-[35px] font-bold mb-5">
        Embark on a journey with car subscription
      </div>
      <div className="lg:col-span-3 grid grid-cols-1 xl:grid-cols-3 gap-10">
        {cardItems.map((item) => (
          <Card
            key={item.tagLine}
            tagLine={item.tagLine}
            paragraph={item.paragraph}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
