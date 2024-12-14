import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePagination } from '../../hooks/usePagination';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const { paginationRange, totalPages } = usePagination({
    totalItems,
    itemsPerPage,
    currentPage,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <nav className="flex items-center justify-center space-x-2">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={`p-2 rounded-full ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-amber-600 hover:bg-amber-50'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === '...') {
          return (
            <span key={index} className="px-4 py-2">
              ...
            </span>
          );
        }

        return (
          <button
            key={index}
            onClick={() => onPageChange(Number(pageNumber))}
            className={`px-4 py-2 rounded-full ${
              currentPage === pageNumber
                ? 'bg-amber-600 text-white'
                : 'text-amber-600 hover:bg-amber-50'
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-amber-600 hover:bg-amber-50'
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
}