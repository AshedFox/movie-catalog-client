import { GetUserDocument } from '@shared/api/graphql';
import Image from 'next/image';
import { formatDate } from '@shared/lib/helpers';
import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Loader } from '@shared/ui';
import { UserMoviesReviewsBlock } from '@widgets/user-movies-reviews-block';
import { UserMoviesBlock } from '@widgets/user-movies-block';
import { UserCollectionsBlock } from '@widgets/user-collections-block';
import { UserCollectionsReviewsBlock } from '@widgets/user-collections-reviews-block';
import { getClient } from '@shared/api/graphql/client';

const client = getClient();

export const generateMetadata = async ({ params }: Props) => {
  const { data } = await client.query({
    query: GetUserDocument,
    variables: {
      id: params.id,
    },
  });

  return { title: data.getUser.name };
};

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { data: userData } = await client.query({
    query: GetUserDocument,
    variables: {
      id: params.id,
    },
  });

  if (!userData) {
    notFound();
  }

  const user = userData.getUser;

  return (
    <main className="flex flex-col py-4 container flex-auto gap-4 md:gap-8">
      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <Image
          src={user.avatar?.url ?? '/blank_profile.png'}
          alt="profile avatar"
          width={512}
          height={512}
          priority={true}
          className={
            'rounded-full shrink-0 object-cover w-full md:w-32 md:h-32 xl:w-48 xl:h-48'
          }
        />
        <div className="flex flex-col gap-1 flex-auto">
          <h1 className="font-bold text-3xl leading-tight">{user.name}</h1>
          <div className="flex flex-col gap-2 p-1">
            <div className="text-sm">
              <span>{user.email}</span>
            </div>
            <div className="text-sm">
              <span>Since {formatDate(user.createdAt)}</span>
            </div>
            {user.country && (
              <div className="text-sm">
                <span className="font-semibold">Country: </span>
                <span>{user.country.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-4 xl:gap-6">
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <UserMoviesBlock
            title="Bookmarked movies"
            userId={params.id}
            moviesCount={10}
            type="bookmark"
            fullLink={`/users/${params.id}/bookmarked`}
          />
        </Suspense>
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <UserMoviesBlock
            title="Favorite movies"
            userId={params.id}
            moviesCount={10}
            type="favorite"
            fullLink={`/users/${params.id}/favorite`}
          />
        </Suspense>
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <UserCollectionsBlock
            title="User collections"
            userId={params.id}
            fullLink={`/users/${user.id}/collections`}
            collectionsCount={10}
          />
        </Suspense>
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <UserMoviesReviewsBlock
            title="Movies reviews"
            fullLink={`/users/${params.id}/movies-reviews`}
            userId={params.id}
            reviewsCount={10}
          />
        </Suspense>
        <Suspense
          fallback={
            <div className="flex flex-auto items-center justify-center">
              <Loader />
            </div>
          }
        >
          <UserCollectionsReviewsBlock
            title="Collections reviews"
            fullLink={`/users/${params.id}/collections-reviews`}
            userId={params.id}
            reviewsCount={10}
          />
        </Suspense>
      </div>
    </main>
  );
};

export default Page;
