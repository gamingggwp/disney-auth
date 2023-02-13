/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'cusmd': '950px',
      },
      backgroundImage: (theme) => ({
        home: "url('/images/home-background.png')",
      }),

    },
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
