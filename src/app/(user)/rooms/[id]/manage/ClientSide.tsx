'use client';

import React, { useState } from 'react';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import {
  CreateRoomMovieDocument,
  DeleteRoomDocument,
  DeleteRoomMovieDocument,
  EndRoomPlaybackDocument,
  GenerateRoomInviteDocument,
  GetMoviesOffsetDocument,
  GetRoomDocument,
  StartRoomPlaybackDocument,
} from '@shared/api/graphql';
import { useUser } from '@entities/user';
import { Button, Field, List } from '@shared/ui';
import { FilmRow } from '@entities/film';
import { SeriesRow } from '@entities/series';
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
  const [getMovies, { data: getMoviesData }] = useLazyQuery(
    GetMoviesOffsetDocument,
  );
  const [createRoomMovie] = useMutation(CreateRoomMovieDocument);
  const [deleteRoomMovie] = useMutation(DeleteRoomMovieDocument);
  const [startRoomPlayback] = useMutation(StartRoomPlaybackDocument);
  const [endRoomPlayback] = useMutation(EndRoomPlaybackDocument);
  const [deleteRoom] = useMutation(DeleteRoomDocument);
  const [generateInvite] = useMutation(GenerateRoomInviteDocument);

  const { user } = useUser();
  const [search, setSearch] = useState<string>('');

  if (!roomData || !user || user.id !== roomData.getRoom.owner.id) {
    return <></>;
  }

  const room = roomData.getRoom;
  const searchMovies = getMoviesData?.getMoviesOffset.nodes ?? [];

  return (
    <main className="container h-without-header p-2 flex flex-col gap-2 md:gap-5 overflow-hidden">
      <div className="grid grid-rows-2 flex-auto gap-4 overflow-hidden">
        <div className="flex flex-col overflow-hidden">
          <h2 className="text-xl font-semibold">Current room movies</h2>
          {room.movies.length > 0 ? (
            <div className="flex p-2 flex-auto overflow-auto">
              <List
                items={room.movies.map((roomMovie) => {
                  const item = roomMovie.movie;
                  return {
                    key: item.id,
                    content: (
                      <div className="flex flex-auto gap-2">
                        {item.__typename === 'Film' ? (
                          <FilmRow key={item.id} film={item} />
                        ) : (
                          item.__typename === 'Series' && (
                            <SeriesRow key={item.id} series={item} />
                          )
                        )}
                        {item.id === room.currentMovie?.movie.id && (
                          <div>current</div>
                        )}
                        <Button
                          size="sm"
                          onClick={async () => {
                            const { data } = await deleteRoomMovie({
                              variables: {
                                roomId: room.id,
                                movieId: item.id,
                              },
                            });

                            if (data) {
                              window.alert(`Successfully deleted!`);
                            }
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    ),
                  };
                })}
              />
            </div>
          ) : (
            <div className="text-sm p-4">No movies yet...</div>
          )}
        </div>
        <div className="flex flex-col overflow-hidden">
          <h2 className="text-xl font-semibold">Found movies</h2>
          {searchMovies.length > 0 ? (
            <div className="flex p-2 flex-auto overflow-auto">
              <List
                items={searchMovies.map((item) => {
                  return {
                    key: item.id,
                    content: (
                      <div className="flex flex-auto gap-2">
                        {item.__typename === 'Film' ? (
                          <FilmRow key={item.id} film={item} />
                        ) : (
                          item.__typename === 'Series' && (
                            <SeriesRow key={item.id} series={item} />
                          )
                        )}
                        <Button
                          size="sm"
                          onClick={async () => {
                            if (item.__typename === 'Film') {
                              const { data } = await createRoomMovie({
                                variables: {
                                  input: {
                                    roomId: room.id,
                                    movieId: item.id,
                                  },
                                },
                              });

                              if (data) {
                                window.alert(`Successfully added!`);
                              }
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
          ) : (
            <div className="text-sm p-4">No movies found...</div>
          )}
        </div>
      </div>
      <form
        className="flex flex-col gap-2"
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
              window.alert(
                `Invite link https://localhost:3001/rooms/join?inviteToken=${data.generateRoomInvite}`,
              );
            }
          }}
        >
          Create invite
        </Button>
        {!room.currentMovie && (
          <Button
            size="sm"
            onClick={async () => {
              const { data } = await startRoomPlayback({
                variables: {
                  id: roomId,
                },
              });

              if (data) {
                window.alert('Playback started!');
              } else {
                window.alert('Failed to start playback!');
              }
            }}
          >
            Start playback
          </Button>
        )}
        {room.currentMovie && (
          <Button
            size="sm"
            onClick={async () => {
              const { data } = await endRoomPlayback({
                variables: {
                  id: roomId,
                },
              });

              if (data) {
                window.alert('Playback ended!');
              } else {
                window.alert('Failed to end playback!');
              }
            }}
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
                window.alert('Successfully removed room!');
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
