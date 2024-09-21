'use client'
import React, { useEffect, useState } from 'react';


const images = [
  'https://images.unsplash.com/photo-1717467192309-75c85e12085c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1714138665028-95e35021d928?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    <div className=" flex flex-col items-center h-[400px]">
      <div className=" overflow-hidden rounded-xl">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className={` w-full h-[400px] md:h-[110vh]  cursor-pointer rounded  transform-gpu transition-transform duration-1000 ${isZoomed ? 'scale-110' : ''}`}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;