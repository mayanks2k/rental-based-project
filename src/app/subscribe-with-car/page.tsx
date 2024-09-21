import React from "react";
import Section1 from "./components/Section1";
import MainLayout from "@/layout/MainLayout";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Subscribe With car",
};
const page = () => {
  return (
    <MainLayout>
      <div className="px-2 sm:px-5 md:px-10 lg:px-32 bg-slate-800">
        <Header />
      </div>
      <Section1 />
    </MainLayout>
  );
};

export default page;
