import React from "react";
import ImageCarousel from "./ImageCarousel";
import {
  CalendarIcon,
  MapPinIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import pc from "../../../public/assets/images/image-computer.png";
import device from "../../../public/assets/images/image-devices.png";
import CarSubscription from "./CarSubscription";
// import HowAppWorks from "./HowAppWork";
const Card = () => {
  return (
    <div className="p-6 space-y-9 max-w-3xl flex flex-col items-center md:items-start ">
      <h1 className="text-5xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
        Apply To Drive
      </h1>
      <p className="text-lg font-semibold text-slate-500 text-center md:text-left">
        Join the BluSmart community and unlock a world of opportunities by being
        a valued driver-partner.
      </p>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center">
          <div className=" p-2 rounded-full bg-green-100">
            <SwatchIcon className="w-6 text-green-700" />
          </div>
          <p className="ml-4">Monthly Payouts And Bonus</p>
        </div>
        <div className="flex items-center">
          <div className=" p-2 rounded-full bg-green-100">
            <SwatchIcon className="w-6 text-green-700" />
          </div>
          <p className="ml-4">Flexible Working Hours</p>
        </div>
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-green-100">
            <SwatchIcon className="w-6 text-green-700" />
          </div>
          <p className="ml-4">Zero Ownership Cost</p>
        </div>
      </div>
      <div>
        <a
          href="##"
          className="border p-3 px-10 rounded-full shadow-lg text-white bg-green-700 duration-200 hover:opacity-90"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

const RentalRides: React.FC = () => {
  return (
    <div>
      {/* ------------> */}
      <div className="space-y-10 py-10">
        <div className="container mx-auto flex justify-between flex-col md:flex-row ">
          <div className="flex justify-center">
            <div className="flex items-center">
              <svg
                className="h-16 w-16 text-green-300 border"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <h1>Rental Rides</h1>
            </div>
          </div>
          <div className="border-l-8 border-blue-500 max-w-[500px] pl-6 ">
            Get limited time or all-day rentals for senior management and key
            executives
          </div>
        </div>
        <div className=" relative container mx-auto">
          <div className="flex flex-col justify-center w-full h-[400px] ">

            <ImageCarousel />
            <div className="absolute inset-0 items-center flex md:items-end justify-center">
              <div className="bg-white bg-opacity-90 text-center rounded p-4 mb-5 flex flex-col md:flex-row justify-center gap-10">
                <div className="flex">
                  <img
                    className="w-6 h-6 mr-2 rounded-full border-2 border-green-500"
                    src="https://storage.dev.blucgn.com/images/b4b-mob-insight-1.png"
                    alt="Car package"
                  />
                  Classic & Premium Rental Types
                </div>
                <div className="flex">
                  <img
                    className="w-6 h-6 mr-2 rounded-full  border-2 border-green-500"
                    src="https://storage.dev.blucgn.com/images/b4b-mob-insight-1.png"
                    alt="Car package"
                  />
                  Packages starting from 1hr/10km
                </div>
                <div className="flex">
                  <img
                    className="w-6 h-6 mr-2 rounded-full  border-2 border-green-500"
                    src="https://storage.dev.blucgn.com/images/b4b-mob-insight-1.png"
                    alt="Car package"
                  />
                  Rentals Starting @₹269
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -----> */}
      <div className="flex flex-col md:flex-row py-[90px] max-w-6xl mx-auto">
        <div>
          <img
            src="https://storage.dev.blucgn.com/images/b4b-transport-new.png"
            className="hover:scale-105 overflow-hidden duration-300"
          />
        </div>
        <div className="col-span-2 ">
          <Card />
        </div>
      </div>
      {/* pagination */}
      <div
        className="px-2 mx-auto container sm:px-5 md:px-10 lg:px-32 relative"
        style={{
          backgroundImage:
            "url('https://www.madebydesignesia.com/themes/rentaly/images/background/3.jpg')",
          borderRadius: "20px",
        }}
      >
        <div className=" text-white mx-auto flex flex-col md:flex-row gap-10 bg-cover bg-center py-20">
          <div className="flex-grow"></div>
          <div className="flex-grow col-start-1 col-end-3 space-y-6 text-left font-bold text-white mb-5">
            <h1 className="text-5xl text-green-500 text-center md:text-start">
              City & Airport Rides
            </h1>
            <p className="text-2xl font-bol text-center md:text-start">
              Helping your business move forward, sustainably
            </p>
            <div className="flex max-w-5xl flex-col sm:flex-row md:justify-between items-center space-y-3 md:space-y-0 space-x-0 md:space-x-3 rounded-lg">
              <div className="hover:scale-105 duration-300 max-w-sm space-y-3 p-3 rounded bg-white text-black">
                {/* Added white background */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white">
                  {/* Added icon container */}
                  <MapPinIcon className="h-6" />
                </div>
                <div className="font-semibold">Multi-Stop Rides</div>
                <div className="text-gray-600 text-sm">
                  Navigate multiple destinations with ease.
                </div>
              </div>
              <div className="hover:scale-105 duration-300 max-w-sm space-y-3 p-3 rounded bg-white text-black">
                {/* Added white background */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white">
                  {/* Added icon container */}
                  <MapPinIcon className="h-6" />
                </div>
                <div className="font-semibold">Multi-Stop Rides</div>
                <div className="text-gray-600 text-sm">
                  Navigate multiple destinations with ease.
                </div>
              </div>
              <div className="hover:scale-105 duration-300 max-w-sm space-y-3 p-3 rounded bg-white text-black">
                {/* Added white background */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white">
                  {/* Added icon container */}
                  <MapPinIcon className="h-6" />
                </div>
                <div className="font-semibold">Multi-Stop Rides</div>
                <div className="text-gray-600 text-sm">
                  Navigate multiple destinations with ease.
                </div>
              </div>
            </div>
            <div className="pt-10 flex md:justify-start">
              <a
                href="##"
                className="border p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative flex items-center justify-center w-full bg-cover bg-center p-[90px]"
        style={{
          backgroundImage: `url(https://www.madebydesignesia.com/themes/rentaly/images/background/3.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white p-6 space-y-6">
          <h1 className="text-5xl text-green-500">City & Airport Rides</h1>
          <p className="text-2xl font-bold mb-8">
            Helping your business move forward, sustainably
          </p>
          <div className="flex flex-col items-center justify-center space-y-4   md:flex-row md:space-y-0 md:space-x-4  ">
            <div className="hover:scale-105 duration-300 max-w-sm space-y-3 p-3 rounded text-center bg-white border text-black">
              {/* Added white background */}
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white">
                  {/* Added icon container */}
                  <MapPinIcon className="h-6" />
                </div>
              </div>
              <div className="font-semibold">Multi-Stop Rides</div>
              <div>Navigate multiple destinations with ease.</div>
            </div>
            <div className="hover:scale-105 duration-300 max-w-sm space-y-3 p-3 rounded bg-white text-black">
              {/* Added white background */}
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white">
                  {/* Added icon container */}
                  <MapPinIcon className="h-6" />
                </div>
              </div>
              <div className="font-semibold">Multi-Stop Rides</div>
              <div>Navigate multiple destinations with ease.</div>
            </div>
            <div className="hover:scale-105 duration-300 max-w-sm space-y-3 p-3 rounded bg-white text-black">
              {/* Added white background */}
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white">
                  {/* Added icon container */}
                  <MapPinIcon className="h-6" />
                </div>
              </div>
              <div className="font-semibold">Multi-Stop Rides</div>
              <div>Navigate multiple destinations with ease.</div>
            </div>
          </div>
          <div className="pt-6">
            <a
              href="##"
              className="border p-3 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-90"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* feature section */}
      <section id="feature">
        <div className="section-container my-20">
          <div className=" relative flex flex-col md:flex-row md:space-x-32">
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={pc.src}
                alt="pc..."
                className="md:absolute  right-[50%] top-0"
              />
            </div>
            {/* Items Container */}
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:w-1/2 md:text-left  md:pl-16">
              {/* Item 1  */}
              <div>
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  Quick Search
                </h5>
                <p className="max-w-md text-grayishBlue">
                  Easily search your snippets by content, category , web
                  address, application and more.
                </p>
              </div>
              {/* Item 2  */}
              <div>
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  ICloud Sync
                </h5>
                <p className="max-w-md text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              {/* Item 3  */}
              <div>
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  Completely History
                </h5>
                <p className="max-w-md text-grayishBlue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-green-50 py-10">
        <div className=" py-20 container mx-auto  text-center lg:gap-10 flex flex-col justify-center items-center lg:justify-between lg:flex-row">
          <div className=" lg:w-1/2 text-3xl  md:text-5xl font-bold">
            5 Documents Required
          </div>
          <div className="px-10 py-4  lg:py-2 lg:w-1/2 lg:text-left lg:border-l-4 lg:pl-4">
            After receiving the required documents, we conduct a thorough
            background verification prior to onboarding.
          </div>
        </div>
        <div className=" container mx-auto text-center gap-10 flex flex-col justify-center items-center lg:justify-between lg:flex-row">
          <div className="w-full lg:w-1/2 p-5 flex justify-center items-center">
            <img
              src="https://storage.dev.blucgn.com/images/drive-docs-new.png"
              alt="img.."
              className="w-full h-auto rounded"
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2  space-y-8">
            <div className="flex items-center ">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border">
                1
              </div>
              <p className="ml-4 text-lg text-left text-slate-600">
                Valid Driving License
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border">
                2
              </div>
              <p className="ml-4 text-lg text-left text-slate-600">
                Aadhar Card
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border">
                3
              </div>
              <p className="ml-4 text-lg  text-left text-slate-600">
                Current & Permanent Address Proofs
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border">
                4
              </div>
              <p className="ml-4 text-lg text-left text-slate-600">
                One Reference (Address & Phone Number)
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border">
                5
              </div>
              <p className="ml-4 text-lg text-left text-slate-600">
                Bank Details (Passbook OR Canceled Cheque)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-50 pt-[90px]">
        <div className="">
          <div className="relative flex flex-col md:flex-row md:space-x-12 container mx-auto px-4 py-20">
            <div className="md:w-1/2 flex justify-center md:justify-end relative">
              <img
                src={device.src}
                alt="pc..."
                className="md:absolute md:right-0 md:top-0 w-full max-w-md hover:scale-105 duration-300"
              />
            </div>

            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mt-0 md:mb-0 md:w-1/2 md:text-left max-w-3xl items-center md:items-start">
              <h1 className="text-5xl text-center md:text-left bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
                How does the app work?
              </h1>
              <p className="text-lg font-semibold text-slate-500 text-center md:text-left">
                The app is designed for seamless convenience, streamlining every
                aspect from login to ride requests, issue resolution, and
                payment tracking, ensuring an easy and efficient experience.
              </p>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex text-green-700 items-center bg-green-100 justify-center rounded-full border border-green-500">
                    1
                  </div>
                  <p className="ml-4">Download the app and log in</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 flex text-green-700 items-center bg-green-100 justify-center rounded-full border border-green-500">
                    2
                  </div>
                  <p className="ml-4">
                    Receive a trip and navigate to the pick-up point
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 flex text-green-700 items-center bg-green-100 justify-center rounded-full border border-green-500">
                    3
                  </div>
                  <p className="ml-4">
                    Complete trip after dropping customer at the destination
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 flex text-green-700 items-center bg-green-100 justify-center rounded-full border border-green-500">
                    4
                  </div>
                  <p className="ml-4">
                    View your earnings and get the payment weekly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CarSubscription />
    </div>
  );
};

export default RentalRides;
