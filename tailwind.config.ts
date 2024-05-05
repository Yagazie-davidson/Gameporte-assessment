import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sidebar-vectors": "url('/public/ties.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yellow: "#DDAE45",
        orange: "#AB491C",
        red: "#C61522",
        wine: "#030304",
        blue: "#204F9D",
        sky: "#ADC0D1",
      },
    },
  },
  plugins: [],
};
export default config;
