import React from 'react';
import { Grid } from '@shared/ui';
import { CollectionCard_CollectionFragment } from '@shared/api/graphql';
import { CollectionCard } from '@entities/collection';

type Props = {
  items: CollectionCard_CollectionFragment[];
};

const CollectionsGrid = ({ items }: Props) => {
  return (
    <Grid
      items={items.map((item) => ({
        key: item.id,
        content: <CollectionCard collection={item} />,
      }))}
    />
  );
};

export default CollectionsGrid;
