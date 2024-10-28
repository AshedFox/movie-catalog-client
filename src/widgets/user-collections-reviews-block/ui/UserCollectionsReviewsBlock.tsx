import { Loader } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import UserCollectionsReviewsList from './UserCollectionsReviewsList';

type Props = {
  title: string;
  userId: string;
  reviewsCount: number;
  fullLink?: string;
};

const UserCollectionsReviews = ({ userId, reviewsCount, title, fullLink }: Props) => (
  <div className="flex flex-col flex-auto gap-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
    <h2 className="font-bold text-2xl leading-tight">{title}</h2>
    <Suspense
      fallback={
        <div className="flex-auto h-[400px] flex items-center justify-center">
          <Loader className="w-12 h-12 animate-spin" />
        </div>
      }
    >
      <UserCollectionsReviewsList userId={userId} reviewsCount={reviewsCount} height={400} />
    </Suspense>
    {fullLink && (
      <Link className="text-sm border-t border-gray-200 dark:border-gray-800 pt-1" href={fullLink}>
        See all →
      </Link>
    )}
  </div>
);

export default UserCollectionsReviews;
