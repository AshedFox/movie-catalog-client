import { Loader } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import UserMoviesList from './UserMoviesList';

type Props = {
  title: string;
  userId: string;
  moviesCount: number;
  type: 'isBookmarked' | 'isWatched' | 'isFavorite';
  fullLink: string;
};

const UserMoviesBlock = ({ moviesCount, userId, type, title, fullLink }: Props) => {
  return (
    <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
      <h2 className="font-bold text-2xl leading-tight">{title}</h2>
      <Suspense
        fallback={
          <div className="flex-auto h-[400px] flex items-center justify-center">
            <Loader className="w-12 h-12 animate-spin" />
          </div>
        }
      >
        <UserMoviesList userId={userId} moviesCount={moviesCount} height={400} type={type} />
      </Suspense>
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

export default UserMoviesBlock;
