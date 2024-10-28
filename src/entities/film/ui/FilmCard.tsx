import { ROUTES } from '@shared/constants/routes';
import { formatDate } from '@shared/lib/helpers';
import { Star } from 'lucide-react';
import { FilmCard_FilmFragment } from 'shared/api/graphql';
import { Card, Tag } from 'shared/ui';

type Props = {
  className?: string;
  film: FilmCard_FilmFragment;
};

const FilmCard = ({ film, className }: Props) => {
  return (
    <Card
      className={className}
      title={film.title}
      description={film.description ?? undefined}
      titleHref={`${ROUTES.films}/${film.id}`}
      coverUrl={film.cover?.url}
      tagsSlot={
        <>
          {film.ageRestriction && (
            <Tag className="bg-red-600 dark:bg-red-700">{film.ageRestriction}</Tag>
          )}
          <Tag
            title={film.rating === 0 ? 'no reviews' : film.rating.toFixed(3)}
            className="bg-amber-500 dark:bg-amber-600"
            Icon={<Star className="h-3 w-3" />}
          >
            {film.rating === 0 ? 'no reviews' : film.rating.toFixed(1)}
          </Tag>
          {film.genres?.map((g) => (
            <Tag key={g.name} className="bg-green-500 dark:bg-green-700">
              {g.name}
            </Tag>
          ))}
          {film.countries?.map((c) => (
            <Tag key={c.name} className="bg-blue-500 dark:bg-blue-700">
              {c.name}
            </Tag>
          ))}
          {film.studios?.map((s) => (
            <Tag key={s.name} className="bg-orange-500 dark:bg-orange-700">
              {s.name}
            </Tag>
          ))}
        </>
      }
      extraSlot={
        <>
          {film.releaseDate && (
            <div className="text-xs font-semibold">{formatDate(film.releaseDate)}</div>
          )}
        </>
      }
    />
  );
};

export default FilmCard;
