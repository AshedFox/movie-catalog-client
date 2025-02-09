import axios from 'axios';
import { Session } from '../types';
import { AUTH_BASE_URL, AUTH_SESSION_COOKIE_KEY } from '../constants';
import { decodeJwt } from 'jose';
import { refresh } from '../api';

export const getSession = async (): Promise<Session | null> => {
  try {
    const res = await axios.get<Session | null>(
      `${AUTH_BASE_URL}/api/auth/session`,
      { withCredentials: true },
    );

    if (res.status === 200) {
      let session = res.data;

      if (session) {
        const { exp } = decodeJwt(session.jwt.accessToken);

        if (exp && exp * 1000 < Date.now()) {
          const { data, errors } = await refresh();

          if (data && !errors) {
            session = {
              user: { ...data.user, avatar: data.user.avatar?.url },
              jwt: {
                accessToken: data.accessToken,
                refreshToken: data.refreshToken,
              },
            };
          } else {
            session = null;
          }
        }
      }

      return session;
    }
    return null;
  } catch {
    return null;
  }
};

export const getServerSession = async (): Promise<Session | null> => {
  try {
    const { cookies } = require('next/headers');

    const sessionCookie = cookies().get(AUTH_SESSION_COOKIE_KEY);
    let session = sessionCookie ? JSON.parse(sessionCookie.value) : null;

    if (session) {
      const { exp } = decodeJwt(session.jwt.accessToken);

      if (exp && exp * 1000 < Date.now()) {
        const { data, errors } = await refresh();

        if (data && !errors) {
          session = data;
        } else {
          session = null;
        }
      }
    }

    return session;
  } catch {
    return null;
  }
};
