import { AgeRestrictionEnum } from '@shared/api/graphql';
import { FilterArgs } from '../model/types';

export const getDefaultValues = (
  searchParams: URLSearchParams,
): Partial<FilterArgs> => ({
  title: searchParams.get('title') ?? '',
  ageRestrictions: searchParams
    .getAll('ageRestriction')
    .map((v) => ({ value: v as AgeRestrictionEnum, label: v })),
  releaseDateStart:
    searchParams.get('releaseDateGTE')?.substring(0, 10) ?? undefined,
  releaseDateEnd:
    searchParams.get('releaseDateLTE')?.substring(0, 10) ?? undefined,
});
