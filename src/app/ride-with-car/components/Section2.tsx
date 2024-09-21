import Image from "next/image";
import { FC } from "react";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

// Define the type for services
interface Service {
  icon: JSX.Element;
  label: string;
}

// Define the type for card data
interface CardData {
  imageUrl: string;
  header: string;
  content: string;
  services: Service[];
}

// Sample card data
const cardData: CardData[] = [
  {
    imageUrl: "/assets/images/ride-with-us/classic1.jpg",
    header: "Classic Rentals",
    content: "Conquer your to-do list in comfort with our affordable sedans.",
    services: [
      {
        icon: (
          <HiOutlineCurrencyRupee size={30} className="text-green-700 p-1" />
        ),
        label: "Starting from ₹269!",
      },
      {
        icon: (
          <HiOutlineCurrencyRupee size={30} className="text-green-700 p-1" />
        ),
        label: "Book for up to 8 hours and enjoy the ride.",
      },
    ],
  },
];

// Card component
const Card: FC<{ item: CardData }> = ({ item }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10 p-10 border shadow-xl rounded-2xl">
      <img
        // width={500}
        // height={300}
        src={item.imageUrl}
        alt="car-rental"
        className="w-full h[200px] md:h-[300px] rounded-xl"
      />
      <div className="space-y-3">
        <h1 className="text-3xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text text-left">
          {item.header}
        </h1>
        <p className="my-5">{item.content}</p>
        <div className="flex flex-col space-y-5 pt-2 md:pt-5">
          {item.services.map((service, ind) => (
            <div key={ind} className="flex items-center">
              <div className="p-0.5 rounded-full bg-green-100">
                {service.icon}
              </div>
              <p className="ml-4">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Section2 component
const Section2: FC = () => {
  return (
    <div className="px-2 sm:px-5 md:px-10 lg:px-32 py-10">
      <div className="text-center">
        <h1 className="text-4xl bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
          car Rentals
        </h1>
        <p className="px-4 mx-auto max-w-5xl my-5 text-lg font-semibold text-slate-500 text-center">
          Multidestination made easy! Rent a car with a driver by the hour. Make
          multiple stops and stay at each one for as long as you need.
        </p>
      </div>
      {cardData.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default Section2;
