module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			"rootBackground": "#ffffff",
			"link-color": "#1D296D",
			"title-A-background": "#658CC3",
			"border-A": "#658CC3",
			"colABackground": "#ADC9EE",
			"colBBackground": "#D3E4F8",
			"colAText": "#385881",
			"colBText": "#000000",

			"title-B-background": "#F6C78F",
			"title-B-text": "#F3662C",
			"title-B-text-title": "#FF0000",
			"b-col-A-background": "#F29434",
			"b-col-B-background": "#F2D2AC",

			"navbar": "#142E8D",
			"navbar-text": "#F6FFFF",
			
		},

		fontFamily: {
			sans: ["Arial", "sans-serif"],
		},

		
		
		extend: {},
	},
	plugins: [],
};
