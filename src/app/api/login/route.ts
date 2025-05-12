import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (username === 'admin' && password === 'password') {
    const res = NextResponse.json({ success: true });

    // Set cookie
    res.cookies.set('auth', 'true', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24,
      secure: process.env.NODE_ENV === 'development',
      sameSite: 'strict',
    });

    return res;
  }

  return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}
