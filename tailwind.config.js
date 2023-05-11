/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002266",
        accent: "#3AB28C",
        "blue-extra-light": "#EEF4FF",
      },
    },
  },
  plugins: [],
};
