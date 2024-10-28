'use client';

import { FilmSort, SortDirectionEnum } from '@shared/api/graphql';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui/Select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { getParamsWithArgs } from '../lib/getParamsWithArgs';

const FilmsSort = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [sortKey, sortDirection] = useMemo(() => {
    const [key, direction] = searchParams.get('sort')?.split('_') ?? [];

    return [key ?? 'title', direction ?? SortDirectionEnum.ASC] as [
      keyof FilmSort,
      SortDirectionEnum,
    ];
  }, [searchParams]);

  const handleSortChange = (sortKey: keyof FilmSort, sortDirection: SortDirectionEnum) => {
    router.push(`${pathname}?${createQueryString(`${sortKey}_${sortDirection}`)}`);
  };

  const createQueryString = useCallback(
    (sortParam: string) => getParamsWithArgs(searchParams, sortParam),
    [searchParams],
  );

  return (
    <Select
      value={`${sortKey}_${sortDirection}`}
      onValueChange={(value) => {
        handleSortChange(
          value.split('_')[0] as keyof FilmSort,
          value.split('_')[1] as SortDirectionEnum,
        );
      }}
    >
      <SelectTrigger className="max-w-[200px] text-sm font-medium">
        <SelectValue placeholder="Select sort" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="title_ASC">By title (A - Z)</SelectItem>
        <SelectItem value="title_DESC">By title (Z - A)</SelectItem>
        <SelectItem value="releaseDate_ASC">By release (Old - New)</SelectItem>
        <SelectItem value="releaseDate_DESC">By release (New - Old)</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilmsSort;
