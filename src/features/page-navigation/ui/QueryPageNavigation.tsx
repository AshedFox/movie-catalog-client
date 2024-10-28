'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { Button } from 'shared/ui';
import { divideIntoSegments } from '../lib/divide-into-segments';

export type GridNavigationProps = {
  amountPerPage: number;
  totalCount: number;
};

const QueryPageNavigation = ({ amountPerPage, totalCount }: GridNavigationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page') ?? '1');

  const pagesCount = Math.ceil(totalCount / amountPerPage);
  const [startPages, nearPages, endPages] = useMemo(
    () => divideIntoSegments(pagesCount, 3, currentPage),
    [currentPage, pagesCount],
  );

  const createQueryString = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set('page', String(page));

      return params.toString();
    },
    [searchParams],
  );

  const onChange = (page: number) => {
    router.push(`${pathname}?${createQueryString(page)}`);
  };

  if (totalCount === 0) {
    return null;
  }

  return (
    <div className="flex justify-center items-center gap-6">
      <Button
        disabled={currentPage <= 1}
        size="icon"
        variant="ghost"
        onClick={() => onChange(currentPage - 1)}
      >
        <ChevronLeft />
      </Button>
      <div className="flex items-center gap-3 h-6">
        {startPages.map((val) => (
          <Button
            variant="ghost"
            size="sm"
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
            variant="ghost"
            size="sm"
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
            variant="ghost"
            size="sm"
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
        size="icon"
        variant="ghost"
        onClick={() => onChange(currentPage + 1)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default QueryPageNavigation;
