import React from 'react'
import {
    FaLeaf,
    FaCar,
    FaMoneyCheck,
    FaChartLine,
    FaClipboardList,
    FaCheckCircle,
  } from "react-icons/fa";
  
const Section2 = () => {
  return (
    <section className="py-10 bg-gray-50">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">
        Why Choose Green Fleet?
      </h2>
      <div className="mt-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  <FaLeaf className="h-6 w-6 text-white" />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                Sustainable Investment
              </h3>
              <p className="mt-5 text-base text-gray-500">
                Align your financial goals with your passion for the
                environment by joining the Green Fleet program. It's a
                win-win for you and the planet!
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  <FaChartLine className="h-6 w-6 text-white" />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                Growing Returns
              </h3>
              <p className="mt-5 text-base text-gray-500">
                Enjoy potential for increasing earnings over time as the
                electric vehicle market expands.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  <FaCar className="h-6 w-6 text-white" />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                Eco-Friendly Impact
              </h3>
              <p className="mt-5 text-base text-gray-500">
                Reduce your carbon footprint by contributing to a fleet of
                zero-emission vehicles.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  <FaMoneyCheck className="h-6 w-6 text-white" />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                Tax Benefits
              </h3>
              <p className="mt-5 text-base text-gray-500">
                Explore potential tax advantages associated with electric
                vehicle ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section2
