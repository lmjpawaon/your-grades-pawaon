/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'blue-ribbon': {
        '50': '#edfaff',
        '100': '#d6f1ff',
        '200': '#b6e9ff',
        '300': '#84ddff',
        '400': '#4ac7ff',
        '500': '#20a8ff',
        '600': '#0889ff',
        '700': '#026eec',
        '800': '#095ac4',
        '900': '#0e4f9a',
        '950': '#0e305d',
    },    
    },
    fontFamily:{
      'header': ['Gabarito', 'sans-serif'],
      'body': ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

