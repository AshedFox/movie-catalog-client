'use client';

import { useLazyQuery, useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateCollectionDocument,
  GetMoviesOffsetDocument,
  UploadImageDocument,
} from '@shared/api/graphql';
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
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import AsyncReactSelect from 'react-select/async';
import { CreateCollectionInput, createCollectionSchema } from '../model/schema';

type Props = {
  collectionType: 'custom' | 'system';
};

const CreateCollectionForm = ({ collectionType }: Props) => {
  const form = useForm<CreateCollectionInput>({
    resolver: zodResolver(createCollectionSchema),
    defaultValues: {
      name: '',
      description: '',
      isSystem: collectionType === 'system',
      movies: [],
    },
  });
  const router = useRouter();

  const [uploadImage] = useMutation(UploadImageDocument);
  const [createCollection] = useMutation(CreateCollectionDocument);
  const [getMovies] = useLazyQuery(GetMoviesOffsetDocument);
  // const [search, setSearch] = useState<string>('');

  const onSubmit = async (input: CreateCollectionInput) => {
    const { data } = await createCollection({
      variables: {
        input: {
          ...input,
          coverId: input.cover?.id,
          moviesIds: input.movies.map((v) => v.value),
        },
      },
    });
    if (data) {
      router.push(`/collections/${data.createCollection.id}`);
    }
  };

  // const searchMovies = (getMoviesData?.getMoviesOffset.nodes ?? []).filter(
  //   (item) => !movies.find((movie) => movie.id === item.id),
  // );

  return (
    <Form {...form}>
      <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
        {/* <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <>
                  <Image
                    src={field.value?.url ?? '/blank_item.jpg'}
                    alt="cover image"
                    title="Cover image"
                    className="cursor-pointer object-cover aspect-video rounded-lg w-full"
                    // onClick={}
                  />
                  <Input
                    {...field}
                    type="file"
                    value={field.value?.url}
                    onChange={async (e) => {
                      if (
                        e.currentTarget.files &&
                        e.currentTarget.files.length > 0
                      ) {
                        const { data } = await uploadImage({
                          variables: {
                            file: e.currentTarget.files[0],
                          },
                        });

                        if (data) {
                          field.onChange({
                            id: data.uploadImage.id,
                            url: data.uploadImage.url,
                          });
                        }
                      }
                    }}
                  />
                </>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="cover"
        /> */}
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your collection name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="name"
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  rows={3}
                  className="resize-y"
                  placeholder="Your collection description..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="description"
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Movies in collection</FormLabel>
              <FormControl>
                <AsyncReactSelect
                  {...field}
                  onChange={(v) => field.onChange(v.flat())}
                  cacheOptions
                  hideSelectedOptions
                  defaultOptions
                  isMulti
                  loadOptions={async (inputValue) => {
                    const { data } = await getMovies({
                      variables: {
                        limit: 20,
                        offset: 0,
                        filter: {
                          title: {
                            ilike: inputValue,
                          },
                        },
                      },
                    });

                    if (data) {
                      return data.getMoviesOffset.nodes.map((node) => ({
                        label: node.title,
                        value: node.id,
                      }));
                    }

                    return [];
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="movies"
        />
        {/* <details>
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
                          variant="destructive"
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
        </details> */}
        <Button
          type="submit"
          isLoading={form.formState.isLoading}
          disabled={!form.formState.isDirty}
        >
          Create collection
        </Button>
      </form>
    </Form>
  );
};

export default CreateCollectionForm;
