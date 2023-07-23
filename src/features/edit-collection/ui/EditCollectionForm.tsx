'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  AddCollectionMovieDocument,
  CollectionItem_CollectionFragment,
  GetCollectionDocument,
  GetMoviesOffsetDocument,
  RemoveCollectionMovieDocument,
  UpdateCollectionDocument,
  UpdateCollectionInput,
  UploadImageDocument,
} from '@shared/api/graphql';
import { useLazyQuery, useMutation } from '@apollo/client';
import { Button, Field, ImageInput, List, MultilineField } from '@shared/ui';
import { FilmRow } from '@entities/film';
import { SeriesRow } from '@entities/series';

type FormInput = Omit<UpdateCollectionInput, 'coverId' | 'isSystem'>;

type Props = {
  collection: CollectionItem_CollectionFragment;
};

const EditCollectionForm = ({ collection }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      name: collection.name,
      description: collection.description,
    },
  });
  const [cover, setCover] = useState<
    | {
        id: string;
        url: string;
      }
    | undefined
  >(collection.cover ?? undefined);
  const [uploadImage] = useMutation(UploadImageDocument);
  const [updateCollection, { loading, error }] = useMutation(
    UpdateCollectionDocument,
    {
      update: (cache, { data }) => {
        const existing = cache.readQuery({
          query: GetCollectionDocument,
          variables: {
            id: Number(collection.id),
          },
        });

        cache.writeQuery({
          query: GetCollectionDocument,
          variables: {
            id: Number(collection.id),
          },
          data: {
            ...existing,
            getCollection: {
              ...existing?.getCollection,
              ...data?.updateCollection,
            },
          },
        });
      },
    },
  );
  const [addCollectionMovie, { loading: loadingAddMovie }] = useMutation(
    AddCollectionMovieDocument,
    {
      update: (cache, { data }) => {
        const existing = cache.readQuery({
          query: GetCollectionDocument,
          variables: {
            id: Number(collection.id),
          },
        });

        cache.writeQuery({
          query: GetCollectionDocument,
          variables: {
            id: Number(collection.id),
          },
          data: {
            ...existing,
            getCollection: {
              ...existing?.getCollection,
              movies: [
                ...(existing?.getCollection.movies ?? []),
                data?.createCollectionMovie.movie,
              ],
            },
          },
        });
      },
    },
  );
  const [removeCollectionMovie, { loading: loadingRemoveMovie }] = useMutation(
    RemoveCollectionMovieDocument,
    {
      update: (cache, { data }) => {
        const existing = cache.readQuery({
          query: GetCollectionDocument,
          variables: {
            id: Number(collection.id),
          },
        });

        cache.writeQuery({
          query: GetCollectionDocument,
          variables: {
            id: Number(collection.id),
          },
          data: {
            ...existing,
            getCollection: {
              ...existing?.getCollection,
              movies: existing?.getCollection.movies.filter(
                (movie) => movie.id !== data?.deleteCollectionMovie.movieId,
              ),
            },
          },
        });
      },
    },
  );
  const [getMovies, { data: getMoviesData, loading: loadingMovies }] =
    useLazyQuery(GetMoviesOffsetDocument);
  const [search, setSearch] = useState<string>('');

  const onSubmit = async (input: UpdateCollectionInput) => {
    const { data } = await updateCollection({
      variables: {
        id: Number(collection.id),
        input: {
          ...input,
          coverId: cover?.id,
          isSystem: false,
        },
      },
    });
    if (data) {
      window.alert('Successfully edited!');
      // router.back();
    }
  };

  const searchMovies = (getMoviesData?.getMoviesOffset.nodes ?? []).filter(
    (item) => !collection.movies.find((movie) => movie.id === item.id),
  );

  return (
    <div className="flex flex-auto flex-col gap-2">
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
        <span className="text-xs text-red-500">{error?.message}</span>
        <Button type="submit" disabled={loading}>
          Edit collection
        </Button>
      </form>
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
                        disabled={loadingAddMovie}
                        onClick={async () => {
                          const { data, errors } = await addCollectionMovie({
                            variables: {
                              collectionId: Number(collection.id),
                              movieId: item.id,
                            },
                          });

                          if (data && !errors) {
                          } else {
                            window.alert('Failed to add movie to collection!');
                          }
                        }}
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
            <h3 className="text-lg font-semibold">Current movies</h3>
            <div className="flex p-2 max-h-[400px] flex-auto overflow-auto">
              <List
                items={collection.movies.map((item) => ({
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
                        disabled={loadingRemoveMovie}
                        onClick={async () => {
                          const { data, errors } = await removeCollectionMovie({
                            variables: {
                              collectionId: Number(collection.id),
                              movieId: item.id,
                            },
                          });

                          if (data && !errors) {
                          } else {
                            window.alert(
                              'Failed to remove movie from collection!',
                            );
                          }
                        }}
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
    </div>
  );
};

export default EditCollectionForm;
