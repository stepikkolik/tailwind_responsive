/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF8482',
        secondary: '#FFF2DD',
        darker_primary: '#BE6361'
      },
      fontFamily: {
         alfa_slab_one: ['Alfa Slab One'],
         dm: ['DM Sans']

      },
      backgroundImage: {
        'draha' : "url('./images/draha.png')"
      }
    },
  },
  plugins: [],
}