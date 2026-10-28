/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        hitam: '#111111',
        putih: '#FFFFFF',
        merah: '#D71920',
        'merah-gelap': '#A8141A',
        abu: '#6B6B6B',
        'abu-muda': '#F2F2F2',
        garis: '#E5E5E5',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
}
