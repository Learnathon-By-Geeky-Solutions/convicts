import { Inter } from "next/font/google"
import Form from "next/form"

import { signIn } from "@/lib/auth"

import { Button } from "@/ui/button"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"

const inter = Inter()

export default function LoginForm() {
  return (
    <Form
      className={`${inter.className} mt-7 mb-11 flex min-w-xs flex-col gap-7`}
      action={async (data) => {
        "use server"
        await signIn("nodemailer", data)
      }}
    >
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          className="mt-2 rounded-lg border-3 border-lime-500 focus-visible:ring-lime-500"
          id="email"
          name="email"
          type="email"
          required
        />
      </div>
      <Button type="submit" variant="custom_black" className="uppercase">
        Continue
      </Button>
    </Form>
  )
}
