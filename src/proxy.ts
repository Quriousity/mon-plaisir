import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

// Next.js 16: this file used to be `middleware.ts`. The convention was renamed
// to `proxy` (named export `proxy`, nodejs runtime). It refreshes the Supabase
// auth session on every request so Server Components always see a valid token.
export async function proxy(request: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Without credentials there is no session to refresh — let the request pass
  // through untouched so the rest of the site keeps working.
  if (!url || !key) return NextResponse.next();

  let response = NextResponse.next({ request });

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value),
        );
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options),
        );
      },
    },
  });

  // Touch the user to trigger a token refresh when needed. Do not run code
  // between createServerClient and getUser, or you risk random logouts.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Whole-site gate: anyone not signed in is sent to /login. The login page and
  // the OAuth callback must stay reachable while logged out.
  const path = request.nextUrl.pathname;
  const isPublic = path === "/login" || path.startsWith("/auth");

  if (!user && !isPublic) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    loginUrl.search = "";
    // Remember where they were headed so we can return them after login.
    if (path !== "/") loginUrl.searchParams.set("next", path);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  // Run on everything except static assets and media.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4)$).*)",
  ],
};
