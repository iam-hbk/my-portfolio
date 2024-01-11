import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        "text-gradient":
          "linear-gradient(to right,#3449C1,#5671D6, #E08700, #E97220)",
      }),
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3449C1",
          secondary: "#E08700",
          accent: "#E97220",
          neutral: "#1d1d1d",
          "base-100": "#f3f3f3",
          info: "#00d8f4",
          success: "#00db17",
          warning: "#ff8e00",
          error: "#e20031",
        },
        dark: {
          primary: "#5671D6", // A slightly lighter shade of the original primary for better visibility
          secondary: "#F0A732", // A brighter shade of the original secondary
          accent: "#E97220", // A lighter shade of the original accent
          neutral: "#e2e2e2", // A light gray for text and other elements
          "base-100": "#2a2a2a", // A dark gray for the background
          info: "#31E6FC", // A brighter shade of the original info color
          success: "#33fc4e", // A brighter shade of the original success color
          warning: "#ffc04d", // A brighter shade of the original warning color
          error: "#ff3366", // A brighter shade of the original error color
        },
      },
      // "dark" /*  "dark", "cupcake" */,
    ],
  },
} satisfies Config;
