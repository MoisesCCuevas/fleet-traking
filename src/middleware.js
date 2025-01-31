/**
 * Middleware function to handle route protection and URL rewriting.
 *
 * @param {import('next/server').NextRequest} req - The incoming request object.
 * @returns {Promise<import('next/server').NextResponse>} The response object.
 *
 * This middleware performs the following tasks:
 * 1. Checks if the requested route is protected.
 * 2. Validates the session using a cookie.
 * 3. Redirects to the login page if the session is invalid and the route is protected.
 * 4. Rewrites the URL for specific routes (dashboard, tracking, api-doc).
 *
 * @example
 * // Example usage in a Next.js application
 * import middleware from './middleware';
 * 
 * export default function handler(req, res) {
 *   return middleware(req);
 * }
 */

/**
 * Configuration object for the middleware.
 *
 * @type {Object}
 * @property {string[]} matcher - Array of route patterns to match.
 */
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME, isSessionValid } from "@utils/auth";

const protectedRoutes = ["/dashboard", "/tracking", "/", "/api-doc"];

export default async function middleware(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  const cookie = (await cookies()).get(COOKIE_NAME)?.value;
  const validSession = await isSessionValid(cookie);

  if (isProtectedRoute && !validSession) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (req.nextUrl.pathname.startsWith("/dashboard") || req.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/dashboard", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/tracking")) {
    return NextResponse.rewrite(new URL("/tracking", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/api-doc")) {
    return NextResponse.rewrite(new URL("/api-doc", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/api",
    "/api-doc",
    "/",
    "/login",
    "/dashboard",
    "/tracking"
  ],
};
