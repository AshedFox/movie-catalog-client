import React from 'react';
import { Grid } from '@shared/ui';
import { FilmCard } from '@entities/film';
import { FilmCard_FilmFragment } from '@shared/api/graphql';

type Props = {
  items: FilmCard_FilmFragment[];
};

const FilmsGrid = ({ items }: Props) => {
  return (
    <Grid
      items={items.map((item) => ({
        key: item.id,
        content: <FilmCard film={item} />,
      }))}
    />
  );
};

export default FilmsGrid;
