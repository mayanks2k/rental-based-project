'use client'
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface AccordionItemProps {
  question: string;
  answer: string;
  listItem?: { tagline?: string; summary?: string }[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, listItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full px-4 py-2 text-left focus:outline-none rounded"
      >
        <span className="text-lg font-medium text-primary">{question}</span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-primary" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-primary" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 text-slate-800/80 bg-gradient-to-b from-green-100 to-green-50 rounded">
          {answer}
          {listItem && (
            <ul className="mt-4 space-y-2">
              {listItem.map((item, index) => (
                <li key={index} className="pl-4 border-l-2 border-primary text-slate-700/80">
                  {item.tagline&&<h3 className="text-base font-semibold">{item.tagline}</h3>}
                  {item.summary&&<p className="text-sm">{item.summary}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
