import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Middleware runs on every request
export function middleware(req: NextRequest) {
  // Try to get token from cookies
  const token = req.cookies.get("token")?.value

  // If no token and user is trying to access protected routes → redirect to /login
  if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  // If logged in user tries to access /login, redirect to /dashboard
  if (token && req.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return NextResponse.next()
}

// Define which routes middleware applies to
export const config = {
  matcher: [
    "/dashboard/:path*",  // protect everything under /dashboard
    "/profile/:path*",    // protect profile routes (example)
    "/settings/:path*",   // protect settings (example)
    "/login",             // also check login page
  ],
}




// import { NextResponse } from "next/server"
// import type { NextRequest } from "next/server"
// import jwt from "jsonwebtoken"

// export function middleware(req: NextRequest) {
//     const token = req.cookies.get("token")?.value

//     // console.log("MIDDLEWARE RUNNING on:", req.nextUrl.pathname)

//     if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
//         return NextResponse.redirect(new URL("/login", req.url))
//     }

//     if (token) {
//         try {
//             // Verify token with your secret
//             jwt.verify(token, process.env.JWT_SECRET!)
//         } catch (err) {
//             // Invalid/expired token → redirect to login
//             return NextResponse.redirect(new URL("/login", req.url))
//         }
//     }

//     return NextResponse.next()
// }

// export const config = {
//     matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*", "/login"],
// }

