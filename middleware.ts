import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

       
export async function middleware(request: NextRequest) {
  const  path = request.nextUrl.pathname;
  const session  = await auth();
  console.log("voici la session", session)
  //const token = await getToken({ req:request, secret: process.env.AUTH_SECRET });

  console.log("voici la session", session)
  // Routes publiques
  const publicPaths = ["/auth/signin", "/auth/signup", "/auth/error",];

  const isPublic = publicPaths.some((p) => path.startsWith(p));


  if (!session && !isPublic) {
    console.log("Utilisateur non authentifié, redirection vers la page de connexion");
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)", // Exclut les API, les fichiers statiques, les images, le favicon
    "/auth/signin",  // Cette route est maintenant exclue du middleware de redirection
    "/auth/signup",
    "/auth/error"
  ]
};
