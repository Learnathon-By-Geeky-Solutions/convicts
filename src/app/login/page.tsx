import { auth } from "@/auth"
import { Itim, Jost } from "next/font/google"

import FirstLogin from "@/components/first-login"
import LoginForm from "@/components/login-form"

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
})

const jost = Jost()

export default async function LoginPage() {
  const session = await auth()

  return (
    <div className={`${jost.className} flex flex-col items-center`}>
      <div className="w-full max-w-sm space-y-4">
        {/* Logo and Title */}
        <div className="mb-10 flex flex-col items-center">
          <Avatar className="mt-[4rem] aspect-square h-auto w-max rounded-lg border-4 border-zinc-950">
            <AvatarImage src="" />
            <AvatarFallback
              className={`${itim.className} rounded-none p-2 indent-[.2em] text-xl tracking-[.2em]`}
            >
              LOGO
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Welcome Text */}
        <h1 className="mb-6 mt-10 text-center indent-[.3em] text-2xl uppercase tracking-[.3em]">
          Carlander
        </h1>
        <div className="text-center text-sm">
          <span className="text-lime-500">Welcome!</span>
          <span className="text-lime-500"> Please sign in to continue</span>
          <span>
            <br />
            Sign in with
          </span>
        </div>

        {session?.newUser ? <FirstLogin /> : <LoginForm />}
      </div>
    </div>
  )
}
