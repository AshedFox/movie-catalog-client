'use client';

import React, { useEffect, useMemo } from 'react';
import {
  FilmItem_FilmFragment,
  HasActiveSubscriptionDocument,
  HasPurchaseDocument,
  IncreaseMovieVisitsDocument,
} from '@shared/api/graphql';
import { PurchaseBlock } from '@widgets/purchase-block';
import Link from 'next/link';
import { MovieBookmarkBlock } from '@features/movie-bookmark';
import { MovieReviewsBlock } from '@widgets/movie-reviews-block';
import { FilmItem } from '@entities/film';
import { Button } from '@shared/ui';
import { useMutation, useSuspenseQuery_experimental } from '@apollo/client';
import { MoviePersonsBlock } from '@widgets/movie-persons-block';
import { MovieImagesBlock } from '@widgets/movie-images-block';

type Props = {
  film: FilmItem_FilmFragment;
};

const ClientSide = ({ film }: Props) => {
  const { data: hasPurchaseData } = useSuspenseQuery_experimental(
    HasPurchaseDocument,
    {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
      variables: {
        movieId: film.id,
      },
    },
  );
  const { data: hasSubscriptionData } = useSuspenseQuery_experimental(
    HasActiveSubscriptionDocument,
    {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
    },
  );
  const [increaseMovieVisits] = useMutation(IncreaseMovieVisitsDocument);
  const canPurchase = useMemo(
    () =>
      !!film.productId &&
      !!hasPurchaseData &&
      !hasPurchaseData.hasPurchase &&
      !!hasSubscriptionData &&
      !hasSubscriptionData.hasActiveSubscription,
    [film.productId, hasPurchaseData, hasSubscriptionData],
  );
  const canWatch = useMemo(
    () =>
      !!film.video &&
      !!(
        (hasPurchaseData && hasPurchaseData.hasPurchase) ||
        (hasSubscriptionData && hasSubscriptionData.hasActiveSubscription)
      ),
    [film.video, hasPurchaseData, hasSubscriptionData],
  );

  useEffect(() => {
    increaseMovieVisits({
      variables: {
        movieId: film.id,
      },
    });
  }, [film.id, increaseMovieVisits]);

  return (
    <FilmItem
      film={film}
      purchaseSlot={
        <>
          {canPurchase && (
            <PurchaseBlock productId={film.productId!} movieId={film.id} />
          )}
        </>
      }
      watchSlot={
        <>
          {canWatch && (
            <Button>
              <Link
                className="block h-full w-full"
                href={`/films/${film.id}/watch`}
              >
                Watch
              </Link>
            </Button>
          )}
        </>
      }
      bookmarkSlot={<MovieBookmarkBlock movieId={film.id} />}
      extraSlot={
        <>
          <MoviePersonsBlock
            movieId={film.id}
            personsCount={4}
            fullLink={`/films/${film.id}/persons`}
            title={'Persons'}
          />
          <MovieImagesBlock
            movieId={film.id}
            imagesCount={4}
            fullLink={`/films/${film.id}/images`}
            title={'Images'}
          />
          <MovieReviewsBlock movieId={film.id} />
        </>
      }
    />
  );
};

export default ClientSide;
