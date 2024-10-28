import { signUpSchema } from '@features/sign-up/model/sign-up-schema';
import { SignUpDocument } from '@shared/api/graphql';
import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';
import { makeSessionCookie } from '@features/auth/cookie';
import { getClient } from '@shared/api/graphql/client';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const input = signUpSchema.parse(await req.json());

    const { data, errors } = await getClient().mutate({
      mutation: SignUpDocument,
      variables: {
        input: {
          ...input,
          password: createHash('sha512').update(input.password).digest('hex'),
          passwordRepeat: createHash('sha512').update(input.passwordRepeat).digest('hex'),
        },
      },
    });

    if (!data || errors) {
      return NextResponse.json(errors, { status: 401 });
    }

    const sessionCookie = makeSessionCookie(
      { ...data.signUp.user, avatar: data.signUp.user.avatar?.url },
      {
        accessToken: data.signUp.accessToken,
        refreshToken: data.signUp.refreshToken,
      },
    );

    return NextResponse.json(data.signUp, {
      headers: {
        'Set-Cookie': sessionCookie,
      },
    });
  } catch (e) {
    if (e instanceof ZodError) {
      return NextResponse.json(e.errors, { status: 400 });
    }
    return NextResponse.json(null, { status: 500 });
  }
}
