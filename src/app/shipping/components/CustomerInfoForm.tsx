import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GoTrash } from 'react-icons/go';
import { IoMdAdd } from 'react-icons/io';
import savedCustomers from '../json/savedCustomers.json'; // Update JSON file path as needed

type FormValues = {
  savedCustomer: string;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phoneNumber1: string;
  phoneNumber2?: string;
  address: string;
  city: string;
  postalCode: string;
  houseNumber: string;
  country: string;
  remember: boolean;
};

const CustomerInfoForm: React.FC = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>();

  const [selectedCustomer, setSelectedCustomer] = useState<string>('');

  useEffect(() => {
    if (selectedCustomer) {
      const customer = savedCustomers.find(customer => customer.id === selectedCustomer);
      if (customer) {
        Object.entries(customer).forEach(([key, value]) => {
          setValue(key as keyof FormValues, value);
        });
      }
    } else {
      reset();
    }
  }, [selectedCustomer, reset, setValue]);

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (data.remember) {
      localStorage.setItem('savedCustomer', JSON.stringify(data));
    }
    console.log('Form submitted:', data);
  };

  const clearForm = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white px-2 py-5 md:p-8 rounded-lg shadow-lg border border-green-200">
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Saved Customer</label>
        <div className="flex items-center space-x-4 mb-4">
          <select
            {...register("savedCustomer")}
            onChange={e => setSelectedCustomer(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a customer</option>
            {savedCustomers.map(customer => (
              <option key={customer.id} value={customer.id}>{customer.firstName} {customer.lastName}</option>
            ))}
          </select>
          <button type="button" onClick={() => setSelectedCustomer('')} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <IoMdAdd />
            <span>Add New</span>
          </button>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800">Add New Customer Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            {...register("firstName", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">First name is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            {...register("lastName", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">Last name is required</p>}
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
          <label className="block text-sm font-medium text-gray-700">Phone Number 1</label>
          <input
            type="tel"
            {...register("phoneNumber1", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.phoneNumber1 ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.phoneNumber1 && <p className="text-red-500 text-xs mt-1">Phone number is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number 2</label>
          <input
            type="tel"
            {...register("phoneNumber2")}
            className="mt-1 block w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            {...register("address")}
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
          <label className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            type="text"
            {...register("postalCode", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.postalCode ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.postalCode && <p className="text-red-500 text-xs mt-1">Postal code is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">House Number</label>
          <input
            {...register("houseNumber")}
            className="mt-1 block w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
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

export default CustomerInfoForm;
