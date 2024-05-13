/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#c6ad9a',
        'primary': '#FAEED1',
        'secondary': '#B2A59B',
        'dark-cream': '#DED0B6',
      },
    },
  },
  plugins: [],
};
