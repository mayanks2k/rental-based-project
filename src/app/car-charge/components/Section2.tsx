import React from 'react'
import { FaPlug, FaDollarSign, FaWrench } from "react-icons/fa";

const Section2 = () => {
  return (
    <section className="py-10 bg-gray-50">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">Benefits</h2>
      <div className="mt-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  <FaPlug className="h-6 w-6 text-white" />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                Zero Installation Costs
              </h3>
              <p className="mt-5 text-base text-gray-500">
                We cover the installation expenses, so you can start earning
                right away.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  <FaWrench className="h-6 w-6 text-white" />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                Low Maintenance
              </h3>
              <p className="mt-5 text-base text-gray-500">
                Enjoy a low-maintenance solution that minimizes your
                workload.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  <FaDollarSign className="h-6 w-6 text-white" />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                High Returns
              </h3>
              <p className="mt-5 text-base text-gray-500">
                Earn attractive profits from hosting car charging
                stations.
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
