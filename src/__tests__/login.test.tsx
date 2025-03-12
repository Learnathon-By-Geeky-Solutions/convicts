import { render, screen } from "@testing-library/react"

import "@testing-library/jest-dom"

import LoginPage from "@/app/login/page"

import { auth } from "@/lib/auth"

jest.mock("@/lib/auth")

describe("LoginPage", () => {
  it("renders the login page for new users", async () => {
    ;(auth as jest.Mock).mockResolvedValue({
      newUser: true,
      user: { name: "Test User" },
    })

    render(await LoginPage())

    expect(
      screen.getByText("Quickstart with the following details"),
    ).toBeInTheDocument()
    expect(screen.getByText("Carlander")).toBeInTheDocument()
    expect(screen.getByText("LOGO")).toBeInTheDocument()
  })

  it("renders the login page for existing users", async () => {
    ;(auth as jest.Mock).mockResolvedValue({ newUser: false })

    render(await LoginPage())

    expect(
      screen.getByText("Welcome! Please log in to continue"),
    ).toBeInTheDocument()
    expect(screen.getByText("Log in using")).toBeInTheDocument()
    expect(screen.getByText("Carlander")).toBeInTheDocument()
    expect(screen.getByText("LOGO")).toBeInTheDocument()
  })

  it("renders OAuthButtons for existing users", async () => {
    ;(auth as jest.Mock).mockResolvedValue({ newUser: false })

    render(await LoginPage())

    expect(screen.getByText("Log in using")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /OAuth/i })).toBeInTheDocument()
  })

  it("renders FirstLogin component for new users", async () => {
    ;(auth as jest.Mock).mockResolvedValue({
      newUser: true,
      user: { name: "Test User" },
    })

    render(await LoginPage())

    expect(
      screen.getByText("Quickstart with the following details"),
    ).toBeInTheDocument()
    expect(screen.getByText("Test User")).toBeInTheDocument()
  })
})
