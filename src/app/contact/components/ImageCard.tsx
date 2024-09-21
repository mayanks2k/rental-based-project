"use client";
import React from "react";
import Image from "next/image";
import imageLoader from "@/app/utils/imageLoader";

const cityImages = ["delhi", "bangalore", "hyderabad", "mumbai", "goa"];

const ImageCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {cityImages.map((item, index) => {
        return (
          <div
            key={index}
            className="h-[300px] w-full overflow-hidden relative flex flex-col md:flex-row"
          >
            <Image
              className="transition-transform duration-500 ease-in-out hover:scale-110 custom-image"
              loader={imageLoader}
              src={`assets/images/contact/${item}.jpg`} // https://storage.googleapis.com/car-rental-webapp/images/city/bangalore.jpg
              width={500}
              height={300}
              // layout="fill"
              // objectFit="cover"
              alt={item}
            />

            <p
              className="absolute text-xl font-serif
                bottom-10 left-1/2 -translate-x-1/2
                text-white font-bold capitalize"
            >
              {item}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ImageCard;
