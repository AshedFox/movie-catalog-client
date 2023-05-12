'use client';

import React from 'react';
import { Button, Field } from '@shared/ui';
import { useForm } from 'react-hook-form';
import {
  CreateRoomDocument,
  CreateRoomInput,
  GetRoomsDocument,
} from '@shared/api/graphql';
import { useMutation } from '@apollo/client';

type Props = {
  userId: string;
};

const CreateRoomForm = ({ userId }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateRoomInput>({
    defaultValues: {
      name: '',
    },
  });
  const [createRoom, { loading, error }] = useMutation(CreateRoomDocument, {
    onCompleted: () => {
      reset();
    },
    update: (cache, { data }) => {
      const existing = cache.readQuery({
        query: GetRoomsDocument,
        variables: {
          filter: {
            ownerId: {
              eq: userId,
            },
          },
          limit: 10,
          offset: 0,
        },
      });

      const existingNodes = existing?.getRooms.nodes ?? [];
      const pageInfo = existing?.getRooms.pageInfo ?? {
        totalCount: 0,
      };

      cache.writeQuery({
        query: GetRoomsDocument,
        variables: {
          filter: {
            ownerId: {
              eq: userId,
            },
          },
          limit: 10,
          offset: 0,
        },
        data: {
          getRooms: {
            pageInfo,
            nodes: [data?.createRoom!, ...existingNodes],
          },
        },
      });
    },
  });

  const onSubmit = async (input: CreateRoomInput) => {
    await createRoom({
      variables: {
        input,
      },
    });
  };

  return (
    <form
      autoComplete="off"
      className="flex flex-auto flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <fieldset className="flex flex-col gap-1" disabled={loading}>
        <Field
          label="Room name"
          {...register('name', {
            minLength: 3,
            maxLength: 255,
            required: true,
          })}
          error={errors.name?.message}
        />
      </fieldset>
      <span className="text-xs text-red-500">{error?.message}</span>
      <Button type="submit" disabled={loading}>
        Create room
      </Button>
    </form>
  );
};

export default CreateRoomForm;
