import {
  AgeRestrictionEnum,
  BaseCountryFragment,
  BaseStudioFragment,
  Genre,
} from '@shared/api/graphql';
import { FilterArgs } from '../model/types';

export const getDefaultValues = (
  searchParams: URLSearchParams,
  genres: Genre[],
  countries: BaseCountryFragment[],
  studios: BaseStudioFragment[],
): Partial<FilterArgs> => ({
  title: searchParams.get('title') ?? '',
  ageRestrictions: searchParams
    .getAll('ageRestriction')
    .map((v) => ({ value: v as AgeRestrictionEnum, label: v })),
  genres: genres
    .filter((g) => {
      return searchParams.getAll('genre').includes(g.id);
    })
    .map((g) => ({ value: g.id, label: g.name })),
  countries: countries
    .filter((c) => {
      return searchParams.getAll('country').includes(c.id);
    })
    .map((c) => ({ value: c.id, label: c.name })),
  studios: studios
    .filter((s) => {
      return searchParams.getAll('studio').includes(s.id);
    })
    .map((s) => ({ value: s.id, label: s.name })),
  releaseDateStart:
    searchParams.get('releaseDateGTE')?.substring(0, 10) ?? undefined,
  releaseDateEnd:
    searchParams.get('releaseDateLTE')?.substring(0, 10) ?? undefined,
});
