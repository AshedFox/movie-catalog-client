import React, { ReactNode } from 'react';
import Image from 'next/image';
import { formatDate } from '@shared/lib/helpers';
import { CollectionItem_CollectionFragment } from '@shared/api/graphql';
import { ROUTES } from '@shared/constants/routes';
import Link from 'next/link';

type Props = {
  collection: CollectionItem_CollectionFragment;
  bookmarkSlot: ReactNode;
  extraSlot: ReactNode;
};

const CollectionItem = ({ collection, extraSlot, bookmarkSlot }: Props) => {
  return (
    <div className="flex flex-col flex-auto gap-2 md:gap-5">
      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <div className="flex flex-col gap-2">
          <Image
            src={collection.cover?.url ?? '/blank_item.jpg'}
            width={1920}
            height={1080}
            alt="collection cover"
            priority={true}
            className={'rounded object-cover w-full h-96 md:w-72'}
          />
          {bookmarkSlot}
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold text-3xl leading-tight">
            {collection.name}
          </h1>
          <div className="flex flex-col gap-1 px-4 py-1">
            <div className="flex gap-1.5 overflow-hidden">
              <span className="font-semibold">Creator: </span>
              <Link
                className="flex items-center gap-2 rounded h-6 overflow-hidden text-xs py-0.5 px-2 bg-primary-200 dark:bg-primary-600"
                href={`${ROUTES.users}/${collection.owner.id}`}
              >
                {collection.owner.name}
              </Link>
            </div>
            <div className="flex gap-1.5">
              <div className="font-semibold">Rating: </div>
              <div className="rounded h-6 overflow-hidden gap-1 text-xs py-0.5 px-2 bg-yellow-200 dark:bg-yellow-600 flex items-center w-fit">
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                </svg>
                <span>
                  {collection.rating === 0
                    ? 'no reviews'
                    : parseFloat(collection.rating.toFixed(2))}
                </span>
              </div>
            </div>
            <div>
              <span className="font-semibold">Created: </span>
              <span>{formatDate(collection.createdAt)}</span>
            </div>
            {collection.description && (
              <div className="flex flex-col">
                <span className="font-semibold">Description: </span>
                <span className="text-sm px-4 whitespace-pre-line">
                  {collection.description}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      {extraSlot}
    </div>
  );
};

export default CollectionItem;
