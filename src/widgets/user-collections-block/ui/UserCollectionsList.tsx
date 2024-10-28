'use client';

import { useSuspenseQuery } from '@apollo/client';
import { CollectionRow } from '@entities/collection';
import { GetCollectionsDocument, SortDirectionEnum } from '@shared/api/graphql';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

type Props = {
  collectionsCount: number;
  userId: string;
  height: number | string;
};

const UserCollectionsList = ({ collectionsCount, height, userId }: Props) => {
  const { data } = useSuspenseQuery(GetCollectionsDocument, {
    variables: {
      limit: collectionsCount,
      offset: 0,
      filter: {
        ownerId: {
          eq: userId,
        },
      },
      sort: {
        createdAt: {
          direction: SortDirectionEnum.DESC,
        },
      },
    },
  });
  const collections = data.getCollections.nodes;
  const parentRef = useRef(null);
  const virtualizer = useVirtualizer({
    count: collections.length,
    estimateSize: () => 200,
    getScrollElement: () => parentRef.current,
    overscan: 5,
  });

  const virtualItems = virtualizer.getVirtualItems();

  if (collections.length === 0) {
    return <div className="flex items-center justify-center flex-1">Nothing here...</div>;
  }

  return (
    <div className="overflow-y-auto w-full" style={{ height }} ref={parentRef}>
      <div className="relative w-full" style={{ height: virtualizer.getTotalSize() }}>
        {virtualItems.map((virtualRow) => (
          <div
            key={virtualRow.key}
            data-index={virtualRow.index}
            ref={virtualizer.measureElement}
            className="absolute top-0 left-0 w-full"
            style={{
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <CollectionRow
              className={virtualRow.index !== collections.length - 1 ? 'mb-1' : ''}
              collection={collections[virtualRow.index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCollectionsList;
