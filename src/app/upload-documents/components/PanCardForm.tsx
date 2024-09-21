"use client";
import Modal from "@/components/Modal/popup/Modal";
import { BASE_URL } from "@/constants";
import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

interface PanCardFormProps {
  fileStates: {
    panFile: File | null;
  };
  handleFileUpload: (fileType: string, file: File | null) => void;
}

const PanCardForm: React.FC<PanCardFormProps> = ({
  fileStates,
  handleFileUpload,
}) => {
  const [panName, setPanName] = useState<string>("");
  const [panNumber, setPanNumber] = useState<string>("");
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
    setPanName(e.target.value);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPanNumber(e.target.value.toUpperCase());
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload("panFile", file);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileUpload("panFile", file);
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
    if (panName.trim() === "" || !fileStates.panFile) {
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
      const file = fileStates.panFile;
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
      setPanName("");
      setPanNumber("");
      handleFileUpload("panFile", null);
    } catch (error) {
      setModal({
        show: true,
        title: "Error",
        message: "Error uploading PAN Card!",
        type: "error",
      });
      console.error("Error uploading PAN Card:", error);
    }
  };

  useEffect(() => {
    if (fileStates.panFile) {
      const file = fileStates.panFile;
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);

      // Clean up the URL object after the component is unmounted or panFile changes
      return () => {
        URL.revokeObjectURL(previewUrl);
      };
    } else {
      setPreview(null);
    }
  }, [fileStates.panFile]);

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 p-6 rounded-lg shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="lg:w-1/2 p-4 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">PAN Card Form</h2>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="panName"
          >
            Name
          </label>
          <input
            type="text"
            id="panName"
            name="panName"
            value={panName}
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
            PAN Number
          </label>
          <input
            type="text"
            id="aadhaarNumber"
            name="aadhaarNumber"
            value={panNumber}
            onChange={handleNumberChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="panFile"
          >
            Upload PAN Card
          </label>
          <div
            className="w-full p-4 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-green-500"
            onClick={handleDivClick}
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              id="panFile"
              name="panFile"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.jpg,.jpeg,.png"
              ref={fileInputRef}
              required
            />
            {fileStates.panFile ? (
              <p className="text-green-500">
                Uploaded file: {fileStates.panFile.name}
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
            {fileStates.panFile?.type === "application/pdf" ? (
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

export default PanCardForm;
