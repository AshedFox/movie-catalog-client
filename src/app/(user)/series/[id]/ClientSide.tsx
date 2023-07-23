'use client';

import React, { useEffect, useMemo } from 'react';
import { useMutation, useSuspenseQuery_experimental } from '@apollo/client';
import {
  HasActiveSubscriptionDocument,
  HasPurchaseDocument,
  IncreaseMovieVisitsDocument,
  SeriesItem_SeriesFragment,
} from '@shared/api/graphql';
import { MovieBookmarkBlock } from '@features/movie-bookmark';
import PurchaseBlock from '../../../../widgets/purchase-block/ui/PurchaseBlock';
import { MoviePersonsBlock } from '@widgets/movie-persons-block';
import { MovieImagesBlock } from '@widgets/movie-images-block';
import { MovieReviewsBlock } from '@widgets/movie-reviews-block';
import { SeriesItem } from '@entities/series';
import { SeriesSeasonsBlock } from '@widgets/series-seasons-block';

type Props = {
  series: SeriesItem_SeriesFragment;
};

const ClientSide = ({ series }: Props) => {
  const { data: hasPurchaseData } = useSuspenseQuery_experimental(
    HasPurchaseDocument,
    {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
      variables: {
        movieId: series.id,
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
      !!series.productId &&
      !!hasPurchaseData &&
      !hasPurchaseData.hasPurchase &&
      !!hasSubscriptionData &&
      !hasSubscriptionData.hasActiveSubscription,
    [hasPurchaseData, hasSubscriptionData, series.productId],
  );
  const canWatch = useMemo(
    () =>
      (!!hasPurchaseData && hasPurchaseData.hasPurchase) ||
      (!!hasSubscriptionData && hasSubscriptionData.hasActiveSubscription),
    [hasPurchaseData, hasSubscriptionData],
  );

  useEffect(() => {
    increaseMovieVisits({
      variables: {
        movieId: series.id,
      },
    });
  }, [series.id, increaseMovieVisits]);

  return (
    <SeriesItem
      series={series}
      bookmarkSlot={<MovieBookmarkBlock movieId={series.id} />}
      purchaseSlot={
        <>
          {canPurchase && (
            <PurchaseBlock productId={series.productId!} movieId={series.id} />
          )}
        </>
      }
      extraSlot={
        <>
          <SeriesSeasonsBlock
            title="Seasons"
            seriesId={series.id}
            hasPurchase={canWatch}
          />
          <MoviePersonsBlock
            movieId={series.id}
            personsCount={4}
            fullLink={`/series/${series.id}/persons`}
            title={'Persons'}
          />
          <MovieImagesBlock
            movieId={series.id}
            imagesCount={4}
            fullLink={`/series/${series.id}/images`}
            title={'Images'}
          />
          <MovieReviewsBlock movieId={series.id} />
        </>
      }
    />
  );
};

export default ClientSide;
