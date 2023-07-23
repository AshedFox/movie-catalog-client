import React from 'react';
import { getClient } from '@shared/api/graphql/client';
import {
  GetMoviesReviewsOffsetDocument,
  SortDirectionEnum,
} from '@shared/api/graphql';
import { PageNavigation } from '@features/page-navigation';
import { List } from '@shared/ui';
import { ReviewItem } from '@entities/review';
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
    title: `Movies reviews${
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
    query: GetMoviesReviewsOffsetDocument,
    variables: {
      offset: (page - 1) * amountPerPage,
      limit: amountPerPage,
      withMovie: true,
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
      <h1 className="font-semibold text-3xl leading-tight">Movies reviews</h1>
      <List
        items={data.getMoviesReviewsOffset.nodes.map((item) => ({
          key: item.id,
          content: (
            <ReviewItem
              review={item}
              isOwn={false}
              fullLinkSlot={
                <Link
                  className="text-sm text-gray-600 dark:text-gray-400 truncate"
                  href={`${
                    item.movie!.__typename === 'Film' ? '/films' : '/series'
                  }/${item.movie!.id}`}
                >
                  {`See movie →`}
                </Link>
              }
            />
          ),
        }))}
      />
      <PageNavigation
        currentPage={page}
        amountPerPage={amountPerPage}
        totalCount={data.getMoviesReviewsOffset.pageInfo.totalCount}
      />
    </main>
  );
};

export default Page;
