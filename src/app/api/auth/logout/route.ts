import { makeSessionResetCookie } from '@features/auth/cookie';
import { NextResponse } from 'next/server';

export async function POST() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Set-Cookie': makeSessionResetCookie(),
    },
  });
}
