'use client';

import React, { useCallback, useContext } from 'react';
import FilmsGrid from './FilmsGrid';
import FilmsGridNavigation from './FilmsGridNavigation';
import { GetFilmsQuery } from '@lib/graphql/__generated__/graphql';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FilmsGridContext } from './FilmsGridProvider';

type Props = {
  items: GetFilmsQuery['getFilms']['nodes'];
  pageInfo: GetFilmsQuery['getFilms']['pageInfo'];
  page: number;
  amountPerPage: number;
};

const FilmsGridBlock = ({ items, pageInfo, amountPerPage, page }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { gridVariant } = useContext(FilmsGridContext);

  const handlePageChange = (newPage: number) => {
    router.push(`${pathname}?${createQueryString('page', newPage.toString())}`);
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);

      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="flex flex-auto flex-col gap-3 justify-between">
      <FilmsGrid items={items} variant={gridVariant} />
      <FilmsGridNavigation
        currentPage={page}
        amountPerPage={amountPerPage}
        totalCount={pageInfo.totalCount}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default FilmsGridBlock;
