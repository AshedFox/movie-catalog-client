import { FilterArgs } from '../model/types';

export const getParamsWithArgs = (
  searchParams: URLSearchParams,
  values: FilterArgs,
) => {
  const params = new URLSearchParams(searchParams);

  params.delete('page');

  params.delete('title');
  params.delete('releaseDateGTE');
  params.delete('releaseDateLTE');
  params.delete('ageRestriction');
  params.delete('genre');
  params.delete('studio');
  params.delete('studio');

  if (values.title) {
    params.set('title', values.title);
  }
  if (values.releaseDateStart) {
    params.set(
      'releaseDateGTE',
      new Date(values.releaseDateStart).toISOString(),
    );
  }
  if (values.releaseDateEnd) {
    params.set('releaseDateLTE', new Date(values.releaseDateEnd).toISOString());
  }
  if (values.ageRestrictions && values.ageRestrictions.length > 0) {
    values.ageRestrictions.forEach((ageRestriction) => {
      params.append('ageRestriction', ageRestriction.value);
    });
  }
  if (values.genres && values.genres.length > 0) {
    values.genres.forEach((genre) => {
      params.append('genre', genre.value);
    });
  }
  if (values.studios && values.studios.length > 0) {
    values.studios.forEach((studio) => {
      params.append('studio', studio.value);
    });
  }
  if (values.countries && values.countries.length > 0) {
    values.countries.forEach((country) => {
      params.append('country', country.value);
    });
  }

  return params.toString();
};
