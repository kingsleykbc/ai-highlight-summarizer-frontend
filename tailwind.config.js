/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				container: 'rgb(71, 71, 71)',
				containerDarker: 'rgb(51, 51, 51)',
				containerDarkest: 'rgb(35, 35, 35)',
				darkHighlight: 'rgb(45, 45, 45)',
				darkBorder: '#212121',
				primary: '#A76DFF',
				textGray: '#9c9c9c'
			}
		}
	},
	plugins: []
};
