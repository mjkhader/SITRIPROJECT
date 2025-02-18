/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        YankeesBlue: '#OD273D',
        TealBlue: '#3E6985',
        PewterBlue: '#8AA7BC',
        PastelBlue: '#A6BED1',
        ColumbiaBlue: '#CDD7DF',
        Navy: '#2F4156',
        Teal: '#567C8D',
        SkyBlue: '#C8D9E6',
        Beige: '#FSEFEB',
      },
    },
    plugins: [],
  }
}

