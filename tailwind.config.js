/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-mono": `"DM Sans", sans-serif`,
        montesserat: `"Montserrat", sans-serif`,
        poppins: `"Poppins", sans-serif;`,
      },
    },
  },
  plugins: [],
};
