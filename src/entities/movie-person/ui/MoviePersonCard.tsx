import React from 'react';
import { Tag } from '@shared/ui';
import Image from 'next/image';
import { MoviePersonCard_MoviePersonFragment } from '@shared/api/graphql';

type Props = {
  moviePerson: MoviePersonCard_MoviePersonFragment;
};

const MoviePersonCard = ({ moviePerson }: Props) => {
  return (
    <div className="flex w-32 shrink-0 flex-col rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="w-full aspect-square relative overflow-hidden">
        <Image
          src={moviePerson.person.image?.url ?? '/blank_item.jpg'}
          alt="card cover"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-2 grid gap-1.5 overflow-hidden">
        <h2 className="text-lg font-bold truncate">{moviePerson.person.name}</h2>
        <Tag className="bg-red-600 dark:bg-red-700 w-fit">{moviePerson.type.name}</Tag>
      </div>
    </div>
    // <Card
    //   title={moviePerson.person.name}
    //   coverUrl={moviePerson.person.image?.url}
    //   tagsSlot={
    //     <Tag className="bg-red-200 dark:bg-red-700">
    //       {moviePerson.type.name}
    //     </Tag>
    //   }
    //   extraSlot={
    //     <>
    //       {moviePerson.role && (
    //         <div className="text-sm">
    //           As <span className="italic border-b">{moviePerson.role}</span>
    //         </div>
    //       )}
    //     </>
    //   }
    // />
  );
};

export default MoviePersonCard;
