import React from "react";

const businessData = [
  {
    header: "Maximize Efficiency",
    label: "Multi-Stop Rides",
    content: "Simplify multi-destination trips with ease.",
  },
  {
    header: "Plan Ahead",
    label: "Book in 30 Minutes",
    content: "Ensure a stress-free experience by scheduling rides in advance.",
  },
  {
    header: "Airport Convenience",
    label: "Dedicated Kiosks",
    content:
      "Book airport rides quickly and easily at dedicated kiosks located in all terminals.",
  },
];
const Section5 = () => {
  return (
    <div
      className="grid xl:min-h-[500px] grid-cols-1 xl:grid-cols-8 text-white py-10 px-2 sm:px-5 md:px-10 lg:px-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
        url(/assets/images/car-business/2.png)`,
        backgroundSize: "cover",
        backgroundPosition: "100% 20%",
      }}
    >
      <div className="col-span-3"></div>
      <div className="col-span-5">
        <p className="text-4xl font-bold">car Business on the Move</p>
        <p className="mt-7 mb-5">
          Get your team where they need to be, sustainably and efficiently.
        </p>

        <section aria-label="section" className="md:hidden py-4 text-white ">
      <div className="overflow-hidden relative whitespace-nowrap">
        <div className="animate-marquee flex">
          {businessData.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center">
                <span
                  className={`inline-block bg-gradient-to-tr from-green-400 to-blue-300 text-sm italic tracking-normal text-black p-2 rounded-xl`}
                >
                  {item.label}
                </span>
                <span className="inline-block mx-5">
                  {/* <i className="inline-block w-20 h-0.5 bg-green-700"></i> */}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
        <div className="hidden  md:grid md:grid-cols-3 grid-col-1 gap-5 bg-green-700 p-5 rounded-2xl py-8 my-10">
          {businessData.map((item, index) => {
            return (
              <div key={index} className="">
                <p className="text-xl font-semibold mt-2 mb-3">
                  {item.header}
                </p>
                <p className="text-lg font-medium my-1">{item.label}</p>
                <p className="text-sm">{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section5;
