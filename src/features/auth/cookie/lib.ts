import { AUTH_SESSION_COOKIE_KEY } from '../constants';
import { JWT, User } from '../types';
import { decodeJwt } from 'jose';

export const makeSessionCookie = (user: User, jwt: JWT) => {
  const { exp } = decodeJwt(jwt.refreshToken);

  const options =
    ';samesite=strict' + ';path=/' + `;expires=${new Date((exp ?? 0) * 1000).toUTCString()}`;

  return `${AUTH_SESSION_COOKIE_KEY}=${JSON.stringify({
    user,
    jwt,
  })}${options}`;
};

export const makeSessionResetCookie = () => {
  return (
    `${AUTH_SESSION_COOKIE_KEY}=` + `;samesite=strict;path=/;expires=${new Date(0).toUTCString()}`
  );
};
