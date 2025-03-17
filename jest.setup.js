import "@testing-library/jest-dom"

jest.mock("next/form", () => ({
  __esModule: true,

  /**
   * @param {{ children: React.ReactNode, props: import("next/form").FormProps }} param0
   * @param {React.Ref<HTMLFormElement>} [ref]
   * @returns
   */
  default: ({ children, ...props }, ref) => {
    /** @type {React.FormHTMLAttributes<HTMLFormElement>} */
    const htmlFormProps = Object.keys(props).reduce((acc, key) => {
      if (!["replace", "scroll", "prefetch"].includes(key))
        acc[key] = props[key]
      return acc
    }, {})

    return (
      <form ref={ref} {...htmlFormProps}>
        {children}
      </form>
    )
  },
}))
