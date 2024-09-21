"use client";
import Image from "next/image";
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
    <div className="flex flex-col items-center justify-center md:h-[750px] xl:h-[400px]">
      <div className="overflow-hidden rounded-xl flex items-center justify-center w-full h-full">
        <Image
          src={images[currentIndex]}
          className={`w-full h-[400px] md:h-[110vh] cursor-pointer rounded  
            transform-gpu transition-transform duration-1000 ${
              isZoomed ? "scale-110" : ""
            } object-cover`}
            width={1920}
            height={1080}
          alt="carousel image"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
