import React from 'react';
import { Grid } from '@shared/ui';
import { SeriesCard_SeriesFragment } from '@shared/api/graphql';
import { SeriesCard } from '@entities/series';

type Props = {
  items: SeriesCard_SeriesFragment[];
};

const FilmsGrid = ({ items }: Props) => {
  return (
    <Grid
      items={items.map((item) => ({
        key: item.id,
        content: <SeriesCard series={item} />,
      }))}
    />
  );
};

export default FilmsGrid;
