import { MovieFragment } from '@shared/api/graphql';
import { cn } from '@shared/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Tag } from '@shared/ui';
import { Star } from 'lucide-react';
import { formatAsFullRange, formatDate } from '@shared/lib/helpers';

type Props = {
  movie: MovieFragment;
  className?: string;
  withHref?: boolean;
  withTags?: boolean;
};

const MovieRow = ({ movie, className, withHref = true, withTags = true }: Props) => {
  const ImageContainer = withHref ? Link : 'div';
  const TitleContainer = withHref ? Link : 'div';

  const href = movie.__typename === 'Film' ? `/films/${movie.id}` : `/series/${movie.id}`;

  return (
    <div
      className={cn(
        'flex rounded overflow-hidden flex-auto border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 p-2 gap-4',
        className,
      )}
    >
      <ImageContainer
        title={movie.title}
        href={href}
        className={
          'rounded shrink-0 relative overflow-hidden border border-gray-200 dark:border-gray-800 w-24 aspect-square'
        }
      >
        <Image
          src={movie.cover?.url ?? '/blank_item.jpg'}
          alt="cover"
          width={512}
          height={512}
          className="object-cover w-full h-full"
        />
      </ImageContainer>

      <div className="grid gap-1">
        <TitleContainer title={movie.title} className="truncate w-fit max-w-full" href={href}>
          <h2 className="text-2xl font-bold">{movie.title}</h2>
        </TitleContainer>
        {withTags && (
          <div className="w-fit max-w-full overflow-hidden">
            <ul className={'flex gap-1 items-center overflow-x-auto no-scrollbar'}>
              {movie.ageRestriction && (
                <Tag className="bg-red-600 dark:bg-red-700">{movie.ageRestriction}</Tag>
              )}
              <Tag
                title={movie.rating === 0 ? 'no reviews' : movie.rating.toFixed(3)}
                className="bg-amber-500 dark:bg-amber-600"
                Icon={<Star className="h-3 w-3" />}
              >
                {movie.rating === 0 ? 'no reviews' : movie.rating.toFixed(1)}
              </Tag>
              {movie.genres?.map((g) => (
                <Tag key={g.name} className="bg-green-500 dark:bg-green-700">
                  {g.name}
                </Tag>
              ))}
              {movie.countries?.map((c) => (
                <Tag key={c.name} className="bg-blue-500 dark:bg-blue-700">
                  {c.name}
                </Tag>
              ))}
              {movie.studios?.map((s) => (
                <Tag key={s.name} className="bg-orange-500 dark:bg-orange-700">
                  {s.name}
                </Tag>
              ))}
            </ul>
          </div>
        )}

        <div className="text-sm font-semibold">
          {movie.__typename === 'Film'
            ? formatDate(movie.releaseDate ?? undefined)
            : movie.__typename === 'Series'
            ? formatAsFullRange(movie.startReleaseDate, movie.endReleaseDate)
            : null}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
