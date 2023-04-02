'use client';

import React, { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  AgeRestrictionEnum,
  GetAllCountriesQuery,
  GetAllGenresQuery,
  GetAllStudiosQuery,
} from '@lib/graphql/__generated__/graphql';
import { Button, Field } from '@components/ui';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ReactSelect from 'react-select';

type AgeRestrictionArg = {
  value: AgeRestrictionEnum;
  label: string;
};

type GenreArg = {
  value: string;
  label: string;
};

type CountryArg = {
  value: string;
  label: string;
};

type StudioArg = {
  value: string;
  label: string;
};

type FilterArgs = {
  title?: string;
  releaseDateStart?: string;
  releaseDateEnd?: string;
  ageRestrictions?: AgeRestrictionArg[];
  genres?: GenreArg[];
  countries?: CountryArg[];
  studios?: StudioArg[];
};

const ageRestrictionSelectOptions: AgeRestrictionArg[] = [
  { value: AgeRestrictionEnum.G, label: 'G' },
  { value: AgeRestrictionEnum.PG13, label: 'PG13' },
  { value: AgeRestrictionEnum.PG, label: 'PG' },
  { value: AgeRestrictionEnum.NC17, label: 'NC17' },
  { value: AgeRestrictionEnum.R, label: 'R' },
];

type Props = {
  allGenres: GetAllGenresQuery['getGenres']['nodes'];
  allCountries: GetAllCountriesQuery['getCountries']['nodes'];
  allStudios: GetAllStudiosQuery['getStudios']['nodes'];
};

const FilmsFilterBlock = ({ allGenres, allCountries, allStudios }: Props) => {
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
      title: searchParams.get('title') ?? '',
      ageRestrictions: searchParams
        .getAll('ageRestriction')
        .map((v) => ({ value: v as AgeRestrictionEnum, label: v })),
      genres: allGenres
        .filter((g) => {
          return searchParams.getAll('genres').includes(g.id);
        })
        .map((g) => ({ value: g.id, label: g.name })),
      countries: allCountries
        .filter((c) => {
          return searchParams.getAll('countrs').includes(c.id);
        })
        .map((c) => ({ value: c.id, label: c.name })),
      studios: allStudios
        .filter((s) => {
          return searchParams.getAll('studios').includes(s.id);
        })
        .map((s) => ({ value: s.id, label: s.name })),
      releaseDateStart:
        searchParams.get('releaseDateGTE')?.substring(0, 10) ?? undefined,
      releaseDateEnd:
        searchParams.get('releaseDateLTE')?.substring(0, 10) ?? undefined,
    },
  });

  const genresSelectOptions: GenreArg[] = useMemo(
    () =>
      allGenres.map((g) => ({
        value: g.id,
        label: g.name,
      })),
    [allGenres],
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
    (values: FilterArgs) => {
      const params = new URLSearchParams(searchParams);

      params.delete('page');

      params.delete('title');
      params.delete('releaseDateGTE');
      params.delete('releaseDateLTE');
      params.delete('ageRestriction');
      params.delete('genre');

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
        params.set(
          'releaseDateLTE',
          new Date(values.releaseDateEnd).toISOString(),
        );
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

      return params.toString();
    },
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
      <details className="">
        <summary className="select-none text-lg font-semibold cursor-pointer">
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
                  options={ageRestrictionSelectOptions}
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

export default FilmsFilterBlock;
