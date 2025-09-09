/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f7f9",
          100: "#eceff3",
          200: "#d6dce3",
          300: "#b4c0cc",
          400: "#8a9fb5",
          500: "#6885a1",
          600: "#4f6a86",
          700: "#42576e",
          800: "#38495b",
          900: "#313e4c"
        }
      }
    },
  },
  plugins: [],
}
