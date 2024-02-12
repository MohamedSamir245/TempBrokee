/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 31px 20px -1px #f1f1f1",
        card2: "-2px 5px 20px 0px #15803d8c",
      },
    },
  },
  plugins: [],
};
