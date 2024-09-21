"use client";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { Variant } from "../../constants";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { FaHeart, FaRegHeart, FaRoad } from "react-icons/fa6";
import { BsFuelPump } from "react-icons/bs";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { capitalizeFirstLetter } from "@/app/utils/stringHandling";

interface VariantCardProps {
  item: Variant;
}

const VariantCard: React.FC<VariantCardProps> = ({ item }) => {
  const filteredCarClass = [
    { key: "Seats", value: item.seating_capacity.toString() },
    { key: "Doors", value: item.num_of_doors.toString() },
    { key: "Range", value: item.range.toString() + " km" },
    { key: "Type", value: item.fuel_type.type },
  ];

  const { isLoggedIn } = useAuth();
  return (
    <div
      className={`border border-slate-300 bg-white rounded-lg shadow-md overflow-hidden flex flex-col 
      justify-center p-2.5 max-w-72 hover:shadow-lg`}
    >
      {/* Assuming imageUrl is part of media_variant, update accordingly */}
      {item?.media_variant?.length > 0 && (
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={item.media_variant[0].file} // Update this to the correct property if needed
            alt={item.name}
            width={200}
            height={100}
            className="object-cover rounded w-full
            transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
      )}
      <div className="flex flex-col justify-between h-full px-3 my-5">
        <div className="text-center">
          <div className="flex flex-row justify-between gap-x-2">
            <h5 className="text-md font-medium mb-1 text-left max-w-48 line-clamp-2 text-ellipsis">
              {item?.vehicle?.brand?.name} {item?.vehicle?.model_name} - {capitalizeFirstLetter(item?.name)}
            </h5>
            <div className="flex flex-col items-center justify-center space-y-1">
              <button>
                {0 ? (
                  <FaHeart className="w-4 h-4 text-rose-500" />
                ) : (
                  <FaRegHeart className="w-4 h-4" />
                )}
              </button>
              <p className="text-sm">20</p> {/* Assuming this is a placeholder for likes */}
            </div>
          </div>
          <div className="flex space-x-2 py-2">
            {filteredCarClass.map((row) => (
              <div key={row.key}>
                {row.key === "Seats" && (
                  <div className="flex items-center">
                    <MdOutlineAirlineSeatReclineExtra className="w-4 h-4 text-green-500" />
                    <span className="text-xs px-1 font-semibold">
                      {row.value}1
                    </span>
                  </div>
                )}
                {row.key === "Doors" && (
                  <div className="flex items-center">
                    <GiCarDoor className="w-4 h-4 text-green-500" />
                    <span className="text-xs px-1 font-semibold">
                      {row.value}
                    </span>
                  </div>
                )}
                {row.key === "Range" && (
                  <div className="flex">
                    <FaRoad className="w-4 h-4 text-green-500" />
                    <span className="text-xs px-1 font-semibold">
                      {row.value}
                    </span>
                  </div>
                )}
                {row.key === "Type" && (
                  <div className="flex items-center">
                    {row.value === "Electric" ? (
                      <RiBattery2ChargeLine className="w-4 h-4 text-green-500" />
                    ) : (
                      <BsFuelPump className="w-4 h-4 text-green-500" />
                    )}
                    <span className="text-xs px-1 font-semibold">
                      {row.value}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <hr className="my-2 border-slate-300 " />
        <div className="flex justify-between items-center space-x-4">
          {isLoggedIn && (
            <div className="flex flex-col ">
              <span className="text-gray-700">Monthly rate</span>
              <span className="text-xl font-semibold">
                ₹{item.price_per_month_base}
              </span>
            </div>
          )}
          <Link
            href={`/cars/${item.id}?vehicleId=${item.vehicle.id}`}
            className="mt-4 px-4 py-2 text-sm font-medium rounded-md shadow-sm 
            bg-green-500 text-white hover:bg-gray-800 focus:outline-none"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VariantCard;
