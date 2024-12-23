/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vs-background": "#1E1E1E",
        "vs-sid": "#333333",
        "vs-nav": "#393939",
        "vs-nav-hover": "#454545",
        "vs-explore": "#252525",
        "vs-main-terminal": "#1e1e1e",
        "vs-status": "#0098ff",
        "text-white": "rgb(203 213 225)",
        "text-gray": "rgb(209 213 219)",
        "vs-remote-green": "#059669",
      },
    },
  },
  plugins: [],
};
