import React from "react";
import { FaCar } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import RangeSlider from "./components/RangeSlider";
import SubscriptionLoanTable from "./components/SubscriptionLoanTable";
import SubscriptionCard from "./components/SubscriptionCard";
import TenureCard from "./components/TenureCard";
import PageLayout from "@/layout/PageLayout";

interface SubscriptionCard {
  id: number;
  icon: React.ReactElement;
  label: string;
}

export const metadata = {
  title: "Subscription Vs Loan",
};
const subscriptionCardData: SubscriptionCard[] = [
  {
    id: 1,
    icon: <FaCar size={30} color="#0d9488" />,
    label: "Buy the car at buyback value",
  },
  {
    id: 2,
    icon: <FaCar size={30} color="#0d9488" />,
    label: "Subscribe to a new car at the end of tenure",
  },
  {
    id: 3,
    icon: <FaCar size={30} color="#0d9488" />,
    label: "Close the subscription at the end of tenure",
  },
];

const availableCities = [
  "Delhi",
  "Goa",
  "Mumbai",
]

const page = () => {
  return (
    <PageLayout
      title="Car Subscription vs Car Loan"
      imageURL="url('/assets/images/cars/carsbg.jpg"
    >
      <div className="container my-10 w-10/12 mx-auto">
        <h1 className="my-10 text-center text-green-700">
          Calculate The Difference Between Car Subscription And Car Loan
        </h1>
        {/* First Section Code  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border border-slate-200 shadow-xl p-5 rounded-md md:col-span-1">
            <div className="flex pb-2.5">
              <button className="bg-indigo-50 px-5 py-2 text-sm rounded-lg">
                Flexi Advantage
              </button>
              <button className="bg-green-500 -translate-x-2 text-sm text-white px-5 py-2 rounded-lg">
                Assured Residual Value
              </button>
              <button className="ms-3">
                <IoInformationCircleOutline size={25} />
              </button>
            </div>
            {/* Brand and Modle */}
            <div className="py-2.5">
              <p className="mb-2.5 font-semibold text-base">Brand And Model</p>
              <select
                className="border border-slate-800 text-gray-900 text-sm rounded focus:outline-none
                   focus:border-blue-700 focus:ring-1 block w-full px-2 py-2.5"
                required
              >
                <option value="">Select your pickup location</option>
                {availableCities.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {/* Varient */}
            <div className="py-2.5">
              <p className="mb-2.5 font-semibold text-base">Brand And Model</p>
              <select
                className="border border-slate-800 text-gray-900 text-sm rounded focus:outline-none
                   focus:border-blue-700 focus:ring-1 block w-full px-2 py-2.5"
                required
              >
                <option value="">Select your pickup location</option>
                {availableCities.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {/* Tenure */}
            <div className="py-2.5">
              <div className="flex justify-between">
                <p>Tenure</p>
                <p>months</p>
              </div>
              <div className="flex flex-wrap justify-between">
                {[36, 48, 60, 84].map((item, index) => {
                  return (
                    <button
                      key={index}
                      className="border border-slate-400 px-5 py-2 rounded"
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Kilometers */}
            <div className="my-2.5">
              <div className="flex justify-between">
                <p>Kilometers</p>
                <p>km/year</p>
              </div>
              <div className="flex flex-wrap justify-between">
                {[10000, 15000, 20000].map((item, index) => {
                  return (
                    <button
                      key={index}
                      className="border border-slate-400 px-5 py-2 rounded"
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10 
        bg-gradient-to-b from-indigo-50 to-[#f7fafc] p-5 rounded"
          >
            {/* Card 1 */}
            <div className="shadow-lg bg-slate-50 rounded-3xl h-fit">
              <div className="shadow-sm bg-white py-7 px-5 rounded-3xl">
                <div className="flex space-x-7 items-center">
                  <div className="border border-slate-100 shadow-sm px-3 py-2 rounded">
                    <FaCar size={30} color="#059669" />
                  </div>
                  <p className="font-semibold text-xl text-blue-900">
                    Subscription
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 my-5">
                  <div>
                    <p className="text-slate-500 text-sm my-1">Total Outflow</p>
                    <p className="text-2xl font-medium text-blue-900 pt-1 mb-3">
                      ₹11,99,952
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm my-1">
                      Monthly Outflow
                    </p>
                    <p className="text-2xl font-medium text-blue-900 pt-1 mb-3">
                      ₹24,999
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 items-center justify-center py-5">
                <button className="bg-gradient-to-r from-green-600 to-green-400 px-7 py-2 rounded-full">
                  Subscription Now
                </button>
                <button className="border border-green-500 rounded-full p-1">
                  <RiCustomerService2Line size={25} color="#059669" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="shadow-lg bg-slate-50 rounded-3xl h-fit">
              <div className="shadow-sm bg-white py-7 px-5 rounded-3xl">
                <div className="flex space-x-7 items-center">
                  <div className="border border-slate-100 shadow-sm px-3 py-2 rounded">
                    <FaCar size={30} color="#059669" />
                  </div>
                  <p className="font-semibold text-xl text-blue-900">Loan</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 my-5">
                  <div>
                    <p className="text-slate-500 text-sm my-1">Total Outflow</p>
                    <p className="text-2xl font-medium text-blue-900 pt-1 mb-3">
                      ₹14,51,088
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm my-1">
                      Monthly Outflow
                    </p>
                    <p className="text-2xl font-medium text-blue-900 pt-1 mb-3">
                      ₹30,231
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 items-center justify-center p-5">
                <p className="bg-green-200 py-1 px-3 rounded">17%</p>
                <p className="text-sm">
                  Loan is costlier than subscription in monthly outflow
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Second Section Code  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          <div className="border border-slate-200 shadow-xl p-5 rounded-md md:col-span-1">
            <p>Loan Amount</p>

            <div className="flex items-center justify-between my-5">
              <div className="flex">
                <button className="bg-slate-200 px-4 py-0.5 rounded">₹</button>
                <button className="bg-green-500 -translate-x-1 px-4 py-0.5 rounded">
                  %
                </button>
              </div>
              <div className="flex space-x-2">
                <div className="flex items-center border border-slate-400 p-1 rounded">
                  <input
                    type="number"
                    defaultValue={100}
                    className="w-[50px] outline-none"
                  />
                  <p>%</p>
                </div>
                <div className="flex items-center border border-slate-400 p-1 rounded">
                  <p>₹</p>
                  <input
                    type="number"
                    defaultValue={1223453}
                    className="ms-1 w-[100px] outline-none"
                  />
                </div>
              </div>
            </div>
            {/* range slider */}
            <RangeSlider />
            <div className="flex justify-between my-5">
              <div className="flex items-center space-x-1">
                <p>₹24,999</p>
                <IoInformationCircleOutline size={18} />
              </div>
              <div className="flex items-center space-x-1">
                <p>₹24,999</p>
                <IoInformationCircleOutline size={18} />
              </div>
            </div>
            <div className="flex items-center justify-between my-5">
              <p>Loan Rate Of Interest </p>
              <div className="flex items-center border border-slate-400 p-1 rounded">
                <input
                  type="number"
                  defaultValue={100}
                  className="w-[50px] outline-none"
                />
                <p>%</p>
              </div>
            </div>
            {/* range slider */}
            <RangeSlider />
          </div>

          <div className="md:col-span-2 bg-gradient-to-b from-indigo-50 to-[#f7fafc] p-5 rounded w-full">
            <SubscriptionLoanTable />
          </div>
        </div>
        {/* Second Section Code  */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-b from-indigo-50 to-[#f7fafc] 
        mt-8 py-10 px-5 gap-10 rounded-xl"
        >
          <div className="col-span-2">
            <h1 className="text-green-700">At the end of your tenure</h1>
            <p className="text-slate-600 my-7">
              You can choose one of the benefits from the below at the end of
              your tenure and get the real deal and discounts
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 space-x-5 my-5">
              {subscriptionCardData.map((item, index) => {
                return <TenureCard item={item} key={item.id} />;
              })}
            </div>
          </div>
          <div className="col-span-1">
            <SubscriptionCard />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;
