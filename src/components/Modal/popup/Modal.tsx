import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type: "error" | "success" | "warning" | "info";
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  title,
  message,
  type,
}) => {
  if (!show) {
    return null;
  }

  let bgColor = "bg-gray-100";
  let icon = null;
  let iconColor = "text-gray-500";

  if (type === "error") {
    bgColor = "bg-red-100";
    icon = <AiOutlineCloseCircle className="text-red-500 w-6 h-6" />;
    iconColor = "text-red-500";
  } else if (type === "success") {
    bgColor = "bg-green-100";
    icon = <AiOutlineCheckCircle className="text-green-500 w-6 h-6" />;
    iconColor = "text-green-500";
  } else if (type === "warning") {
    bgColor = "bg-yellow-100";
    icon = <AiOutlineWarning className="text-yellow-500 w-6 h-6" />;
    iconColor = "text-yellow-500";
  } else if (type === "info") {
    bgColor = "bg-blue-100";
    icon = <AiOutlineInfoCircle className="text-blue-500 w-6 h-6" />;
    iconColor = "text-blue-500";
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`p-6 rounded-lg shadow-lg ${bgColor} max-w-sm w-full`}>
        <div className="flex items-center">
          {icon && <div className="mr-3">{icon}</div>}
          <h2 className={`text-lg font-bold ${iconColor}`}>{title}</h2>
        </div>
        <p className="mt-2 text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
