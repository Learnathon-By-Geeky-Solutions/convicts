import { Prisma } from "@prisma/client"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

import { prisma } from "@/lib/prisma"

import UserUncheckedCreateInput = Prisma.UserUncheckedCreateInput

export const UserSchema = z.object({
  id: z.string().cuid().optional(),
  username: z
    .string()
    .min(3)
    .max(20)
    .refine(
      async (username) =>
        !(await prisma.user.findUnique({ where: { username } })),
      { message: "Username already taken" },
    ),
  name: z.string().min(3).max(64).optional(),
  email: z.string().email(),
  image: z.string().optional(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
}) satisfies z.Schema<UserUncheckedCreateInput>

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
