"use client"
import React, { useState } from "react";
import { FaIdCard, FaIdBadge, FaCarAlt } from "react-icons/fa";
import PanCardForm from "./components/PanCardForm";
import AadhaarCardForm from "./components/AadhaarCardForm";
import DrivingLicenseForm from "./components/DrivingLicenseForm";
import { Header } from "@/components/Header";
import MainLayout from "@/layout/MainLayout";

const tabs = [
  { label: "PAN Card", icon: FaIdCard, component: PanCardForm },
  { label: "Aadhaar Card", icon: FaIdBadge, component: AadhaarCardForm },
  { label: "Driving License", icon: FaCarAlt, component: DrivingLicenseForm },
];

interface FileStates {
  panFile: File | null;
  aadhaarFile: File | null;
  dlFile: File | null;
}

const KYCTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [fileStates, setFileStates] = useState<FileStates>({
    panFile: null,
    aadhaarFile: null,
    dlFile: null,
  });

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleFileUpload = (fileType: string, file: File | null) => {
    setFileStates((prevState) => ({
      ...prevState,
      [fileType]: file,
    }));
  };

  return (
    <MainLayout>
      <div className="px-2 sm:px-5 md:px-10 lg:px-32 bg-slate-700">
        <Header />
      </div>
      <div className="max-w-3xl mx-auto mt-8">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
            {tabs.map((tab, index) => (
              <li key={index} className="me-2">
                <button
                  className={`inline-block py-4 px-6 border-b-2 rounded-t-lg ${
                    activeTab === index
                      ? "text-green-600 border-green-600"
                      : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  <tab.icon className="inline mr-2" /> {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded shadow">
          {tabs.map(
            (tab, index) =>
              activeTab === index && (
                <tab.component
                  key={index}
                  fileStates={fileStates}
                  handleFileUpload={handleFileUpload}
                />
              )
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default KYCTabs;
