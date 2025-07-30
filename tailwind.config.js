import PrimeUI from 'tailwindcss-primeui';

export default {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/primeng/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
    },
  },
  plugins: [PrimeUI],
  darkMode: 'class',
}