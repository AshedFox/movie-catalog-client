import { SeriesSort, SortDirectionEnum } from '@shared/api/graphql';

export const parseParamsToSeriesSort = (
  sortKey: keyof SeriesSort | string,
): SeriesSort => {
  const sort: SeriesSort = {};

  sort[sortKey as keyof SeriesSort] = {
    direction: SortDirectionEnum.ASC,
  };

  return sort;
};
