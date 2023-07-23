'use client';

import React, { useState } from 'react';
import { Button, Field } from '@shared/ui';
import { useMutation } from '@apollo/client';
import { UpdateMeDocument } from '@shared/api/graphql';
import { useUser } from '@entities/user';

const EditEmailForm = () => {
  const { user, setUser } = useUser();
  const [email, setEmail] = useState<string>(user?.email ?? '');
  const [editable, setEditable] = useState<boolean>(false);
  const [updateMe, { loading, error }] = useMutation(UpdateMeDocument);

  return (
    <form
      className="flex flex-col gap-0.5"
      onSubmit={async (e) => {
        e.preventDefault();

        const { data } = await updateMe({
          variables: {
            input: {
              email,
            },
          },
        });

        if (data) {
          setUser({
            ...user,
            ...data.updateMe,
          });
          setEditable(false);
        }
      }}
    >
      <div className="flex items-end gap-1">
        <Field
          name={'email'}
          value={email}
          label={'Email'}
          stretch
          required={editable}
          disabled={!editable || loading}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex ml-auto">
          {editable ? (
            <div className="flex gap-1">
              <Button size="sm" disabled={loading}>
                Save
              </Button>
              <Button
                variant="danger"
                size="sm"
                type="button"
                disabled={loading}
                onClick={() => {
                  setEmail(user?.email ?? '');
                  setEditable(false);
                }}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <Button
              type="button"
              size="sm"
              onClick={() => {
                setEditable(true);
              }}
            >
              Edit
            </Button>
          )}
        </div>
      </div>
      <span className="text-xs text-red-500">{error?.message}</span>
    </form>
  );
};

export default EditEmailForm;
