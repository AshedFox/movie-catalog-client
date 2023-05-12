'use client';

import React, { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Field } from '@shared/ui';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ReactSelect from 'react-select';
import {
  AgeRestrictionEnum,
  BaseCountryFragment,
  BaseStudioFragment,
  Genre,
} from '@shared/api/graphql';
import { AgeRestrictionArg, FilterArgs, GenreArg } from '../model/types';
import { getDefaultValues } from '../lib/getDefaultValues';
import { getParamsWithArgs } from '../lib/getParamsWithArgs';

type Props = {
  genresVariants: Genre[];
  countriesVariants: BaseCountryFragment[];
  studiosVariants: BaseStudioFragment[];
};

export const ageRestrictionSelectOpts: AgeRestrictionArg[] = [
  { value: AgeRestrictionEnum.G, label: 'G' },
  { value: AgeRestrictionEnum.PG13, label: 'PG13' },
  { value: AgeRestrictionEnum.PG, label: 'PG' },
  { value: AgeRestrictionEnum.NC17, label: 'NC17' },
  { value: AgeRestrictionEnum.R, label: 'R' },
];

const FilmsFilters = ({
  genresVariants,
  countriesVariants,
  studiosVariants,
}: Props) => {
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
    defaultValues: getDefaultValues(
      searchParams,
      genresVariants,
      countriesVariants,
      studiosVariants,
    ),
  });

  const genresSelectOptions: GenreArg[] = useMemo(
    () =>
      genresVariants.map((g) => ({
        value: g.id,
        label: g.name,
      })),
    [genresVariants],
  );
  /* const countriesSelectOptions: CountryArg[] = useMemo(
    () =>
      allCountries.map((g) => ({
        value: g.id,
        label: g.name,
      })),
    [allCountries],
  );
  const studiosSelectOptions: StudioArg[] = useMemo(
    () =>
      allStudios.map((g) => ({
        value: g.id,
        label: g.name,
      })),
    [allStudios],
  ); */

  const hasAnyFilter = () => {
    const values = getValues();

    return (
      (!!values.ageRestrictions && values.ageRestrictions.length > 0) ||
      (!!values.genres && values.genres.length > 0) ||
      !!values.title ||
      !!values.releaseDateStart ||
      !!values.releaseDateEnd
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
            label="Release Date Start"
            type="date"
            {...register('releaseDateStart')}
            error={errors.releaseDateStart?.message}
          />
          <Field
            label="Release Date End"
            type="date"
            {...register('releaseDateEnd')}
            error={errors.releaseDateEnd?.message}
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
                <ReactSelect
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
                <ReactSelect
                  instanceId="genres-select"
                  isMulti={true}
                  {...field}
                  options={genresSelectOptions}
                />
              </div>
            )}
          />
          {/* <Controller
            name="studios"
            control={control}
            render={({ field }) => (
              <div>
                <label className="text-sm font-medium mb-2" htmlFor="studios">
                  Studios
                </label>
                <ReactSelect
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
                <ReactSelect
                  instanceId="countries-select"
                  isMulti={true}
                  {...field}
                  options={countriesSelectOptions}
                />
              </div>
            )}
          /> */}
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

export default FilmsFilters;
