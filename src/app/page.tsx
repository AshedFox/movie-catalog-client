import { Metadata } from 'next';
import React, { Suspense } from 'react';
import { Loader } from 'shared/ui';
import { GetRandomMoviesDocument, initializeApollo } from '@shared/api/graphql';
import { MoviesCarousel } from '@widgets/movies-carousel';

export const metadata: Metadata = {
  title: 'MovieView',
};

const Page = async () => {
  const client = initializeApollo();

  const { data: randomMoviesData } = await client.query({
    query: GetRandomMoviesDocument,
    variables: {
      limit: 10,
      offset: 0,
    },
    context: {
      fetchOptions: {
        next: { revalidate: 0 },
      },
    },
  });

  return (
    <main className="py-4 container overflow-x-hidden">
      <div className="flex flex-col">
        <Suspense fallback={<Loader />}>
          <MoviesCarousel movies={randomMoviesData.getRandomMovies} />
        </Suspense>
      </div>
    </main>
  );
};

export default Page;
