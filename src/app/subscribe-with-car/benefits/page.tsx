import { Header } from "@/components/Header";
import MainLayout from "@/layout/MainLayout";
import React from "react";
import { FaCar, FaUserTie, FaThumbsUp, FaUsersCog } from "react-icons/fa";
import { MdLocationOn, MdOutlineUpgrade } from "react-icons/md";
import { SiProcessingfoundation } from "react-icons/si";

type Feature = {
  title: string;
  summary: string;
  imgSrc?: string;
  icon?: React.ReactNode;
};

type FeatureGridProps = {
  features: Feature[];
};

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  const isOdd = features.length % 2 !== 0;

  return (
    <div className="grid rounded-lg shadow-sm md:mb-12 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
      {features.map((feature, index) => (
        <figure
          key={index}
          className={`flex flex-col rounded-lg items-center justify-center p-6 text-center 
            bg-gradient-to-r from-green-100 to-blue-100 border-b border-gray-200 ${
              index === features.length - 1 && isOdd
                ? "md:col-span-2"
                : "md:border-r"
            }`}
        >
          {feature.icon && (
            <div className="text-4xl text-gray-700 mb-4">{feature.icon}</div>
          )}
          <blockquote className="max-w-2xl mx-auto text-gray-600">
            <h3 className="text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="my-4">{feature.summary}</p>
          </blockquote>
        </figure>
      ))}
    </div>
  );
};

export const metadata = {
  title: "Subscription Benefits",
};
function Page() {
  const ownershipBenefits: Feature[] = [
    {
      title: "Truly Yours",
      summary: "Drive off in a brand-new car subcribed in your name.",
      icon: <FaUserTie />,
    },
    {
      title: "Variety of Choices",
      summary: "Wide selection of models.",
      icon: <FaCar />,
    },
    {
      title: "Simple Upgrades",
      summary: "Upgrade your car easily.",
      icon: <MdOutlineUpgrade />,
    },
    {
      title: "Legitimate Ownership",
      summary: "Comes with a white number plate this should be removed.",
      icon: <FaCar />,
    },
  ];

  const employerAdvantage: Feature[] = [
    {
      title: "Nationwide Coverage",
      summary: "Subscribe vehicles for your staff across major locations in India.",
      icon: <MdLocationOn />,
    },
    {
      title: "Streamlined Processes",
      summary:
        "Enjoy reduced administrative tasks while we handle all aspects of the car subscription and maintenance.",
      icon: <SiProcessingfoundation />,
    },
    {
      title: "No Asset Risk",
      summary: "Eliminate concerns about vehicle resale or market changes.",
      icon: <FaCar />,
    },
    {
      title: "Flexibility and Variety",
      summary:
        "Access a broad selection of cars and tailored services to align with your corporate vehicle policy.",
      icon: <FaCar />,
    },
    {
      title: "Employee Satisfaction",
      summary:
        "Enhance staff morale with an easy and cost-effective car subscription option.",
      icon: <FaUserTie />,
    },
    {
      title: "Dedicated Support",
      summary:
        "Benefit from a committed car relationship manager who ensures top-quality service throughout.",
      icon: <FaUsersCog />,
    },
  ];

  const employeeParks: Feature[] = [
    {
      title: "Choice of Any Car",
      summary:
        "Select from a diverse range of vehicles on our car multi-brand car subscription platform.",
      icon: <FaThumbsUp />,
    },
    {
      title: "Tax Benefits",
      summary: "Maximize tax savings by subscription through car.",
      icon: <FaThumbsUp />,
    },
    {
      title: "Premium Service",
      summary: "Receive dedicated support from a car relationship manager.",
      icon: <FaThumbsUp />,
    },
    {
      title: "Flexible Options",
      summary: "Enjoy a variety of flexible subscription-end choices.",
      icon: <FaThumbsUp />,
    },
    {
      title: "Digital Convenience",
      summary: "Easily manage your subscription via our specialized portal.",
      icon: <FaThumbsUp />,
    },
    {
      title: "Zero Initial Cost",
      summary: "Drive away in your dream car with no down payment required.",
      icon: <FaThumbsUp />,
    },
  ];

  return (
    <MainLayout>
      <div className="bg-slate-800 px-2 sm:px-5 md:px-10 lg:px-32">
        <Header />
      </div>
      <div className="px-2 sm:px-5 md:px-10 lg:px-32">
        <div className="py-10">
          <h1 className="text-2xl md:text-4xl text-center bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text font-bold">
            Individual Subscription Options
          </h1>
          <h2 className="text-xl md:text-2xl mt-8 mb-4 underline text-sky-500 text-center md:text-left">
            Ownership Benefits
          </h2>
          <FeatureGrid features={ownershipBenefits} />
        </div>
        <div className="py-10">
          <h1 className="text-2xl md:text-4xl text-center bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text font-bold">
            Business Subscription Benefits
          </h1>
          <h2 className="text-xl md:text-2xl mt-8 mb-4 underline text-sky-500 text-center md:text-left">
            Employer Advantages
          </h2>
          <FeatureGrid features={employerAdvantage} />
        </div>
        <div className="py-10">
          <h2 className="text-xl md:text-2xl mt-8 mb-4 underline text-sky-500 text-center md:text-left">
            Employee Perks
          </h2>
          <FeatureGrid features={employeeParks} />
        </div>
      </div>
    </MainLayout>
  );
}

export default Page;
