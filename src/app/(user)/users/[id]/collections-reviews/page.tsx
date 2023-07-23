import React from 'react';
import { getClient } from '@shared/api/graphql/client';
import {
  GetCollectionsReviewsOffsetDocument,
  SortDirectionEnum,
} from '@shared/api/graphql';
import { PageNavigation } from '@features/page-navigation';
import { ReviewItem } from '@entities/review';
import { List } from '@shared/ui';
import Link from 'next/link';

type Props = {
  params: {
    id: string;
  };
  searchParams?: {
    page?: string;
  };
};

export const generateMetadata = async ({ searchParams }: Props) => {
  return {
    title: `Collections reviews${
      searchParams?.page && Number(searchParams.page) > 1
        ? ` - ${searchParams.page}`
        : ''
    }`,
  };
};

const amountPerPage = 5;

const Page = async ({ searchParams, params }: Props) => {
  const page = Number(searchParams?.page ?? 1);

  const { data } = await getClient().query({
    query: GetCollectionsReviewsOffsetDocument,
    variables: {
      offset: (page - 1) * amountPerPage,
      limit: amountPerPage,
      withCollection: true,
      filter: {
        userId: { eq: params.id },
      },
      sort: {
        createdAt: {
          direction: SortDirectionEnum.DESC,
        },
      },
    },
  });

  return (
    <main className="flex flex-col py-4 container flex-auto gap-2">
      <h1 className="font-semibold text-3xl leading-tight">
        Collections reviews
      </h1>
      <List
        items={data.getCollectionsReviewsOffset.nodes.map((item) => ({
          key: item.id,
          content: (
            <ReviewItem
              review={item}
              isOwn={false}
              fullLinkSlot={
                <Link
                  className="text-sm text-gray-600 dark:text-gray-400 truncate"
                  href={`/collections/${item.collection!.id}`}
                >
                  {`See collection →`}
                </Link>
              }
            />
          ),
        }))}
      />
      <PageNavigation
        currentPage={page}
        amountPerPage={amountPerPage}
        totalCount={data.getCollectionsReviewsOffset.pageInfo.totalCount}
      />
    </main>
  );
};

export default Page;
