"use server"

import { redirect } from "next/navigation"
import { z } from "zod"

import { auth, unstable_update as updateSession } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { UserSchema } from "@/lib/utils"

const FirstLoginSchema = UserSchema.pick({
  username: true,
  name: true,
  email: true,
})

export async function firstLogin(
  prevState: z.inferFlattenedErrors<typeof FirstLoginSchema> | undefined,
  formData: FormData,
): Promise<z.inferFlattenedErrors<typeof FirstLoginSchema>> | never {
  const session = await auth()
  const data = {} as Record<string, string>
  formData.forEach((value, key) => (data[key] = value.toString()))
  data.email = session!.user!.email!

  const parsedInput = await FirstLoginSchema.safeParseAsync(data)
  if (!parsedInput.success) return parsedInput.error.flatten()

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
