'use client';

import React, { useCallback, useMemo } from 'react';
import { Button } from 'shared/ui';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { divideIntoSegments } from '../lib/divide-into-segments';

export type GridNavigationProps = {
  currentPage: number;
  amountPerPage: number;
  totalCount: number;
  pageParamName?: string;
};

const PageNavigation = ({
  currentPage,
  amountPerPage,
  totalCount,
  pageParamName = 'page',
}: GridNavigationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pagesCount = Math.ceil(totalCount / amountPerPage);
  const [startPages, nearPages, endPages] = useMemo(
    () => divideIntoSegments(pagesCount, 3, currentPage),
    [currentPage, pagesCount],
  );

  const createQueryString = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams);

      params.set(pageParamName, String(page));

      return params.toString();
    },
    [pageParamName, searchParams],
  );

  const onChange = (page: number) => {
    router.push(`${pathname}?${createQueryString(page)}`);
  };

  return (
    <div className="flex justify-center items-center gap-6">
      <Button
        disabled={currentPage <= 1}
        size={'sm'}
        onClick={() => onChange(currentPage - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-6"
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
      <div className="flex items-center gap-3 h-6">
        {startPages.map((val) => (
          <Button
            variant={'secondary'}
            size={'sm'}
            key={val}
            disabled={val === currentPage}
            onClick={() => onChange(val)}
          >
            {val}
          </Button>
        ))}
        {startPages.length > 0 && <span>...</span>}
        {nearPages.map((val) => (
          <Button
            variant={'secondary'}
            size={'sm'}
            key={val}
            disabled={val === currentPage}
            onClick={() => onChange(val)}
          >
            {val}
          </Button>
        ))}
        {endPages.length > 0 && <span>...</span>}
        {endPages.map((val) => (
          <Button
            variant={'secondary'}
            size={'sm'}
            key={val}
            disabled={val === currentPage}
            onClick={() => onChange(val)}
          >
            {val}
          </Button>
        ))}
      </div>
      <Button
        disabled={currentPage * amountPerPage >= totalCount}
        size={'sm'}
        onClick={() => onChange(currentPage + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-6"
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

export default PageNavigation;
