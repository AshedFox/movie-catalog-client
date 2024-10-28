import { loginSchema } from '@features/login';
import { LoginDocument } from '@shared/api/graphql';
import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';
import { makeSessionCookie } from '@features/auth/cookie';
import { getClient } from '@shared/api/graphql/client';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const input = loginSchema.parse(await req.json());

    const { data, errors } = await getClient().mutate({
      mutation: LoginDocument,
      variables: {
        input: {
          email: input.email,
          password: createHash('sha512').update(input.password).digest('hex'),
        },
      },
    });

    if (!data || errors) {
      return NextResponse.json(errors, { status: 401 });
    }

    const sessionCookie = makeSessionCookie(
      { ...data.login.user, avatar: data.login.user.avatar?.url },
      {
        accessToken: data.login.accessToken,
        refreshToken: data.login.refreshToken,
      },
    );

    return NextResponse.json(data.login, {
      headers: {
        'Set-Cookie': sessionCookie,
      },
    });
  } catch (e) {
    if (e instanceof ZodError) {
      return NextResponse.json(e.errors, { status: 400 });
    }
    console.error(e);
    return NextResponse.json(null, { status: 500 });
  }
}
