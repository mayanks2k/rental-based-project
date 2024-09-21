import React from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import MainLayout from "@/layout/MainLayout";
import { Header } from "@/components/Header";

export const metadata = {
  title: "car Business",
};

const page = () => {
  return (
    <MainLayout>
      <div
        className="px-2 sm:px-5 md:px-10 lg:px-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
          url(/assets/images/car-business/carbusinessbg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <Section1 />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </MainLayout>
  );
};

export default page;
