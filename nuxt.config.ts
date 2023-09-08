// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
	experimental: {
		payloadExtraction: false
	},
	app: {
		baseURL: '/gocloud/',
    	buildAssetsDir: 'assets',
		head: {
			htmlAttrs: {
				lang: 'en',
			},
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
					href: '/gocloud/logo.png',
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: 'anonymous'
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
	],
	modules: [
		'@vite-pwa/nuxt'
	],
	pwa: {
		manifest: {
			name: 'Gocloud Inc.',
			short_name: 'Gocloud Inc.',
			description: 'Gocloud Inc. is committed to innovate and simplify day to day data processes of present industries through the most relevant software products.',
			theme_color: '#e5f0ff',
			background_color: '#ffffff',
			icons: [
				{
					src: 'pwa-64x64.png',
					sizes: '64x64',
					type: 'image/png'
				},
				{
					src: 'pwa-192x192.png',
					sizes: '192x192',
					type: 'image/png'
				},
				{
					src: 'pwa-512x512.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any'  
				},
				{
					src: 'maskable-icon-512x512.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'maskable'
				}
			]
		},
		registerType: 'autoUpdate',
		workbox: {
			navigateFallback: '/gocloud/',
			clientsClaim: true,
			skipWaiting: true
		},
		devOptions: {
			enabled: true,
			type: 'module',
		},
	}
})
