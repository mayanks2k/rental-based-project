// components/Modal/Modal.tsx
import React from "react";
import { RxCross2 } from "react-icons/rx";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center pt-[70px]">
      {/* <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div> */}
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full m-2">
        <div className="p-4">
          <button className="ml-auto block pb-4" onClick={onClose}>
            <RxCross2 size={25} color="red" />
          </button>
          <div className="max-h-[450px] overflow-y-scroll">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
