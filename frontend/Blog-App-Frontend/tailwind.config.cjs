/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        calli: ["Edu TAS Beginner", "cursive"],
      },
    },
    colors: {
      "background-reg": "#4e4c4f",
      "reg-font": "#232220  ",
      "nav-backg": "#232220",
    },
  },
  plugins: [],
};
