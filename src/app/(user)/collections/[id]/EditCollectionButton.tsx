'use client';

import { useSession } from '@features/auth/session';
import { buttonVariants } from '@shared/ui';
import Link from 'next/link';

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
