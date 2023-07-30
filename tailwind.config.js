/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
          },
        }
      }),
    },
  },
  plugins: [ require("@tailwindcss/typography"), require("daisyui") ],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [ "dark" ],
  },
}
