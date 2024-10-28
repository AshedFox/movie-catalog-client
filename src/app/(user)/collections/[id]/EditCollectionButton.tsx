'use client';

import React from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@shared/ui';
import { getServerSession, useSession } from '@features/auth/session';

type Props = {
  collectionId: string;
  collectionOwnerId: string;
};

const EditCollectionButton = ({ collectionOwnerId, collectionId }: Props) => {
  const session = useSession();

  if (session?.data?.user.id !== collectionOwnerId) {
    return null;
  }

  return (
    <Link className={buttonVariants({ size: 'sm' })} href={`/collections/${collectionId}/edit`}>
      Edit
    </Link>
  );
};

export default EditCollectionButton;
