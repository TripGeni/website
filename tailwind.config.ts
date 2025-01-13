import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4f46e5", // Default primary color
          light: "#818cf8",  // Lighter shade
          dark: "#3730a3",   // Darker shade
        },
        secondary: {
          DEFAULT: "#ec4899", // Default secondary color
          light: "#f472b6",  // Lighter shade
          dark: "#be185d",   // Darker shade
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"], // Adding Poppins as the default font
      },
      boxShadow: {
        'custom-blue': '0 10px 50px rgba(0, 0, 255, 0.4)', // Blue shadow
        'custom-purple': '0 10px 40px rgba(153, 51, 204, 0.4)', // Blue shadow
        'custom-red': '0 4px 6px rgba(255, 0, 0, 0.3)', // Red shadow
        'custom-green': '0 4px 6px rgba(0, 255, 0, 0.3)', // Green shadow
        // Add any other custom shadows you want here
      },
    },
  },
  plugins: [],
} satisfies Config;
