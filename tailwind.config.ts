import tailwindcssAnimate from "tailwindcss-animate"

import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: ["./src/{ui,components,app}/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
