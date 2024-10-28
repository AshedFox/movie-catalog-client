'use client';

import { useSuspenseQuery } from '@apollo/client';
import {
  FilmItem_FilmFragment,
  GetVideoDocument,
  HasActiveSubscriptionDocument,
  HasPurchaseDocument,
} from '@shared/api/graphql';
import { FilmWatchModal } from '@widgets/watch-modal';

type Props = {
  film: FilmItem_FilmFragment;
};

const ClientSide = ({ film }: Props) => {
  const { data: hasPurchaseData } = useSuspenseQuery(HasPurchaseDocument, {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
    variables: {
      movieId: film.id,
    },
  });
  const { data: hasSubscriptionData } = useSuspenseQuery(HasActiveSubscriptionDocument, {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  });
  const { data: videoData } = useSuspenseQuery(GetVideoDocument, {
    variables: {
      id: Number(film.video?.id!),
    },
    skip: !film.video?.id,
  });

  if (
    (!hasSubscriptionData || !hasSubscriptionData.hasActiveSubscription) &&
    (!hasPurchaseData || !hasPurchaseData.hasPurchase)
  ) {
    return (
      <div className="container text-3xl flex-1 flex items-center justify-center">
        No access to watch this film!
      </div>
    );
  }

  if (!videoData) {
    return (
      <div className="container text-3xl flex-1 flex items-center justify-center">
        Will be soon...
      </div>
    );
  }

  return <FilmWatchModal film={film} video={videoData.getVideo} />;
};

export default ClientSide;
