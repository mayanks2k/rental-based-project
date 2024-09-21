"use client";

import React, { useState } from "react";

import PageLayout from "@/layout/PageLayout";
import Modal from "@/components/ModalComponent";

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalContent, setCurrentModalContent] = useState({
    title: '',
    content: []
  });

  const handleClose = () => {
    console.log('Modal closed');
    setIsModalOpen(false);
  };

  const handleUnderstand = () => {
    console.log('Understood button clicked');
    setIsModalOpen(false);
  };

  const modalContentArray = [
    {
      title: 'Static modal',
      content: [
        'Live demo Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.'
      ]
    },
    {
      title: 'Data Privacy Notice',
      content: [
        'When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.'
      ]
    },
    {
      title: 'Security Update',
      content: [
        'When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.'
      ]
    },
    {
      title: 'Service Maintenance',
      content: [
        'Toggle between multiple modals with some clever placement of the data-bs-target and data-bs-toggle attributes.'
      ]
    },
    {
      title: 'Feature Announcement',
      content: [
        'Vertically centered scrollable modal.'
      ]
    }
  ];
  const handleModalOpen = (item: any) => {
    setCurrentModalContent(item);
    setIsModalOpen(true);
  };

  return (
    <PageLayout title="Modal" imageURL="url('/assets/images/1.jpg')">
      <div className="container mx-auto">
        {isModalOpen && (
          <Modal
            title={currentModalContent.title}
            content={currentModalContent.content}
            closeButtonText="Close"
            understandButtonText="Understood"
            onClose={handleClose}
            onUnderstand={handleUnderstand}
          />
        )}

        <div className="py-[90px] grid grid-cols-1 sm:grid-cols-3 gap-10 px-10">
          {modalContentArray.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full max-w-md space-y-5 p-5 rounded mx-auto sm:mx-0 border"
              >
                <h4>{item.title}</h4>
                <div className="leading-8 text-slate-600">
                  {item.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <button
                  className="text-sm px-4 py-2 bg-green-500 text-white rounded"
                  onClick={() => handleModalOpen(item)}
                >
                  Launch Demo Modal
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default ModalComponent;
