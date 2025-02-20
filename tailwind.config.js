/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'yankees-blue': '#OD273D',
        'teal-blue': '#3E6985',
        'pewter-blue': '#8AA7BC',
        'pastel-blue': '#A6BED1',
        'columbia-blue': '#CDD7DF',
        'navy': '#2F4156',
        'teal': '#567C8D',
        'sky-blue': '#C8D9E6',
        'beige': '#FSEFEB',
      },
    },
    plugins: [],
  }
}

