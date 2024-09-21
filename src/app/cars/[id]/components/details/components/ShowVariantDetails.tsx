import React from "react";
import { VehicleDetailsType } from "../../../constants";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";
import { BsFuelPumpFill } from "react-icons/bs";
import { MdOutlineElectricalServices } from "react-icons/md";
import { capitalizeFirstLetter } from "@/app/utils/stringHandling";

interface ShowVariantDetailsProps {
  vehicleDetails: VehicleDetailsType;
}
const ShowVariantDetails: React.FC<ShowVariantDetailsProps> = ({
  vehicleDetails,
}) => {
  return (
    <div>
      <p className="text-3xl font-semibold bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
        {vehicleDetails?.vehicle?.brand?.name}{" "}
        {vehicleDetails?.vehicle?.model_name} -{" "}
        {capitalizeFirstLetter(vehicleDetails?.name)}
      </p>
      <p className="py-2 font-light w-11/12">
        {vehicleDetails?.vehicle?.description?.description}
      </p>

      <div className="flex items-center gap-5">
        <button
          type="button"
          className="flex bg-white shadow-md space-x-2 items-center border border-gray-300 rounded-full px-3 py-1 my-4"
        >
          {vehicleDetails.fuel_type.type === "Electric" ? (
            <MdOutlineElectricalServices color="#7ab" />
          ) : (
            <BsFuelPumpFill color="#7ab" />
          )}
          <p>{vehicleDetails.fuel_type.type}</p>
        </button>

        <button
          type="button"
          className="flex bg-white shadow-md space-x-2 items-center border border-gray-300 rounded-full px-3 py-1 my-4"
        >
          {vehicleDetails.transmission.type === "Automatic" ? (
            <TbAutomaticGearbox color="#5f9ea0" />
          ) : (
            <TbManualGearbox color="#5f9ea0" />
          )}
          <p>{vehicleDetails.transmission.type}</p>
        </button>
      </div>
    </div>
  );
};

export default ShowVariantDetails;
