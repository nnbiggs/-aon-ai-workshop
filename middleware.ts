import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { GATE_COOKIE, GATE_TOKEN } from "@/lib/gate";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public folder assets (logo, etc.) must load on the gate page too.
  if (/\.(?:png|svg|jpe?g|gif|webp|ico|woff2?|ttf|txt|xml)$/i.test(pathname)) {
    return NextResponse.next();
  }

  const authed = request.cookies.get(GATE_COOKIE)?.value === GATE_TOKEN;

  // Already on the gate page.
  if (pathname === "/gate") {
    // If authed, send them to the site instead of showing the gate again.
    if (authed) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // Everything else requires the gate cookie.
  if (!authed) {
    const url = new URL("/gate", request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Protect all routes except the gate API (needed to set the cookie),
  // Next.js internals, and static assets.
  matcher: [
    "/((?!api/gate|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
