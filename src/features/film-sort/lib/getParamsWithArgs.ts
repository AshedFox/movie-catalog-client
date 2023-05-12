import { FilmSort } from '@shared/api/graphql';

export const getParamsWithArgs = (
  searchParams: URLSearchParams,
  sortParam: keyof FilmSort,
) => {
  const params = new URLSearchParams(searchParams);

  params.delete('page');

  params.set('sort', sortParam);

  return params.toString();
};
