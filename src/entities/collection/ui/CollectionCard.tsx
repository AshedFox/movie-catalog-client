import React from 'react';
import { ROUTES } from '@shared/constants/routes';
import { formatDate } from '@shared/lib/helpers';
import { CollectionCard_CollectionFragment } from '@shared/api/graphql';
import { Card } from '@shared/ui';

type Props = {
  collection: CollectionCard_CollectionFragment;
};

const CollectionCard = ({ collection }: Props) => {
  return (
    <Card
      title={collection.name}
      titleHref={`${ROUTES.collections}/${collection.id}`}
      description={collection.description ?? undefined}
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
