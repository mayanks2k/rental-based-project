"use client";
import React, { useEffect, useState } from "react";
import PageLayout from "@/layout/PageLayout";
import Share from "./components/share/Share";
import CarDetailsForm from "./components/details/CarDetailsForm";
import Loader from "@/components/Loader/Loader";
import axios from "axios";
import { BASE_URL } from "@/constants";
import { VehicleDetailsType } from "./constants";
import VehicleDetails from "./components/vehicledetails/VehicleDetails";
import { useSearchParams } from "next/navigation";
import Slider from "./components/slider/slider";

// Default sample data for videos
const defaultVideos: string[] = [
  // "https://www.youtube.com/watch?v=uT2drw7r61w",
];
const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const searchParams = useSearchParams();
  const vehicleId = searchParams?.get("vehicleId");

  const [variantData, setVariantData] = useState<VehicleDetailsType[]>([]);
  const [vehicleDetails, setVehicleDetails] =
    useState<VehicleDetailsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    0
  );

  const getVehicleDetails = async () => {
    try {
      setIsLoading(true);
      if (!vehicleId) return; // Exit early if vehicleId is not available
      const { data } = await axios.get(
        `${BASE_URL}/vehicles/${vehicleId}?limit=2&page=1`
      );
      setVariantData(data.variants);
      const filterItem = data.variants?.find(
        (item: VehicleDetailsType) => item.id === parseInt(id)
      );
      setVehicleDetails(filterItem || null); // Set to null if filterItem is undefined
    } catch (error: any) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getVehicleDetails();
  }, [id, vehicleId]);

  const onChangeVariant = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const item = variantData.find(
      (item) => item.id === parseInt(e.target.value)
    );
    if (item) setVehicleDetails(item);
    setSelectedImageIndex(0);
  };

  if (isLoading) {
    return <Loader show={true} />;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );
  }

  if (!vehicleDetails) {
    return <p className="text-center my-5">No Data Found</p>;
  }

  return (
    <PageLayout title="Vehicle Details" imageURL="url('/assets/images/1.jpg')">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 px-2 sm:px-5 md:px-10 lg:px-32">
        <div>
          {vehicleDetails?.media_variant?.length > 0 && (
            <Slider
              images={vehicleDetails.media_variant.map((media) => media.file)}
              videos={defaultVideos}
              selectedImageIndex={selectedImageIndex}
              setSelectedImageIndex={setSelectedImageIndex}
            />
          )}
          <div className="hidden md:block">
            <VehicleDetails VehicleDetails={vehicleDetails} />
          </div>
        </div>
        <div>
          <CarDetailsForm
            carDetails={vehicleDetails}
            variantsData={variantData}
            onChangeVariant={onChangeVariant}
            variantId={id}
          />
          <Share />
        </div>
        <div className="block md:hidden px-2">
          <VehicleDetails VehicleDetails={vehicleDetails} />
        </div>
      </div>
    </PageLayout>
  );
};

export default Page;
