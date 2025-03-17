import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react"

import Page from "@/app/page"

describe("Page component", () => {
  it("renders intro page unchanged", () => {
    const { container } = render(<Page />)
    expect(container).toMatchSnapshot()
  })

  it("renders the logo avatar fallback", () => {
    render(<Page />)
    const avatarFallback = screen.getByText("LOGO")
    expect(avatarFallback).toBeInTheDocument()
  })

  it("renders the main heading", () => {
    render(<Page />)
    const heading = screen.getByText("Carlander")
    expect(heading).toBeInTheDocument()
  })

  it("renders the description paragraph", () => {
    render(<Page />)
    const description = screen.getByText(
      "Find, Park, Go! Hassle-free parking at your fingertips.",
    )
    expect(description).toBeInTheDocument()
  })

  it("renders the Get Started button", () => {
    render(<Page />)
    const button = screen.getAllByText("Get Started")
    expect(button.length).toBe(2)
  })

  it("renders the Bangladesh image", () => {
    render(<Page />)
    const image = screen.getByAltText("a vector art of bangladesh.")
    expect(image).toBeInTheDocument()
  })

  it("renders the mobile image", () => {
    render(<Page />)
    const image = screen.getByAltText(
      "the app can be accessed anytime via any device",
    )
    expect(image).toBeInTheDocument()
  })

  it("renders the money image", () => {
    render(<Page />)
    const image = screen.getByAltText(
      "the app features multiple payment options",
    )
    expect(image).toBeInTheDocument()
  })

  it("renders the And more heading", () => {
    render(<Page />)
    const heading = screen.getByText("And more")
    expect(heading).toBeInTheDocument()
  })

  it("renders the multiple payment options paragraph", () => {
    render(<Page />)
    const paragraph = screen.getByText(
      "Multiple payment options including payment apps and card.",
    )
    expect(paragraph).toBeInTheDocument()
  })

  it("renders the 50+ parking locations paragraph", () => {
    render(<Page />)
    const paragraph = screen.getByText(
      "50+ parking locations available for booking.",
    )
    expect(paragraph).toBeInTheDocument()
  })

  it("renders the Book a spot on the go paragraph", () => {
    render(<Page />)
    const paragraph = screen.getByText("Book a spot on the go!")
    expect(paragraph).toBeInTheDocument()
  })
})
