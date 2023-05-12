'use client';

import React, { Suspense } from 'react';
import {
  FilmItem_FilmFragment,
  HasPurchaseDocument,
} from '@shared/api/graphql';
import { PurchaseBlock } from '@widgets/purchase-block';
import Link from 'next/link';
import { MovieBookmarkBlock } from '@features/movie-bookmark';
import { MovieReviewsBlock } from '@widgets/movie-reviews-block';
import { FilmItem } from '@entities/film';
import { Button, Loader } from '@shared/ui';
import { useQuery } from '@apollo/client';
import { MoviePersonsBlock } from '@widgets/movie-persons-block';
import { MovieImagesBlock } from '@widgets/movie-images-block';

type Props = {
  film: FilmItem_FilmFragment;
};

const ClientSide = ({ film }: Props) => {
  const { data: hasPurchaseData } = useQuery(HasPurchaseDocument, {
    fetchPolicy: 'network-only',
    variables: {
      movieId: film.id,
    },
  });

  return (
    <FilmItem
      film={film}
      purchaseSlot={
        <>
          {film.productId && !hasPurchaseData?.hasPurchase && (
            <PurchaseBlock productId={film.productId} movieId={film.id} />
          )}
        </>
      }
      watchSlot={
        <>
          {film.video && !!hasPurchaseData?.hasPurchase && (
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
          <Suspense
            fallback={
              <div className="flex flex-auto items-center justify-center">
                <Loader />
              </div>
            }
          >
            {/* @ts-expect-error Async Server Component */}
            <MoviePersonsBlock
              movieId={film.id}
              personsCount={4}
              fullLink={`/films/${film.id}/persons`}
              title={'Persons'}
            />
          </Suspense>
          <Suspense
            fallback={
              <div className="flex flex-auto items-center justify-center">
                <Loader />
              </div>
            }
          >
            {/* @ts-expect-error Async Server Component */}
            <MovieImagesBlock
              movieId={film.id}
              imagesCount={4}
              fullLink={`/films/${film.id}/images`}
              title={'Images'}
            />
          </Suspense>
          <MovieReviewsBlock movieId={film.id} />
        </>
      }
    />
  );
};

export default ClientSide;
