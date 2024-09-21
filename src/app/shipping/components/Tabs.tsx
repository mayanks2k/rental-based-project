import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface TabsProps {
  tabs: string[];
  activeTab: number;
  onChange: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const updateScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateScrollButtons();
    };

    const handleScroll = () => {
      updateScrollButtons();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleResize(); // Initial check

      window.addEventListener('resize', handleResize);
      return () => {
        if (container) {
          container.removeEventListener('scroll', handleScroll);
        }
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {showLeftButton && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Scroll Left"
        >
          <FaChevronLeft />
        </button>
      )}
      <div
        className="overflow-x-auto whitespace-nowrap scroll-smooth"
        ref={containerRef}
        onScroll={updateScrollButtons}
      >
        <div className="flex justify-between space-x-2 border border-gray-200 p-1 rounded-lg shadow-lg">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => onChange(index)}
              className={` px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out ${
                activeTab === index
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {showRightButton && (
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Scroll Right"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default Tabs;
