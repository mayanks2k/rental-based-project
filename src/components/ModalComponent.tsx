'use client';
import React from 'react';

interface ModalProps {
  title: string;
  content: string[];
  closeButtonText: string;
  understandButtonText: string;
  onClose: () => void;
  onUnderstand: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  closeButtonText,
  understandButtonText,
  onClose,
  onUnderstand
}) => {
  return (
    <div
  id="static-modal"
  data-modal-backdrop="static"
  aria-hidden="true"
  className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50"
>
  <div className="relative w-full max-w-2xl mx-auto h-full md:h-auto">
    <div className="bg-white rounded-lg shadow dark:bg-gray-700 flex flex-col max-h-screen">
      <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={onClose}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>

      <div className="p-4 md:p-5 flex-1 overflow-y-auto">
        {content.map((paragraph, index) => (
          <p key={index} className="text-base leading-relaxed text-gray-500">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button
          type="button"
          className="px-6 py-2 text-sm font-medium text-white bg-green-500 rounded-lg focus:outline-none"
          onClick={onClose}
        >
          {closeButtonText}
        </button>
        <button
          type="button"
          className="px-6 py-2 ms-3 text-sm font-medium text-white bg-green-500 rounded-lg focus:outline-none"
          onClick={onUnderstand}
        >
          {understandButtonText}
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Modal;
