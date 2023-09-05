/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'black-navy': '#011627',
      'line-navy': '#1E2D3D',
      'font-navy': '#607B96',
      'font-white': '#E5E9F0',
      'font-green': '#3C9D93',
      'font-blue': '#4D5BCE',
      'bar-orange': '#FEA55F',
    },
    fontFamily: {
      'code': ['Fira-Code', 'sans-serif'],
      'nanum': ['Nanum-Gothic-Coding', 'sans-serif']
    },
    extend: {
      opacity: ['group-hover'],
      transitionProperty: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
