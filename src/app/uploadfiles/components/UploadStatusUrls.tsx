"use client";
import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaFileImage } from "react-icons/fa6";

interface UploadStatusUrlsProps {
  urls: { url: string; urlSize: number; progress: number }[];
  setUrls: (urls: { url: string; urlSize: number; progress: number }[]) => void;
}

const UploadStatusUrls: React.FC<UploadStatusUrlsProps> = ({
  urls,
  setUrls,
}) => {
  const removeUrlHandle = (index: number) => {
    const updatedUrls = urls.filter((_, ind) => ind !== index);
    setUrls(updatedUrls);
  };

  return (
    <div className="">
      {urls.map((item, index) => {
        return (
          <div key={index} className="mb-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <FaFileImage size={50} className="text-blue-500" />
                <p className="text-sm text-gray-600">
                  Size: {(item.urlSize / 1024).toFixed(2)} KB
                </p>
              </div>
              <div>
                {item.progress === 100 ? (
                  <button>
                    <IoCheckmarkCircleOutline
                      size={25}
                      className="text-teal-400"
                    />
                  </button>
                ) : (
                  <button onClick={() => removeUrlHandle(index)}>
                    <RxCrossCircled size={25} className="text-slate-400" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex justify-between mb-1">
              <span></span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">
                {item?.progress || 0}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-1.5 rounded-full"
                style={{ width: `${item?.progress || 0}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UploadStatusUrls;
