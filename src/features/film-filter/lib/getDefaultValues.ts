import { AgeRestrictionEnum, Country, Genre, Studio } from '@shared/api/graphql';
import { FilterArgs } from '../model/types';
import { ReadonlyURLSearchParams } from 'next/navigation';

export const getDefaultValues = (
  searchParams: ReadonlyURLSearchParams,
  allGenres: Pick<Genre, 'id' | 'name' | 'moviesCount'>[],
  allCountries: Pick<Country, 'id' | 'name' | 'moviesCount'>[],
  allStudios: Pick<Studio, 'id' | 'name' | 'moviesCount'>[],
): Partial<FilterArgs> => ({
  title: searchParams.get('title') ?? '',
  ageRestrictions: searchParams
    .getAll('ageRestriction')
    .map((v) => ({ value: v as AgeRestrictionEnum, label: v })),
  releaseDateStart: searchParams.get('releaseDateGTE')?.substring(0, 10) ?? undefined,
  releaseDateEnd: searchParams.get('releaseDateLTE')?.substring(0, 10) ?? undefined,
  genres: allGenres
    .filter((g) => {
      return searchParams.getAll('genre').includes(g.id);
    })
    .map((g) => ({ value: g.id, label: `${g.name}(${g.moviesCount})` })),
  countries: allCountries
    .filter((c) => {
      return searchParams.getAll('country').includes(c.id);
    })
    .map((c) => ({ value: c.id, label: `${c.name}(${c.moviesCount})` })),
  studios: allStudios
    .filter((s) => {
      return searchParams.getAll('studio').includes(s.id);
    })
    .map((s) => ({ value: s.id, label: `${s.name}(${s.moviesCount})` })),
});
