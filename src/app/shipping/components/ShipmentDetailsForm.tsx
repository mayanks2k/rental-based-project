import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GoTrash } from 'react-icons/go';
import { IoMdAdd } from 'react-icons/io';
import savedShipments from '../json/savedShipments.json'; // Update JSON file path as needed

type FormValues = {
  savedShipment: string;
  trackingNumber: string;
  carrier: string;
  destination: string;
  shipmentDate: string;
  expectedDelivery: string;
  status: string;
  remember: boolean;
};

const ShipmentDetailsForm: React.FC = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>();

  const [selectedShipment, setSelectedShipment] = useState<string>('');

  useEffect(() => {
    if (selectedShipment) {
      const shipment = savedShipments.find(shipment => shipment.id === selectedShipment);
      if (shipment) {
        Object.entries(shipment).forEach(([key, value]) => {
          setValue(key as keyof FormValues, value);
        });
      }
    } else {
      reset();
    }
  }, [selectedShipment, reset, setValue]);

  const onSubmit: SubmitHandler<FormValues> = data => {
    if (data.remember) {
      localStorage.setItem('savedShipment', JSON.stringify(data));
    }
    console.log('Form submitted:', data);
  };

  const clearForm = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white px-2 py-5 md:p-8 rounded-lg shadow-lg border border-green-200">
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Saved Shipment</label>
        <div className="flex items-center space-x-4 mb-4">
          <select
            {...register("savedShipment")}
            onChange={e => setSelectedShipment(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a shipment</option>
            {savedShipments.map(shipment => (
              <option key={shipment.id} value={shipment.id}>{shipment.trackingNumber}</option>
            ))}
          </select>
          <button type="button" onClick={() => setSelectedShipment('')} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <IoMdAdd />
            <span>Add New</span>
          </button>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800">Add New Shipment Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tracking Number</label>
          <input
            {...register("trackingNumber", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.trackingNumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.trackingNumber && <p className="text-red-500 text-xs mt-1">Tracking number is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Carrier</label>
          <input
            {...register("carrier", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.carrier ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.carrier && <p className="text-red-500 text-xs mt-1">Carrier is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Destination</label>
          <input
            {...register("destination", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.destination ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.destination && <p className="text-red-500 text-xs mt-1">Destination is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Shipment Date</label>
          <input
            type="date"
            {...register("shipmentDate", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.shipmentDate ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.shipmentDate && <p className="text-red-500 text-xs mt-1">Shipment date is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Expected Delivery</label>
          <input
            type="date"
            {...register("expectedDelivery", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.expectedDelivery ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          />
          {errors.expectedDelivery && <p className="text-red-500 text-xs mt-1">Expected delivery is required</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            {...register("status", { required: true })}
            className={`mt-1 block w-full p-2 border rounded-lg ${errors.status ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
          >
            <option value="">Select status</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
            <option value="Pending">Pending</option>
            <option value="Returned">Returned</option>
            {/* Add more statuses as needed */}
          </select>
          {errors.status && <p className="text-red-500 text-xs mt-1">Status is required</p>}
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

export default ShipmentDetailsForm;
