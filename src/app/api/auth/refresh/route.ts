import { Session } from '@features/auth';
import { AUTH_SESSION_COOKIE_KEY } from '@features/auth/constants';
import { makeSessionCookie, makeSessionResetCookie } from '@features/auth/cookie';
import { RefreshDocument } from '@shared/api/graphql';
import { getClient } from '@shared/api/graphql/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const sessionCookie = req.cookies.get(AUTH_SESSION_COOKIE_KEY);
    const refreshToken = sessionCookie
      ? (JSON.parse(sessionCookie.value) as Session | null)?.jwt.refreshToken
      : null;

    if (!refreshToken) {
      return NextResponse.json('No refresh token...', {
        status: 401,
        headers: {
          'Set-Cookie': makeSessionResetCookie(),
        },
      });
    }

    const { data, errors } = await getClient().mutate({
      mutation: RefreshDocument,
      context: {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
      errorPolicy: 'ignore',
    });

    if (!data || errors) {
      return NextResponse.json(errors, {
        status: 401,
        headers: {
          'Set-Cookie': makeSessionResetCookie(),
        },
      });
    }

    const newSessionCookie = makeSessionCookie(
      { ...data.refresh.user, avatar: data.refresh.user.avatar?.url },
      {
        accessToken: data.refresh.accessToken,
        refreshToken: data.refresh.refreshToken,
      },
    );

    return NextResponse.json(data.refresh, {
      headers: {
        'Set-Cookie': newSessionCookie,
      },
    });
  } catch (e: any) {
    return NextResponse.json(e.message, {
      status: 401,
      headers: {
        'Set-Cookie': makeSessionResetCookie(),
      },
    });
  }
}
