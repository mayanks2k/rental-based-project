import React from "react";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import Section2 from "./components/Section2";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import MainLayout from "@/layout/MainLayout";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Ride With Us",
};
const page = () => {
  return (
    <MainLayout>
      <div className="px-2 sm:px-5 md:px-10 lg:px-32 bg-slate-800">
        <Header />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
    </MainLayout>
  );
};

export default page;
