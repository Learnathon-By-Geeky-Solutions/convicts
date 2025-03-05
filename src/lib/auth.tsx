import { PrismaAdapter } from "@auth/prisma-adapter"
import { render } from "@react-email/components"
import NextAuth from "next-auth"
import NodeMailer from "next-auth/providers/nodemailer"
import nodemailer from "nodemailer"

import VerifyEmail from "@/emails/verification"

import authConfig from "@/lib/auth.config"
import { prisma } from "@/lib/prisma"

export const { handlers, signIn, signOut, auth, unstable_update } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    ...authConfig.providers,
    NodeMailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number.parseInt(process.env.EMAIL_SERVER_PORT!),
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL_SERVER_USER,
          clientId: process.env.EMAIL_CLIENT_ID,
          clientSecret: process.env.EMAIL_CLIENT_SECRET,
          refreshToken: process.env.EMAIL_REFRESH_TOKEN,
          accessToken: process.env.EMAIL_ACCESS_TOKEN,
        },
      },
      async sendVerificationRequest({ provider, url, identifier: to }) {
        const transporter = nodemailer.createTransport(provider.server)
        const subject = "Sign in to Carlander"

        const [html, text] = await Promise.all([
          render(<VerifyEmail url={url} />),
          render(<VerifyEmail url={url} />, { plainText: true }),
        ])

        await transporter.sendMail({ to, html, text, subject })
      },
    }),
  ],

  callbacks: {
    ...authConfig.callbacks,
    async jwt({ token, trigger, account, session }) {
      if (trigger === "signUp" && account!.type === "email") {
        const email = account!.providerAccountId
        const user = await prisma.user.findUnique({ where: { email } })
        token.newUser = user?.username == null
      } else if (trigger === "update") {
        token.newUser = session.newUser
        token.username = session.user.username
        token.name = session.user.name
      }

      return token
    },
  },
})
