'use client';

import { useSuspenseQuery } from '@apollo/client';
import { CollectionCard } from '@entities/collection';
import { GetCollectionsDocument, SortDirectionEnum } from '@shared/api/graphql';
import React from 'react';

type Props = {
  limit?: number;
};

const NonSystemCollectionsGrid = ({ limit = 20 }: Props) => {
  const { data } = useSuspenseQuery(GetCollectionsDocument, {
    variables: {
      sort: {
        createdAt: {
          direction: SortDirectionEnum.DESC,
        },
      },
      offset: 0,
      limit,
      filter: {
        isSystem: {
          eq: false,
        },
      },
    },
  });

  if (data.getCollections.nodes.length === 0) {
    return (
      <div className="flex text-gray-500 italic w-full h-full items-center justify-center">
        Nothing here...
      </div>
    );
  }

  return (
    <div className="grid gap-2 lg:gap-3 xl:gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {data.getCollections.nodes.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

export default NonSystemCollectionsGrid;
