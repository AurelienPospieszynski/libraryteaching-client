/** type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ["./src/**/*.{html,css,ts}"],
    theme: {
      extend: {
        fontFamily: {
          fontOrbitron: ["Orbitron", "sans-serif"],
          fontMontserrat: ["Montserrat", "sans-serif"],
        },
        colors: {
          colorBlue: "#0EC4ED",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };