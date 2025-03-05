import { Itim, Jost } from "next/font/google"

import { auth } from "@/lib/auth"

import FirstLogin from "@/components/first-login"
import LoginForm from "@/components/login-form"
import OAuthButtons from "@/components/oauth-buttons"

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"
import { Separator } from "@/ui/separator"

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
})

const jost = Jost()

export default async function LoginPage() {
  const session = await auth()
  const newUser = session?.newUser

  return (
    <div
      className={`mx-auto flex w-max max-w-sm flex-col items-center ${jost.className}`}
    >
      <div className="flex flex-col items-center">
        <Avatar className="mt-[4rem] aspect-square h-auto w-max rounded-lg border-4 border-zinc-950">
          <AvatarImage src="" />
          <AvatarFallback
            className={`${itim.className} rounded-none p-2 indent-[.2em] text-xl tracking-[.2em]`}
          >
            LOGO
          </AvatarFallback>
        </Avatar>
        <h1 className="mt-10 mb-6 indent-[.3em] text-2xl tracking-[.3em] uppercase">
          Carlander
        </h1>
        <p className="my-6 text-center">
          {newUser
            ? "Quickstart with the following details"
            : "Welcome! Please log in to continue"}
          <br />
          {!newUser && <span className="text-lime-500">Log in using</span>}
        </p>

        {!newUser && <OAuthButtons />}
      </div>
      {!newUser && (
        <div className="flex w-xs items-center gap-6">
          <Separator className="shrink border-2 border-lime-500" />
          or
          <Separator className="shrink border-2 border-lime-500" />
        </div>
      )}

      {newUser ? <FirstLogin /> : <LoginForm />}
    </div>
  )
}
