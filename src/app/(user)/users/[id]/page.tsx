import { GetUserDocument } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';
import { formatDate } from '@shared/lib/helpers';
import { Avatar } from '@shared/ui';
import { UserCollectionsBlock } from '@widgets/user-collections-block';
import { UserCollectionsReviewsBlock } from '@widgets/user-collections-reviews-block';
import { UserMoviesBlock } from '@widgets/user-movies-block';
import { UserMoviesReviewsBlock } from '@widgets/user-movies-reviews-block';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { data } = await getClient().query({
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
  const { data: userData } = await getClient().query({
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
    <main className="flex flex-col py-10 flex-auto gap-2 md:gap-5">
      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <Avatar className="relative w-24 h-24 md:w-32 md:h-32 xl:w-48 xl:h-48">
          <Image
            src={user.avatar?.url ?? '/blank_profile.png'}
            alt="profile avatar"
            fill
            className="object-cover"
          />
        </Avatar>
        <div className="flex flex-col gap-1 flex-auto">
          <h1 className="font-bold text-5xl leading-tight">{user.name}</h1>
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
        <UserMoviesBlock
          title="Bookmarked movies"
          userId={user.id}
          moviesCount={10}
          type="isBookmarked"
          fullLink={`/users/${user.id}/bookmarked`}
        />
        <UserMoviesBlock
          title="Favorite movies"
          userId={user.id}
          moviesCount={10}
          type="isFavorite"
          fullLink={`/users/${user.id}/favorite`}
        />
        <UserMoviesBlock
          title="Watched movies"
          userId={user.id}
          moviesCount={10}
          type="isWatched"
          fullLink={`/users/${user.id}/watched`}
        />
        <UserCollectionsBlock
          title="User collections"
          userId={user.id}
          fullLink={`/users/${user.id}/collections`}
          collectionsCount={10}
        />
        <UserMoviesReviewsBlock
          title="Movies reviews"
          fullLink={`/users/${user.id}/movies-reviews`}
          userId={user.id}
          reviewsCount={10}
        />
        <UserCollectionsReviewsBlock
          title="Collections reviews"
          fullLink={`/users/${user.id}/collections-reviews`}
          userId={user.id}
          reviewsCount={10}
        />
      </div>
    </main>
  );
};

export default Page;
