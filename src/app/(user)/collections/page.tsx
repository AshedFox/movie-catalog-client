import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  GetCollectionsDocument,
  initializeApollo,
  SortDirectionEnum,
} from '@shared/api/graphql';
import { Loader } from '@shared/ui';
import CollectionsGrid from '@widgets/collections-grid/ui/CollectionsGrid';
import { ROUTES } from '@shared/constants/routes';

export const revalidate = 30;

export const metadata: Metadata = {
  title: 'Collections',
};

const Page = async () => {
  const client = initializeApollo();
  const { data: nonSystemCollectionsData } = await client.query({
    query: GetCollectionsDocument,
    variables: {
      sort: {
        createdAt: {
          direction: SortDirectionEnum.ASC,
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
          direction: SortDirectionEnum.ASC,
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
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">System collections</h2>
        <div className="text-center font-semibold italic py-2 px-4 bg-primary-300 dark:bg-primary-600 rounded">
          Enjoy collections we prepared!
        </div>
        <div className="px-8 max-h-[640px] overflow-auto">
          <Suspense
            fallback={
              <div className="flex flex-auto items-center justify-center">
                <Loader />
              </div>
            }
          >
            <CollectionsGrid
              items={systemCollectionsData.getCollections.nodes}
            />
          </Suspense>
        </div>
        <Link
          className="text-gray-600 dark:text-gray-400"
          href={`${ROUTES.collections}/system`}
        >
          See all system collections →
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">Users collections</h2>
        <div className="text-center font-semibold italic py-2 px-4 bg-secondary-300 dark:bg-secondary-600 rounded">
          You may also discover collections made by our users!
        </div>
        <div className="px-8 max-h-[640px] overflow-auto">
          <Suspense
            fallback={
              <div className="flex flex-auto items-center justify-center">
                <Loader />
              </div>
            }
          >
            <CollectionsGrid
              items={nonSystemCollectionsData.getCollections.nodes}
            />
          </Suspense>
        </div>
        <Link
          className="text-gray-600 dark:text-gray-400"
          href={`${ROUTES.collections}/custom`}
        >
          See all users collections →
        </Link>
      </div>
    </main>
  );
};

export default Page;
