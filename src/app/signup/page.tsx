import { Inter, Itim, Jost } from "next/font/google"
import Form from "next/form"
import Image from "next/image"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"
import { Button } from "@/ui/button"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
import { Separator } from "@/ui/separator"

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
})

const inter = Inter()
const jost = Jost()

export default function Page() {
  return (
    <div
      className={`m-auto flex w-max max-w-sm flex-col items-center ${jost.className}`}
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
        <h1 className="mb-6 mt-10 indent-[.3em] text-2xl uppercase tracking-[.3em]">
          Carlander
        </h1>
        <p className="my-6 text-center">
          Welcome! Please sign in to continue
          <br />
          <span className="text-lime-500">Sign up using</span>
        </p>
        <div className="my-9 flex gap-6">
          <Button
            variant="custom_lime"
            className="h-auto rounded-xl px-[3.3rem] py-1.5"
          >
            <Image
              src="/google_logo.svg"
              width={37}
              height={36}
              alt="Sign in with Google"
            />
          </Button>
          <Button
            variant="custom_lime"
            className="h-auto rounded-xl px-[3.3rem] py-1.5"
          >
            <Image
              src="/github_logo.svg"
              width={38}
              height={37}
              alt="Sign in with Github"
            />
          </Button>
        </div>
      </div>
      <div className="flex w-[90%] items-center gap-6">
        <Separator className="shrink border-2 border-lime-500" />
        or
        <Separator className="shrink border-2 border-lime-500" />
      </div>
      <Form
        className={`${inter.className} mb-11 mt-7 flex w-[90%] flex-col gap-7`}
        action=""
      >
        <div className="flex items-center gap-4">
          <div>
            <Label htmlFor="name">First Name</Label>
            <Input
              className="mt-2 rounded-lg border-[3px] border-lime-500"
              id="name"
              name="name"
            />
          </div>
          <div>
            <Label htmlFor="surname">Last Name</Label>
            <Input
              className="mt-2 rounded-lg border-[3px] border-lime-500"
              id="surname"
              name="surname"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            className="mt-2 rounded-lg border-[3px] border-lime-500"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div>
          <Label htmlFor="password">Create Password</Label>
          <Input
            className="mt-2 rounded-lg border-[3px] border-lime-500"
            type="password"
            id="password"
            name="password"
          />
        </div>
      </Form>
      <p className="mb-[6.5rem] text-center">
        Already have an account?
        <br />
        <Link className="text-zinc-600 underline" href="/login">
          Sign in here.
        </Link>
      </p>
    </div>
  )
}
