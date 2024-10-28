import { FilmSort, SortDirectionEnum } from '@shared/api/graphql';

export const parseParamsToFilmSort = (
  sortKey: keyof FilmSort = 'title',
  direction: SortDirectionEnum = SortDirectionEnum.ASC,
): FilmSort => {
  const sort: FilmSort = {};

  sort[sortKey] = {
    direction,
  };

  return sort;
};
