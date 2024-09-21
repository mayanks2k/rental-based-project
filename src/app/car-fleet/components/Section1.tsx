import React from "react";

const Section1 = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Invest in a Sustainable Tomorrow
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          The car Green Fleet program allows you to contribute to a greener
          future! Purchase an electric car and lease it to us. Your vehicle will
          then join our eco-friendly fleet, making a positive impact on the
          environment.
        </p>
        <button className="mt-8 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700">
          Get Started →
        </button>
      </div>
    </section>
  );
};

export default Section1;