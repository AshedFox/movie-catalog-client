import { FilmCard } from '@entities/film';
import { FilmCard_FilmFragment } from '@shared/api/graphql';
import { Grid } from '@shared/ui';

type Props = {
  items: FilmCard_FilmFragment[];
};

const FilmsGrid = ({ items }: Props) => {
  return (
    <Grid
      items={items.map((item) => (
        <FilmCard key={item.id} film={item} />
      ))}
    />
  );
};

export default FilmsGrid;
