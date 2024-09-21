import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        className="px-3 py-1 mx-1 text-white bg-teal-600 rounded hover:bg-teal-500 disabled:opacity-50"
        onClick={handleFirstPage}
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        className="px-3 py-1 mx-1 text-white bg-sky-600 rounded hover:bg-sky-400 disabled:opacity-50"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        <FaAngleLeft />
      </button>
      {getPageNumbers().map((number) => (
        <button
          key={number}
          className={`px-3 py-1 mx-1 border border-gray-300 rounded hover:bg-teal-500 ${
            currentPage === number ? "bg-gray-300 cursor-not-allowed" : ""
          }`}
          onClick={() => handlePageClick(number)}
          disabled={currentPage === number}
        >
          {number}
        </button>
      ))}
      <button
        className="px-3 py-1 mx-1 text-white bg-sky-600 rounded hover:bg-sky-400 disabled:opacity-50"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight />
      </button>
      <button
        className="px-3 py-1 mx-1 text-white bg-teal-600 rounded hover:bg-teal-500 disabled:opacity-50"
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
