"use client"
import { Header } from "@/components/Header";
import React from "react";
import { Card } from "./components/Card/Card";
import { Footer } from "@/components/footer";
import FindVehicle from "@/components/Form/FindVehicle/FindVehicle";

const page = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/images/1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Add this line
        height: "300px",
      }}
    >
      <div className="container mx-auto px-10">
        <Header />
        <p className="text-center text-5xl text-white font-bold mt-8 mb-2">
          Booking
        </p>
        <div className="px-2 lg:w-11/12 mx-auto">
          <FindVehicle />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
