import { cookies } from 'next/headers';

export async function POST(req) {
  const { password } = await req.json();

  if (password === process.env.PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set('nobu_auth', process.env.AUTH_TOKEN, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    return Response.json({ ok: true });
  }

  return Response.json({ error: 'Invalid password' }, { status: 401 });
}
