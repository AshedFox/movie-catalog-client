import React, { Suspense } from 'react';
import { UserFragment } from '@shared/api/graphql';
import { formatDate } from '@shared/lib/helpers';
import { EmailConfirmationMessage } from '@features/send-email-confirmation';
import { UserAvatarInput } from '@features/update-avatar';
import { Loader } from '@shared/ui';
import { UserMoviesBlock } from '@widgets/user-movies-block';
import { UserCollectionsBlock } from '@widgets/user-collections-block';
import { UserMoviesReviewsBlock } from '@widgets/user-movies-reviews-block';
import { UserCollectionsReviewsBlock } from '@widgets/user-collections-reviews-block';

type Props = {
  user: UserFragment;
};

const Content = ({ user }: Props) => {
  return (
    <main className="flex flex-col pl-4 flex-auto gap-2 md:gap-5">
      {!user.isEmailConfirmed && <EmailConfirmationMessage />}
      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <UserAvatarInput avatarUrl={user.avatar?.url} />
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
            userId={user.id}
            moviesCount={10}
            type="bookmark"
            fullLink={`/users/${user.id}/bookmarked`}
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
            userId={user.id}
            moviesCount={10}
            type="favorite"
            fullLink={`/users/${user.id}/favorite`}
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
            userId={user.id}
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
            fullLink={`/users/${user.id}/movies-reviews`}
            userId={user.id}
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
            fullLink={`/users/${user.id}/collections-reviews`}
            userId={user.id}
            reviewsCount={10}
          />
        </Suspense>
      </div>
    </main>
  );
};

export default Content;
