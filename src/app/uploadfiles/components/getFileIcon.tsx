import React from "react";
import {
  AiOutlineFileExcel,
  AiOutlineFileImage,
  AiOutlineFileJpg,
  AiOutlineFilePdf,
  AiOutlineFilePpt,
  AiOutlineFileText,
  AiOutlineFileWord,
  AiOutlineFileZip,
} from "react-icons/ai";
import { BiSolidFilePng } from "react-icons/bi";

const getFileIcon = (fileType: string) => {
  switch (fileType) {
    case "pdf":
      return <AiOutlineFilePdf size={50} className="text-red-500" />;
    case "png":
      return <BiSolidFilePng size={50} className="text-blue-500" />;
    case "jpg":
      return <AiOutlineFileJpg size={50} className="text-orange-500" />;
    case "doc":
    case "docx":
      return <AiOutlineFileWord size={50} className="text-blue-700" />;
    case "xlsx":
      return <AiOutlineFileExcel size={50} className="text-green-500" />;
    case "ppt":
    case "pptx":
      return <AiOutlineFilePpt size={50} className="text-orange-600" />;
    case "text":
      return <AiOutlineFileText size={50} className="text-gray-700" />;
    case "image":
      return <AiOutlineFileImage size={50} className="text-purple-500" />;
    case "zip":
      return <AiOutlineFileZip size={50} className="text-yellow-500" />;
    default:
      return <AiOutlineFileText size={50} className="text-gray-700" />;
  }
};

export default getFileIcon;
