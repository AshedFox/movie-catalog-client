'use client';

import React from 'react';
import { Button } from '@shared/ui';
import { useMutation } from '@apollo/client';
import { DeleteCollectionDocument } from '@shared/api/graphql';
import { useRouter } from 'next/navigation';
import { useSession } from '@features/auth/session';

type Props = {
  collectionId: string;
  collectionOwnerId: string;
};

const RemoveCollectionButton = ({ collectionId, collectionOwnerId }: Props) => {
  const session = useSession();
  const router = useRouter();
  const [removeCollection, { loading }] = useMutation(DeleteCollectionDocument);

  if (session.data?.user.id !== collectionOwnerId) {
    return null;
  }

  return (
    <Button
      isLoading={loading}
      size="sm"
      variant="destructive"
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
