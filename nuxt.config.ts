// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
	app: {
		head: {
			meta: [
				{
					name: 'robots',
					content: 'index, follow'
				},
				{
					name: 'googlebot',
					content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
				},
				{
					name: 'bingbot',
					content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
				},
			],
			link: [
				{
					rel: 'icon',
					type: 'image/png',
					href: '/logo.png',
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap",
				},
			],
		}
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	css: [
		'@/assets/css/app.css',
	],
	plugins: [
		{
			src: 'plugins/aos',
			mode: 'client'
		},
		{
			src: 'plugins/cookie',
			mode: 'client'
		},
		{
			src: 'plugins/header',
			mode: 'client'
		},
	]
})
