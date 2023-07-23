'use client';

import React, { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Field, Select } from '@shared/ui';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  AgeRestrictionEnum,
  GetAllCountriesDocument,
  GetAllGenresDocument,
  GetAllStudiosDocument,
  MovieTypeEnum,
  SortDirectionEnum,
} from '@shared/api/graphql';
import {
  AgeRestrictionArg,
  CountryArg,
  FilterArgs,
  GenreArg,
  StudioArg,
} from '../model/types';
import { getDefaultValues } from '../lib/getDefaultValues';
import { getParamsWithArgs } from '../lib/getParamsWithArgs';
import { useSuspenseQuery_experimental } from '@apollo/client';

export const ageRestrictionSelectOpts: AgeRestrictionArg[] = [
  { value: AgeRestrictionEnum.G, label: 'G' },
  { value: AgeRestrictionEnum.PG13, label: 'PG13' },
  { value: AgeRestrictionEnum.PG, label: 'PG' },
  { value: AgeRestrictionEnum.NC17, label: 'NC17' },
  { value: AgeRestrictionEnum.R, label: 'R' },
];

const SeriesFilters = () => {
  const { data: genresData } = useSuspenseQuery_experimental(
    GetAllGenresDocument,
    {
      variables: {
        sort: {
          name: { direction: SortDirectionEnum.ASC },
        },
        movieType: MovieTypeEnum.Series,
      },

    },
  );
  const { data: studiosData } = useSuspenseQuery_experimental(
    GetAllStudiosDocument,
    {
      variables: {
        sort: {
          name: { direction: SortDirectionEnum.ASC },
        },
        movieType: MovieTypeEnum.Series,
      },
    },
  );
  const { data: countriesData } = useSuspenseQuery_experimental(
    GetAllCountriesDocument,
    {
      variables: {
        sort: {
          name: { direction: SortDirectionEnum.ASC },
        },
        movieType: MovieTypeEnum.Series,
      },
    },
  );

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    control,
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FilterArgs>({
    defaultValues: {
      ...getDefaultValues(searchParams),
      genres: genresData?.getAllGenres
        .filter((g) => {
          return searchParams.getAll('genre').includes(g.id);
        })
        .map((g) => ({ value: g.id, label: `${g.name}(${g.moviesCount})` })),
      countries: countriesData?.getAllCountries
        .filter((c) => {
          return searchParams.getAll('country').includes(c.id);
        })
        .map((c) => ({ value: c.id, label: `${c.name}(${c.moviesCount})` })),
      studios: studiosData?.getAllStudios
        .filter((s) => {
          return searchParams.getAll('studio').includes(s.id);
        })
        .map((s) => ({ value: s.id, label: `${s.name}(${s.moviesCount})` })),
    },
  });

  const genresSelectOptions: GenreArg[] = useMemo(
    () =>
      genresData?.getAllGenres.map((g) => ({
        value: g.id,
        label: `${g.name}(${g.moviesCount})`,
      })),
    [genresData?.getAllGenres],
  );
  const countriesSelectOptions: CountryArg[] = useMemo(
    () =>
      countriesData?.getAllCountries.map((c) => ({
        value: c.id,
        label: `${c.name}(${c.moviesCount})`,
      })),
    [countriesData?.getAllCountries],
  );
  const studiosSelectOptions: StudioArg[] = useMemo(
    () =>
      studiosData?.getAllStudios.map((s) => ({
        value: s.id,
        label: `${s.name}(${s.moviesCount})`,
      })),
    [studiosData?.getAllStudios],
  );

  const hasAnyFilter = () => {
    const values = getValues();

    return (
      (!!values.ageRestrictions && values.ageRestrictions.length > 0) ||
      (!!values.genres && values.genres.length > 0) ||
      (!!values.studios && values.studios.length > 0) ||
      (!!values.countries && values.countries.length > 0) ||
      !!values.title ||
      !!values.releaseFrom ||
      !!values.releaseTo
    );
  };

  const onSubmit = (args: FilterArgs) => {
    router.push(`${pathname}?${createQueryString(args)}`);
  };

  const onReset = () => {
    reset();
    router.push(`${pathname}?${createQueryString({})}`);
  };

  const createQueryString = useCallback(
    (values: FilterArgs) => getParamsWithArgs(searchParams, values),
    [searchParams],
  );

  return (
    <form
      className="flex flex-col gap-2 p-2"
      onSubmit={handleSubmit(onSubmit)}
      onReset={onReset}
    >
      <Field
        label="Title"
        {...register('title')}
        error={errors.title?.message}
      />
      <details>
        <summary className="w-fit select-none text-lg font-semibold cursor-pointer">
          More filters
        </summary>
        <fieldset className="flex flex-col gap-2 px-5 py-2">
          <Field
            label="Release From"
            type="date"
            {...register('releaseFrom')}
            error={errors.releaseFrom?.message}
          />
          <Field
            label="Release To"
            type="date"
            {...register('releaseTo')}
            error={errors.releaseTo?.message}
          />
          <Controller
            name="ageRestrictions"
            control={control}
            render={({ field }) => (
              <div>
                <label
                  className="text-sm font-medium mb-2"
                  htmlFor="ageRestrictions"
                >
                  Age restrictions
                </label>
                <Select
                  instanceId="age-restrictions-select"
                  isMulti={true}
                  {...field}
                  options={ageRestrictionSelectOpts}
                />
              </div>
            )}
          />
          <Controller
            name="genres"
            control={control}
            render={({ field }) => (
              <div>
                <label className="text-sm font-medium mb-2" htmlFor="genres">
                  Genres
                </label>
                <Select
                  instanceId="genres-select"
                  isMulti={true}
                  {...field}
                  options={genresSelectOptions}
                />
              </div>
            )}
          />
          <Controller
            name="studios"
            control={control}
            render={({ field }) => (
              <div>
                <label className="text-sm font-medium mb-2" htmlFor="studios">
                  Studios
                </label>
                <Select
                  instanceId="studios-select"
                  isMulti={true}
                  {...field}
                  options={studiosSelectOptions}
                />
              </div>
            )}
          />
          <Controller
            name="countries"
            control={control}
            render={({ field }) => (
              <div>
                <label className="text-sm font-medium mb-2" htmlFor="countries">
                  Countries
                </label>
                <Select
                  instanceId="countries-select"
                  isMulti={true}
                  {...field}
                  options={countriesSelectOptions}
                />
              </div>
            )}
          />
        </fieldset>
      </details>
      <div className="flex flex-col gap-1.5 lg:gap-4 lg:flex-row lg:items-center">
        <Button size="sm" stretch type="submit">
          Search
        </Button>
        <Button
          size="sm"
          type="reset"
          variant="danger"
          disabled={!hasAnyFilter()}
        >
          Reset filters
        </Button>
      </div>
    </form>
  );
};

export default SeriesFilters;
