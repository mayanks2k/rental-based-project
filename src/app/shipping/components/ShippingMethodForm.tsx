import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GoTrash } from 'react-icons/go';
import { IoMdAdd } from 'react-icons/io';
import savedShippingMethods from '../json/savedShippingMethods.json'; // Update JSON file path as needed

type FormValues = {
  savedMethod: string;
  methodName: string;
  description: string;
  cost: number;
  estimatedDelivery: string;
  remember: boolean;
};

const ShippingMethodForm: React.FC = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>();

  const [selectedMethod, setSelectedMethod] = useState<string>('');

  useEffect(() => {
    if (selectedMethod) {
      const method = savedShippingMethods.find(method => method.id === selectedMethod);
      if (method) {
        Object.entries(method).forEach(([key, value]) => {
          setValue(key as keyof FormValues, value);
        });
      }
    } else {
      reset();
    }
  }, [selectedMethod, reset, setValue]);

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (data.remember) {
      localStorage.setItem('savedShippingMethod', JSON.stringify(data));
    }
    console.log('Form submitted:', data);
  };

  const clearForm = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white px-2 py-5 md:p-8 rounded-lg shadow-lg border border-green-200">
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Saved Shipping Method</label>
        <div className="flex items-center space-x-4 mb-4">
          <select
            {...register("savedMethod")}
            onChange={e => setSelectedMethod(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a method</option>
            {savedShippingMethods.map(method => (
              <option key={method.id} value={method.id}>{method.methodName}</option>
            ))}
          </select>
          <button type="button" onClick={() => setSelectedMethod('')} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <IoMdAdd />
            <span>Add New</span>
          </button>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800">Add New Shipping Method</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Method Name</label>
          <input
            {...register("methodName", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.methodName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.methodName && <p className="text-red-500 text-xs mt-1">Method name is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <input
            {...register("description")}
            className="mt-1 block w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cost</label>
          <input
            type="number"
            {...register("cost", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.cost ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.cost && <p className="text-red-500 text-xs mt-1">Cost is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Estimated Delivery Time</label>
          <input
            type="text"
            {...register("estimatedDelivery", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.estimatedDelivery ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.estimatedDelivery && <p className="text-red-500 text-xs mt-1">Estimated delivery time is required</p>}
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

export default ShippingMethodForm;
