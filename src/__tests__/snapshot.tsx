import { render } from "@testing-library/react"
import Page from "@/app/page"

it("renders intro page unchanged", () => {
  const { container } = render(<Page />)
  expect(container).toMatchSnapshot()
})
