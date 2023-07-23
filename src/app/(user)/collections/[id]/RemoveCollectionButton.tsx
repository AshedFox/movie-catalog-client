'use client';

import React from 'react';
import { Button } from '@shared/ui';
import { useUser } from '@entities/user';
import { useMutation } from '@apollo/client';
import { DeleteCollectionDocument } from '@shared/api/graphql';
import { useRouter } from 'next/navigation';

type Props = {
  collectionId: string;
  collectionOwnerId: string;
};

const RemoveCollectionButton = ({ collectionId, collectionOwnerId }: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const [removeCollection, { loading }] = useMutation(DeleteCollectionDocument);

  if (user?.id !== collectionOwnerId) {
    return <></>;
  }

  return (
    <Button
      disabled={loading}
      size="sm"
      variant="danger"
      onClick={async () => {
        if (window.confirm('Are you sure you want to remove collection?')) {
          const { data } = await removeCollection({
            variables: {
              id: Number(collectionId),
            },
          });

          if (data) {
            router.push('/collections');
          }
        }
      }}
    >
      Remove
    </Button>
  );
};

export default RemoveCollectionButton;
