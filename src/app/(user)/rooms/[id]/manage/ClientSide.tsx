'use client';

import React, { useState } from 'react';
import {
  useLazyQuery,
  useMutation,
  useSuspenseQuery_experimental,
} from '@apollo/client';
import {
  CreateRoomMovieDocument,
  DeleteRoomDocument,
  DeleteRoomMovieDocument,
  EndRoomPlaybackDocument,
  GenerateRoomInviteDocument,
  GetFilmsDocument,
  GetRoomDocument,
  SortDirectionEnum,
  StartRoomPlaybackDocument,
} from '@shared/api/graphql';
import { useUser } from '@entities/user';
import { Button, Field, List } from '@shared/ui';
import { FilmRow } from '@entities/film';
import { SeriesRow } from '@entities/series';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';

type Props = {
  roomId: string;
};

const ClientSide = ({ roomId }: Props) => {
  const { data: roomData } = useSuspenseQuery_experimental(GetRoomDocument, {
    variables: {
      id: roomId,
    },
    errorPolicy: 'ignore',
    fetchPolicy: 'network-only',
  });
  const [getFilms, { data: getFilmsData }] = useLazyQuery(GetFilmsDocument);
  const [createRoomMovie] = useMutation(CreateRoomMovieDocument, {
    update: (cache, { data }) => {
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
            ...existing?.getRoom,
            movies: [
              ...(existing?.getRoom.movies ?? []),
              data?.createRoomMovie,
            ],
          },
        },
      });
    },
  });
  const [deleteRoomMovie] = useMutation(DeleteRoomMovieDocument, {
    update: (cache, { data }) => {
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
            ...existing?.getRoom,
            movies: (existing?.getRoom.movies ?? [])
              .filter((item) => item.movie.id !== data?.deleteRoomMovie.movieId)
              .map((item) => {
                if (item.order > data?.deleteRoomMovie.order!) {
                  return {
                    ...item,
                    order: item.order - 1,
                  };
                }
                return item;
              }),
          },
        },
      });
    },
  });
  const [startRoomPlayback] = useMutation(StartRoomPlaybackDocument, {
    update: (cache, { data }) => {
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
            currentMovie: existing?.getRoom.movies.find(
              (item) => item.order === 1,
            ),
          },
        },
      });
    },
  });
  const [endRoomPlayback] = useMutation(EndRoomPlaybackDocument, {
    update: (cache, { data }) => {
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
            movies: (existing?.getRoom.movies ?? [])
              .filter((item) => item.order !== 1)
              .map((item) => ({
                ...item,
                order: item.order - 1,
              })),
          },
        },
      });
    },
  });
  const [deleteRoom] = useMutation(DeleteRoomDocument);
  const [generateInvite] = useMutation(GenerateRoomInviteDocument);

  const { user } = useUser();
  const router = useRouter();

  const [search, setSearch] = useState<string>('');

  if (!roomData || !user || user.id !== roomData.getRoom.owner.id) {
    redirect('/users/me/rooms');
  }

  const room = roomData.getRoom;
  const searchMovies = (getFilmsData?.getFilms.nodes ?? []).filter(
    (item) => !room.movies.find((roomMovie) => roomMovie.movie.id === item.id),
  );

  return (
    <main className="container h-without-header p-2 flex flex-col gap-2 md:gap-5 overflow-hidden">
      <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none flex-auto gap-4 overflow-hidden">
        <div className="flex flex-col overflow-hidden gap-2">
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              getFilms({
                variables: {
                  limit: 20,
                  offset: 0,
                  filter: {
                    title: {
                      ilike: search,
                    },
                    videoId: {
                      neq: null,
                    },
                  },
                  sort: {
                    title: {
                      direction: SortDirectionEnum.ASC,
                    },
                  },
                },
              });
            }}
          >
            <fieldset className="flex-auto">
              <Field
                name={'search'}
                label={'Search films'}
                onChange={(e) => setSearch(e.currentTarget.value)}
              />
            </fieldset>
            <Button size="sm" type="submit">
              Search
            </Button>
          </form>
          <h2 className="text-xl font-semibold">Found films</h2>
          <div className="flex p-2 flex-auto overflow-auto">
            <List
              items={searchMovies.map((item) => {
                return {
                  key: item.id,
                  content: (
                    <div className="flex flex-col flex-auto">
                      <FilmRow key={item.id} film={item} />
                      <Button
                        size="sm"
                        stretch
                        variant="success"
                        onClick={async () => {
                          if (item.__typename === 'Film') {
                            await createRoomMovie({
                              variables: {
                                input: {
                                  roomId: room.id,
                                  movieId: item.id,
                                },
                              },
                            });
                          }
                        }}
                      >
                        Add
                      </Button>
                    </div>
                  ),
                };
              })}
            />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden gap-2">
          <h2 className="text-xl font-semibold">Current room movies</h2>
          <div className="flex p-2 flex-auto overflow-auto">
            <List
              items={room.movies.map((roomMovie) => {
                const item = roomMovie.movie;
                return {
                  key: item.id,
                  content: (
                    <div className="flex flex-col flex-auto">
                      <div className="flex flex-auto gap-2">
                        <div className="flex flex-col">
                          <h4 className="shrink-0 w-12 font-semibold text-lg">
                            #{roomMovie.order}
                          </h4>
                          {roomMovie.order ===
                            (room?.currentMovie?.order ?? -1) && (
                            <div className="flex items-center gap-0.5">
                              <div className="rounded-full w-4 h-4 bg-red-500" />
                              <div className="font-semibold text-sm">live</div>
                            </div>
                          )}
                        </div>
                        {item.__typename === 'Film' ? (
                          <FilmRow key={item.id} film={item} />
                        ) : (
                          item.__typename === 'Series' && (
                            <SeriesRow key={item.id} series={item} />
                          )
                        )}
                      </div>
                      {roomMovie.order !==
                        (room?.currentMovie?.order ?? -1) && (
                        <Button
                          size="sm"
                          stretch
                          variant="danger"
                          onClick={() =>
                            deleteRoomMovie({
                              variables: {
                                roomId: room.id,
                                movieId: item.id,
                              },
                            })
                          }
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  ),
                };
              })}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Link href={`/rooms/${roomId}`}>
          <Button size="sm" variant="success">
            Go to room
          </Button>
        </Link>
        <Button
          size="sm"
          onClick={async () => {
            const { data } = await generateInvite({
              variables: {
                id: roomId,
              },
            });

            if (data) {
              await navigator.clipboard.writeText(
                `http://localhost:3001/rooms/join?inviteToken=${data.generateRoomInvite}`,
              );
              window.alert(`Invite link copied to clipboard`);
            }
          }}
        >
          Create invite
        </Button>
        {!room.currentMovie && (
          <Button
            size="sm"
            onClick={() =>
              startRoomPlayback({
                variables: {
                  id: roomId,
                },
              })
            }
          >
            Start playback
          </Button>
        )}
        {room.currentMovie && (
          <Button
            size="sm"
            onClick={() =>
              endRoomPlayback({
                variables: {
                  id: roomId,
                },
              })
            }
          >
            End playback
          </Button>
        )}
        <Button
          size="sm"
          variant="danger"
          onClick={async () => {
            if (window.confirm('Are you sure?')) {
              const { data } = await deleteRoom({
                variables: {
                  id: roomId,
                },
              });

              if (data) {
                router.push('/users/me/rooms');
              }
            }
          }}
        >
          Remove
        </Button>
      </div>
    </main>
  );
};

export default ClientSide;
