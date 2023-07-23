'use client';

import React, { useState } from 'react';
import { Button, Field } from '@shared/ui';
import { useMutation } from '@apollo/client';
import { UpdatePasswordDocument } from '@shared/api/graphql';
import Crypto from 'crypto';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from '../model/schema';

const EditPasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<{
    newPassword: string;
    oldPassword: string;
  }>({
    resolver: zodResolver(schema),
    defaultValues: {
      newPassword: '',
      oldPassword: '',
    },
  });
  const [editable, setEditable] = useState<boolean>(false);
  const [updatePassword, { loading, error }] = useMutation(
    UpdatePasswordDocument,
  );

  const onSubmit = async (input: {
    newPassword: string;
    oldPassword: string;
  }) => {
    if (input.newPassword === input.oldPassword) {
      return setError('root', {
        type: 'validate',
        message: 'Old and new passwords you entered are the same!',
      });
    }

    const { data } = await updatePassword({
      variables: {
        newPassword: Crypto.createHash('sha512')
          .update(input.newPassword)
          .digest('hex'),
        oldPassword: Crypto.createHash('sha512')
          .update(input.oldPassword)
          .digest('hex'),
      },
    });

    if (data) {
      setEditable(false);
    }
  };

  return (
    <form className="flex flex-col gap-0.5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-end gap-1">
        {editable && (
          <div className="flex flex-auto gap-2">
            <Field
              {...register('oldPassword', {
                disabled: loading,
              })}
              required
              stretch
              error={errors.oldPassword?.message}
              type={'password'}
              autoComplete="off"
              label={'Old password'}
            />
            <Field
              {...register('newPassword', {
                disabled: loading,
              })}
              required
              stretch
              error={errors.oldPassword?.message}
              type={'password'}
              autoComplete="off"
              label={'New password'}
            />
          </div>
        )}
        {editable && (
          <div className="flex gap-1 ml-auto">
            <Button size="sm" disabled={loading}>
              Save
            </Button>
            <Button
              variant="danger"
              size="sm"
              type="button"
              disabled={loading}
              onClick={() => {
                setEditable(false);
              }}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
      {!editable && (
        <Button
          type="button"
          size="sm"
          onClick={() => {
            reset();
            setEditable(true);
          }}
        >
          Edit password
        </Button>
      )}
      <span className="text-xs text-red-500">{error?.message}</span>
      <span className="text-xs text-red-500">{errors.root?.message}</span>
    </form>
  );
};

export default EditPasswordForm;
