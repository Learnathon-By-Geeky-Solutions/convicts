import { signIn } from "@/auth"
import Form from "next/form"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/ui/button"
import { Input } from "@/ui/input"

export default function LoginForm() {
  return (
    <>
      {/* Social Login */}
      <div className="space-y-4">
        <Form
          action={async (data) => {
            "use server"
            const provider = data.get("provider")?.toString()
            await signIn(provider)
          }}
          className="grid grid-cols-2 gap-8"
        >
          <Button
            variant="custom_lime"
            size="xlg"
            name="provider"
            value="google"
          >
            <Image
              src="/google_logo.svg"
              alt="google logo"
              width={40}
              height={40}
            />
          </Button>
          <Button
            variant="custom_lime"
            size="xlg"
            name="provider"
            value="github"
          >
            <Image
              src="/github_logo.svg"
              alt="github logo"
              width={40}
              height={40}
            />
          </Button>
        </Form>

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
      <Form
        className="space-y-4"
        action={async (data) => {
          "use server"
          await signIn("nodemailer", data)
        }}
      >
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Email Address</label>
          <Input
            name="email"
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
      </Form>

      {/* Sign Up Link */}
      <div className="text-center text-sm text-zinc-950">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="text-gray-900 hover:text-fuchsia-700 hover:underline active:text-lime-500"
        >
          <br />
          Sign up here
        </Link>
      </div>
    </>
  )
}
