"use client";
import React from "react";
import { Footer } from "@/components/footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
