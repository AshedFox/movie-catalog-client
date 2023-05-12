import React from 'react';
import { Row } from '@shared/ui';
import { CollectionCard_CollectionFragment } from '@shared/api/graphql';

type Props = {
  collection: CollectionCard_CollectionFragment;
};

const CollectionRow = ({ collection }: Props) => {
  return (
    <Row
      title={collection.name}
      titleHref={`/collections/${collection.id}`}
      coverUrl={collection.cover?.url}
      description={collection.description ?? undefined}
    />
  );
};

export default CollectionRow;
