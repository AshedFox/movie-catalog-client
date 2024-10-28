import { CollectionCard } from '@entities/collection';
import { CollectionCard_CollectionFragment } from '@shared/api/graphql';
import { Grid } from '@shared/ui';

type Props = {
  items: CollectionCard_CollectionFragment[];
};

const CollectionsGrid = ({ items }: Props) => {
  return (
    <Grid
      items={items.map((item) => (
        <CollectionCard key={item.id} collection={item} />
      ))}
    />
  );
};

export default CollectionsGrid;
