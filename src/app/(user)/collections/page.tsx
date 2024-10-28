import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Loader } from '@shared/ui';
import { ROUTES } from '@shared/constants/routes';
import { NonSystemCollectionsGrid, SystemCollectionsGrid } from '@widgets/collections-grid';

export const metadata: Metadata = {
  title: 'Collections',
};

const Page = async () => {
  return (
    <main className="flex flex-col py-4 gap-5 flex-auto">
      <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
        <h2 className="font-bold text-2xl leading-tight">System collections</h2>
        <div className="flex-auto min-h-[150px] max-h-[720px] overflow-y-auto p-2">
          <Suspense
            fallback={
              <div className="flex flex-auto items-center justify-center">
                <Loader />
              </div>
            }
          >
            <SystemCollectionsGrid />
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
        <div className="flex-auto min-h-[150px] max-h-[720px] overflow-y-auto p-2">
          <Suspense
            fallback={
              <div className="flex flex-auto items-center justify-center">
                <Loader />
              </div>
            }
          >
            <NonSystemCollectionsGrid />
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
