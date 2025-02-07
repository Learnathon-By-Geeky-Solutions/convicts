"use client"

import { Button } from "@/ui/button"
import { Input } from "@/ui/input"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Logo and Title */}
        <div className="flex flex-col items-center space-y-2">
          <div className="border border-gray-200 p-4">
            <div className="text-sm font-medium">LOGO</div>
          </div>
          <h1 className="text-xl font-semibold tracking-wider">CARLANDER</h1>
        </div>

        {/* Welcome Text */}
        <div className="text-center text-sm">
          <span className="text-lime-500">Welcome!</span> Please sign in to
          continue
        </div>

        {/* Social Login */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="w-full border-lime-500 text-lime-500 hover:bg-lime-50"
            >
              <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                <circle cx="12" cy="12" r="10" className="fill-current" />
              </svg>
              Sign in
            </Button>
            <Button
              variant="outline"
              className="w-full border-lime-500 text-lime-500 hover:bg-lime-50"
            >
              Sign in
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">or</span>
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
            className="block text-right text-sm text-gray-500 hover:text-gray-700"
          >
            I forgot my password
          </Link>
          <Button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-800"
          >
            CONTINUE
          </Button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="text-gray-900 hover:underline">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  )
}
