/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Coiny: ["Coiny", "sans-serif"],
			}, //end of fontFamily
		},
	},
	plugins: [],
};
