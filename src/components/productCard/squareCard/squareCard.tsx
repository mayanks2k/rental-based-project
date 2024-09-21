"use client";
import useAuth from "@/hooks/useAuth";
import {
  BriefcaseIcon,
  ComputerDesktopIcon,
  EnvelopeOpenIcon,
  HeartIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

// SquareCard.tsx
interface CarCardProps {
  title: string;
  dailyRate: string;
  imageUrl?: string;
  carClass?: { key: string; value: string }[]; // Optional for different car classes (e.g., SUV, Sedan, Exotic Car)
}

export const SquareCard: React.FC<CarCardProps> = ({
  title,
  dailyRate,
  imageUrl,
  carClass,
}) => {
  const filteredCarClass = carClass?.filter(
    (row) =>
      row.key === "Seats" ||
      row.key === "Luggage" ||
      row.key === "Doors" ||
      row.key === "Type"
  );
  const { isLoggedIn } = useAuth();

  return (
    <div
      className={`border border-slate-300 bg-white rounded-lg shadow-md overflow-hidden flex flex-col 
      justify-center p-2.5 hover:shadow-lg`}
    >
      {imageUrl && (
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={240}
            className="align-middle object-cover rounded w-full
            transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
      )}
      <div className="flex flex-col justify-between h-full px-3 my-5">
        <div className="text-center">
          <div className="flex flex-row items-center justify-between">
            <h5 className="text-xl font-medium mb-1 text-left">{title}</h5>
            <div className="flex items-center space-x-1">
              <HeartIcon className="w-4 h-4" />
              <p>20</p>
            </div>
          </div>
          <div className="flex space-x-2 py-2">
            {filteredCarClass &&
              filteredCarClass.map((row) => (
                <div key={row.key}>
                  {row.key === "Seats" && (
                    <div className="flex items-center">
                      <ComputerDesktopIcon className="w-4 h-4 text-green-500" />
                      <span className="text-sm px-1 font-semibold">
                        {row.value}
                      </span>
                    </div>
                  )}
                  {row.key === "Luggage" && (
                    <div className="flex items-center">
                      <BriefcaseIcon className="w-4 h-4 text-green-500" />
                      <span className="text-sm px-1 font-semibold">
                        {row.value}
                      </span>
                    </div>
                  )}
                  {row.key === "Doors" && (
                    <div className="flex items-center">
                      <EnvelopeOpenIcon className="w-4 h-4 text-green-500" />
                      <span className="text-sm px-1 font-semibold">
                        {row.value}
                      </span>
                    </div>
                  )}
                  {row.key === "Type" && (
                    <div className="flex items-center">
                      <TagIcon className="w-4 h-4 text-green-500" />
                      <span className="text-sm px-1 font-semibold">
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
              <span className="text-xl font-semibold">{dailyRate}</span>
            </div>
          )}
          <Link
            href={`/cars/1`}
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
