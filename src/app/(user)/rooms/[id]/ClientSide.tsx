'use client';

import React, { useEffect } from 'react';
import {
  GetEpisodeBySeriesAndNumDocument,
  GetFilmDocument,
  GetRoomCurrentPlaybackDocument,
  GetRoomDocument,
} from '@shared/api/graphql';
import VideoPlayer from '../../films/[id]/watch/VideoPlayer';
import { useLazyQuery, useQuery } from '@apollo/client';
import { useUser } from '@entities/user';
import { Button } from '@shared/ui';
import Link from 'next/link';

type Props = {
  roomId: string;
};

const ClientSide = ({ roomId }: Props) => {
  const { data: roomData } = useQuery(GetRoomDocument, {
    variables: {
      id: roomId,
    },
  });
  const [getFilm, { data: getFilmData }] = useLazyQuery(GetFilmDocument);
  const [getEpisode, { data: getEpisodeData }] = useLazyQuery(
    GetEpisodeBySeriesAndNumDocument,
  );
  const [getCurrentPlayback, { data: playbackData }] = useLazyQuery(
    GetRoomCurrentPlaybackDocument,
  );
  const { user } = useUser();

  useEffect(() => {
    if (roomData) {
      const currentMovie = roomData.getRoom.currentMovie;

      getCurrentPlayback({
        variables: {
          id: roomData.getRoom.id,
        },
      });

      if (currentMovie) {
        if (currentMovie.movie.__typename === 'Film') {
          getFilm({
            variables: {
              id: currentMovie.movie.id,
            },
          });
        } else if (currentMovie.movie.__typename === 'Series') {
          getEpisode({
            variables: {
              seriesId: currentMovie.movie.id,
              numberInSeries: currentMovie.episodeNumber!,
            },
          });
        }
      }
    }
  }, [getCurrentPlayback, getEpisode, getFilm, roomData]);

  if (!roomData) {
    return <></>;
  }

  const room = roomData.getRoom;
  const watchable =
    room.currentMovie?.movie.__typename === 'Film'
      ? getFilmData?.getFilm
      : getEpisodeData?.getEpisodeBySeriesAndNum;

  console.log(watchable);
  console.log(room.currentMovie);

  return (
    <main className="container h-without-header flex flex-col gap-2 md:gap-5">
      <h1 className="text-2xl font-bold">{room.name}</h1>
      <div className="flex flex-auto items-center justify-center">
        {watchable?.video?.dashManifestMedia &&
        playbackData?.getRoomCurrentPlayback ? (
          <VideoPlayer
            videoUrl={watchable.video.dashManifestMedia.url}
            seek={playbackData.getRoomCurrentPlayback}
          />
        ) : (
          <>No current video</>
        )}
      </div>
      {user?.id === room.owner.id && (
        <Link href={`/rooms/${roomId}/manage`}>
          <Button stretch>Manage room videos</Button>
        </Link>
      )}
    </main>
  );
};

export default ClientSide;

/*
<Modal
  title={<div className="text-xl font-semibold">Manage</div>}
  showModal={showModal}
  closable
  rootId={'modal-root'}
  onClose={() => setShowModal(false)}
>
  <div className="flex flex-col flex-auto gap-3 w-96">
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold">Current movies</h2>
      {room.movies.length > 0 ? (
        <div className="flex p-2 flex-auto max-h-[150px] overflow-auto">
          <List
            items={room.movies.map((roomMovie) => {
              const item = roomMovie.movie;
              return {
                key: item.id,
                content:
                  item.__typename === 'Film' ? (
                    <FilmRow key={item.id} film={item} />
                  ) : item.__typename === 'Series' ? (
                    <SeriesRow key={item.id} series={item} />
                  ) : (
                    <></>
                  ),
              };
            })}
          />
        </div>
      ) : (
        <div className="p-4">No movies yet...</div>
      )}
    </div>
    <form
      className="flex-auto flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        getMovies({
          variables: {
            limit: 20,
            offset: 0,
            filter: {
              title: {
                ilike: search,
              },
            },
          },
        });
      }}
    >
      <fieldset className="flex-auto">
        <Field
          name={'search'}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </fieldset>
      <Button size="sm" type="submit">
        Search
      </Button>
    </form>
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold">Found movies</h2>
      {searchMovies.length > 0 ? (
        <div className="flex p-2 flex-auto max-h-[150px] overflow-auto">
          <List
            items={searchMovies.map((item) => {
              return {
                key: item.id,
                content:
                  item.__typename === 'Film' ? (
                    <FilmRow key={item.id} film={item} />
                  ) : item.__typename === 'Series' ? (
                    <SeriesRow key={item.id} series={item} />
                  ) : (
                    <></>
                  ),
              };
            })}
          />
        </div>
      ) : (
        <div className="p-4">No movies found...</div>
      )}
    </div>
  </div>
</Modal> */
