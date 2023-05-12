import React, { ReactNode } from 'react';
import Image from 'next/image';
import { formatDate } from '@shared/lib/helpers';
import { CollectionItem_CollectionFragment } from '@shared/api/graphql';

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
            {collection.description && (
              <div className="flex flex-col">
                <span className="font-semibold">Description: </span>
                <span className="text-sm px-4">{collection.description}</span>
              </div>
            )}
            {collection.createdAt && (
              <div>
                <span className="font-semibold">Created: </span>
                <span>{formatDate(collection.createdAt)}</span>
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
