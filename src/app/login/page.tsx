"use client"

import { Button } from "@/ui/button"
import { Input } from "@/ui/input"
import Link from "next/link"
import { Itim, Jost } from "next/font/google"
import { Avatar, AvatarImage, AvatarFallback } from "@/ui/avatar"
import Image from "next/image"

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
})

const jost = Jost()

export default function LoginPage() {
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

        {/* Social Login */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-8">
            <Button variant="custom_lime" size="xlg">
              <Image
                src="/google_logo.svg"
                alt="google logo"
                width={40}
                height={40}
              />
            </Button>
            <Button variant="custom_lime" size="xlg">
              <Image
                src="/github_logo.svg"
                alt="google logo"
                width={40}
                height={40}
              />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative mx-auto flex w-[100%] items-center">
              <div className="flex-1 border-2 border-lime-500"></div>
              <span className="mx-4 font-semibold">or</span>
              <div className="flex-1 border-2 border-lime-500"></div>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Email Address</label>
            <Input
              type="email"
              className="border-lime-500 focus-visible:ring-lime-500"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Account Password</label>
            <Input
              type="password"
              className="border-lime-500 focus-visible:ring-lime-500"
              required
            />
          </div>
          <Link
            href="#"
            className="block text-right text-sm text-gray-500 hover:text-fuchsia-700 hover:underline active:text-lime-500"
          >
            I forgot my password
          </Link>
          <Button
            type="submit"
            variant="custom_black"
            className="w-full"
            size="lg"
          >
            CONTINUE
          </Button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center text-sm text-zinc-950">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="text-gray-900 hover:text-fuchsia-700 hover:underline active:text-lime-500"
          >
            <br />
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  )
}
