"use client";
import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { getFileNameAndExtension } from "@/app/utils/fileUtils";
import getFileIcon from "./getFileIcon";

const UploadStatus = ({
  selectedFiles,
  setSelectedFiles,
}: {
  selectedFiles: any;
  setSelectedFiles: any;
}) => {
  const removeFileHandle = (index: number) => {
    const updatedFiles = selectedFiles.filter(
      (_: any, ind: number) => ind !== index
    );
    setSelectedFiles(updatedFiles);
  };

  return (
    <div className="">
      {selectedFiles.map((item: any, index: number) => {
        return (
          <div key={index} className="mb-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                {getFileIcon(getFileNameAndExtension(item.name).extension)}
                <div>
                  <p className="text-sm text-gray-600">
                    File: {getFileNameAndExtension(item.name).name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Size: {(item.size / 1024).toFixed(2)} KB
                  </p>
                </div>
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
                  <button onClick={() => removeFileHandle(index)}>
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

export default UploadStatus;
