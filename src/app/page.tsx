import { Metadata } from 'next';
import React from 'react';
import { RandomMoviesBlock } from '@widgets/random-movies-block';
import MostReviewedMoviesBlock from '@widgets/most-reviewed-movies-block/ui/MostReviewedMoviesBlock';
import { MostViewedMoviesBlock } from '@widgets/most-viewed-movies-block';

export const metadata: Metadata = {
  title: 'MovieView',
};

const Page = () => {
  return (
    <main className="py-10 space-y-16">
      <section className="container overflow-hidden">
        <MostViewedMoviesBlock
          moviesCount={10}
          title="Movies users watch the most for the last 30 days."
        />
      </section>
      <section className="container overflow-hidden">
        <MostReviewedMoviesBlock
          moviesCount={10}
          title="Most reviewed movies for the last 30 days."
        />
      </section>
      <section className="container overflow-hidden">
        <RandomMoviesBlock
          title="Explore random movies to find something new!"
          moviesCount={10}
        />
      </section>
    </main>
  );
};

export default Page;
