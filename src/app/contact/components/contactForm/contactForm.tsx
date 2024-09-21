import React from "react";

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  errors: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="max-w-full bg-white">
      <div>
        <h1 className="text-2xl font-bold mb-5">Send us a message?</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-x-2 my-5">
          <label htmlFor="reason" className="font-medium text-lg">
            Reason<span className="text-red-500">*</span>
          </label>
          <select
            name="reason"
            className="border border-slate-200 px-2 py-1 w-1/3 rounded outline-none bg-gray-50 
            placeholder-gray-500 focus:bg-green-100 focus:border-green-200 focus:ring 
            focus:ring-green-100 focus:outline-none text-slate-800
        "
          >
            <option value="Subscription">Subscription</option>
            <option value="Customer">Customer</option>
            <option value="Business">Business</option>
            <option value="Drive">Drive</option>
          </select>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row gap-4 mb-4 py-2">
          <div className="flex-1 min-w-[100px]">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full px-3 py-2 border bg-gray-50 border-gray-200 rounded-md placeholder-gray-500 focus:bg-green-100 focus:border-green-200 focus:ring focus:ring-green-100 focus:outline-none"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="flex-1 min-w-[100px]">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full px-3 py-2 border bg-gray-50 border-gray-200 rounded-md placeholder-gray-500 focus:bg-green-100 focus:border-green-200 focus:ring focus:ring-green-100 focus:outline-none"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="flex-1 min-w-[100px]">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="Your Phone"
              onChange={handleChange}
              className="w-full px-3 py-2 border bg-gray-50 border-gray-200 rounded-md placeholder-gray-500 focus:bg-green-100 focus:border-green-200 focus:ring focus:ring-green-100 focus:outline-none"
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
        <div className="mb-4 py-2">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Your Message"
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 bg-gray-50 border-gray-200  rounded-md placeholder-gray-500 focus:bg-green-100 focus:border-green-200 focus:ring focus:ring-green-100 focus:outline-none"
            rows={7}
            required
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button className="max-w-xs bg-[#1ECB15] text-white py-2 px-4 rounded-md hover:bg-green-400 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};
