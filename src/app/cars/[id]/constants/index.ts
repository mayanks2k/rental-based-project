export const data = [
  {
    key: "Body",
    value: "SUV",
  },
  {
    key: "Seat",
    value: "5 seats",
  },
  {
    key: "Door",
    value: "5 doors",
  },
  {
    key: "Luggage",
    value: "368",
  },
  {
    key: "Fuel Type",
    value: "Electric",
  },
  // {
  //   key: "Engine",
  //   value: "3000",
  // },
  {
    key: "Year",
    value: "2023",
  },
  {
    key: "Mileage",
    value: "465 km",
  },
  {
    key: "Transmission",
    value: "Automatic",
  },
  {
    key: "Drive",
    value: "FWD",
  },
  {
    key: "Charging Time",
    value: "6H 7.2 kW (10-100%)",
  },
  {
    key: "Exterior Color",
    value: "Metalic",
  },
  {
    key: "Interior Color",
    value: "Silver",
  },
];
export const features = [
  "Bluetooth",
  "Multimedia Player",
  "Central Lock",
  "Sunroof",
];

export interface Car {
  id: number;
  make: string;
  model: string;
  description?: string;
  year: number;
  features?: typeof features;
  data?: typeof data;
  images?: string[];
  price?: number;
}

// constants/cars.ts
export const carsData: Record<string, Car> = {
  "1": {
    id: 1,
    make: 'Tata',
    model: 'Nexon EV',
    description: 'The Nexon EV, an electric SUV, has impressive range, swift acceleration, and ample interior space. Apart from that, the good ride and handling, sleek design, fast charging capability, and advanced features like regenerative braking make it a compelling choice.',
    year: 2023,
    features: features,
    data: data,
    images: [
      "https://storage.googleapis.com/car-rental-webapp/images/cars/nexon/car1.png",
      "https://storage.googleapis.com/car-rental-webapp/images/cars/nexon/car2.png",
      "https://storage.googleapis.com/car-rental-webapp/images/cars/nexon/car3.png",
    ],
    price: 34999,
    // Add other car details as needed
  },
  "2": {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2024,
    // Add other car details as needed
  },
  // ... Add more car objects
};

// Define the type below of vehicle variant

export interface Transmission {
  id: number;
  type: string;
}

export interface FuelType {
  id: number;
  type: string;
}

export interface MediaVariant {
  id: number;
  variant: number;
  media_type: string;
  file: string;
  description: string;
  alt: string;
  uploaded_at: string;
}

export interface Brand {
  id: number;
  name: string;
}

export interface BodyType {
  id: number;
  type: string;
}

export interface VehicleDescription {
  description: string;
}

export interface Vehicle {
  id: number;
  brand: Brand;
  model_name: string;
  body_type: BodyType;
  description: VehicleDescription;
  release_year: number;
}

export interface Features {
  features: string[];
}

export interface VehicleDetailsType {
  id: number;
  transmission: Transmission;
  fuel_type: FuelType;
  media_variant: MediaVariant[];
  prices: any[]; // Assuming prices is an empty array
  vehicle: Vehicle;
  name: string;
  power: string;
  num_of_doors: number;
  seating_capacity: number;
  range: number;
  color: string;
  ex_showroom_price: string;
  price_per_month_base: string;
  features: Features;
  created_at: string;
  modified_at: string;
}
