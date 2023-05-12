import { AgeRestrictionEnum } from '@shared/api/graphql';

export type AgeRestrictionArg = {
  value: AgeRestrictionEnum;
  label: string;
};

export type GenreArg = {
  value: string;
  label: string;
};

export type CountryArg = {
  value: string;
  label: string;
};

export type StudioArg = {
  value: string;
  label: string;
};

export type FilterArgs = {
  title?: string;
  releaseDateStart?: string;
  releaseDateEnd?: string;
  ageRestrictions?: AgeRestrictionArg[];
  genres?: GenreArg[];
  countries?: CountryArg[];
  studios?: StudioArg[];
};
