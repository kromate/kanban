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
				black: 'var(--black)',
				grey: 'var(--grey)',
				red: 'var(--red)',
				green: 'var(--green)',
				purple: 'var(--purple)',
				pink: 'var(--pink)'
      },
      gridTemplateColumns: {
        4: 'repeat(auto-fill, minmax(0, var(--column-width)))'
      }
		}
  },
  plugins: []
}
