'use client';

import { useSuspenseQuery } from '@apollo/client';
import {
  AgeRestrictionEnum,
  GetAllCountriesDocument,
  GetAllGenresDocument,
  GetAllStudiosDocument,
  MovieTypeEnum,
  SortDirectionEnum,
} from '@shared/api/graphql';
import { Button } from '@shared/ui/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shared/ui/Form';
import { Input } from '@shared/ui/Input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import ReactSelect from 'react-select';
import { getDefaultValues } from '../lib/getDefaultValues';
import { getParamsWithArgs } from '../lib/getParamsWithArgs';
import { AgeRestrictionArg, FilterArgs } from '../model/types';

export const ageRestrictionSelectOpts: AgeRestrictionArg[] = [
  { value: AgeRestrictionEnum.G, label: 'G' },
  { value: AgeRestrictionEnum.PG13, label: 'PG13' },
  { value: AgeRestrictionEnum.PG, label: 'PG' },
  { value: AgeRestrictionEnum.NC17, label: 'NC17' },
  { value: AgeRestrictionEnum.R, label: 'R' },
];

const FilmsFilters = () => {
  const { data: genresData } = useSuspenseQuery(GetAllGenresDocument, {
    variables: {
      sort: {
        name: { direction: SortDirectionEnum.ASC },
      },
      movieType: MovieTypeEnum.Film,
    },
  });
  const { data: studiosData } = useSuspenseQuery(GetAllStudiosDocument, {
    variables: {
      sort: {
        name: { direction: SortDirectionEnum.ASC },
      },
      movieType: MovieTypeEnum.Film,
    },
  });
  const { data: countriesData } = useSuspenseQuery(GetAllCountriesDocument, {
    variables: {
      sort: {
        name: { direction: SortDirectionEnum.ASC },
      },
      movieType: MovieTypeEnum.Film,
    },
  });

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const form = useForm<FilterArgs>({
    defaultValues: getDefaultValues(
      searchParams,
      genresData?.getAllGenres ?? [],
      countriesData?.getAllCountries ?? [],
      studiosData?.getAllStudios ?? [],
    ),
  });

  const onSubmit = (args: FilterArgs) => {
    router.push(`${pathname}?${createQueryString(args)}`);
  };

  const onReset = () => {
    form.reset({});
    router.push(`${pathname}?${createQueryString({})}`);
  };

  const createQueryString = useCallback(
    (values: FilterArgs) => getParamsWithArgs(searchParams, values),
    [searchParams],
  );

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3 p-2"
        onSubmit={form.handleSubmit(onSubmit)}
        onReset={onReset}
      >
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Search..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="title"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-3">
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Release date (from)</FormLabel>
                <FormControl>
                  <Input {...field} type="date" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            name="releaseDateStart"
          />
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Release date (to)</FormLabel>
                <FormControl>
                  <Input {...field} type="date" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            name="releaseDateEnd"
          />
        </div>
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age restriction</FormLabel>
              <FormControl>
                <ReactSelect
                  {...field}
                  onChange={(v) => field.onChange(v.flat())}
                  isMulti={true}
                  options={ageRestrictionSelectOpts}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="ageRestrictions"
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Genres</FormLabel>
              <FormControl>
                <ReactSelect
                  {...field}
                  onChange={(v) => field.onChange(v.flat())}
                  isMulti={true}
                  options={genresData.getAllGenres.map((v) => ({
                    value: v.id,
                    label: `${v.name} (${v.moviesCount})`,
                  }))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="genres"
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Countries</FormLabel>
              <FormControl>
                <ReactSelect
                  {...field}
                  onChange={(v) => field.onChange(v.flat())}
                  isMulti={true}
                  options={countriesData.getAllCountries.reduce((result, v) => {
                    if (v.moviesCount > 0) {
                      result.push({
                        value: v.id,
                        label: `${v.name} (${v.moviesCount})`,
                      });
                    }
                    return result;
                  }, [] as { label: string; value: string }[])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="countries"
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Studios</FormLabel>
              <FormControl>
                <ReactSelect
                  {...field}
                  onChange={(v) => field.onChange(v.flat())}
                  isMulti={true}
                  options={studiosData.getAllStudios.map((v) => ({
                    value: v.id,
                    label: `${v.name} (${v.moviesCount})`,
                  }))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="studios"
        />
        <Button type="submit">Search</Button>
        <Button type="reset" variant="destructive">
          Reset
        </Button>
      </form>
    </Form>
  );
};

export default FilmsFilters;
