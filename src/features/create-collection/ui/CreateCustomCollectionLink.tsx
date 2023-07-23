'use client';

import React from 'react';
import { Button } from '@shared/ui';
import Link from 'next/link';
import { useUser } from '@entities/user';

const CreateCustomCollectionLink = () => {
  const { user } = useUser();

  if (!user) {
    return <></>;
  }

  return (
    <Link href={'/collections/custom/create'}>
      <Button size="sm">Create collection</Button>
    </Link>
  );
};

export default CreateCustomCollectionLink;
