import type { NextAuthConfig, Session } from "next-auth"
import { JWT } from "next-auth/jwt"
import { OAuth2Config } from "next-auth/providers"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

interface JWTSessionParams {
  token: JWT
  session: Session
}

const OAuthDefaults: Partial<OAuth2Config<unknown>> = {
  allowDangerousEmailAccountLinking: true,
}

export default {
  pages: {
    signIn: "/login",
    verifyRequest: "/auth/verify-request",
    error: "/auth/error",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isSVG = nextUrl.pathname.endsWith(".svg")

      // newUser is only relevant for email sign-ins
      const oldUserLoggedIn = !!auth && !auth.newUser

      if (nextUrl.pathname.startsWith("/logout")) return true
      if (nextUrl.pathname.startsWith("/home")) return oldUserLoggedIn

      if (auth && !isSVG)
        return oldUserLoggedIn
          ? Response.redirect(new URL("/home", nextUrl))
          : false

      return true
    },

    async session({ token, session }: JWTSessionParams) {
      session.newUser = token.newUser
      if (session.user) {
        session.user.username = token.username
        session.user.name = token.name
      }
      return session
    },
  },
  providers: [Google(OAuthDefaults), GitHub(OAuthDefaults)],
} satisfies NextAuthConfig
