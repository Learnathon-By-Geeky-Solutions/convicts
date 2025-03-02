"use server"

import { auth, unstable_update as updateSession } from "@/auth"
import { redirect } from "next/navigation"
import { z } from "zod"

import { prisma } from "@/lib/prisma"
import { UserSchema } from "@/lib/utils"

const FirstLoginSchema = UserSchema.pick({
  username: true,
  name: true,
  email: true,
})

export async function firstLogin(
  prevState: z.ZodError<z.infer<typeof FirstLoginSchema>> | void,
  formData: FormData,
) {
  const session = await auth()
  const data: { [key: string]: string } = {}
  formData.forEach((value, key) => (data[key] = value.toString()))
  data.email = session!.user!.email!

  const parsedInput = await FirstLoginSchema.safeParseAsync(data)
  if (!parsedInput.success) return parsedInput.error

  const { username, name, email } = parsedInput.data
  await prisma.user.update({
    where: { email: email },
    data: {
      username,
      name,
    },
  })

  const user = { ...session!.user, username, name }
  await updateSession({ ...session, user, newUser: false })
  redirect("/home")
}
