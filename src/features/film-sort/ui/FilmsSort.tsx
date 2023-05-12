'use client';

import React, { useCallback } from 'react';
import { Button } from '@shared/ui';
import { FilmSort } from '@shared/api/graphql/__generated__/graphql';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getParamsWithArgs } from '../lib/getParamsWithArgs';

type Props = {
  currentSort: FilmSort;
};

const FilmsSort = ({ currentSort }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSortChange = (sortParam: keyof FilmSort) => {
    router.push(`${pathname}?${createQueryString(sortParam)}`);
  };

  const createQueryString = useCallback(
    (sortParam: keyof FilmSort) => getParamsWithArgs(searchParams, sortParam),
    [searchParams],
  );

  return (
    <div className="flex items-center gap-2">
      <Button
        size="sm"
        variant="secondary"
        disabled={!!currentSort.releaseDate}
        onClick={() => handleSortChange('releaseDate')}
      >
        By Release
      </Button>
      <Button
        size="sm"
        variant="secondary"
        disabled={!!currentSort.title}
        onClick={() => handleSortChange('title')}
      >
        By Title
      </Button>
    </div>
  );
};

export default FilmsSort;
