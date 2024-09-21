"use client";
import React, { useEffect, useState } from "react";
import { MdLocalPhone } from "react-icons/md";
import { VehicleDetailsType } from "../../constants";
import SelectPrice from "./components/SelectPrice";
import SelectColor from "./components/SelectColor";
import SelectVariant from "./components/SelectVariant";
import ShowVariantDetails from "./components/ShowVariantDetails";
import PriceWithTerms from "./components/PriceWithTerms";

interface CarDetailsFormProps {
  carDetails: VehicleDetailsType;
  onChangeVariant: any;
  variantsData: VehicleDetailsType[];
  variantId: string;
}

const CarDetailsForm: React.FC<CarDetailsFormProps> = ({
  carDetails,
  variantsData,
  onChangeVariant,
  variantId,
}) => {
  const [selectVariant, setSelectVariant] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  useEffect(() => {
    const selectedVariant = variantsData.find(
      (item) => item.id === Number(variantId)
    );

    if (selectedVariant) {
      setSelectVariant(String(selectedVariant.id));
    }
  }, [variantId, variantsData]);

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectVariant(e.target.value);
    onChangeVariant(e); // Call the parent function to update the variant
  };

  return (
    <div className="bg-white border border-gray-300 shadow-xl rounded-xl p-5">
      <ShowVariantDetails vehicleDetails={carDetails} />
      <SelectVariant
        variantsData={variantsData}
        selectVariant={selectVariant}
        handleVariantChange={handleVariantChange}
      />
      <SelectColor />
      <SelectPrice
        vehicleDetails={carDetails}
        setSelectedPrice={setSelectedPrice}
      />
      <PriceWithTerms selectedPrice={selectedPrice} />
      <button
        type="submit"
        className="my-2 bg-gradient-to-r from-blue-600 to-blue-400 px-3 py-2 rounded-3xl text-white"
      >
        Check Eligibility
      </button>
      <div className="flex items-center space-x-2 my-2">
        <MdLocalPhone />
        <p>
          Still have queries? Request a call back from our Subscription Expert
        </p>
      </div>
    </div>
  );
};

export default CarDetailsForm;