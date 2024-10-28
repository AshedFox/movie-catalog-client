'use client';

import { useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreateCollectionReviewDocument,
  GetCollectionsReviewsOffsetDocument,
  GetCollectionsReviewsRelayDocument,
  HasCollectionReviewDocument,
} from '@shared/api/graphql';
import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Slider,
  Textarea,
} from '@shared/ui';
import { Form, useForm } from 'react-hook-form';
import { CreateReviewInput, createReviewSchema } from '../model/schema';

type Props = {
  collectionId: number;
};

const CreateCollectionReviewForm = ({ collectionId }: Props) => {
  const form = useForm<CreateReviewInput>({
    resolver: zodResolver(createReviewSchema),
    defaultValues: {
      mark: 1,
      text: '',
    },
  });
  const [createReview] = useMutation(CreateCollectionReviewDocument, {
    refetchQueries: [
      HasCollectionReviewDocument,
      GetCollectionsReviewsRelayDocument,
      GetCollectionsReviewsOffsetDocument,
    ],
    //   update: (cache, { data }) => {
    //     const existing = cache.readQuery({
    //       query: GetCollectionsReviewsRelayDocument,
    //       variables: {
    //         filter: {
    //           collectionId: {
    //             eq: collectionId,
    //           },
    //         },
    //         last: 2,
    //       },
    //     });

    //     const existingEdges = existing?.getCollectionsReviewsRelay.edges ?? [];
    //     const pageInfo = existing?.getCollectionsReviewsRelay.pageInfo ?? {
    //       hasPreviousPage: true,
    //       hasNextPage: true,
    //     };

    //     cache.writeQuery({
    //       query: GetCollectionsReviewsRelayDocument,
    //       variables: {
    //         filter: {
    //           collectionId: {
    //             eq: collectionId,
    //           },
    //         },
    //         last: 2,
    //       },
    //       data: {
    //         getCollectionsReviewsRelay: {
    //           pageInfo,
    //           edges: [
    //             {
    //               node: data?.createCollectionReview!,
    //               cursor: data?.createCollectionReview.id!,
    //             },
    //             ...existingEdges,
    //           ],
    //         },
    //       },
    //     });
    //   },
  });

  const onSubmit = async (input: CreateReviewInput) => {
    await createReview({
      variables: {
        input: {
          ...input,
          collectionId,
        },
      },
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mark</FormLabel>
              <FormControl>
                <div className="flex gap-2 items-center justify-between">
                  <Slider
                    step={1}
                    min={1}
                    max={10}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    name={field.name}
                    value={[field.value]}
                    onValueChange={(values) => field.onChange(values[0])}
                  />
                  <div className="text-lg font-semibold w-[2ch] text-right">{field.value}</div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="mark"
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text</FormLabel>
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
          name="text"
        />
        <Button type="submit" disabled={form.formState.isLoading}>
          Create
        </Button>
      </form>
    </Form>
  );
};

export default CreateCollectionReviewForm;
