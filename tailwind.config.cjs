/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'arg-gold': '#d3d359',
				'arg-gold-dark': '#8C7241',
				'arg-white': '#f2f2f2',
				'primary': '#222222'
			}
		},
	},
	plugins: [],
}
