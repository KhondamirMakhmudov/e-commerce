/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "936px",
        xl: "1050px",
        "2xl": "1170px",
      },
    },
  },
  plugins: [],
};
