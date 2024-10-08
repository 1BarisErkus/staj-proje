import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/admin") &&
    (!token || token.email !== "admin@gmail.com")
  )
    return NextResponse.redirect(new URL("/", req.url));

  if (!token && (pathname === "/basket" || pathname === "/favorites"))
    return NextResponse.redirect(new URL("/", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/basket", "/favorites"],
};
