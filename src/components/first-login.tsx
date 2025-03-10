"use client"

import { useActionState } from "react"

import { User } from "next-auth"
import { Inter } from "next/font/google"
import Form from "next/form"

import { firstLogin } from "@/lib/actions"

import { Button } from "@/ui/button"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"

const inter = Inter()

export default function FirstLogin({ user }: { user: User }) {
  const [errors, formAction, isPending] = useActionState(firstLogin, undefined)

  return (
    <Form
      className={`${inter.className} mt-7 mb-11 flex flex-col gap-7`}
      action={formAction}
      disabled={isPending}
    >
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          className="mt-2 rounded-lg border-[3px] border-lime-500"
          id="username"
          name="username"
        />
        {errors?.fieldErrors.username && (
          <div className="my-2 rounded border-2 border-red-500 bg-red-100 p-2 text-red-500">
            {errors.fieldErrors.username.join("\n")}
          </div>
        )}
      </div>
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          className="mt-2 rounded-lg border-[3px] border-lime-500"
          id="name"
          name="name"
          defaultValue={user.name ?? ""}
        />
        {errors?.fieldErrors.name && (
          <div className="my-2 rounded border-2 border-red-500 bg-red-100 p-2 text-red-500">
            {errors.fieldErrors.name.join("\n")}
          </div>
        )}
      </div>
      <Button
        type="submit"
        variant="custom_black"
        className="w-full uppercase"
        size="lg"
      >
        Continue
      </Button>
    </Form>
  )
}
