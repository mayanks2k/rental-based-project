"use client";
import { getUrlSize } from "@/app/utils/getUrlSize";
import React, { Fragment, useState } from "react";
import { HiOutlineX, HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  linkUrls: { url: string; urlSize: number; progress: number }[];
  setLinkUrls: (urls: { url: string; urlSize: number; progress: number }[]) => void;
}

const UploadLinksModal: React.FC<ModalProps> = ({ isOpen, onClose, linkUrls, setLinkUrls }) => {
  const [urls, setUrls] = useState([{
    url: "",
    urlSize: 0,
    progress: 0,
  }])
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeUrl = (index: number, value: string) => {
    const newUrls = [...urls];
    newUrls[index].url = value.trim();
    setUrls(newUrls);
  };

  const addUrlField = () => {
    setUrls([...urls, { url: "", urlSize: 0, progress: 0 }]);
  };

  const removeUrlField = (index: number) => {
    if (urls.length > 1) {
      const newUrls = urls.filter((_, i) => i !== index);
      setUrls(newUrls);
    }
  };

  const uploadUrlsHandler = async () => {
    if (urls.some((urlObj) => urlObj.url.trim() === "")) {
      setError("All URL fields must be filled.");
      return;
    }
    setError("");
    setIsLoading(true);

    // Call the getUrlSize function for each URL
    // Assuming urls is an array of objects with a `url` property
    const urlsData = await Promise.all(
      urls.map(async (urlObj) => {
        const urlTrimmed = urlObj.url.trim();
        const urlSize = await getUrlSize(urlTrimmed);
        return {
          url: urlTrimmed,
          urlSize: Number(urlSize?.toFixed(2) || 0), // Ensure toNumber only if urlSize is not null
          progress: 0,
        };
      })
    );
    
    setLinkUrls(urls);
    setUrls([{ url: "", urlSize: 0, progress: 0 }]);
    onClose();
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <Fragment>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
        <div className="relative min-w-1/3 mx-auto my-6 bg-white rounded shadow-lg">
          <button
            className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
            onClick={() => {
              setError("");
              onClose();
            }}
          >
            <HiOutlineX className="h-6 w-6" />
          </button>
          <div className="p-6">
            <p className="text-lg font-bold mb-4">Upload Image URLs</p>
            {urls.map((urlObj, index) => (
              <div key={index} className="flex items-center mb-4">
                <input
                  type="url"
                  placeholder="Enter URL"
                  onChange={(e) => handleChangeUrl(index, e.target.value)}
                  value={urlObj.url}
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
                {index === urls.length - 1 && (
                  <button
                    type="button"
                    onClick={addUrlField}
                    className="ml-2 text-green-500 hover:text-green-700"
                  >
                    <HiOutlinePlus className="h-5 w-5" />
                  </button>
                )}
                {urls.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeUrlField(index)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <HiOutlineMinus className="h-5 w-5" />
                  </button>
                )}
              </div>
            ))}
            {error && <p className="text-rose-500 text-sm">{error}</p>}
          </div>
          <div className="flex justify-end p-4 bg-gray-100 rounded-b">
            <button
              className="px-4 py-2 mr-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
              onClick={() => {
                setError("");
                onClose();
              }}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={uploadUrlsHandler}
              disabled={isLoading}
            >
              {isLoading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
    </Fragment>
  );
};

export default UploadLinksModal;
