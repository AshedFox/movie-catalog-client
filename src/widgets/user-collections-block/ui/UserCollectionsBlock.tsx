import React from 'react';
import { GetCollectionsDocument, initializeApollo } from '@shared/api/graphql';
import { List } from '@shared/ui';
import Link from 'next/link';
import { CollectionRow } from '@entities/collection';

const client = initializeApollo();

type Props = {
  title: string;
  userId: string;
  collectionsCount: number;
  fullLink?: string;
};

const UserCollectionsBlock = async ({
  userId,
  collectionsCount,
  fullLink,
  title,
}: Props) => {
  const { data: collectionsData } = await client.query({
    query: GetCollectionsDocument,
    variables: {
      limit: collectionsCount,
      offset: 0,
      filter: {
        ownerId: {
          eq: userId,
        },
      },
    },
  });

  const collections = collectionsData.getCollections.nodes;

  return (
    <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h2 className="font-bold text-2xl leading-tight">{title}</h2>
      <div className="p-2 max-h-[400px] flex-auto overflow-auto">
        <List
          items={collections.map((node) => {
            return {
              key: node.id,
              content: <CollectionRow collection={node} />,
            };
          })}
        />
      </div>
      {fullLink && (
        <Link
          className="text-sm border-t border-gray-200 dark:border-gray-800 pt-1"
          href={fullLink}
        >
          See all →
        </Link>
      )}
    </div>
  );
};

export default UserCollectionsBlock;
