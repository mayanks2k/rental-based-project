import React from "react";
import VariantCard from "../VariantCard/VariantCard";
import Pagination from "../Pagination/Pagination";
import { ApiResponse } from "../../constants";

interface VariantsGridProps {
  variantsData: ApiResponse;
  currentPage: number;
  setCurrentPage: (page: number) => void; // Change type here
  totalPages: number;
}

const VariantsGrid: React.FC<VariantsGridProps> = ({
  variantsData,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <div className="pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-7 md:gap-5">
        {variantsData?.results?.map((item, index) => (
          <VariantCard key={index} item={item} />
        ))}
      </div>
      {variantsData && variantsData?.results?.length > 0 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} // Pass as a function that directly updates currentPage
          totalPages={totalPages}
        />
      )}
    </div>
  );
};
 
export default VariantsGrid;
