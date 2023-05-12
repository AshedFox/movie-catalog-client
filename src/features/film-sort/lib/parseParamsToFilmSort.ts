import { FilmSort, SortDirectionEnum } from '@shared/api/graphql';

export const parseParamsToFilmSort = (
  sortKey: keyof FilmSort | string,
): FilmSort => {
  const sort: FilmSort = {};

  sort[sortKey as keyof FilmSort] = {
    direction: SortDirectionEnum.ASC,
  };

  return sort;
};
