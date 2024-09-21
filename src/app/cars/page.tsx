"use client";
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import PageLayout from "@/layout/PageLayout";
import Loader from "@/components/Loader/Loader";
import Offcanvas from "./components/Offcanvas/Offcanvas";
import FilterSection from "./components/FilterSection/FilterSection";
import { BASE_URL } from "@/constants";
import VariantsGrid from "./components/VariantsGrid/VariantsGrid";
import { ApiResponse } from "./constants";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdSad } from "react-icons/io";

const CarCatalogue = () => {
  const searchParams = useSearchParams() ?? new URLSearchParams();
  const router = useRouter();

  const [variantsData, setVariantsData] = useState<ApiResponse | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterParamsData, setFilterParamsData] = useState<any | undefined>(
    undefined
  );
  const limitPerPage = 9;

  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [filterData, setFilterData] = useState<any[]>([]);
  const [filterLoading, setFilterLoading] = useState(false);
  const [filterError, setFilterError] = useState<string | null>(null);

  // Parse query parameters and initialize selectedFilters
  const initialFilters: { [key: string]: string[] } = {};
  searchParams?.forEach((value, key) => {
    try {
      initialFilters[key] = JSON.parse(value);
    } catch (e) {
      initialFilters[key] = value.split(",");
    }
  });

  // Set initial values from query parameters
  useEffect(() => {
    const query = Object.fromEntries(searchParams.entries());
    if (query.page) {
      setCurrentPage(Number(query.page));
    }
    if (query.filters) {
      try {
        setFilterParamsData(JSON.parse(query.filters));
      } catch (e) {
        console.error("Failed to parse filter params:", e);
      }
    }
  }, [searchParams]);

  const applyFilters = async (filterParams: any) => {
    console.log("abcd filterParamsaa", filterParams);
    setLoading(true);
    setFilterParamsData(filterParams);
    setCurrentPage(1); // Reset to the first page when applying filters
    fetchData(1, filterParams); // Fetch data for page 1 and the new filters
    updateURL(1, filterParams); // Update URL with filters applied and page reset to 1
  };

  const updateURL = (pageNum: number, filters: any) => {
    const query: any = {
      ...filters, // Include filters in query parameters
      page: pageNum,
    };
    const url = new URL(window.location.href);
    url.search = new URLSearchParams(query).toString();
    router.replace(url.toString());
  };

  const fetchData = async (page: number, filters: any) => {
    setLoading(true);
    try {
      let url = `${BASE_URL}/search/filter-vehicles/?limit=${limitPerPage}`;

      // Append filters to the URL query if they exist
      if (filters) {
        const { page, ...filterData } = filters;
        const queryParams = new URLSearchParams();
        Object.keys(filterData).forEach((category) => {
          const values = Array.isArray(filterData[category])
            ? filterData[category]
            : [filterData[category]];
          values.forEach((value: string) => {
            queryParams.append(category, value);
          });
        });
        console.log("abcdff filterData", filterData);
        // updateURL(1, filterParams);
        url += `&page=${currentPage}&${queryParams.toString()}`;
      }
      if (!filters && initialFilters) {
        const queryParams = new URLSearchParams();

        Object.keys(initialFilters).forEach((category) => {
          const values = initialFilters[category];

          if (Array.isArray(values)) {
            values.forEach((value: string) => {
              queryParams.append(category, value);
            });
          } else {
            // If it's not an array, convert it to a string and append it as a single value
            queryParams.append(category, String(values));
          }
        });

        url += `&${queryParams.toString()}`;
        updateURL(currentPage, initialFilters);
      }

      // Make the request
      const { data } = await axios.get(url, { timeout: 10000 }); // 10 second timeout
      if (data?.count) {
        console.log("data length", data);
        setVariantsData(data); // Assuming data structure has 'results' property containing array of items
        setTotalPages(Math.ceil(data.count / limitPerPage));
        if (filters) {
          updateURL(currentPage, filters);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      if (axios.isAxiosError(error)) {
        console.error("Axios error details:", error.code, error.message);
      } else {
        console.error("Other error:", error);
      }
      // Handle specific errors or display appropriate messages to the user
      // Example: setVariantsData(null); // Clear data if fetching fails
    } finally {
      setLoading(false);
    }
  };

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
    if (!isOffcanvasOpen) {
      getFilterData();
    }
  };

  const getFilterData = async () => {
    setFilterLoading(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/search/filter-properties/`);
      setFilterData(data);
      setFilterError(null); // Clear any previous error
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
          setFilterError("Session expired. Please log in again.");
        } else {
          setFilterError(
            "Failed to fetch filter data. Please try again later."
          );
        }
      } else {
        setFilterError("An unexpected error occurred. Please try again later.");
      }
      console.error("Error fetching filter data:", error);
    } finally {
      setFilterLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchData(page, filterParamsData); // Fetch data for the new page with current filters
    updateURL(page, filterParamsData); // Update URL with new page number
  };

  useEffect(() => {
    fetchData(currentPage, filterParamsData);
  }, [currentPage, filterParamsData]);

  if (loading) {
    return <Loader show={true} />;
  }

  return (
    <PageLayout title="Cars" imageURL="url('/assets/images/cars/carsbg.jpg')">
      <div className="px-2 sm:px-5 md:px-10 lg:px-32">
        <div className="flex justify-end my-5">
          <button
            className="border border-green-500 text-slate-100 bg-gradient-to-r from-green-600 
              to-green-400 shadow-lg rounded px-4 py-1 tracking-wider"
            onClick={toggleOffcanvas}
          >
            FILTER
          </button>
        </div>
        {variantsData && variantsData?.results?.length > 0 ? (
          <VariantsGrid
            variantsData={variantsData}
            currentPage={currentPage}
            setCurrentPage={handlePageChange}
            totalPages={totalPages}
          />
        ) : (
          <div
            className="flex flex-col items-center justify-center my-4 
              bg-slate-100 p-6 rounded-lg shadow-lg"
          >
            <IoMdSad className="text-gray-400 text-8xl mb-4" />
            <p className="text-2xl text-gray-600 flex items-center">
              <FaInfoCircle className="mr-2 text-blue-500" />
              No such vehicle available
            </p>
          </div>
        )}
      </div>
      <Offcanvas isOpen={isOffcanvasOpen} onClose={toggleOffcanvas}>
        <FilterSection
          applyFilters={applyFilters}
          filterData={filterData}
          loading={filterLoading}
          error={filterError}
        />
      </Offcanvas>
    </PageLayout>
  );
};

const Page: React.FC = () => {
  return (
    <Suspense>
      <CarCatalogue />
    </Suspense>
  );
};

export default Page;
