import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth-utils";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get token from cookie
  const token = request.cookies.get("auth-token")?.value;

  // Protect /dashboard routes
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Verify token validity
    const decoded = verifyToken(token);
    if (!decoded) {
      // Redirect to login if token invalid
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Redirect authenticated users away from /login and /register
  if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
    if (token) {
      const decoded = verifyToken(token);
      if (decoded) {
        // Redirect to dashboard if already authenticated
        // return NextResponse.redirect(new URL("/dashboard", request.url));
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  }

  return NextResponse.next();
}

// Configuration for which routes middleware should run on
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
