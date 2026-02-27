import { NextResponse } from 'next/server';

export function middleware(request) {
  const auth = request.cookies.get('nobu_auth');
  if (!auth || auth.value !== process.env.AUTH_TOKEN) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/manual', '/manual/:path*'],
};
