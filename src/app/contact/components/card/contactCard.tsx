import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { ImFilePdf } from "react-icons/im";

interface ContactCardProps {
  title: string;
  address: string;
  phoneNumber: string;
  email: string;
  brochureUrl: string;
  className?: string; // Make className optional
}

export const ContactCard: React.FC<ContactCardProps> = ({ title, address, phoneNumber, email, brochureUrl, className }) => {
  return (
    <div className={ `min-w-sm bg-white rounded-lg shadow-md p-6 mb-10 border border-slate-300 ${className}`}>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex items-center m-2">
        <FaMapMarkerAlt className="h-12 w-12 mr-2 text-green-400" />
        <p>{address}</p>
      </div>
      <div className="flex items-center m-2">
        <FaPhone className="h-3 w-3 mr-2 text-green-400"/>
        <p>{phoneNumber}</p>
      </div>
      <div className="flex items-center m-2 text-green-400 ">
        <FaEnvelope className="h-4 w-4 mr-2 text-green-400" />
        <p>{email}</p>
      </div>
      {/* <div className="flex items-center m-2">
      <ImFilePdf className="h-4 w-4 mr-2 text-green-400" />
      <a href={brochureUrl} className="text-green-400 hover:underline">
        Download Brochure
      </a>
      </div> */}
    </div>
  );
};
