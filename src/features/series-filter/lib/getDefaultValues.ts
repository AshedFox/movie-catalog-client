import { AgeRestrictionEnum } from '@shared/api/graphql';
import { FilterArgs } from '../model/types';

export const getDefaultValues = (
  searchParams: URLSearchParams,
): Partial<FilterArgs> => ({
  title: searchParams.get('title') ?? '',
  releaseFrom:
    searchParams.get('releaseDateGTE')?.substring(0, 10) ?? undefined,
  releaseTo: searchParams.get('releaseDateLTE')?.substring(0, 10) ?? undefined,
  ageRestrictions: searchParams
    .getAll('ageRestriction')
    .map((v) => ({ value: v as AgeRestrictionEnum, label: v })),
});
