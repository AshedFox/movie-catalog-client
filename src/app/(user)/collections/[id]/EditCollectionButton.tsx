'use client';

import React from 'react';
import { useUser } from '@entities/user';
import Link from 'next/link';
import { Button } from '@shared/ui';

type Props = {
  collectionId: string;
  collectionOwnerId: string;
};

const EditCollectionButton = ({ collectionOwnerId, collectionId }: Props) => {
  const { user } = useUser();

  if (user?.id !== collectionOwnerId) {
    return <></>;
  }

  return (
    <Link href={`/collections/${collectionId}/edit`}>
      <Button size="sm">Edit</Button>
    </Link>
  );
};

export default EditCollectionButton;
