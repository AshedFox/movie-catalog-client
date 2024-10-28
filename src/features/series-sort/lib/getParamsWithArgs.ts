import { ReadonlyURLSearchParams } from 'next/navigation';

export const getParamsWithArgs = (searchParams: ReadonlyURLSearchParams, sortParam: string) => {
  const params = new URLSearchParams(searchParams.toString());

  params.delete('page');

  params.set('sort', sortParam);

  return params.toString();
};
