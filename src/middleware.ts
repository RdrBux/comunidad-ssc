import { type NextRequest } from 'next/server'
import { updateSession } from './utils/supabase/middleware'


export async function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const isInstagram = /Instagram/i.test(userAgent);


  const response = await updateSession(request);

  // Set custom header if Instagram is detected
  if (isInstagram) {
      response.headers.set('X-Is-Instagram', 'true');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}