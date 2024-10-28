'use client';

import { useLazyQuery, useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AddCollectionMovieDocument,
  CollectionItem_CollectionFragment,
  GetCollectionDocument,
  GetMoviesOffsetDocument,
  RemoveCollectionMovieDocument,
  UpdateCollectionDocument,
  UploadImageDocument,
} from '@shared/api/graphql';
import { useToast } from '@shared/hooks/use-toast';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from '@shared/ui';
import { useForm } from 'react-hook-form';
import ReactAsyncSelect from 'react-select/async';
import { z } from 'zod';
import { schema } from './schema';

type Props = {
  collection: CollectionItem_CollectionFragment;
};

type Input = z.infer<typeof schema>;

const moviesSchema = z.object({
  search: z.string(),
  searchMovies: z.array(
    z.object({
      id: z.string().uuid(),
      title: z.string(),
    }),
  ),
  selectedMovies: z.array(
    z.object({
      id: z.string().uuid(),
      title: z.string(),
    }),
  ),
});

type MoviesInput = z.infer<typeof moviesSchema>;

const EditCollectionForm = ({ collection }: Props) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: collection.name,
      description: collection.description ?? '',
      coverId: collection.cover?.id ?? undefined,
    },
  });
  const moviesForm = useForm<MoviesInput>({
    resolver: zodResolver(moviesSchema),
    defaultValues: {
      search: '',
      searchMovies: [],
      selectedMovies: collection.movies,
    },
  });
  const { toast } = useToast();
  const [uploadImage] = useMutation(UploadImageDocument);
  const [updateCollection, { loading }] = useMutation(UpdateCollectionDocument, {
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
  });
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
  const [getMovies] = useLazyQuery(GetMoviesOffsetDocument);

  const onSubmit = async (input: Input) => {
    const { data } = await updateCollection({
      variables: {
        id: Number(collection.id),
        input,
      },
    });
    if (data) {
      toast({
        variant: 'success',
        title: 'Success',
        description: 'Successfully edited collection',
      });
      // router.back();
    }
  };

  return (
    <div className="flex flex-auto flex-col gap-2">
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Collection name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Textarea
                    rows={3}
                    className="resize-y"
                    placeholder="Your review text..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" isLoading={loading}>
            Save changes
          </Button>
        </form>
      </Form>

      <details>
        <summary className="text-xl font-bold cursor-pointer">Movies</summary>
        <ReactAsyncSelect
          cacheOptions
          loadOptions={async (input) => {
            const { data } = await getMovies({
              variables: {
                limit: 20,
                offset: 0,
                filter: {
                  title: {
                    ilike: input,
                  },
                },
              },
            });

            if (!data) {
              return [];
            }

            return data.getMoviesOffset.nodes.map((v) => ({
              value: v.id,
              label: v.title,
            }));
          }}
          isMulti
          value={moviesForm.getValues().selectedMovies.map((v) => ({
            value: v.id,
            label: v.title,
          }))}
          onChange={(v) => {
            moviesForm.setValue(
              'selectedMovies',
              v.map((v) => ({ id: v.value, title: v.label })),
            );
          }}
        />
      </details>
    </div>
  );
};

export default EditCollectionForm;
