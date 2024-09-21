import React from 'react'
import {
    FaLeaf,
    FaCar,
    FaMoneyCheck,
    FaChartLine,
    FaClipboardList,
    FaCheckCircle,
  } from "react-icons/fa";
  
const Section3 = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Become a Green Fleet Partner in 6 Easy Steps
          </h2>
          <p className="text-gray-900 my-2">
            Join the Green Fleet program with these simple steps
          </p>
          <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: FaClipboardList,
                title: "Choose Your Plan",
                description:
                  "Select the perfect plan and number of vehicles to match your investment goals.",
              },
              {
                icon: FaClipboardList,
                title: "Submit Documents",
                description:
                  "Upload your KYC information and key documents online.",
              },
              {
                icon: FaClipboardList,
                title: "Become a Partner",
                description:
                  "Electronically sign the lease agreement and terms.",
              },
              {
                icon: FaClipboardList,
                title: "Finalize Your Purchase",
                description:
                  "Complete the upfront payment directly with the dealership and place your order online.",
              },
              {
                icon: FaClipboardList,
                title: "Start Earning",
                description:
                  "Receive regular monthly lease payments directly into your account.",
              },
              {
                icon: FaClipboardList,
                title: "Track Your Investment",
                description:
                  "Monitor your assets and earnings conveniently through the car Fleet Green Fleet dashboard.",
              },
            ].map((step, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                        <step.icon className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Section3
