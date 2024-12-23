'use client';

import { useLazyQuery, useMutation, useSubscription, useSuspenseQuery } from '@apollo/client';
import { useSession } from '@features/auth/session';
import {
  GetEpisodeBySeriesAndNumDocument,
  GetFilmDocument,
  GetRoomCurrentPlaybackDocument,
  GetRoomDocument,
  LeaveRoomDocument,
  RoomDeletedDocument,
  RoomPlaybackEndedDocument,
  RoomPlaybackStartedDocument,
} from '@shared/api/graphql';
import { Button } from '@shared/ui';
import { RoomVideoPlayer } from '@widgets/video-player';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
  roomId: string;
};

const ClientSide = ({ roomId }: Props) => {
  const router = useRouter();
  const { data: roomData } = useSuspenseQuery(GetRoomDocument, {
    variables: {
      id: roomId,
    },
    errorPolicy: 'ignore',
  });
  const [getFilm, { data: getFilmData }] = useLazyQuery(GetFilmDocument, {
    fetchPolicy: 'network-only',
  });
  const [getEpisode, { data: getEpisodeData }] = useLazyQuery(GetEpisodeBySeriesAndNumDocument);
  const [getCurrentPlayback] = useLazyQuery(GetRoomCurrentPlaybackDocument, {
    fetchPolicy: 'network-only',
  });
  const [leaveRoom] = useMutation(LeaveRoomDocument);
  useSubscription(RoomPlaybackStartedDocument, {
    variables: {
      id: roomId,
    },
    async onData({ data: { data }, client: { cache } }) {
      if (roomData && data) {
        const existing = cache.readQuery({
          query: GetRoomDocument,
          variables: {
            id: roomId,
          },
        });

        cache.writeQuery({
          query: GetRoomDocument,
          variables: {
            id: roomId,
          },
          data: {
            ...existing,
            getRoom: {
              ...existing?.getRoom!,
              currentMovie: data.roomPlaybackStarted,
            },
          },
        });

        if (data.roomPlaybackStarted.movie.__typename === 'Film') {
          await getFilm({
            variables: {
              id: data.roomPlaybackStarted.movie.id,
            },
          });
        }
      }
    },
  });
  useSubscription(RoomPlaybackEndedDocument, {
    variables: {
      id: roomId,
    },
    onData({ data: { data }, client: { cache } }) {
      if (roomData && data) {
        const existing = cache.readQuery({
          query: GetRoomDocument,
          variables: {
            id: roomId,
          },
        });

        cache.writeQuery({
          query: GetRoomDocument,
          variables: {
            id: roomId,
          },
          data: {
            ...existing,
            getRoom: {
              ...existing?.getRoom!,
              currentMovie: null,
            },
          },
        });
      }
    },
  });
  useSubscription(RoomDeletedDocument, {
    variables: {
      id: roomId,
    },
    onData({ data: { data }, client: { cache } }) {
      if (roomData && data) {
        cache.writeQuery({
          query: GetRoomDocument,
          variables: {
            id: roomId,
          },
          data: null,
        });
        router.push('/users/me/rooms');
      }
    },
  });
  const { data: session } = useSession();

  useEffect(() => {
    if (roomData && roomData.getRoom.currentMovie) {
      if (roomData.getRoom.currentMovie.movie.__typename === 'Film') {
        getFilm({
          variables: {
            id: roomData.getRoom.currentMovie.movie.id,
          },
        });
      } else if (roomData.getRoom.currentMovie.movie.__typename === 'Series') {
        getEpisode({
          variables: {
            seriesId: roomData.getRoom.currentMovie.movie.id,
            numberInSeries: roomData.getRoom.currentMovie.episodeNumber!,
          },
        });
      }
    }
  }, [getEpisode, getFilm, roomData]);

  if (!roomData) {
    redirect('/users/me/rooms');
  }

  const room = roomData.getRoom;
  const watchable = room.currentMovie
    ? room.currentMovie.movie.__typename === 'Film'
      ? getFilmData?.getFilm
      : getEpisodeData?.getEpisodeBySeriesAndNum
    : undefined;

  return (
    <main className="flex-1 flex flex-col gap-2 md:gap-5 p-4 overflow-hidden">
      <h1 className="text-2xl font-bold">{`Room "${room.name}"`}</h1>
      <div className="flex flex-col flex-auto items-center justify-center overflow-hidden">
        {watchable?.video?.dashManifestMedia ? (
          <RoomVideoPlayer
            onLoadedData={async (e) => {
              const { data } = await getCurrentPlayback({
                variables: {
                  id: roomData.getRoom.id,
                },
              });

              if (data) {
                // @ts-ignore
                e.target.currentTime = data.getRoomCurrentPlayback / 1000;
              } else {
                // @ts-ignore
                e.target.pause();
              }
            }}
            onPlay={async (e) => {
              const { data } = await getCurrentPlayback({
                variables: {
                  id: roomData.getRoom.id,
                },
              });

              if (data) {
                // @ts-ignore
                e.target.currentTime = data.getRoomCurrentPlayback / 1000;
              } else {
                // @ts-ignore
                e.target.pause();
              }
            }}
            videoUrl={watchable.video.dashManifestMedia.url}
          />
        ) : (
          <>No current video</>
        )}
      </div>
      {session?.user?.id === room.owner.id ? (
        <Link className="w-fit" href={`/rooms/${roomId}/manage`}>
          <Button>Manage room</Button>
        </Link>
      ) : (
        <div>
          <Button
            onClick={async () => {
              const { data } = await leaveRoom({ variables: { id: roomId } });
              if (data) {
                router.replace('/users/me/rooms');
              }
            }}
          >
            Leave room
          </Button>
        </div>
      )}
    </main>
  );
};

export default ClientSide;
