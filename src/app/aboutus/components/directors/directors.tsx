"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
import { Quality, data } from "../../constants";

export const Directors = () => {
  const [quality, setQuality] = useState("LUXURY");

  const socialIcons = [
    { icon: <FaFacebookF color="#fff" />, key: "facebook" },
    { icon: <FaTwitter color="#fff" />, key: "twitter" },
    { icon: <FaLinkedinIn color="#fff" />, key: "linkedin" },
    { icon: <FaPinterest color="#fff" />, key: "pinterest" },
  ];

  return (
    <div>
      <div
        className="py-20"
        style={{
          backgroundImage: "url(/assets/images/aboutus/meetingroom.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <h2 className="text-center text-4xl text-white font-bold">
          Board of Directors
        </h2>
        <div className="grid grid-cols-4 gap-8 w-10/12 mx-auto my-10">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative overflow-hidden">
                <Image
                  className="transition-transform duration-500 ease-in-out hover:scale-110"
                  src={`/assets/images/aboutus/director${index + 1}.jpg`}
                  width={300}
                  height={450}
                  alt="director"
                />
                <div className="flex items-center space-x-3 absolute -translate-x-1/2 left-1/2 bottom-10">
                  {socialIcons.map((social) => (
                    <div key={social.key} className="bg-green-500 p-2 rounded">
                      {social.icon}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-white text-lg font-bold pt-3">{item.name}</p>
              <p className="text-slate-200">{item.designation}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};
