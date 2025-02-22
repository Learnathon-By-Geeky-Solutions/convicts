import authConfig from "@/auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import NodeMailer from "next-auth/providers/nodemailer"

import { prisma } from "@/lib/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    ...authConfig.providers,
    NodeMailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT!),
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL_SERVER_USER,
          clientId: process.env.EMAIL_CLIENT_ID,
          clientSecret: process.env.EMAIL_CLIENT_SECRET,
          refreshToken: process.env.EMAIL_REFRESH_TOKEN,
          accessToken: process.env.EMAIL_ACCESS_TOKEN,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
})
