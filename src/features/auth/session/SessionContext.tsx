'use client';

import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { refresh } from '../api';
import { Session } from '../types';
import { getSession } from './lib';

export type SessionContextValue = {
  data: Session | null;
  status: 'loading' | 'authenticated' | 'unauthenticated';
  update: (requireServerUpdate?: boolean) => Promise<Session | null>;
};

export const SessionContext = createContext?.<SessionContextValue>(undefined!);

type ProviderProps = {
  session?: Session | null;
  children?: ReactNode;
};

export const SessionProvider = ({ session: initSession, children }: ProviderProps) => {
  const [session, setSession] = useState<Session | null>(initSession ?? null);
  const [loading, setLoading] = useState(initSession ? false : true);

  useEffect(() => {
    if (!initSession) {
      setLoading(true);
      getSession().then((session) => {
        setSession(session);
        setLoading(false);
      });
    }
  }, [initSession]);

  const value = useMemo<SessionContextValue>(
    () => ({
      data: session,
      status: loading ? 'loading' : session ? 'authenticated' : 'unauthenticated',
      update: async (requireServerUpdate?: boolean) => {
        if (loading) {
          return null;
        }

        setLoading(true);

        if (requireServerUpdate) {
          await refresh();
        }

        const newSession = await getSession();

        setSession(newSession);
        setLoading(false);
        return newSession;
      },
    }),
    [loading, session],
  );

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export const useSession = () => useContext(SessionContext);
