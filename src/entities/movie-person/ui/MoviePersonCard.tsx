import React from 'react';
import { Card } from '@shared/ui';
import { MoviePersonCard_MoviePersonFragment } from '@shared/api/graphql';

type Props = {
  moviePerson: MoviePersonCard_MoviePersonFragment;
};

const MoviePersonCard = ({ moviePerson }: Props) => {
  return (
    <Card
      title={moviePerson.person.name}
      coverUrl={moviePerson.person.image?.url}
      tagsSlot={
        <div className="flex items-center rounded h-6 text-xs overflow-hidden px-2 bg-red-200 dark:bg-red-700">
          {moviePerson.type.name}
        </div>
      }
      extraSlot={
        <>
          {moviePerson.role && (
            <div className="text-sm">
              As <span className="italic border-b">{moviePerson.role}</span>
            </div>
          )}
        </>
      }
    />
  );
};

export default MoviePersonCard;
