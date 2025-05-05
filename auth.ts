import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { getUserFromDb } from "./src/libs/auth"
import { verifyPassword } from "./src/utils/password"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email et mot de passe requis.")
        }

        const user = await getUserFromDb(credentials.email as string)

        if (!user) {
          throw new Error("Utilisateur non trouvé.")
        }

        const isValid = await verifyPassword(credentials.password as string, user.password)

        if (!isValid) {
          throw new Error("Mot de passe invalide.")
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Rediriger toujours vers l'accueil après connexion
      return baseUrl + "/";
    },
    
  }})