"use client"

import { useActionState } from "react"

import { Inter } from "next/font/google"
import Form from "next/form"

import { firstLogin } from "@/lib/actions"

import { Button } from "@/ui/button"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"

const inter = Inter()

export default function FirstLogin() {
  const [errors, formAction, isPending] = useActionState(firstLogin, undefined)

  return (
    <Form
      className={`${inter.className} mb-11 mt-7 flex flex-col gap-7`}
      action={formAction}
      disabled={isPending}
    >
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          className="mt-2 rounded-lg border-[3px] border-lime-500"
          id="username"
          name="username"
          required
        />
      </div>
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          className="mt-2 rounded-lg border-[3px] border-lime-500"
          id="name"
          name="name"
        />
      </div>
      <Button
        type="submit"
        variant="custom_black"
        className="w-full uppercase"
        size="lg"
      >
        Continue
      </Button>
      {errors && <div className="text-red-500">{errors.message}</div>}
    </Form>
  )
}
