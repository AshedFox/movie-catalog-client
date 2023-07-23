import React from 'react';
import { getClient } from '@shared/api/graphql/client';
import { GetCollectionsDocument, SortDirectionEnum } from '@shared/api/graphql';
import CollectionsGrid from '@widgets/collections-grid/ui/CollectionsGrid';
import { PageNavigation } from '@features/page-navigation';
import { CreateCustomCollectionLink } from '@features/create-collection';

type Props = {
  searchParams?: {
    page?: string;
    sort?: string;
    name?: string;
  };
};

export const generateMetadata = async ({ searchParams }: Props) => {
  return {
    title: `Users Collections${
      searchParams?.page && Number(searchParams.page) > 1
        ? ` - ${searchParams.page}`
        : ''
    }`,
  };
};

const amountPerPage = 8;

const Page = async ({ searchParams }: Props) => {
  const page = Number(searchParams?.page ?? 1);

  const { data } = await getClient().query({
    query: GetCollectionsDocument,
    variables: {
      limit: amountPerPage,
      offset: (page - 1) * amountPerPage,
      sort: {
        createdAt: {
          direction: SortDirectionEnum.DESC,
        },
      },
      filter: {
        isSystem: {
          eq: false,
        },
      },
    },
    context: {
      fetchOptions: {
        next: {
          tags: ['custom_collections'],
        },
      },
    },
  });

  return (
    <main className="flex flex-col py-4 container flex-auto gap-2">
      <div className="flex gap-2 items-center justify-between">
        <h1 className="font-semibold text-3xl leading-tight">Collections</h1>
        <CreateCustomCollectionLink />
      </div>
      <div className="flex-auto">
        <CollectionsGrid items={data.getCollections.nodes} />
      </div>
      <PageNavigation
        currentPage={page}
        amountPerPage={amountPerPage}
        totalCount={data.getCollections.pageInfo.totalCount}
      />
    </main>
  );
};

export default Page;
