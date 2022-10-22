/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue'
  ],
  theme: {
    extend: {
			colors: {
				clear: 'var(--clear)',
				black: 'var(--black)'
			}
		}
  },
  plugins: []
}
