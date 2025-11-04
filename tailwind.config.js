/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F5F0',
        foreground: '#1a1a1a',
        cream: '#F5F5F0',
        charcoal: '#2a2a2a',
      },
      fontFamily: {
        serif: ['Georgia', 'Garamond', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
