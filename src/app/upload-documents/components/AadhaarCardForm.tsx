"use client";
import Modal from "@/components/Modal/popup/Modal";
import { BASE_URL } from "@/constants";
import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

interface AadhaarCardFormProps {
  fileStates: {
    aadhaarFile: File | null;
  };
  handleFileUpload: (fileType: string, file: File | null) => void;
}

const AadhaarCardForm: React.FC<AadhaarCardFormProps> = ({
  fileStates,
  handleFileUpload,
}) => {
  const [aadhaarName, setAadhaarName] = useState<string>("");
  const [aadhaarNumber, setAadhaarNumber] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);
  const [modal, setModal] = useState<{
    show: boolean;
    title: string;
    message: string;
    type: "error" | "success" | "warning" | "info";
  }>({
    show: false,
    title: "",
    message: "",
    type: "info",
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAadhaarName(e.target.value);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAadhaarNumber(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload("aadhaarFile", file);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileUpload("aadhaarFile", file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (aadhaarName.trim() === "" || !fileStates.aadhaarFile) {
      setModal({
        show: true,
        title: "Warning",
        message: "Please fill in all fields!",
        type: "warning",
      });
      return;
    }
    try {
      const documentBody = new FormData();
      const file = fileStates.aadhaarFile;
      if (file) {
        if (file.type === "application/pdf") {
          documentBody.append("file_type", "document");
          documentBody.append("file", file);
        } else {
          documentBody.append("file_type", "image");
          documentBody.append("image", file);
        }
      }

      const { data } = await axios.post(
        `${BASE_URL}/auth/file-uploads/`,
        documentBody,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("car_rental_token")}`,
          },
        }
      );
      setModal({
        show: true,
        title: "Success",
        message: "Document uploaded successfully!",
        type: "success",
      });
      console.log("Document uploaded successfully:", data);
      // Clear form fields after submission
      setAadhaarName("");
      setAadhaarNumber("");
      handleFileUpload("aadhaarFile", null);
    } catch (error) {
      setModal({
        show: true,
        title: "Error",
        message: "Error uploading Aadhaar Card!",
        type: "error",
      });
      console.error("Error uploading Aadhaar Card:", error);
    }
  };

  useEffect(() => {
    if (fileStates.aadhaarFile) {
      const file = fileStates.aadhaarFile;
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);

      // Clean up the URL object after the component is unmounted or aadhaarFile changes
      return () => {
        URL.revokeObjectURL(previewUrl);
      };
    } else {
      setPreview(null);
    }
  }, [fileStates.aadhaarFile]);

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-6 rounded-lg shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="lg:w-1/2 p-4 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Aadhaar Card Form</h2>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="aadhaarName"
          >
            Name
          </label>
          <input
            type="text"
            id="aadhaarName"
            name="aadhaarName"
            value={aadhaarName}
            onChange={handleNameChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="aadhaarNumber"
          >
            Aadhaar Number
          </label>
          <input
            type="number"
            id="aadhaarNumber"
            name="aadhaarNumber"
            value={aadhaarNumber}
            onChange={handleNumberChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="aadhaarFile"
          >
            Upload Aadhaar Card
          </label>
          <div
            className="w-full p-4 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-green-500"
            onClick={handleDivClick}
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              id="aadhaarFile"
              name="aadhaarFile"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
              ref={fileInputRef}
              required
            />
            {fileStates.aadhaarFile ? (
              <p className="text-green-500">
                Uploaded file: {fileStates.aadhaarFile.name}
              </p>
            ) : (
              <p className="text-gray-500">
                Drag 'n' drop some files here, or click to select files
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit
        </button>
      </form>
      <div className="lg:w-1/2 p-4 flex items-center justify-center bg-white rounded-lg shadow-md mt-4 lg:mt-0 lg:ml-4">
        {preview ? (
          <div className="w-full h-64 lg:h-full flex justify-center items-center">
            {fileStates.aadhaarFile?.type === "application/pdf" ? (
              <iframe
                src={preview}
                className="w-full h-full border rounded-md"
              />
            ) : (
              <img
                src={preview}
                alt="File preview"
                className="w-full h-full border rounded-md object-cover"
              />
            )}
          </div>
        ) : (
          <p className="text-gray-500">
            File preview will be shown here after upload.
          </p>
        )}
      </div>
      <Modal
        show={modal.show}
        onClose={() => setModal({ ...modal, show: false })}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
    </div>
  );
};

export default AadhaarCardForm;
