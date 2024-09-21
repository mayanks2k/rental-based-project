"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import PageLayout from "@/layout/PageLayout";

interface InputFieldProps {
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface FormData {
  name: string;
  email: string;
  username: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-green-300 focus:bg-green-100 focus:ring focus:border-green-300"
      />
    </div>
  );
};

const Car = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
  };
  const inputFields = [
    { label: "Name:", type: "text", name: "name" },
    { label: "Email Address:", type: "email", name: "email" },
    { label: "Choose a Username:", type: "text", name: "username" },
    { label: "Phone:", type: "tel", name: "phone" },
    { label: "Password:", type: "password", name: "password" },
    { label: "Re-enter Password:", type: "password", name: "confirmPassword" },
  ];
  return (
    <PageLayout title="Register" imageURL="url('/assets/images/1.jpg">
      <div className="flex items-center justify-center  py-[90px]">
        <div className="bg-white p-10 rounded-lg w-full max-w-sm md:max-w-5xl space-y-8">
          <h2 className="">Don't have an account? Register now.</h2>
          <p className="leading-8 text-slate-600">
            Welcome to car. We're excited to have you on board. By creating
            an account with us, you'll gain access to a range of benefits and
            convenient features that will enhance your car rental experience.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-3">
              {inputFields.map((field) => (
                <InputField
                  key={field.name}
                  label={field.label}
                  type={field.type}
                  value={formData[field.name as keyof FormData]}
                  onChange={handleChange}
                  name={field.name}
                />
              ))}
            </div>
            <button
              type="submit"
              className="px-4  bg-green-500 text-white text-sm py-2 rounded-lg hover:bg-green-600"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Car;
