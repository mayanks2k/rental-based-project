"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation"; // Import usePathname and useSearchParams from next/navigation
import FilterItem from "./FilterItem";
import PriceSlider from "./PriceSlider";
import Loader from "@/components/Loader/Loader";

type FilterData = {
  key: string;
  value: string[];
  title: string;
};

type Props = {
  applyFilters: (filterParams: any) => void;
  filterData: FilterData[];
  loading: boolean;
  error: string | null;
};

const FilterSection: React.FC<Props> = ({
  applyFilters,
  filterData,
  loading,
  error,
}) => {
  const pathname = usePathname(); // Initialize the usePathname hook
  const searchParams = useSearchParams(); // Initialize the useSearchParams hook

  // Parse query parameters and initialize selectedFilters
  const initialFilters: { [key: string]: string[] } = {};
  searchParams?.forEach((value, key) => {
    try {
      initialFilters[key] = JSON.parse(value);
    } catch (e) {
      initialFilters[key] = value.split(",");
    }
  });

  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>(initialFilters);

  // Update URL parameters when selectedFilters change
  useEffect(() => {
    updateURLParameters(selectedFilters);
  }, [selectedFilters]);

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters((prevFilters) => {
      const categoryFilters = prevFilters[category] || [];
      const newCategoryFilters = categoryFilters.includes(value)
        ? categoryFilters.filter((item) => item !== value)
        : [...categoryFilters, value];

      if (newCategoryFilters.length > 0) {
        return {
          ...prevFilters,
          [category]: newCategoryFilters,
        };
      } else {
        const { [category]: _, ...newFilters } = prevFilters; // Using destructuring to remove the key
        return newFilters;
      }
    });
  };

  const updateURLParameters = (filters: { [key: string]: string[] }) => {
    const queryParams = new URLSearchParams();
    Object.keys(filters).forEach((category) => {
      queryParams.set(category, JSON.stringify(filters[category]));
    });

    window.history.replaceState(
      {},
      "",
      `${pathname}?${queryParams.toString()}`
    );
  };

  return (
    <div className="p-4">
      {loading && <Loader show={true} />}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && filterData.length > 0 && (
        <>
          {filterData.map((sec, secIndex) => (
            <div
              key={secIndex}
              className="border border-slate-300 shadow-lg py-5 px-8 rounded-lg my-7 first:mt-0 last:mb-0"
            >
              <p className="text-lg font-bold mb-1.5">{sec.title}</p>
              {sec.value.map((item: string, index: number) => (
                <FilterItem
                  item={item}
                  key={index}
                  category={sec.key}
                  onFilterChange={handleFilterChange}
                  checked={selectedFilters[sec.key]?.includes(item) || false}
                />
              ))}
            </div>
          ))}
          <PriceSlider />
          <button
            type="button"
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => applyFilters(selectedFilters)} // Apply filters on button click
          >
            Apply Filter
          </button>
        </>
      )}
    </div>
  );
};

export default FilterSection;
