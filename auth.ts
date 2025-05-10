import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import { createUser, findUserByEmail, getUserFromDb } from "./src/libs/auth"
import { verifyPassword } from "./src/utils/password"


export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: process.env.NODE_ENV === "production" ? true : false,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
        remember: { label: "Se souvenir de moi", type: "checkbox" },  
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email et mot de passe requis.")
        }

        const user = await getUserFromDb(credentials.email as string)

        if (!user) {
          

          throw new CredentialsSignin("invalid_credentials"); // redirigé proprement vers /auth/error?error=CredentialsSignin

        }

        const isValid = await verifyPassword(credentials.password as string, user.password)

        if (!isValid) {
          throw new CredentialsSignin(); // redirigé proprement vers /auth/error?error=CredentialsSignin

        }

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account",
          scope: "openid profile email", // Demander les informations de base (openid, profil, email)
        },
      },
    }),
   GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  trustHost: true,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 60  
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
        token.email = user.email ?? ""
        token.accessToken = account?.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id as string
      session.user.accessToken = token.accessToken as string | undefined
      return session
    },
    
    async signIn({ user, account, profile }: { user: any; account?: any; profile?: any }) {
      const email = profile!.email;

      // Vérifie si l'utilisateur existe déjà
      let existingUser = await findUserByEmail(email);
      console.log("voici l'utilisateur", existingUser)

      if (!existingUser) {
        // Si l'utilisateur n'existe pas, on peut le créer
        existingUser = await createUser(
          profile.email,
          profile.name,
          profile.password, // Optionnel, mais tu peux aussi récupérer l'image du profil
        );
      }

      // Une fois l'utilisateur vérifié ou créé, on autorise la connexion
      return true;
    },

    async redirect({ url, baseUrl }) {
      // Rediriger toujours vers l'accueil après connexion
      return "/";
    },


  },
  secret: process.env.NEXTAUTH_SECRET,
  
})