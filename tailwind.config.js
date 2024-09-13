/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      signature:["Great Vibes"],
    },
    cursor: {
      'fancy': 'url(hand.cur), pointer',
    }
  },
  plugins: [],
}

