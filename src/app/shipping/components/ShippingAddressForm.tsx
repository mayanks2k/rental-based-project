import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GoTrash } from 'react-icons/go';
import { IoMdAdd } from 'react-icons/io';
import savedShippingAddresses from '../json/savedShippingAddresses.json'; // Assuming a JSON file for saved addresses

type FormValues = {
    savedAddress: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    roadOrAreaName: string;
    nearbyLandmark?: string;
    houseOrBuildingNumber: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    pinCode: string;
    country: string;
    remember: boolean;
};

const ShippingAddressForm: React.FC = () => {
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormValues>();

    const [selectedAddress, setSelectedAddress] = useState<string>('');

    useEffect(() => {
        if (selectedAddress) {
            const address = savedShippingAddresses.find(addr => addr.id === selectedAddress);
            if (address) {
                Object.entries(address).forEach(([key, value]) => {
                    setValue(key as keyof FormValues, value);
                });
            }
        } else {
            reset();
        }
    }, [selectedAddress, reset, setValue]);

    const onSubmit: SubmitHandler<FormValues> = data => {
        if (data.remember) {
            localStorage.setItem('savedAddress', JSON.stringify(data));
        }
        console.log('Form submitted:', data);
    };

    const clearForm = () => {
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white px-2 py-5 md:p-8 rounded-lg shadow-lg border border-green-200">
            <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Saved Addresses</label>
                <div className="flex items-center space-x-4 mb-4">
                    <select
                        {...register("savedAddress")}
                        onChange={e => setSelectedAddress(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="">Select an address</option>
                        {savedShippingAddresses.map(address => (
                            <option key={address.id} value={address.id}>{address.fullName}</option>
                        ))}
                    </select>
                    <button type="button" onClick={() => setSelectedAddress('')} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                        <IoMdAdd />
                        <span>Add New</span>
                    </button>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800">Add a New Address</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        {...register("fullName", { required: "Full name is required" })}
                        className={`mt-1 block w-full p-2 border rounded-lg ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        className={`mt-1 block w-full p-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        {...register("phoneNumber", { required: "Phone number is required" })}
                        className={`mt-1 block w-full p-2 border rounded-lg ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Road or Area Name (Colony)</label>
                    <input
                        {...register("roadOrAreaName", { required: "Road or area name is required" })}
                        className={`mt-1 block w-full p-2 border rounded-lg ${errors.roadOrAreaName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                    />
                    {errors.roadOrAreaName && <p className="text-red-500 text-xs mt-1">{errors.roadOrAreaName.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Nearby Landmark</label>
                    <input
                        {...register("nearbyLandmark")}
                        className="mt-1 block w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">House Number or Building Number</label>
                    <input
                        {...register("houseOrBuildingNumber", { required: "House or building number is required" })}
                        className={`mt-1 block w-full p-2 border rounded-lg ${errors.houseOrBuildingNumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                    />
                    {errors.houseOrBuildingNumber && <p className="text-red-500 text-xs mt-1">{errors.houseOrBuildingNumber.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
                    <input
                        {...register("addressLine1", { required: "Address line 1 is required" })}
                        className={`mt-1 block w-full p-2 border rounded-lg ${errors.addressLine1 ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                    />
                    {errors.addressLine1 && <p className="text-red-500 text-xs mt-1">{errors.addressLine1.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
                    <input
                        {...register("addressLine2")}
                        className="mt-1 block w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                        {...register("city", { required: "City is required" })}
                        className={`mt-1 block w-full p-2 border rounded-lg ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <select
                        {...register("state", { required: "State is required" })}
                        className={`mt-1 block w-full p-2 border rounded-lg ${errors.state ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                    >
                        <option value="">Select a state</option>
                        <option value="California">California</option>
                        <option value="New York">New York</option>
                        <option value="Texas">Texas</option>
                        {/* Add more states as needed */}
                    </select>
                    {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Pin Code</label>
                    <input
                        {...register("pinCode", { required: "Pin code is required" })}
                        className={`mt-1 block w-full p-2 border rounded-lg ${errors.pinCode ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                    />
                    {errors.pinCode && <p className="text-red-500 text-xs mt-1">{errors.pinCode.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Country</label>
                    <select
                        {...register("country", { required: "Country is required" })}
                        className={`mt-1 block w-full p-2 border rounded-lg ${errors.country ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-green-500`}
                    >
                        <option value="">Select a country</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="India">India</option>
                        {/* Add more countries as needed */}
                    </select>
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
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

export default ShippingAddressForm;
