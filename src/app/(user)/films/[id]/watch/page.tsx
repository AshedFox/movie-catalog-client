import React from 'react';
import VideoPlayer from './VideoPlayer';
import { GetFilmDocument, initializeApollo } from '@shared/api/graphql';

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const client = initializeApollo();
  const { data } = await client.query({
    query: GetFilmDocument,
    variables: {
      id: params.id,
    },
  });

  if (!data) {
    return;
  }

  const film = data.getFilm;

  return (
    <main className="relative flex container">
      {film.video?.dashManifestMedia?.url ? (
        <VideoPlayer videoUrl={film.video.dashManifestMedia.url} />
      ) : (
        <div>Unable to watch...</div>
      )}
    </main>
  );
};

export default Page;
