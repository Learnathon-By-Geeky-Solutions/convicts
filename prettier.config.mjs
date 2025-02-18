/** @type {import('prettier').Config} */
const prettierConfig = {
  endOfLine: "lf",
  // prettier-ignore
  importOrder: [
    "", "react", "", "<BUILTIN_MODULES>", "", "<THIRD_PARTY_MODULES>", "",
    "^@/lib/(.*)$", "", "^@/components/(.*)$", "", "^@/ui/(.*)$", "",
    "^(?!.*[.]css$)[./].*$", "", ".css$",
  ],
  importOrderTypeScriptVersion: "5.0.0",
  jsonRecursiveSort: true,
  jsxSingleQuote: false,
  plugins: [
    "prettier-plugin-sql",
    "prettier-plugin-prisma",
    "prettier-plugin-sort-json",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  tailwindFunctions: ["cva", "clsx", "cn"],
  tailwindStylesheet: "./src/app/globals.css",
}

export default prettierConfig
