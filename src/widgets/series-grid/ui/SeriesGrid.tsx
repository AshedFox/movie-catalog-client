import { SeriesCard } from '@entities/series';
import { SeriesCard_SeriesFragment } from '@shared/api/graphql';
import { Grid } from '@shared/ui';

type Props = {
  items: SeriesCard_SeriesFragment[];
};

const FilmsGrid = ({ items }: Props) => {
  return (
    <Grid
      items={items.map((item) => (
        <SeriesCard key={item.id} series={item} />
      ))}
    />
  );
};

export default FilmsGrid;
