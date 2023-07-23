'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  CreateCollectionDocument,
  CreateCollectionInput,
  GetMoviesOffsetDocument,
  Media,
  MovieFragment,
  UploadImageDocument,
} from '@shared/api/graphql';
import { useLazyQuery, useMutation } from '@apollo/client';
import { Button, Field, ImageInput, List, MultilineField } from '@shared/ui';
import { FilmRow } from '@entities/film';
import { SeriesRow } from '@entities/series';
import { useRouter } from 'next/navigation';

type FormInput = Omit<
  CreateCollectionInput,
  'coverId' | 'moviesIds' | 'isSystem'
>;

type Props = {
  collectionType: 'custom' | 'system';
};

const CreateCollectionForm = ({ collectionType }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      name: '',
      description: '',
    },
  });
  const router = useRouter();
  const [cover, setCover] = useState<Media>();
  const [movies, setMovies] = useState<MovieFragment[]>([]);
  const [uploadImage] = useMutation(UploadImageDocument);
  const [createCollection, { loading, error }] = useMutation(
    CreateCollectionDocument,
  );
  const [getMovies, { data: getMoviesData, loading: loadingMovies }] =
    useLazyQuery(GetMoviesOffsetDocument);
  const [search, setSearch] = useState<string>('');

  const onSubmit = async (input: CreateCollectionInput) => {
    const { data } = await createCollection({
      variables: {
        input: {
          ...input,
          coverId: cover?.id,
          moviesIds: movies.map((m) => m.id),
          isSystem: collectionType === 'system',
        },
      },
    });
    if (data) {
      await fetch(
        `http://localhost:3001/api/revalidate?tag=custom_collections`,
      );
      router.push(`/collections/${data.createCollection.id}`);
    }
  };

  const searchMovies = (getMoviesData?.getMoviesOffset.nodes ?? []).filter(
    (item) => !movies.find((movie) => movie.id === item.id),
  );

  return (
    <form
      autoComplete="off"
      className="flex flex-auto flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="flex flex-col gap-1" disabled={loading}>
        <ImageInput
          url={cover?.url}
          onChange={async (e) => {
            console.log(e.target.files);

            if (e.target.files && e.target.files.length === 1) {
              const { data, errors } = await uploadImage({
                variables: {
                  file: e.target.files[0],
                },
              });

              if (data && !errors) {
                setCover(data.uploadImage);
              }
            }
          }}
          imageForm={'square'}
        />
        <Field
          label="Name"
          required={true}
          {...register('name', {
            minLength: 3,
            maxLength: 255,
            required: true,
          })}
          error={errors.name?.message}
        />
        <MultilineField
          label="Description"
          {...register('description', {
            minLength: 3,
            maxLength: 4096,
          })}
          error={errors.name?.message}
        />
      </fieldset>
      <details>
        <summary className="text-xl font-bold cursor-pointer">Movies</summary>
        <div className="flex flex-col flex-auto gap-1 p-2">
          <Field
            label="Search movies"
            name={'search'}
            value={search}
            disabled={loadingMovies}
            onChange={(e) => {
              setSearch(e.currentTarget.value);
            }}
          />
          <Button
            disabled={loadingMovies}
            size="sm"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              getMovies({
                variables: {
                  limit: 20,
                  offset: 0,
                  filter: {
                    title: {
                      ilike: search,
                    },
                  },
                },
              });
            }}
          >
            Search
          </Button>
          <div className="flex flex-col overflow-hidden">
            <h3 className="text-lg font-semibold">Found movies</h3>

            <div className="flex p-2 max-h-[400px] flex-auto overflow-auto">
              <List
                items={searchMovies.map((item) => ({
                  key: item.id,
                  content: (
                    <div className="flex flex-col flex-auto">
                      {item.__typename === 'Film' ? (
                        <FilmRow key={item.id} film={item} />
                      ) : (
                        item.__typename === 'Series' && (
                          <SeriesRow key={item.id} series={item} />
                        )
                      )}
                      <Button
                        size="sm"
                        variant="success"
                        type="button"
                        onClick={() => setMovies((prev) => [...prev, item])}
                      >
                        Add
                      </Button>
                    </div>
                  ),
                }))}
              />
            </div>
          </div>
          <div className="flex flex-col overflow-hidden">
            <h3 className="text-lg font-semibold">Added movies</h3>
            <div className="flex p-2 max-h-[400px] flex-auto overflow-auto">
              <List
                items={movies.map((item) => ({
                  key: item.id,
                  content: (
                    <div className="flex flex-col flex-auto">
                      {item.__typename === 'Film' ? (
                        <FilmRow key={item.id} film={item} />
                      ) : (
                        item.__typename === 'Series' && (
                          <SeriesRow key={item.id} series={item} />
                        )
                      )}
                      <Button
                        size="sm"
                        variant="danger"
                        type="button"
                        onClick={() =>
                          setMovies((prev) =>
                            prev.filter((movie) => movie.id !== item.id),
                          )
                        }
                      >
                        Remove
                      </Button>
                    </div>
                  ),
                }))}
              />
            </div>
          </div>
        </div>
      </details>
      <span className="text-xs text-red-500">{error?.message}</span>
      <Button type="submit" disabled={loading}>
        Create collection
      </Button>
    </form>
  );
};

export default CreateCollectionForm;
