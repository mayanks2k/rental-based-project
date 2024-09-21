import useAuth from "@/hooks/useAuth";
import React from "react";
import { FiInfo } from "react-icons/fi";

interface PriceWithTermsProps {
  selectedPrice: string;
}
const PriceWithTerms: React.FC<PriceWithTermsProps> = ({ selectedPrice }) => {
  const { isLoggedIn } = useAuth();

  return (
    <div
      className={`grid grid-cols-1 ${
        isLoggedIn ? "xl:grid-cols-2" : "xl:grid-cols-1"
      } gap-x-10 gap-y-5 py-2`}
    >
      {isLoggedIn && (
        <div>
          <div className="flex items-center space-x-3">
            <p>Lease</p>
            <FiInfo />
          </div>

          <div className="flex items-center space-x-3 py-1">
            <p className="line-through text-rose-700">₹31,992</p>
            <p>
              <span className="font-semibold text-2xl">{selectedPrice}</span>
              /month
            </p>
            <div className="flex">
              <button>
                <FiInfo className="text-blue-700" />
              </button>
              <span className="text-red-700">*</span>
            </div>
          </div>

          <p className="text-red-800">T&C applied</p>
        </div>
      )}
      <div className={`${isLoggedIn ? "xl:ms-10" : "xl:ms-0"}`}>
        <div className="flex items-center space-x-3">
          <p>Market value</p>
          <FiInfo />
        </div>
        <p className="py-1">
          As per the market rates at the end of tenure or closure of
          subscription.
        </p>
      </div>
    </div>
  );
};

export default PriceWithTerms;
