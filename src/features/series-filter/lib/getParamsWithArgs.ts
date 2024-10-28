import { ReadonlyURLSearchParams } from 'next/navigation';
import { FilterArgs } from '../model/types';

export const getParamsWithArgs = (searchParams: ReadonlyURLSearchParams, values: FilterArgs) => {
  const params = new URLSearchParams(searchParams.toString());

  params.delete('page');

  params.delete('title');
  params.delete('releaseFrom');
  params.delete('releaseTo');
  params.delete('ageRestriction');
  params.delete('genre');
  params.delete('studio');
  params.delete('country');

  if (values.title) {
    params.set('title', values.title);
  }
  if (values.releaseFrom) {
    params.set('releaseFrom', new Date(values.releaseFrom).toISOString());
  }
  if (values.releaseTo) {
    params.set('releaseTo', new Date(values.releaseTo).toISOString());
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
    values.studios.forEach((genre) => {
      params.append('studio', genre.value);
    });
  }
  if (values.countries && values.countries.length > 0) {
    values.countries.forEach((genre) => {
      params.append('country', genre.value);
    });
  }

  return params.toString();
};
