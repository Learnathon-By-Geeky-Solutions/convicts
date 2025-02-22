import type { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export default {
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      if (nextUrl.pathname.startsWith("/home")) return !!auth
      else if (!!auth) return Response.redirect(new URL("/home", nextUrl))
      return true
    },
  },
  providers: [Google, GitHub],
} satisfies NextAuthConfig
