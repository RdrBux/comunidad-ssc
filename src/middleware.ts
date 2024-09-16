import { type NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { updateSession } from './utils/supabase/middleware';

// Initialize next-intl middleware
const intlMiddleware = createIntlMiddleware(routing);

export async function middleware(request: NextRequest) {
    // Ignore sitemap route
    if (request.nextUrl.pathname === '/sitemap.xml') {
        return NextResponse.next();
    }

    // Handle session update with Supabase
    const response = await updateSession(request);


    // Detect Instagram user-agent and set custom header if Instagram is detected
    const userAgent = request.headers.get('user-agent') || '';
    const isInstagram = /Instagram/i.test(userAgent);
    if (isInstagram) {
        response.headers.set('X-Is-Instagram', 'true');
    }

    // Handle internationalization with next-intl
    const intlResponse = intlMiddleware(request);
    if (intlResponse) {
        return intlResponse;
    }

    return response;
}

export const config = {
    matcher: [
        // Match only internationalized pathnames and other routes
        '/',
        '/(es|en)/:path*',
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
