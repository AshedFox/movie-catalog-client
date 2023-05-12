import { SeriesSort } from '@shared/api/graphql';

export const getParamsWithArgs = (
  searchParams: URLSearchParams,
  sortParam: keyof SeriesSort,
) => {
  const params = new URLSearchParams(searchParams);

  params.delete('page');

  params.set('sort', sortParam);

  return params.toString();
};
