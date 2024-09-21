import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GoTrash } from 'react-icons/go';
import { IoMdAdd } from 'react-icons/io';
import savedBillingAddresses from '../json/savedBillingAddresses.json';

type FormValues = {
  savedBillingAddress: string;
  fullName: string;
  companyName?: string;
  email: string;
  phoneNumber: string;
  billingAddressLine1: string;
  billingAddressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  remember: boolean;
};

const BillingAddressForm: React.FC = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>();

  const [selectedBillingAddress, setSelectedBillingAddress] = useState<string>('');

  useEffect(() => {
    if (selectedBillingAddress) {
      const address = savedBillingAddresses.find(address => address.id === selectedBillingAddress);
      if (address) {
        Object.entries(address).forEach(([key, value]) => {
          setValue(key as keyof FormValues, value);
        });
      }
    } else {
      reset();
    }
  }, [selectedBillingAddress, reset, setValue]);

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (data.remember) {
      localStorage.setItem('savedBillingAddress', JSON.stringify(data));
    }
    console.log('Form submitted:', data);
  };

  const clearForm = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white px-2 py-5 md:p-8 rounded-lg shadow-lg border border-green-200">
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Saved Billing Address</label>
        <div className="flex items-center space-x-4 mb-4">
          <select
            {...register("savedBillingAddress")}
            onChange={e => setSelectedBillingAddress(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a billing address</option>
            {savedBillingAddresses.map(address => (
              <option key={address.id} value={address.id}>{address.fullName}</option>
            ))}
          </select>
          <button type="button" onClick={() => setSelectedBillingAddress('')} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <IoMdAdd />
            <span>Add New</span>
          </button>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800">Add a New Billing Address</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            {...register("fullName", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">Full Name is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            {...register("companyName")}
            className="mt-1 block w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            {...register("phoneNumber", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">Phone number is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
          <input
            type="text"
            {...register("billingAddressLine1", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.billingAddressLine1 ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.billingAddressLine1 && <p className="text-red-500 text-xs mt-1">Address Line 1 is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
          <input
            type="text"
            {...register("billingAddressLine2")}
            className="mt-1 block w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            {...register("city", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">City is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            {...register("state", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.state ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.state && <p className="text-red-500 text-xs mt-1">State is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            type="text"
            {...register("postalCode", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.postalCode ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.postalCode && <p className="text-red-500 text-xs mt-1">Postal code is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select {...register("country", { required: true })} className={`mt-1 block w-full p-2 border rounded-lg ${errors.country ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}>
            <option value="">Select a country</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
            {/* Add more countries as needed */}
          </select>
          {errors.country && <p className="text-red-500 text-xs mt-1">Country is required</p>}
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

export default BillingAddressForm;