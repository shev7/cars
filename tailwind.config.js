/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        wrapper: "1180px",
      },
      flex: {
        50: "0 1 50%",
        25: "0 1 25%",
      },
      colors: {
        "main-text-black": "#fefefe",
        "main-background": "#212121",
        "main-gray": "#e2e3e6",
        "main-gray-transparent": "rgba(226, 227, 230, 0.7)",
        "main-text-gray": "#aaa",
        "main-border": "rgba(239, 239, 239, 0.1)",
      },
      fontSize: {
        lt: ["10px", "14px"],
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1040px" },
        md: { max: "768px" },
        sm: { max: "639px" },
        mb: { max: "500px" },
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
