// types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      accessToken?: string
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    id: string
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    email: string
    accessToken?: string
  }
}
