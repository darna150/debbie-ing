/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'clamp-9xl': "clamp(1rem, 20vw, 8rem)",
        'clamp-5xl': "clamp(2rem, 10vw, 3rem)",
      },
      backgroundImage: {
        'jfc-header': 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 20%, white 20%, white calc(100% - 2rem), #EA1B3B calc(100% - 2rem))',
        'jfc-header-md': 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 20%, white 20%, white calc(100% - 6rem), #EA1B3B calc(100% - 6rem))',
        'smc-header': 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 20%, white 20%, white calc(100% - 2rem), #27449E calc(100% - 2rem))',
        'smc-header-md': 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 20%, white 20%, white calc(100% - 6rem), #27449E calc(100% - 6rem))'
      },
    },
  },
  plugins: [],
}
