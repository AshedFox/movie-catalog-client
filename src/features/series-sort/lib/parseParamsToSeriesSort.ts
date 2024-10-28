import { SeriesSort, SortDirectionEnum } from '@shared/api/graphql';

export const parseParamsToSeriesSort = (
  sortKey: keyof SeriesSort = 'title',
  direction: SortDirectionEnum = SortDirectionEnum.ASC,
): SeriesSort => {
  const sort: SeriesSort = {};

  sort[sortKey] = {
    direction,
  };

  return sort;
};
