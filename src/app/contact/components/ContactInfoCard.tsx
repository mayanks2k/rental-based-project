import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdMarkEmailUnread } from "react-icons/md";

const contactCardData = [
  {
    icon: <FaPhoneAlt size={50} />,
    label: "Phone",
    content: "Connect with us via number Call us on",
    info: "1800-257-3265",
  },
  {
    icon: <MdMarkEmailUnread size={50} />,
    label: "Email",
    content: "Connect with us via Email Mail us on",
    info: "connect@gocar.com",
  },
  {
    icon: <MdLocationOn size={50} />,
    label: "Location",
    content: "Always here for you",
    info: "MaberthVilla, Caranzalem, North Goa, Goa (India), 403002",
  },
];

const ContactInfoCard = () => {
  return (
    <div className="flex flex-col items-center justify-between my-10 md:flex-row gap-3 w-full">
      {contactCardData.map((item, index) => {
        return (
          <div
            key={index}
            className="border w-full bg-green-50 border-slate-200 shadow-xl rounded-xl p-4 md:py-12  text-center"
          >
            <div className="flex justify-center text-green-500 ">{item.icon}</div>
            <div>
            <p className="font-bold text-2xl ">{item.label}</p>
            <p className="text-slate-500 sm:my-7 md:my-4 mx-auto w-10/12 h-20 md:h-12 ">{item.content}</p>
            </div>
            <p className="text-green-400 font-semibold">{item.info}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfoCard;
