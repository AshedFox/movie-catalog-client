import { CollectionCard_CollectionFragment } from '@shared/api/graphql';
import { ROUTES } from '@shared/constants/routes';
import { Row } from '@shared/ui';
import Link from 'next/link';

type Props = {
  className?: string;
  collection: CollectionCard_CollectionFragment;
};

const CollectionRow = ({ collection, className }: Props) => {
  return (
    <Row
      className={className}
      title={collection.name}
      titleHref={`/collections/${collection.id}`}
      coverUrl={collection.cover?.url}
      tagsSlot={
        <div className="rounded text-xs py-0.5 px-2 bg-primary-200 dark:bg-primary-600">
          <span>By </span>
          <Link href={`${ROUTES.users}/${collection.owner.id}`} className="font-semibold">
            {collection.owner.name}
          </Link>
        </div>
      }
    />
  );
};

export default CollectionRow;
