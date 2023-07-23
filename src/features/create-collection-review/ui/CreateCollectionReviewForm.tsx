'use client';

import React from 'react';
import { Button, Field } from '@shared/ui';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import MultilineField from '@shared/ui/MultilineField';
import {
  CreateCollectionReviewDocument,
  CreateCollectionReviewInput,
  GetCollectionsReviewsRelayDocument,
} from '@shared/api/graphql';

type Props = {
  collectionId: number;
};

export type CreateReviewFormInput = Omit<
  CreateCollectionReviewInput,
  'collectionId'
>;

const CreateCollectionReviewForm = ({ collectionId }: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<CreateReviewFormInput>({
    defaultValues: {
      mark: 0,
      text: '',
    },
  });
  const [createReview, { loading, error }] = useMutation(
    CreateCollectionReviewDocument,
    {
      onCompleted: () => {
        reset();
      },
      update: (cache, { data }) => {
        const existing = cache.readQuery({
          query: GetCollectionsReviewsRelayDocument,
          variables: {
            filter: {
              collectionId: {
                eq: collectionId,
              },
            },
            last: 2,
          },
        });

        const existingEdges = existing?.getCollectionsReviewsRelay.edges ?? [];
        const pageInfo = existing?.getCollectionsReviewsRelay.pageInfo ?? {
          hasPreviousPage: true,
          hasNextPage: true,
        };

        cache.writeQuery({
          query: GetCollectionsReviewsRelayDocument,
          variables: {
            filter: {
              collectionId: {
                eq: collectionId,
              },
            },
            last: 2,
          },
          data: {
            getCollectionsReviewsRelay: {
              pageInfo,
              edges: [
                {
                  node: data?.createCollectionReview!,
                  cursor: data?.createCollectionReview.id!,
                },
                ...existingEdges,
              ],
            },
          },
        });
      },
    },
  );

  const onSubmit = async (values: CreateReviewFormInput) => {
    await createReview({
      variables: {
        input: {
          ...values,
          collectionId,
        },
      },
    });
  };

  return (
    <form
      autoComplete="off"
      className="flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-lg font-semibold">Create Review</h2>
      <fieldset className="flex flex-col gap-1 px-5 py-2" disabled={loading}>
        <Field
          label="Mark"
          type="number"
          min={0}
          max={10}
          step={1}
          {...register('mark', {
            valueAsNumber: true,
            min: 0,
            max: 10,
            required: true,
          })}
          error={errors.mark?.message}
        />
        <MultilineField
          label="Review text"
          {...register('text', {
            minLength: 3,
            maxLength: 4096,
            required: true,
          })}
          error={errors.text?.message}
        />
      </fieldset>
      <span className="text-xs text-red-500">{error?.message}</span>
      <Button type="submit" disabled={loading}>
        Create
      </Button>
    </form>
  );
};

export default CreateCollectionReviewForm;
