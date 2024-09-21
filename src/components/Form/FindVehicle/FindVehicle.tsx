"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "@/constants";
import { vehicles } from "./constants";
import { useRouter } from "next/navigation";

const FindVehicle = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const [city, setCity] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [brand, setBrand] = useState("");
  const [brands, setBrands] = useState<string[]>([]);
  const [model, setModel] = useState("");
  const [models, setModels] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");

  const [mainUrl, setMainUrl] = useState("");

  const router = useRouter()

  // Function to fetch vehicle cities
  const fetchVehicleCities = async () => {
    try {
      const response = await fetch(`${BASE_URL}/search/hierarchical-dropdown/`);
      if (!response.ok) {
        throw new Error("Failed to fetch vehicle cities");
      }
      const data = await response.json();
      console.log("data: ", data)
      setCities(data.results || []);
    } catch (error) {
      console.error("Error fetching vehicle cities:", error);
    }
  };

  // Function to fetch vehicle brands based on selected city
  const fetchVehiclebrands = async (cityName: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/search/hierarchical-dropdown/?location=${cityName}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch vehicle brands");
      }
      const data = await response.json();
      setBrands(data.results || []);
    } catch (error) {
      console.error("Error fetching vehicle brands:", error);
    }
  };

  // Function to fetch models based on selected brand
  const fetchmodels = async (brandName: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/search/hierarchical-dropdown/?location=${city}&brand=${brandName}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch models");
      }
      const data = await response.json();
      setModels(data.results || []);
    } catch (error) {
      console.error("Error fetching models:", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${BASE_URL}/search/hierarchical-dropdown/?location=${city}&brand_name=${brand}&model_name=${model}&budget=${budget}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("Fetched data:", data);
      updateMainUrl({
        // location: city,
        brands: brand,
        models: model,
        // budget: budget,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to update the main URL
  const updateMainUrl = (params: Record<string, string>) => {
    const urlSearchParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if (params[key]) {
        urlSearchParams.append(key, params[key]);
      }
    });
    const newMainUrl = `${window.location.origin}${
      window.location.pathname
    }/cars?${urlSearchParams.toString()}`;

    const url_filter = `/cars?${urlSearchParams.toString()}`
    setMainUrl(url_filter);
  };

  useEffect(() => {
    console.log("mainUrl: ", mainUrl)
    router.push(mainUrl)
  }, [mainUrl])

  // Effect to fetch vehicle cities on component mount
  useEffect(() => {
    fetchVehicleCities();
  }, []);

  // Effect to update main URL when city, brand, model, or budget changes
  // useEffect(() => {
  //   updateMainUrl({
  //     location: city,
  //     brand_name: brand,
  //     model_name: model,
  //     budget: budget,
  //   });
  // }, [city, brand, model, budget]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-white shadow-2xl my-20 p-5 rounded-lg">
      {/* Vehicle selection section */}
      <div>
        <p className="mb-2.5 font-semibold">
          Choose your vehicle subscription?
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-2 xl:gap-5">
          {vehicles.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedVehicle(index)}
              className={`${
                selectedVehicle === index
                  ? "bg-gradient-to-r from-green-700 to-green-600"
                  : "bg-gradient-to-r from-green-500 to-green-400"
              } rounded-xl p-4`}
            >
              <img
                className="w-[80vw] lg:w-[90vw]"
                src={`/assets/images/home/vehicle/icon/${item.type}`}
                // width={150}
                // height={100}
                alt={item.name}
              />
              <p className="text-white mt-1">{item.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Form section */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* City selection */}
            <div>
              <p className="mb-2.5 font-semibold text-base">City</p>
              <select
                className="border border-slate-800 text-gray-900 text-sm rounded focus:outline-none
                   focus:border-blue-700 focus:ring-1 block w-full px-2 py-1.5"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setBrands([]);
                  setBrand("");
                  setModels([]);
                  setModel("");
                  setBudget("");
                  fetchVehiclebrands(e.target.value);
                }}
                required
              >
                <option value="">Select your delivery location</option>
                {cities.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {/* brand selection */}
            <div>
              <p className="mb-2.5 font-semibold text-base">Vehicle Brand</p>
              <select
                className="border border-slate-800 text-gray-900 text-sm rounded focus:outline-none
                   focus:border-blue-700 focus:ring-1 block w-full px-2 py-1.5"
                value={brand}
                onChange={(e) => {
                  setBrand(e.target.value);
                  fetchmodels(e.target.value);
                }}
                required={city ? true : false}
                disabled={!city}
              >
                <option value="">Select your pickup brand</option>
                {brands.map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
            {/* model selection */}
            <div>
              <p className="mb-2.5 font-semibold text-base">Model</p>
              <select
                className="border border-slate-800 text-gray-900 text-sm rounded focus:outline-none
                   focus:border-blue-700 focus:ring-1 block w-full px-2 py-1.5"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                required={brand ? true : false}
                disabled={!brand}
              >
                <option value="">Select your model</option>
                {models.map((model, index) => (
                  <option key={index} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
            {/* Budget input */}
            <div>
              <p className="mb-2.5 font-semibold text-base">Budget (₹)</p>
              <input
                type="number"
                placeholder="Enter your budget"
                className="border border-slate-800 text-gray-900 text-sm rounded focus:outline-none
                   focus:border-blue-700 focus:ring-1 block w-full px-2 py-1.5"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required={false}
                disabled={!model}
              />
            </div>
          </div>
          {/* Submit button */}
          <button
            type="submit"
            className="bg-green-700 text-sm font-medium text-white px-4 py-1.5 rounded mt-5 float-right"
          >
            Find a Vehicle
          </button>
        </form>
      </div>

      {/* Display main URL */}
      {/* {mainUrl && (
        <div className="mt-5">
          <p className="font-semibold">Main URL:</p>
          <p className="text-blue-700 break-all">{mainUrl}</p>
        </div>
      )} */}
    </div>
  );
};

export default FindVehicle;
