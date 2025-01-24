/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: "var(--font-nunito)",
        geist: "var(--font-geist-sans)",
        geistMono: "var(--font-geist-mono)",
        spectralSC: "var(--font-spectral-sc)",
        lucida: ["Lucida Bright", "serif"],
      },
    },
  },
  plugins: [],
};
