import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { GetCollectionsDocument, SortDirectionEnum } from '@shared/api/graphql';
import { Grid, Loader } from '@shared/ui';
import { ROUTES } from '@shared/constants/routes';
import { getClient } from '@shared/api/graphql/client';
import { CollectionCard } from '@entities/collection';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Collections',
};

const Page = async () => {
  const client = getClient();
  const { data: nonSystemCollectionsData } = await client.query({
    query: GetCollectionsDocument,
    variables: {
      sort: {
        createdAt: {
          direction: SortDirectionEnum.DESC,
        },
      },
      offset: 0,
      limit: 20,
      filter: {
        isSystem: {
          eq: false,
        },
      },
    },
  });

  const { data: systemCollectionsData } = await client.query({
    query: GetCollectionsDocument,
    variables: {
      sort: {
        createdAt: {
          direction: SortDirectionEnum.DESC,
        },
      },
      offset: 0,
      limit: 20,
      filter: {
        isSystem: {
          eq: true,
        },
      },
    },
  });

  return (
    <main className="flex flex-col py-4 container flex-auto gap-6">
      <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
        <h2 className="font-bold text-2xl leading-tight">System collections</h2>
        <div className="py-2 flex-auto min-h-[150px] overflow-x-auto overflow-y-hidden">
          <Suspense
            fallback={
              <div className="flex flex-auto items-center justify-center">
                <Loader />
              </div>
            }
          >
            {systemCollectionsData.getCollections.nodes.length > 0 ? (
              <Grid
                items={systemCollectionsData.getCollections.nodes.map(
                  (collection) => ({
                    key: collection.id,
                    content: <CollectionCard collection={collection} />,
                  }),
                )}
              />
            ) : (
              <div className="flex text-gray-500 italic w-full h-full items-center justify-center">
                Nothing here...
              </div>
            )}
          </Suspense>
        </div>
        <Link
          className="text-sm border-t border-gray-200 dark:border-gray-800 pt-1"
          href={`${ROUTES.collections}/system`}
        >
          See all →
        </Link>
      </div>
      <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
        <h2 className="font-bold text-2xl leading-tight">Users collections</h2>
        <div className="py-2 flex-auto min-h-[150px] overflow-x-auto overflow-y-hidden">
          <Suspense
            fallback={
              <div className="flex flex-auto items-center justify-center">
                <Loader />
              </div>
            }
          >
            {nonSystemCollectionsData.getCollections.nodes.length > 0 ? (
              <Grid
                items={nonSystemCollectionsData.getCollections.nodes.map(
                  (collection) => ({
                    key: collection.id,
                    content: <CollectionCard collection={collection} />,
                  }),
                )}
              />
            ) : (
              <div className="flex text-gray-500 italic w-full h-full items-center justify-center">
                Nothing here...
              </div>
            )}
          </Suspense>
        </div>
        <Link
          className="text-sm border-t border-gray-200 dark:border-gray-800 pt-1"
          href={`${ROUTES.collections}/custom`}
        >
          See all →
        </Link>
      </div>
    </main>
  );
};

export default Page;
