import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag');

  let revalidated = false;
  if (tag) {
    revalidateTag(tag);
    revalidated = true;
  }
  return NextResponse.json({ revalidated, now: Date.now() });
}
