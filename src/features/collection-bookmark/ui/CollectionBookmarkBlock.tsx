import React, { useEffect, useState } from 'react';
import {
  CollectionUserFragment,
  CreateCollectionUserDocument,
  GetCollectionUserDocument,
  UpdateCollectionUserDocument,
} from '@shared/api/graphql';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useSession } from '@features/auth/session';
import { cn } from '@shared/lib/utils';

type Props = {
  collectionId: number;
};

const CollectionBookmarkBlock = ({ collectionId }: Props) => {
  const session = useSession();
  const [collectionUser, setCollectionUser] = useState<CollectionUserFragment | null>(null);
  const user = session.data?.user;

  const [getCollectionUser] = useLazyQuery(GetCollectionUserDocument, {
    onError() {
      if (user) {
        createCollectionUser({
          variables: {
            input: {
              collectionId,
            },
          },
        });
      }
    },
    onCompleted(data) {
      setCollectionUser(data.getCollectionUser);
    },
  });
  const [createCollectionUser] = useMutation(CreateCollectionUserDocument, {
    onCompleted(data) {
      setCollectionUser(data.createCollectionUser);
    },
  });
  const [updateCollectionUser, { loading }] = useMutation(UpdateCollectionUserDocument, {
    onCompleted(data) {
      setCollectionUser(data.updateCollectionUser);
    },
  });

  useEffect(() => {
    if (user) {
      getCollectionUser({
        variables: {
          collectionId,
          userId: user.id,
        },
      });
    }
  }, [getCollectionUser, collectionId, user]);

  if (!collectionUser || !user) {
    return <></>;
  }

  return (
    <div className="flex gap-2">
      <button
        className="w-fit outline-none border-none"
        disabled={loading}
        onClick={() => {
          if (collectionUser) {
            updateCollectionUser({
              variables: {
                userId: collectionUser.userId,
                collectionId,
                input: {
                  isBookmarked: !collectionUser.isBookmarked,
                },
              },
            });
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className={cn('transition-colors', {
            ['fill-yellow-400 dark:fill-yellow-500 hover:fill-red-400 dark:hover:fill-red-500']:
              collectionUser.isBookmarked,
            ['fill-gray-500 dark:fill-gray-300 hover:fill-yellow-400 dark:hover:fill-yellow-500']:
              !collectionUser.isBookmarked,
          })}
          viewBox="0 0 16 16"
        >
          {collectionUser.isBookmarked ? (
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
          ) : (
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
          )}
        </svg>
      </button>
      <button
        className="w-fit outline-none border-none"
        disabled={loading}
        onClick={() => {
          if (collectionUser) {
            updateCollectionUser({
              variables: {
                userId: collectionUser.userId,
                collectionId,
                input: {
                  isWatched: !collectionUser.isWatched,
                },
              },
            });
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className={cn('transition-colors', {
            ['fill-yellow-400 dark:fill-yellow-500 hover:fill-red-400 dark:hover:fill-red-500']:
              collectionUser.isWatched,
            ['fill-gray-500 dark:fill-gray-300 hover:fill-yellow-400 dark:hover:fill-yellow-500']:
              !collectionUser.isWatched,
          })}
          viewBox="0 0 16 16"
        >
          {collectionUser.isWatched ? (
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          ) : (
            <path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" />
          )}
        </svg>
      </button>
    </div>
  );
};

export default CollectionBookmarkBlock;
