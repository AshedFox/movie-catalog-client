'use client';

import React from 'react';
import { Button } from '@shared/ui';
import Link from 'next/link';
import { useUser } from '@entities/user';

const CreateSystemCollectionLink = () => {
  const { user } = useUser();

  if (!user || user.role !== 'Admin') {
    return <></>;
  }

  return (
    <Link href={'/collections/system/create'}>
      <Button size="sm">Create collection</Button>
    </Link>
  );
};

export default CreateSystemCollectionLink;
