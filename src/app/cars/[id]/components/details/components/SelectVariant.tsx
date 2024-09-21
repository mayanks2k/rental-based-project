import React from "react";
import { VehicleDetailsType } from "../../../constants";

interface SelectVariantProps {
  variantsData: VehicleDetailsType[];
  selectVariant: string;
  handleVariantChange: any;
}
const SelectVariant: React.FC<SelectVariantProps> = ({
  variantsData,
  selectVariant,
  handleVariantChange,
}) => {
  return (
    <div className="py-3">
      <p className="font-medium mb-1">Select Variant</p>
      <select
        className="text-[15px] border border-gray-300 px-1 py-2 rounded outline-none w-full"
        onChange={handleVariantChange}
        value={selectVariant}
      >
        {variantsData?.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectVariant;
