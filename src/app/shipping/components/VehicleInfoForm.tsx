import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GoTrash } from 'react-icons/go';
import { IoMdAdd } from 'react-icons/io';
import savedVehicles from '../json/savedVehicles.json'; // Update JSON file path as needed

type FormValues = {
  savedVehicle: string;
  type: string;
  brand: string;
  model: string;
  year: string;
  color: string;
  registrationNumber: string;
  pricePerDay: string;
  availability: string;
  remember: boolean;
};

const VehicleInfoForm: React.FC = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>();

  const [selectedVehicle, setSelectedVehicle] = useState<string>('');

  useEffect(() => {
    if (selectedVehicle) {
      const vehicle = savedVehicles.find(vehicle => vehicle.id === selectedVehicle);
      if (vehicle) {
        Object.entries(vehicle).forEach(([key, value]) => {
          setValue(key as keyof FormValues, value);
        });
      }
    } else {
      reset();
    }
  }, [selectedVehicle, reset, setValue]);

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (data.remember) {
      localStorage.setItem('savedVehicle', JSON.stringify(data));
    }
    console.log('Form submitted:', data);
  };

  const clearForm = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white px-2 py-5 md:p-8 rounded-lg shadow-lg border border-green-200">
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Saved Vehicle</label>
        <div className="flex items-center space-x-4 mb-4">
          <select
            {...register("savedVehicle")}
            onChange={e => setSelectedVehicle(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a vehicle</option>
            {savedVehicles.map(vehicle => (
              <option key={vehicle.id} value={vehicle.id}>{`${vehicle.brand} ${vehicle.model}`}</option>
            ))}
          </select>
          <button type="button" onClick={() => setSelectedVehicle('')} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <IoMdAdd />
            <span>Add New</span>
          </button>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800">Add New Vehicle Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            {...register("type", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.type ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          >
            <option value="">Select a type</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Auto">Auto</option>
            <option value="Bus">Bus</option>
            {/* Add more vehicle types as needed */}
          </select>
          {errors.type && <p className="text-red-500 text-xs mt-1">Type is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Brand</label>
          <input
            {...register("brand", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.brand ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.brand && <p className="text-red-500 text-xs mt-1">Brand is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Model</label>
          <input
            {...register("model", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.model ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.model && <p className="text-red-500 text-xs mt-1">Model is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <input
            type="number"
            {...register("year", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.year ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.year && <p className="text-red-500 text-xs mt-1">Year is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Color</label>
          <input
            {...register("color", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.color ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.color && <p className="text-red-500 text-xs mt-1">Color is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Registration Number</label>
          <input
            {...register("registrationNumber", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.registrationNumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.registrationNumber && <p className="text-red-500 text-xs mt-1">Registration number is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price Per Day</label>
          <input
            type="number"
            {...register("pricePerDay", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.pricePerDay ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.pricePerDay && <p className="text-red-500 text-xs mt-1">Price per day is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Availability</label>
          <select
            {...register("availability", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.availability ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          >
            <option value="">Select availability</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
            {/* Add more availability options as needed */}
          </select>
          {errors.availability && <p className="text-red-500 text-xs mt-1">Availability is required</p>}
        </div>
      </div>

      <div className="flex justify-between items-center pt-6">
        <button type="button" onClick={clearForm} className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg">
          <GoTrash />
          <span>Clear Form</span>
        </button>
        <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600">Submit</button>
      </div>
    </form>
  );
};

export default VehicleInfoForm;
