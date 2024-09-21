"use client";
import React, { ChangeEvent, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { PiDevicesFill } from "react-icons/pi";
import { FaDropbox, FaGoogleDrive } from "react-icons/fa6";
import { IoMdCloudUpload, IoMdLink } from "react-icons/io";
import UploadStatus from "./components/UploadStatus";
import { BASE_URL } from "@/constants";
import axios from "axios";
import UploadLinksModal from "./components/UploadLinksModal";
import MainLayout from "@/layout/MainLayout";
import { Header } from "@/components/Header";
import UploadStatusUrls from "./components/UploadStatusUrls";
import { getUrlSize } from "../utils/getUrlSize";

export interface SelectedFileType {
  lastModified: number;
  name: string;
  size: number;
  type: string;
  progress: number;
  file: File;
  error?: string;
}

const page = () => {
  const [selectedFiles, setSelectedFiles] = useState<SelectedFileType[]>([]);
  const [previews, setPreviews] = useState<(string | ArrayBuffer | null)[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [urls, setUrls] = useState<{ url: string, urlSize: number, progress: number }[]>([{
    url: '',
    urlSize: 0,
    progress: 0
  }]);
  const [errorMsg, setErrorMsg] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("false");
    setIsModalOpen(false);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const filesWithProgress = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      progress: 0,
      file: file,
    }));

    setSelectedFiles(filesWithProgress);

    const filePreviews = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise<string | ArrayBuffer | null>((resolve) => {
        reader.onloadend = () => resolve(reader.result);
      });
    });

    Promise.all(filePreviews).then((previews) => setPreviews(previews));
  };

  const importOptions = ["My Device", "Link"];

  const getImportIcon = (item: string) => {
    switch (item) {
      case "My Device":
        return (
          <div>
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              multiple
            />
            <PiDevicesFill
              size={40}
              className="bg-white text-sky-700 p-2 border border-slate-100 rounded-full shadow-lg"
            />
          </div>
        );
      case "Google Drive":
        return (
          <div>
            <FaGoogleDrive
              size={40}
              className="bg-white text-sky-700 p-2 border border-slate-100 rounded-full shadow-lg"
            />
          </div>
        );
      case "Dropbox":
        return (
          <div>
            <FaDropbox
              size={40}
              className="bg-white text-sky-700 p-2 border border-slate-100 rounded-full shadow-lg"
            />
          </div>
        );
      case "Link":
        return (
          <button onClick={openModal}>
            <IoMdLink
              size={40}
              className="bg-white text-sky-700 p-2 border border-slate-100 rounded-full shadow-lg"
            />
          </button>
        );
      default:
        return (
          <IoMdCloudUpload
            size={40}
            className="bg-white text-sky-700 p-2 border border-slate-100 rounded-full shadow-lg"
          />
        );
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    for (let index = 0; index < selectedFiles.length; index++) {
      try {
        const { file, name, size, type, lastModified } = selectedFiles[index];
        if (size > 128 * 1024 * 1024) {
          return alert("File size for image upload must be below 128 MB.");
        }
        let formData = new FormData();

        // Determine file type based on MIME type
        let fileType = file.type.startsWith("image/") ? "image" : "document";
        formData.append("file_type", fileType);
        formData.append(fileType, file);

        const AccessToken = localStorage.getItem("car_rental_token");

        await axios.post(`${BASE_URL}/auth/file-uploads/`, formData, {
          headers: {
            Authorization: `Bearer ${AccessToken}`,
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent: any) => {
            const progress = Math.round(
              (100 * progressEvent.loaded) / progressEvent.total
            );
            setSelectedFiles((prev: any) => {
              const newProgress = [...prev];
              newProgress[index].progress = progress;
              return newProgress;
            });
          },
        });
      } catch (error: any) {
        setSelectedFiles((prev: any) => {
          const newProgress = [...prev];
          newProgress[index].progress = 0; // Reset progress on error
          newProgress[index].error = error.message; // Store error message
          return newProgress;
        });
        console.error(error);
      }
    }
  };

  const uploadLinksHandler = async () => {
    setIsLoading(true)
    setErrorMsg('')
    const updatedUrls = [...urls];

    for (let i = 0; i < urls.length; i++) {
      try {
        // Simulate uploading and update progress
        updatedUrls[i].progress = 50; // Example progress
        setUrls([...updatedUrls]);

        const { data } = await axios.post(
          `${BASE_URL}/auth/file-uploads/`,
          {
            url: urls[i].url,
            file_type: "image",
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("car_rental_token")}`,
            },
          }
        );

        console.log(`File uploaded successfully: ${data.message}`, data);
        updatedUrls[i].progress = 100; // Mark as completed
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const responseError = error.response?.data;
          if (responseError?.code === "token_not_valid") {
            setErrorMsg("Your session has expired. Please log in again.");
          } else {
            setErrorMsg("Failed to upload the file. Please try again.");
          }
        } else {
          setErrorMsg("An unexpected error occurred. Please try again.");
        }
        updatedUrls[i].progress = 0; // Reset progress on error
      } finally {
        setUrls([...updatedUrls]);
      }
    }
    setIsLoading(false);
  };

  return (
    <MainLayout>
      <div className="px-2 sm:px-5 md:px-10 lg:px-32 bg-slate-800">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center md:min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl">
          <div className="p-6">
            <div className="flex justify-between items-start pb-1">
              <h1 className="text-3xl font-medium">File Upload</h1>
              <button className="block ml-auto">
                <RxCross2 />
              </button>
            </div>
            {errorMsg && <p className="text-rose-500 text-sm pb-1">{errorMsg}</p>}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
              <div className="">
                <div className="flex flex-col items-center justify-center border border-dashed border-slate-400 bg-blue-50 rounded-lg min-h-[400px]">
                  {/* <p>Drag and drop your files here.</p> */}
                  <p>Import from</p>
                  <div className="flex space-x-10">
                    {importOptions.map((item, index) => {
                      return (
                        <div key={index} className="mt-5">
                          <label className="cursor-pointer flex flex-col justify-center items-center space-y-2">
                            {getImportIcon(item)}
                            <p className="text-xs">{item}</p>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <p className="text-xs pt-2">* Maximum upload file size: 128MB</p>
              </div>
              <div>
                <UploadStatus
                  selectedFiles={selectedFiles}
                  setSelectedFiles={setSelectedFiles}
                />
                {urls.length > 0 && urls[0].url !== "" && <UploadStatusUrls
                  urls={urls}
                  setUrls={setUrls}
                />}
              </div>
            </div>
          </div>
          {/* Select Files or Images */}
          {selectedFiles?.length > 0 && (
            <div className="bg-slate-200 flex justify-between px-5 py-4 items-center">
              <p
                className={`${selectedFiles?.length > 0 ? "visible" : "invisible"
                  }`}
              >
                {selectedFiles.filter((item) => item.progress === 100).length} of{" "}
                {selectedFiles.length} files uploaded.
              </p>

              <button
                onClick={handleSubmit}
                type="button"
                className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-[200px]"
              >
                Next
              </button>
            </div>
          )}
          {/* Upload Links */}
          {urls?.length > 0 && urls[0].url !== "" && (
            <div className="bg-slate-200 flex justify-between px-5 py-4 items-center">
              <p
                className={`${urls?.length > 0 ? "visible" : "invisible"
                  }`}
              >
                {urls.filter((item) => item.progress === 100).length} of{" "}
                {urls.filter((item) => item.url !== "").length} files uploaded.
              </p>
              {urls.find((item) => item.progress !== 100) && <button
                onClick={uploadLinksHandler}
                type="button"
                className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Upload Links
              </button>}
            </div>
          )}
        </div>
        <UploadLinksModal
          isOpen={isModalOpen}
          onClose={closeModal}
          linkUrls={urls}
          setLinkUrls={setUrls}
        />
      </div>
    </MainLayout>
  );
};

export default page;
