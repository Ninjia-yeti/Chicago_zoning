import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css", // explicitly ensure globals.css is included
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Inter, sans-serif", { fontFeatureSettings: '"cv11"' }],
        bigdisplay: ["Big Shoulders Display", "sans-serif"],
        textdisplay: ["Big Shoulders Text", "sans-serif"],
        lora: ["Lora", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
