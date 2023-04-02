'use client';

import React from 'react';
import { Button } from '@components/ui';

type Props = {
  currentPage: number;
  amountPerPage: number;
  totalCount: number;
  onPageChange: (page: number) => void;
};

const FilmsGridNavigation = ({
  currentPage,
  amountPerPage,
  totalCount,
  onPageChange,
}: Props) => {
  const pagesCount = Math.ceil(totalCount / amountPerPage);

  return (
    <div className="flex justify-center items-center gap-6">
      <Button
        disabled={currentPage <= 1}
        size={'sm'}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Button>
      <div className="flex items-center gap-3">
        {Array.from({ length: pagesCount }, (_, i) => i + 1).map((i) => (
          <Button
            variant={'secondary'}
            size={'sm'}
            key={i}
            disabled={i === currentPage}
            onClick={() => onPageChange(i)}
          >
            {i}
          </Button>
        ))}
      </div>
      <Button
        disabled={currentPage * amountPerPage >= totalCount}
        size={'sm'}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Button>
    </div>
  );
};

export default FilmsGridNavigation;
