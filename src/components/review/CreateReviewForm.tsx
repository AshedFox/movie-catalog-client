'use client';

import React from 'react';
import { Button, Field } from '../ui';
import { useForm } from 'react-hook-form';
import {
  CreateMovieReviewInput,
  GetReviewsDocument,
} from '@lib/graphql/__generated__/graphql';
import { graphql } from '@lib/graphql/__generated__';
import { useMutation } from '@apollo/client';
import MultilineField from '../ui/MultilineField';

const CreateReviewDocument = graphql(/* GraphQL */ `
  mutation CreateReview($input: CreateMovieReviewInput!) {
    createMovieReview(input: $input) {
      id
      text
      mark
      createdAt
      user {
        id
        name
        avatar {
          url
        }
      }
    }
  }
`);

type FormFieldsType = Omit<CreateMovieReviewInput, 'movieId'>;

type Props = {
  movieId: string;
};

const CreateReviewForm = ({ movieId }: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormFieldsType>({
    defaultValues: {
      mark: 0,
      text: '',
    },
  });
  const [createReview, { loading, error }] = useMutation(CreateReviewDocument, {
    onCompleted: () => {
      reset();
    },
    update: (cache, { data }) => {
      const existing = cache.readQuery({
        query: GetReviewsDocument,
        variables: {
          movieId,
          last: 2,
        },
      });

      const existingEdges = existing?.getMoviesReviews.edges ?? [];
      const pageInfo = existing?.getMoviesReviews.pageInfo ?? {
        hasPreviousPage: true,
      };

      cache.writeQuery({
        query: GetReviewsDocument,
        variables: {
          movieId,
          last: 2,
        },
        data: {
          getMoviesReviews: {
            pageInfo,
            edges: [
              {
                node: data?.createMovieReview!,
                cursor: data?.createMovieReview.id!,
              },
              ...existingEdges,
            ],
          },
        },
      });
    },
  });

  const onSubmit = async (values: FormFieldsType) => {
    await createReview({
      variables: {
        input: {
          ...values,
          movieId,
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

export default CreateReviewForm;
