/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'white': '#ffffff',
      'grey': '#212121',
      'sageGreen': '#879458',
      'royalYellow': '#F2D34E'

    },
    extend: {},
  },
  plugins: [],
}