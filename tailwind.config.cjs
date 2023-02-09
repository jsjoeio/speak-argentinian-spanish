/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'arg-gold': '#B9944E',
				'arg-gold-dark': '#8C7241',
			}
		},
	},
	plugins: [],
}
