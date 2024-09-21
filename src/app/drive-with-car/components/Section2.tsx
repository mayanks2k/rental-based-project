import React from "react";
import { MdElectricCar } from "react-icons/md";
import Carousel from "./Carousel";
import Section3 from "./Section3";
import { IoDocuments } from "react-icons/io5";

const documentsData = [
  "A Valid Driver’s License",
  "Aadhar Card",
  "Address Proof",
  "Phone Number",
  "Bank Details- Passbook or Cheque",
];
const Section2 = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-28 bg-gradient-to-r from-indigo-50 to-sky-100 ">
      {/* Why Drive With car ? */}
      <section className="px-2 pt-10 pb-5 xl:py-5 md:px-5">
        <div className="flex flex-col items-center space-y-5">
          <MdElectricCar
            color="#fff"
            className="h-20 w-20 bg-green-600 rounded-3xl p-5"
          />
          <h1
            className="text-4xl text-center xl:text-start bg-gradient-to-r from-green-500 to-blue-700 text-transparent 
            bg-clip-text font-bold"
          >
            Why Drive With car ?
          </h1>
        </div>
        <p className="text-lg text-slate-500 text-center xl:text-justify py-7">
          Want to be a driver who makes a real difference? Partner with car and
          take the wheel towards a greener tomorrow! Cruise the streets in
          eco-friendly electric vehicles (EVs) and contribute to a more
          sustainable future. Focus on driving – we'll provide the EVs and
          ensure you receive regular weekly payouts and attractive incentives to
          boost your earnings. Join car and experience the satisfaction of a
          rewarding career with a positive impact.
        </p>
      </section>

      {/* Documents */}
      <section className="bg-gradient-to-r from-indigo-50 to-sky-100 px-2 py-5 md:px-5 ">
        <div className="flex flex-col items-center space-y-5">
          <IoDocuments
            color="#fff"
            className="h-20 w-20 bg-green-600 rounded-3xl p-5"
          />
          <p
            className="text-4xl text-center xl:text-start bg-gradient-to-r from-green-500 to-blue-700 text-transparent 
            bg-clip-text font-bold"
          >
            Documents For Your Application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 my-10 items-center">
          <img
            src="/assets/images/drive-with-us/documents.jpg"
            alt="img.."
            className="w-full h-auto rounded-3xl"
          />
          <div className="space-y-3">
            {documentsData.map((item, index) => {
              return (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border">
                    {index + 1}
                  </div>
                  <p className="text-left text-slate-600">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
