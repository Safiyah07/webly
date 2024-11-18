/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				bg: "linear-gradient(to right, #000000 18%, #1E263D 50%, #000000 86%)",
			},
			colors: {
				button: "#3FC4F6",
				blueNavBg: "#385D74",
				textFade: "#E1D3CC",
				chooseFade: "rgba(46, 46, 46, 0.33)",
			},
			boxShadow: {
				"3xl": "0px 3px 2px 0px rgba(35, 35, 35, 0.5)",
			},
		},
		screens: {
			sm: { max: "602px" },
			md: { min: "603px", max: "880px" },
			"max-md": { min: "881px", max: "1115px" },
			lg: { min: "1116px" },
		},
	},
	plugins: [],
};
