/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown-100': '#9E896A', 
        'brand-white-200': '#F8EDDD',
        'brand-gray-100': '#ACACAC'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
