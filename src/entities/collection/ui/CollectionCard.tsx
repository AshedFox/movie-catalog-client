import React from 'react';
import { ROUTES } from '@shared/constants/routes';
import { formatDate } from '@shared/lib/helpers';
import { CollectionCard_CollectionFragment } from '@shared/api/graphql';
import { Card } from '@shared/ui';
import Link from 'next/link';

type Props = {
  collection: CollectionCard_CollectionFragment;
};

const CollectionCard = ({ collection }: Props) => {
  return (
    <Card
      title={collection.name}
      titleHref={`${ROUTES.collections}/${collection.id}`}
      coverUrl={collection.cover?.url ?? '/blank_item.jpg'}
      description={collection.description ?? undefined}
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
      extraSlot={
        <>
          {collection.createdAt && (
            <div className="text-sm font-semibold">
              {formatDate(collection.createdAt)}
            </div>
          )}
        </>
      }
    />
  );
};

export default CollectionCard;
