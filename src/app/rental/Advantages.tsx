import React from "react";

type Feature = {
  title: string;
  summary: string;
};

type FeatureGridProps = {
  features: Feature[];
};

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  const isOdd = features.length % 2 !== 0;

  return (
    <div className="grid mb-8 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 gap-2">
      {features.map((feature, index) => (
        <figure
          key={index}
          className={`flex flex-col rounded-lg items-center justify-center p-6 text-center bg-green-50 border-b border-gray-200 ${
            index === features.length - 1 && isOdd
              ? "md:col-span-2"
              : "md:border-e"
          }`}
        >
          <blockquote className="max-w-2xl mx-auto text-gray-500">
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="my-4">{feature.summary}</p>
          </blockquote>
        </figure>
      ))}
    </div>
  );
};
function Advantages() {
  const ownershipBenefits: Feature[] = [
    {
      title: "Truly Yours",
      summary: " Drive off in a brand-new car registered in your name.",
    },
    { title: "Variety of Choices", summary: " Wide selection of models." },
    { title: "Simple Upgrades", summary: "Upgrade your car easily" },
    {
      title: "Legitimate Ownership",
      summary: "Comes with a white number plate",
    },
  ];

  const employerAdvantage: Feature[] = [
    {
      title: "Nationwide Coverage",
      summary: "Lease vehicles for your staff across major locations in India.",
    },
    {
      title: "Streamlined Processes",
      summary:
        "Enjoy reduced administrative tasks as we handle all aspects of the car lease.",
    },
    {
      title: "No Asset Risk",
      summary: "Eliminate concerns about vehicle resale or market changes.",
    },
    {
      title: "Flexibility and Variety",
      summary:
        "Access a broad selection of cars and tailored services to align with your corporate vehicle policy.",
    },
    {
      title: "Employee Satisfaction",
      summary:
        " Enhance staff morale with an easy and cost-effective car leasing option.",
    },
    {
      title: "Dedicated Support",
      summary:
        " Benefit from a committed car relationship manager who ensures top-quality service throughout.",
    },
  ];
  const employeeParks: Feature[] = [
    {
      title: "Choice of Any Car",
      summary:
        "Select from a diverse range of vehicles on our Quiklyz multi-brand car leasing platform.",
    },
    {
      title: "Tax Benefits",
      summary: "Maximize tax savings by leasing through Quiklyz.",
    },
    {
      title: "Premium Service",
      summary: "Receive dedicated support from a Quiklyz relationship manager.",
    },
    {
      title: "Flexible Options",
      summary: "Enjoy a variety of flexible lease-end choices.",
    },
    {
      title: "Digital Convenience",
      summary: "Easily manage your lease via our specialized portal.",
    },
    {
      title: "Zero Initial Cost",
      summary: "Drive away in your dream car with no down payment required.",
    },
  ];
  return (
    <div className="p-6 container mx-auto">
      <div className="mt-20">
        <h1 className="text-2xl md:text-4xl text-center bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
          Individual Subscription Options
        </h1>
        <h2 className="text-xl mb-8 underline">Ownership Benefits</h2>
        <FeatureGrid features={ownershipBenefits} />
      </div>
      <div className="mt-20">
        <h1 className="text-2xl md:text-4xl text-center bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
          Business Subscription Benefits
        </h1>
        <h2 className="text-xl mb-8 underline">Employer Advantages</h2>
        <FeatureGrid features={employerAdvantage} />
      </div>
      <div className="mt-20">
        <h2 className="text-xl mb-8 underline">Ownership Benefits</h2>
        <FeatureGrid features={employeeParks} />
      </div>
    </div>
  );
}

export default Advantages;
