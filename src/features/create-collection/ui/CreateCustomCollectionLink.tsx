import React from 'react';
import { buttonVariants } from '@shared/ui';
import Link from 'next/link';
import { getServerSession } from '@features/auth/session';

const CreateCustomCollectionLink = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    return null;
  }

  return (
    <Link className={buttonVariants({ size: 'sm' })} href={'/collections/custom/create'}>
      Create collection
    </Link>
  );
};

export default CreateCustomCollectionLink;
