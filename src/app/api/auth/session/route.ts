import { AUTH_SESSION_COOKIE_KEY } from '@features/auth/constants';
import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest) {
  const sessionCookie = req.cookies.get(AUTH_SESSION_COOKIE_KEY);

  return NextResponse.json(sessionCookie ? JSON.parse(sessionCookie.value) : null);
}
