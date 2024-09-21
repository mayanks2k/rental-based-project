"use client";
import { useEffect, useState } from "react";
import { FaFileContract } from "react-icons/fa";
import { MdOutlineSubtitles } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import termsConditions from "./termsconditions.json";
import MainLayout from "@/layout/MainLayout";
import { Header } from "@/components/Header";
import Loader from "@/components/Loader/Loader";

interface TermsConditionsContent {
  [key: string]: string | TermsConditionsContent;
}

interface TermsConditionsData {
  car_TERMS_AND_CONDITIONS: TermsConditionsContent;
}

const termsData: TermsConditionsData = termsConditions;

const TermsConditions = () => {
  const [terms, setTerms] = useState<TermsConditionsContent | null>(null);

  useEffect(() => {
    setTerms(termsData.car_TERMS_AND_CONDITIONS);
  }, []);

  if (!terms) {
    return <Loader show={true} />;
  }
  const isURL = (text: string) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)" + // must start with http:// or https://
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain names
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // IP addresses
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i" // fragment locator
    );
    return urlPattern.test(text);
  };

  const renderContent = (content: string | TermsConditionsContent) => {
    if (typeof content === "string") {
      // Check for URLs within the string content
      const words = content.split(/\s/);
      const elements = words.map((word, index) => {
        if (isURL(word)) {
          return (
            <a
              key={index}
              href={word}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {word}
            </a>
          );
        } else {
          return <span key={index}>{word} </span>;
        }
      });
      return <p className="text-gray-700">{elements}</p>;
    } else {
      return Object.entries(content).map(([key, value]) => (
        <div key={key} className="ml-4 mt-2">
          {key.replace(/_/g, " ") !== "content" ? (
            <h3 className="text-lg font-medium flex items-center text-emerald-600">
              <MdOutlineSubtitles className="mr-2 text-green-500" />
              {key.replace(/_/g, " ")}
            </h3>
          ) : null}
          {renderContent(value)}
        </div>
      ));
    }
  };

  return (
    <MainLayout>
      <div className="px-2 sm:px-5 md:px-10 lg:px-32 bg-slate-800">
        <Header />
      </div>
      <div className="bg-gray-100 min-h-screen">
        <div className="px-2 sm:px-5 md:px-10 lg:px-32 py-10 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 flex items-center text-green-700">
            <FaFileContract className="mr-3" /> Terms and Conditions
          </h1>
          {Object.entries(terms).map(([section, content]) => (
            <div key={section} className="mb-6">
              <h2 className="text-2xl text-green-600 font-semibold mb-3 border-b pb-2">
                {section.replace(/_/g, " ")}
              </h2>
              {renderContent(content)}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsConditions;
