import React from 'react';
import { Row } from '@shared/ui';
import { CollectionCard_CollectionFragment } from '@shared/api/graphql';
import Link from 'next/link';
import { ROUTES } from '@shared/constants/routes';

type Props = {
  collection: CollectionCard_CollectionFragment;
};

const CollectionRow = ({ collection }: Props) => {
  return (
    <Row
      title={collection.name}
      titleHref={`/collections/${collection.id}`}
      coverUrl={collection.cover?.url}
      tagsSlot={
        <div className="rounded text-xs py-0.5 px-2 bg-primary-200 dark:bg-primary-600">
          <span>By </span>
          <Link
            href={`${ROUTES.users}/${collection.owner.id}`}
            className="font-semibold"
          >
            {collection.owner.name}
          </Link>
        </div>
      }
      description={collection.description ?? undefined}
    />
  );
};

export default CollectionRow;
