"use client";
import React, { useEffect, useState } from "react";

const images = [
  "/assets/images/ride-with-us/carousel1.jpg",
  "/assets/images/ride-with-us/carousel2.jpg",
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsZoomed(true); // Zoom in on the image
      setTimeout(() => {
        setIsZoomed(false); // Zoom out after 1 second
      }, 1000);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="md:h-[400px] h-full relative flex items-center justify-center bg-cover bg-center 
      rounded-xl overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), 
        url(${images[currentIndex]})`,
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-black transition-transform duration-1000 ${
          isZoomed && "scale-110"
        }`}
      ></div>
      <div className="relative z-10 p-2 md:p-10 text-slate-100 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-2xl text-green-600 md:text-3xl  font-semibold">
            Choose Your Comfort Level
          </p>
          <div className="my-3">
            <p className="text-xl font-medium">Classic Rentals</p>
            <p className="my-1">
              Clean and comfortable sedans ideal for everyday business needs.
            </p>
          </div>
        </div>
        <div>
          <p className="text-3xl text-green-600 md:text-3xl font-semibold">
            Affordable Rates
          </p>
          <p className="my-3">
            Packages starting from just 1 hour/10 kilometers and rentals
            starting at ₹269.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
