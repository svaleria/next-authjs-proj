import { NextRequest } from "next/server"
import authConfig from "@/auth.config"
import NextAuth from "next-auth"
// import { auth } from "./auth"

// type NextAuthRequest = {
//     headers: Headers
//     url: string
//     auth?: unknown
//   }
 
// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)
 
// // 2. Wrapped middleware option
// const { auth } = NextAuth(authConfig)

// export default auth(async function middleware(req: NextAuthRequest) {
//   // Your custom middleware logic goes here
//   const isLoggedIn = !!req.auth;
//   console.log("ROUTE: ", req.url);
//   console.log("IS LOGGEDIN: " , isLoggedIn);
// })

// 2. Wrapped middleware option
const { auth } = NextAuth(authConfig)

export default auth(async function middleware(req: NextRequest) {
  // Your custom middleware logic goes here
  const isLoggedIn = !!req.nextUrl.username;
  console.log("ROUTE: ", req.nextUrl.pathname);
  console.log("IS LOGGEDIN: " , isLoggedIn);
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
      ],
}