/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
         'radial-gradient': "radial-gradient(ellipse at top right, var(--tw-gradient-stops))",
      }),
      colors: {
        'gradient-from': '#7b02a1',
        'gradient-via': '#ff61a6',
        'gradient-to': '#e60000',
      },
    },
  },
  plugins: [],
}
