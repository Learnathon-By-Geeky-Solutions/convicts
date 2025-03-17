import { User } from "@prisma/client"
import { redirect } from "next/navigation"

import { firstLogin } from "@/lib/actions"
import { auth, unstable_update as updateSession } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

jest.mock("next/navigation", () => ({ redirect: jest.fn() }))

jest.mock("@/lib/prisma", () => ({
  prisma: {
    user: {
      update: jest.fn(),

      // im providing findUnique with a mock implementation
      // because i would rather not mock zod refine()
      // and i want to test the case where the username
      // is already taken
      findUnique: jest.fn(({ where: { username } }) =>
        ["yugimuto", "jadenyuki", "setokaiba"].includes(username)
          ? ({
              id: "69420",
              username,
              name: "doesnt matter",
              email: "dm@email.com",
              emailVerified: null,
              createdAt: new Date(),
              updatedAt: new Date(),
              image: null,
            } satisfies User)
          : null,
      ),
    },
  },
}))

jest.mock("@/lib/auth", () => ({
  auth: jest.fn(),
  unstable_update: jest.fn(),
}))

describe("firstLogin", () => {
  const mockAuth = auth as jest.Mock

  beforeEach(() => jest.clearAllMocks())

  it("should return validation errors if input is invalid", async () => {
    mockAuth.mockResolvedValue({ user: { email: "test@example.com" } })

    const formData = new FormData()
    formData.append("username", "")
    formData.append("name", "")

    const result = await firstLogin(undefined, formData)

    expect(result).toHaveProperty("fieldErrors")
    expect(result.fieldErrors).toHaveProperty("username")
    expect(result.fieldErrors).toHaveProperty("name")
  })

  it("should return validation errors if username is already taken", async () => {
    mockAuth.mockResolvedValue({ user: { email: "test@example.com" } })

    const formData = new FormData()
    formData.append("username", "yugimuto")
    formData.append("name", "Yugi")

    const result = await firstLogin(undefined, formData)

    expect(result).toHaveProperty("fieldErrors")
    expect(result.fieldErrors).toHaveProperty("username")
    expect(result.fieldErrors.username).toContain("Username is already taken")
  })

  it("should update user and session if input is valid", async () => {
    const email = "test@example.com"
    mockAuth.mockResolvedValue({ user: { email } })
    ;(updateSession as jest.Mock).mockResolvedValue({})

    const userNoEmail = {
      username: "testuser",
      name: "Tester",
    }

    const formData = new FormData()
    formData.append("username", userNoEmail.username)
    formData.append("name", userNoEmail.name)

    await firstLogin(undefined, formData)

    expect(prisma.user.update).toHaveBeenCalledWith({
      where: { email },
      data: userNoEmail,
    })

    expect(updateSession).toHaveBeenCalledWith({
      user: { ...userNoEmail, email: "test@example.com" },
      newUser: false,
    })

    expect(redirect).toHaveBeenCalledWith("/home")
  })
})
