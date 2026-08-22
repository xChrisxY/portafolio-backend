/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#060B16",
          900: "#0B1322",
          850: "#0E1728",
          800: "#121E33",
          700: "#1B2946",
          600: "#27395C",
        },
        gold: {
          200: "#F7E3B0",
          300: "#F2D085",
          400: "#E8BB5F",
          500: "#DFA83B",
          600: "#BC861F",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Instrument Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
