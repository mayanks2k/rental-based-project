import React from "react";
import {
  FaCheck,
  FaDelicious,
  FaFacebook,
  FaLinkedinIn,
  FaPinterest,
  FaStumbleupon,
  FaTwitter,
} from "react-icons/fa6";
import { BiLogoReddit } from "react-icons/bi";
import { CiMail } from "react-icons/ci";

const Share = () => {
  return (
    <div className="border border-slate-300 rounded shadow-lg py-5 px-10 mt-5">
      <p className="text-xl font-bold">Share</p>
      <div className="flex flex-wrap gap-3 mt-3">
        <div className="bg-sky-500 p-2 rounded">
          <FaTwitter color="#fff" size={18} />
        </div>
        <div className="bg-indigo-600 p-2 rounded">
          <FaFacebook color="#fff" size={18} />
        </div>
        <div className="bg-red-500 p-2 rounded">
          <BiLogoReddit color="#fff" size={18} />
        </div>
        <div className="bg-blue-600 p-2 rounded">
          <FaLinkedinIn color="#fff" size={18} />
        </div>
        <div className="bg-rose-500 p-2 rounded">
          <FaPinterest color="#fff" size={18} />
        </div>
        <div className="bg-orange-600 p-2 rounded">
          <FaStumbleupon color="#fff" size={18} />
        </div>
        <div className="bg-blue-500 p-2 rounded">
          <FaDelicious color="#fff" size={18} />
        </div>
        <div className="bg-green-500 p-2 rounded">
          <CiMail color="#fff" size={18} />
        </div>
      </div>
    </div>
  );
};

export default Share;
