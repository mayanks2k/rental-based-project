// components/MarqueeList.tsx
import React from "react";
import styles from "./MarqueeList.module.css";

const MarqueeList = () => {
  const items = [
    "Tata Motors",
    "Kia",
    "Eka",
    "Mahindra",
    "Morris Garages",
    "Pravaig",
    "BYD",
    "Olectra",
    "Gogoro",
    "Maruti Suzuki",
  ];

  return (
    <section aria-label="section" className="py-8 text-white px-2 sm:px-5 md:px-10 lg:px-32 bg-[#111111]">
      <div className="overflow-hidden relative whitespace-nowrap">
        <div className="animate-marquee flex">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center">
                <span
                  className={`inline-block text-5xl font-semibold tracking-tighter ${styles["text-gradient"]}`}
                >
                  {item}
                </span>
                <span className="inline-block mx-5">
                  <i className="inline-block w-20 h-0.5 bg-green-700"></i>
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeList;
