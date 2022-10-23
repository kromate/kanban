import { fileURLToPath, URL } from 'node:url'
import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
	ssr: false,
	target: 'static',
	head: {
		title: 'Traq',
		htmlAttrs: { lang: 'en' },
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
			{
				href: 'https://fonts.googleapis.com',
				rel: 'preconnect'
			},
			{
				href: 'https://fonts.gstatic.com',
				rel: 'preconnect'
			},
			{
				href: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap',
				rel: 'stylesheet'
			}
		]
	},
	alias: {
		'@': './src'
	},
	modules: ['@vueuse/nuxt'],

	css: ['/src/assets/css/main.css'],
	components: [
		'@/components',
		{ path: '@/components/core', extensions: ['vue'] }
	],

	build: {
		postcss: {
			postcssOptions: require('./postcss.config.js')
		}
	},
	plugins: ['@/plugins/draggable.ts'],
	dir: {
		layouts: './src/layouts',
		pages: './src/pages',
		middleware: './src/middleware'
	},
	vite: {
		plugins: [eslintPlugin({ useEslintrc: true })],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		}
	}
})
