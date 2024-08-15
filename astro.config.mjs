import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { loadEnv } from 'vite';

const { SITE_ORIGIN, BASE_PATH = "/", SIMPLIFIED_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
if (SITE_ORIGIN)
	console.log('SITE_ORIGIN', SITE_ORIGIN);
else
	console.warn('SITE_ORIGIN is not specified. A sitemap will not be generated.');
console.log('BASE_PATH', BASE_PATH);
console.log('SIMPLIFIED_URL', SIMPLIFIED_URL);
const dev = import.meta.env.MODE === 'development';
// https://astro.build/config
export default defineConfig({
	site: SITE_ORIGIN,
	base: BASE_PATH,
	integrations: [
		starlight({
			title: 'Selenite Docs',
			logo: {
				light: '@assets/selenite-logo-black.svg',
				dark: '@assets/selenite-logo-white.svg',
			},
		// 	< link rel = "preconnect" href = "https://fonts.googleapis.com" >
		// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		// 	<link href="https://fonts.googleapis.com/css2?family=Island+Moments&display=swap" rel="stylesheet">
			editLink: true ? {
				baseUrl: 'https://github.com/Selenite-GEOS/docs/edit/main/',
			} : undefined,
			// social: {
			// 	github: 'https://github.com/withastro/starlight',
			// },
			sidebar: [
				{
					label: 'General',
					autogenerate: { directory: 'general' },
					translations: {
						fr: 'Général',
					},
				},
				{
					label: 'Simplified interface',
					autogenerate: { directory: 'simplified-interface' },
					translations: {
						fr: 'Interface simplifiée',
					},
				},
				{
					label: 'Advanced interface',
					autogenerate: { directory: 'advanced-interface' },
					translations: {
						fr: 'Interface avancée',
					},
				},
				{
					label: 'Developper',
					autogenerate: { directory: 'developper' },
					translations: {
						fr: 'Développeur',
					},
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
					translations: {
						fr: 'Référence',
					},
				},
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en'
				},
				fr: {
					label: 'Français',
				}
			},
			components: {
				Head: "./src/components/starlight/Head.astro",
				SiteTitle: "./src/components/starlight/SiteTitle.astro",
			}
		}),
	],
	vite: {
		css: {
			transformer: 'lightningcss'
		}
	},
	server: {
		port: 4444,
	}
});
