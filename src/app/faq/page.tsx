"use client"
import React, { useState } from 'react';
import AccordionItem from './components/AccordionItem';
import PageLayout from '@/layout/PageLayout';
import { faqsData, FAQCategory } from './constants';

const FAQPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('Rider');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryChange = (category: FAQCategory) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false); // Close dropdown after selecting an option
  };

  return (
    <PageLayout title="FAQ" imageURL="url('/assets/images/cars/carsbg.jpg')">
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Find answers to our most frequently asked questions below. If you
            have any other inquiries, feel free to contact our support team.
          </p>
          <div className="mt-8">
            {/* Dropdown for small screens */}
            <div className="sm:hidden relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 bg-slate-700 text-gray-100 rounded w-full text-left"
              >
                {selectedCategory}
                <span className="float-right">{isDropdownOpen ? '▲' : '▼'}</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded shadow-lg">
                  {Object.keys(faqsData).map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category as FAQCategory)}
                      className={`block w-full text-left px-4 py-2 ${selectedCategory === category ? 'bg-green-500 text-white' : 'bg-white text-gray-700'}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Buttons for larger screens */}
            <div className="hidden sm:flex flex-wrap justify-center gap-4">
              {Object.keys(faqsData).map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category as FAQCategory)}
                  className={`px-4 py-2 rounded ${
                    selectedCategory === category
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 max-w-3xl mx-auto space-y-6">
          {faqsData[selectedCategory].map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              listItem={faq.listItem}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQPage;
