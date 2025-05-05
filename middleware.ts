// export { auth as middleware } from "@/auth"
// export { auth as middleware } from "@/auth"
import { NextResponse,NextRequest } from "next/server"



export function middleware(request: NextRequest) {
    
  return NextResponse.next()
}

export const config = {
    matcher: [
      /*
       * Appliquer à toutes les routes sauf :
       * - /_next
       * - /static
       * - /favicon.ico
       * - /images/
       * - etc.
      */
      "/((?!_next/static|_next/image|favicon.ico|images|api/public).*)",
    ],
  }
// // middleware.ts
// export const config = {
//     matcher: [
//       "/",              // la page d'accueil
//       "/dashboard/:path*", // si tu en as
//       "/profile/:path*",   // etc.
//       "/auth/:path*",      // pour empêcher accès à /auth si déjà connecté
//     ],
//   }
// //   import { cookies } from "next/headers"

// //   export async function POST(req: Request) {
// //     const res = NextResponse.redirect(new URL("/", req.url))
// //     const body = await req.json()
  
// //     // Exemple : set un cookie après vérification
// //     res.cookies.set("token", "valeurDuToken", {
// //       httpOnly: true,
// //       secure: true,
// //       maxAge: 60 * 60 * 24,
// //       path: "/",
// //     })
  
// //     return res
// //   }
    