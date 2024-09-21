import React from "react";
import { FaTimes } from "react-icons/fa";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed z-50 top-0 right-0 h-screen p-4 overflow-y-auto transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } bg-white w-80 dark:bg-gray-800`}
    >
      <button type="button" onClick={onClose}>
        <FaTimes size={24} />
      </button>
      {children}
    </div>
  );
};

export default Drawer;
