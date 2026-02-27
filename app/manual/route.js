import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { getManualHTML } from '@/lib/content';

export async function GET(request) {
  const cookieStore = await cookies();
  const auth = cookieStore.get('nobu_auth');

  if (!auth || auth.value !== process.env.AUTH_TOKEN) {
    const url = new URL('/', request.url);
    return NextResponse.redirect(url);
  }

  const html = getManualHTML();
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
