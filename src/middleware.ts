import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Redirect www to non-www for canonicalization
  if (host.startsWith('www.')) {
    const newHost = host.replace(/^www\./, '');
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    const newUrl = `${protocol}://${newHost}${request.nextUrl.pathname}${request.nextUrl.search}`;
    
    return NextResponse.redirect(newUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply to all routes except static files and api routes
    '/((?!api|_next/static|_next/image|favicon.ico|Logo|images).*)',
  ],
};
