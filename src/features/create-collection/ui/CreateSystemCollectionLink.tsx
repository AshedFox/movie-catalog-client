import React from 'react';
import { Button } from '@shared/ui';
import Link from 'next/link';
import { getServerSession } from '@features/auth/session';

const CreateSystemCollectionLink = async () => {
  const session = await getServerSession();

  if (!session?.user || session.user.role !== 'Admin') {
    return null;
  }

  return (
    <Link href={'/collections/system/create'}>
      <Button size="sm">Create collection</Button>
    </Link>
  );
};

export default CreateSystemCollectionLink;
