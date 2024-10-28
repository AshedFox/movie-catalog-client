'use client';

import React, { createContext, ReactNode, useState } from 'react';
import { GetMeDocument, UserFragment } from '@shared/api/graphql';
import { useQuery } from '@apollo/client';

type UserValueType = UserFragment | undefined | null;

type UserContextType = {
  user: UserValueType;
  setUser: (user: UserValueType) => void;
};

export const UserContext = createContext<UserContextType>(null!);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserValueType>(undefined);
  const { loading } = useQuery(GetMeDocument, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => {
      setUser(data.getMe);
    },
    onError: () => {
      setUser(null);
    },
  });

  if (loading) {
    return null;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
